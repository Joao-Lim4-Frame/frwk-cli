import { Toolbox } from "gluegun/build/types/domain/toolbox";

const generateComponentSuccessMessage = (toolbox: Toolbox, name: string): void => {
    const { print: { success, info, warning, muted } } = toolbox;
    
    muted('');
    success('π Componente gerado com sucesso. π')
    info(`Uma pasta foi gerada com o nome ${name} foi gerada no seu projeto, todo o seu componente estΓ‘ dentro dela.`);
    warning(`π­ππ ${name}Component `);
    muted('');

}

export { generateComponentSuccessMessage }