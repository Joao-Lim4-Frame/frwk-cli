import { Toolbox } from "gluegun/build/types/domain/toolbox";
import { Constants } from "../../../../constants/constants";
import { genericError } from "../../../../generates/errors/generic.error";
import { generateComponentSuccessMessage } from "../../../../generates/success/component.success";
import { IProjectType } from "../../../../types";
import { extencionsFileCss, generateComponentsDir } from "../../../generateDir";

interface generateReactComponentFilesProps {
    toolbox: Toolbox,
    projectType: IProjectType,
    name: string,
    dependencies: object,
    dir?: string,
}

const generateReactComponentFiles = async ({ dependencies, name, projectType, toolbox, dir }:generateReactComponentFilesProps ): Promise<void> => {
    
    const { template } = toolbox;
    

    const isStyledComponents = "styled-components" in dependencies;

    try {
        //generate javascript file for react
        await template.generate({
            template: `components/react/component-${projectType.type}.${projectType.extensionFile}.ejs`,
            target: generateComponentsDir(
                dir, 
                Constants.dir.defaultDirForGenerateComponents, 
                projectType,
                name
            ),
            props: { name, styledComponents: isStyledComponents },
        });
    
        //generate css for component
        let stylesTemplate = `components/react/${isStyledComponents ? 'styled-components.tsx.ejs' : 'default-css.css.ejs'}`; 
        await template.generate({
            template: stylesTemplate,
            target: generateComponentsDir(
                dir, 
                Constants.dir.defaultDirForGenerateComponents, 
                projectType,
                name, 
                {extension: !isStyledComponents ? "css" : projectType.extensionFile as extencionsFileCss , isCssFile: true}
            ),
            props: { name },
        });
    
    
        generateComponentSuccessMessage(toolbox, name);
    } catch (error) {
        //Qualquer erro generico que acontece durante a execução
        genericError(toolbox,error);
    }
}

export { generateReactComponentFiles }