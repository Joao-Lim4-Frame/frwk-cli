import { Toolbox } from "gluegun/build/types/domain/toolbox";
import { Constants } from "../../constants/constants";

export const InvalidTemplateDir = (toolbox:Toolbox): void => {
    let { print: { error, info, muted } } = toolbox;
    muted('');
    info("👀 Infelizmente não conseguimos localizar o diretorio do seu template 👀");
    info(`Caso não de certo rode ${Constants.cliName} --help`);
    muted('');
    error('❌ O diretório do template é inválido.');
    muted('');
}   