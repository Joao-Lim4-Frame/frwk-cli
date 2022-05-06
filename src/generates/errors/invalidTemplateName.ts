import { Toolbox } from "gluegun/build/types/domain/toolbox";
import { Constants } from "../../constants/constants";

export const InvalidTemplateName = (toolbox:Toolbox): void => {
    let { print: { error, info, muted } } = toolbox;
    muted('');
    info("👀 Parece que você esqueceu de passar o nome do template. 👀");
    info(`- Esse é um comando onde o nome do template é obrigatório, tente rodar ${Constants.cliName} exec template {nome do template}`);
    info(`caso não de certo rode ${Constants.cliName} --help`);
    muted('');
    error('❌ O nome do template não foi passado.');
    muted('');
}   