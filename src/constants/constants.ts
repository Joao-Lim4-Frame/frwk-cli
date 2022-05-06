const Constants = {
    nameApp: "Framework dev cli",
    cliName: "frwk-dev-cli",
    projectsType: {
        REACT: true,
        VUE: true,
        ANGULAR: false,
        "REACT-NATIVE": true
    },
    urlDocument: "https://teste.com.br/",
    dir: {
        defaultDirForGenerateComponents: "src/components",
        defaultDirForGenerateContext: "src/context/"
    },
    extensions: {
        vue: "vue",
        react: {
            ts: "tsx",
            js: "jsx",
        },
        angular: "ts",
        default: "js"
    },
    vueConfig: {
        arrayTemplates: [
            "Plain strings",
            "Template literals",
            "X-templates",
            "Inline templates",
            "Render functions",
            "JSX",
            "Single-file components",
        ],
        templates: {
            "Plain strings": {
                template: "components/vue/component-plain-string.vue.ejs",
                description: "A maneira mais rápida e fácil de definir um modelo de componente Vue é adicionar uma propriedade de modelo à definição do componente e atribuir uma string regular contendo sua marcação. Esse método é realmente usado apenas em exemplos de código ou protótipos rápidos, pois é muito difícil trabalhar com qualquer coisa além do modelo mais simples.",
            },
            "Template literals": {
                template: "components/vue/component-template-literals.vue.ejs",
                description: "A partir do ES2015, um tipo especial de string chamado literal de modelo pode ser declarado usando acentos graves. Ao contrário das strings regulares, elas permitem expressões incorporadas e podem ser de várias linhas. O recurso de várias linhas os torna muito mais úteis para definir modelos de componentes em comparação com strings regulares, pois tornam a marcação mais legível."
            },
            "X-templates": {
                template: "components/vue/component-x-templates.vue.ejs",
                description: "Com este método, seu modelo é definido dentro de uma tag de script no arquivo index.html. A tag de script recebe o tipo text/x-template e é referenciada por id em sua definição de componente. No lado positivo, esse método permite que você escreva sua marcação de modelo em um arquivo HTML. A desvantagem é que ele separa o modelo do resto da definição do componente, então pode ser um pouco difícil de raciocinar.",
                html: "components/vue/component-x-templates.html.ejs"
            },
            "Inline templates": {
                template: "components/vue/component-inline-templates.vue.ejs",
                description: "Com este método, seu modelo é definido dentro de uma tag de script no arquivo index.html. A tag de script recebe o tipo text/x-template e é referenciada por id em sua definição de componente. Com esse método, você define o modelo do componente dentro do modelo pai quando ele é usado. Apenas certifique-se de adicionar o atributo inline-template para que o Vue saiba onde encontrá-lo. O método tem aproximadamente as mesmas vantagens e desvantagens dos modelos x. Uma diferença interessante é que, como o modelo pode ser definido no corpo do documento, o conteúdo pode ser rastreado para SEO.",
                html: "components/vue/component-inline-templates.html.ejs"
                
            },
            "Render functions": {
                template: "components/vue/component-render-functions.vue.ejs",
                description: "As funções de renderização exigem que você defina seu modelo usando JavaScript puro. Você precisará ler os documentos do Vue para obter a sintaxe exata, mas a ideia aproximada é definir os nós de modelo chamando createElement(tag, options, childElements). A vantagem de fazer isso é que não requer qualquer tipo de compilação e oferece acesso total à funcionalidade JavaScript em vez do que é oferecido pelas diretivas. Por exemplo, para iterar em um modelo de marcação, você só pode usar v-for, mas em JavaScript, você pode usar qualquer método de matriz. No entanto, as funções de renderização são muito mais detalhadas e abstratas do que outras opções de modelo e não espero que muitas pessoas se sintam à vontade para escrever um aplicativo inteiro como este."
            },
            "JSX": {
                template: "components/vue/component-jsx.vue.ejs",
                description: "JSX é uma extensão do JavaScript que permite usar uma sintaxe de modelo especial em seu código JavaScript. Popularizado pelo React, esta é a opção de template mais controversa no Vue, já que alguns desenvolvedores a veem como feia, pouco intuitiva e como uma traição ao ethos do Vue. No entanto, o JSX pode ser usado para escrever uma função de renderização Vue de uma maneira muito mais legível e menos abstrata. No entanto, exige que você transpile, pois o JSX não é legível pelos navegadores."
            },
            "Single-file components": {
                template: "components/vue/component-single-file-components.vue.ejs",
                description: "Um dos recursos mais populares do Vue.js é o Single-File Component (SFC). Eles permitem que você escreva marcação enquanto mantém sua definição de componente em um arquivo. Eles são compilados pelo vue-loader em funções de renderização para que você também obtenha o melhor desempenho em tempo de execução. Para criar um SFC, você primeiro cria um arquivo .vue, por exemplo. Checkbox.vue, em seguida, defina seu modelo em uma tag de modelo e defina o componente em uma tag de script. Este arquivo é então importado para o seu aplicativo Vue principal. Contanto que você esteja confortável usando Vue CLI ou configurando sua própria ferramenta de compilação em seu projeto, os SFCs são o caminho a percorrer."
            }
        }
    }
}


export { Constants }