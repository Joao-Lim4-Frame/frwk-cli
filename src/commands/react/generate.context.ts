import { GluegunToolbox } from 'gluegun'
import { invalidDirError } from '../../generates/errors/invalidDir';
import { NameFileErro } from '../../generates/errors/nameFile.error';
import { generateFullReactContext } from '../../helpers/generate/react-context/generateFullContext';

module.exports = {
    name: 'generate:context',
    alias: ['gctx'],
    run: async (toolbox: GluegunToolbox) => {
        
        const {
            parameters: { options },
            filesystem,
        } = toolbox;

        const { name, dir } = options;

        const { devDependencies } = await filesystem.read("package.json", "json");

        const primaryExtension = "typescript" in devDependencies ? "ts" : "js";
        
        if(!name) return NameFileErro(toolbox);

        if(dir === "") return invalidDirError(toolbox);

        generateFullReactContext(toolbox, name, primaryExtension, dir);
    },
}
