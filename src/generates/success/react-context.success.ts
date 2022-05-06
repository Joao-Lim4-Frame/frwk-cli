import { Toolbox } from "gluegun/build/types/domain/toolbox";

const reactContextSuccess = (toolbox: Toolbox, name: string): void => {

    const { print: { success, info, warning, muted } } = toolbox;
    
    muted('');
    success('🎉 O seu Context,Provider,Reducer e InitialData foi gerado com sucesso. 🎉')
    info(`Uma pasta foi gerada com o nome /context/${name}Context foi gerada no seu projeto, todo o seu context está dentro dela.`);
    warning(`🔭👀💜 ${name}Context `);
    muted('');
    
}

export { reactContextSuccess }