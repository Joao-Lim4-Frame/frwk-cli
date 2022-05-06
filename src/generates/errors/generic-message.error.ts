import { Toolbox } from "gluegun/build/types/domain/toolbox";
import { Constants } from "../../constants/constants";

const genericErrorMessage = (toolbox: Toolbox, message: string): void => {
    const { print: { error, newline, info }, prompt: { /*confirm*/ } } = toolbox;

    error('❌ Algo de errado aconteceu durante a execução ❌');
    error(message);
    newline();
    info(`Verifique a nossa documentação ${Constants.urlDocument}`);
    

    // if(confirm("💜 Deseja reportar esse erro?")) {
    //     //deve colotar 
    //     //informações sobre o sistema operacional 
    //     //e enviar um erro para um endpoint.
    // };
}

export { genericErrorMessage }