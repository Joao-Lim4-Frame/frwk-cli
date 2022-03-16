import { Toolbox } from "gluegun/build/types/domain/toolbox";

const genericError = (toolbox: Toolbox, errorObject: any): void => {
    const { print: { error }, prompt: { confirm } } = toolbox;

    error('❌ Algo de errado aconteceu durante a execução ❌');
    error(errorObject);

    if(confirm("💜 Deseja reportar esse erro?")) {
        //deve colotar 
        //informações sobre o sistema operacional 
        //e enviar um erro para um endpoint.
    };
}

export { genericError }