import { Toolbox } from "gluegun/build/types/domain/toolbox";

const generateComponentSuccessMessage = (toolbox: Toolbox, name: string): void => {
    const { print: { success, info, warning, muted } } = toolbox;
    
    muted('');
    success('🎉 Componente gerado com sucesso. 🎉')
    info(`Uma pasta foi gerada com o nome ${name} foi gerada no seu projeto, todo o seu componente está dentro dela.`);
    warning(`🔭👀💜 ${name}Component `);
    muted('');

}

export { generateComponentSuccessMessage }