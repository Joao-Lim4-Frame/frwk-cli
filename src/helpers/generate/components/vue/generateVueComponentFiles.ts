import { Toolbox } from "gluegun/build/types/domain/toolbox";
import { PromptOptions } from "gluegun/build/types/toolbox/prompt-enquirer-types";
import { Constants } from "../../../../constants/constants";
import { genericError } from "../../../../generates/errors/generic.error";
import { generateComponentSuccessMessage } from "../../../../generates/success/component.success";
import { IProjectType } from "../../../../types";
import { generateComponentsDir } from "../../../generateDir";

interface generateVueComponentFilesProps {
    toolbox: Toolbox,
    projectType: IProjectType,
    name: string,
    dir?: string,
}

const _DEFAULTQUESTION = "Sobre cada um";

const questionTemplate: PromptOptions = {
    type: "select",
    name: "templateType",
    message: '❔ Qual o tipo de component você quer? ❔',
    choices: [...Constants.vueConfig.arrayTemplates, _DEFAULTQUESTION]
} 

const showDescriptionTemplates = (toolbox: Toolbox): void => {
    const { print: { muted, success, info } } = toolbox;

    for(let key in Constants.vueConfig.templates) {
        muted('');
        success(`   🎉 Sobre: ${ key } 🎉    `);
        info(`      ${ Constants.vueConfig.templates[key].description }`);
        muted('');
    }
}

const askVueTypeTemplate = async (toolbox: Toolbox): Promise<string> => {
    const { prompt: { ask } } = toolbox;

    let responseQuestion: any;

    do {

        responseQuestion = await ask(questionTemplate);
        
        //mostra a descricao de cada template de component do vue
        if(responseQuestion.templateType === _DEFAULTQUESTION) {
            showDescriptionTemplates(toolbox);
        }

    } while (responseQuestion.templateType === _DEFAULTQUESTION);

    return String(responseQuestion.templateType);

}

const generateFiles = async (toolbox: Toolbox, templateType: string, dir: string, projectType: IProjectType, name: string): Promise<void> => {

    const { template } = toolbox;
    
    //const nameTemplateType = templateType.toLowerCase().replace(' ', '-');
    
    if(templateType in Constants.vueConfig.templates) {
        try {

            await template.generate({
                template: Constants.vueConfig.templates[templateType].template,
                target: generateComponentsDir(
                    dir,
                    Constants.dir.defaultDirForGenerateComponents,
                    projectType,
                    name
                ),
                props: { name }
            });

            if(Constants.vueConfig.templates[templateType]?.html) {
                await template.generate({
                    template: Constants.vueConfig.templates[templateType].html,
                    target: generateComponentsDir(
                        dir,
                        Constants.dir.defaultDirForGenerateComponents,
                        projectType,
                        name,
                        null,
                        {isHtmlFile: true, extension: "html", nameFile: `${name}.component`}
                    ),
                    props: { name }
                });
            }

            generateComponentSuccessMessage(toolbox, name);

        } catch (error) {
            genericError(toolbox, error);   
        }
    }
}

const generateVueComponentFiles = async ({ name, projectType, toolbox, dir }: generateVueComponentFilesProps ): Promise<void> => {
    
    const templateType = await askVueTypeTemplate(toolbox);

    //generate file for components;
    generateFiles(toolbox, templateType, dir, projectType,name);
}

export { generateVueComponentFiles }