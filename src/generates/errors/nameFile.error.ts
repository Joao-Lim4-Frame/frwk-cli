import { Toolbox } from "gluegun/build/types/domain/toolbox";
import { Constants } from "../../constants/constants";

export const NameFileErro = (toolbox:Toolbox): void => {
    let { print: { error, info, muted } } = toolbox;
    muted('');
    info("👀 Parece que você esqueceu de passar o nome do arquivo. 👀");
    info("- Esse é um comando onde a option --name é obrigatória, tente passar --name=nomeTemporario");
    info(`caso não de certo rode ${Constants.cliName} --help`);
    muted('');
    error('❌ A option --name não foi passada.');
    muted('');
}   