import { Toolbox } from "gluegun/build/types/domain/toolbox";

const projectType = (projectTypeS: string, toolbox: Toolbox): void => {
    let { print: { info, warning } } = toolbox;
    
    if(projectTypeS !== "") {
        warning(`👀 Identificamos o tipo do seu projeto. Acho que é ${projectTypeS} né? 👀`);
        info('Infelizmente ainda não temos suporte para a sua tecnologia, fique de olho na nossa newsletter para saber de todas as novidades.');   
    } else {
        warning("❌ Vish não identificamos o tipo do seu projeto. ❌");    
        info("Não identificamos o tipo do seu projeto, isso dificulta na hora da criação de um componente. Verifique a documentação da nossa cli ou entre em contato com os desenvolvedores.");
    }
}

export const projectInvalid = (toolbox:Toolbox, projectTypeS: string): void => {
    let { print: { muted } } = toolbox;
    muted('');
    projectType(projectTypeS, toolbox);
    muted('');
}   
