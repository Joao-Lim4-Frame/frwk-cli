import { Constants } from "../constants/constants";
import { IProjectsTypeNames, IProjectType } from "../types";

export const verifyExtensionFileInPackageJSON = (devDependencies: object, dependencies: object, keyPackageType?: string): "js" | "ts" | "tsx" | "jsx" | "vue" => {
    
    const reactExtensions = (): "jsx" | "tsx" => {
        const usingTypescript = "typescript" in devDependencies;
        if(usingTypescript) return "tsx";
        return "jsx";
    }
    
    const isReact = "react" in dependencies;
    
    if(keyPackageType) {
        if(keyPackageType === "react") return reactExtensions();
        return Constants.extensions[keyPackageType];
    }   

    if("vue" in dependencies) return "vue";
    if("@angular/core" in dependencies) return "ts";

    if(isReact) return reactExtensions();

    return "js";
}

const newProjectTypeObject = (devDependencies: object,dependencies:object, valid: boolean, type: IProjectsTypeNames): IProjectType => ({
    extensionFile: verifyExtensionFileInPackageJSON(devDependencies, dependencies),
    type,
    valid,
})

export const generateProjectTypeForDependencies = (dependencies:object ,devDependencies: object): IProjectType => {
    const projectsTypes = Constants.projectsType;

    const isReact = "react" in dependencies;

    if("vue" in dependencies) return newProjectTypeObject(devDependencies, dependencies, projectsTypes.VUE, "VUE");

    if("@angular/core" in dependencies) return newProjectTypeObject(devDependencies, dependencies, projectsTypes.ANGULAR, "ANGULAR");

    if(isReact) {
        if("react-native" in dependencies) return newProjectTypeObject(devDependencies, dependencies, projectsTypes["REACT-NATIVE"], "REACT-NATIVE");

        return newProjectTypeObject(devDependencies,dependencies, projectsTypes.REACT, "REACT");
    }

    return newProjectTypeObject(devDependencies, dependencies, false, "");
}