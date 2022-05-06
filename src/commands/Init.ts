import { GluegunToolbox } from 'gluegun';
import { PromptOptions } from 'gluegun/build/types/toolbox/prompt-enquirer-types';
import { Constants } from '../constants/constants';
import { genericError } from '../generates/errors/generic.error';
module.exports = {
    name: 'init',
    alias: ['init'],
    run: async (toolbox: GluegunToolbox) => {
        
        const { print: { success },prompt: { ask }, template } = toolbox;

        const questions:Array<PromptOptions> = [
            {
                type: "input",
                message: "Qual o nome para o projeto?",
                name: "projectName",
            },
            {
                type: "select",
                name: "projectType",
                message: "Qual o tipo do projeto?",
                choices: ["vue", "react", "react-native", "angular", "outros"]
            }
        ];

        success(`🎉 Gerando o seu ${Constants.cliName}.init.json 🎉`);

        const responseQuestions = await ask(questions);

        try {
            await template.generate({
                template: "init/initfile.jsonc.ejs",
                target: `./${Constants.cliName}.init.jsonc`,
                props: responseQuestions
            });
        } catch (error) {
            genericError(toolbox, error);
        }
        
    },
}
