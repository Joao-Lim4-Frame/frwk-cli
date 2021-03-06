import { Toolbox } from "gluegun/build/types/domain/toolbox";

const reactContextSuccess = (toolbox: Toolbox, name: string): void => {

    const { print: { success, info, warning, muted } } = toolbox;
    
    muted('');
    success('π O seu Context,Provider,Reducer e InitialData foi gerado com sucesso. π')
    info(`Uma pasta foi gerada com o nome /context/${name}Context foi gerada no seu projeto, todo o seu context estΓ‘ dentro dela.`);
    warning(`π­ππ ${name}Context `);
    muted('');
    
}

export { reactContextSuccess }