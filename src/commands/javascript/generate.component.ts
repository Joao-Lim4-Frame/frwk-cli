import { GluegunToolbox } from 'gluegun'
import { Constants } from '../../constants/constants';
import { NameFileErro } from '../../generates/errors/nameFile.error';
import { projectInvalid } from '../../generates/errors/projectInvalid.error';
import { PackageKeyProjectTypeWarning } from '../../generates/warnings/packageKey.warning';
import { generateProjectTypeForDependencies, verifyExtensionFileInPackageJSON } from '../../helpers/extensionFilePackage';
import { generateReactComponentFiles } from '../../helpers/generate/components/react/generateReactComponentFiles';
import { IProjectsTypeNames, IProjectType } from '../../types';

module.exports = {
    name: 'generate:component',
    alias: ['gc'],
    run: async (toolbox: GluegunToolbox) => {
        const {
            parameters: { options },
            filesystem,
        } = toolbox;

        const { name, dir } = options;
        var projectType: IProjectType = {
            type: "",
            valid: false,
            extensionFile: ""
        }
    
        if(!name) return NameFileErro(toolbox);

        const { dependencies, devDependencies, frmkProject } = await filesystem.read('package.json', 'json');
        
        if(frmkProject) { 
            let projectTypeToString = String(frmkProject).toUpperCase() as IProjectsTypeNames;
        
            if(projectTypeToString in Constants.projectsType) {
                projectType = {
                    type: projectTypeToString,
                    valid: Constants.projectsType[projectTypeToString],
                    extensionFile: verifyExtensionFileInPackageJSON(devDependencies, dependencies, frmkProject)
                };
            }
        } else { 
            PackageKeyProjectTypeWarning(toolbox); 
            projectType = generateProjectTypeForDependencies(devDependencies, dependencies);
        }   

        // verifica se a tecnologia que o dev ta usando está com suporte ou não
        if(!projectType.valid) return projectInvalid(toolbox, projectType.type.toLowerCase());

        switch (projectType.type) {
            case "REACT": 
                generateReactComponentFiles({ 
                    dependencies,
                    name,
                    projectType,
                    toolbox,
                    dir,
                });
                break;
            case "VUE": 
                console.log("vue")
        }

    },
}
