import { Toolbox } from "gluegun/build/types/domain/toolbox";

export const PackageKeyProjectTypeWarning = (toolbox:Toolbox): void => {
    let { print: { warning, info, muted } } = toolbox;
    muted('');
    warning("👀 Parece que você esqueceu de colocar uma key no package.json 👀");
    info('✨🎉 Colocando a key frmkProject no seu package.json fica mais facil da nossa cli identificar o tipo do seu projeto.')
    info('👀 Veja um exemplo: "frmkProject": "true"');
    info('Verifique a nossa documentação em https://google.com.br');
    muted('');
}   