const Constants = {
    nameApp: "Framework dev cli",
    cliName: "frwk-dev-cli",
    projectsType: {
        REACT: true,
        VUE: true,
        ANGULAR: false,
        "REACT-NATIVE": true
    },
    dir: {
        defaultDirForGenerateComponents: "src/components"
    },
    extensions: {
        vue: "vue",
        react: {
            ts: "tsx",
            js: "jsx",
        },
        angular: "ts",
        default: "js"
    }
}


export { Constants }