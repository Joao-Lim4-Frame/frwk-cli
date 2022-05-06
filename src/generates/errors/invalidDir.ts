import { Toolbox } from "gluegun/build/types/domain/toolbox";
import { Constants } from "../../constants/constants";

const invalidDirError = (toolbox: Toolbox): void => {
    let { print: { error, info, muted } } = toolbox;
    muted('');
    info("👀 Parece que você passou um diretorio invalido. 👀");
    info("- Tente passar um diretorio valido, como por exemplo --dir=src/meunovodir");
    info(`Caso não de certo rode ${Constants.cliName} --help`);
    muted('');
    error('❌ A option --dir foi passada de uma forma incorreta.');
    muted('');
}

export { invalidDirError };