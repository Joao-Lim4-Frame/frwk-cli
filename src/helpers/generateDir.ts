import { Constants } from "../constants/constants";
import { IProjectType } from "../types"

export type extencionsFileCss = "css" | "jsx" | "tsx";

interface ICssProp {
    isCssFile: boolean,
    extension: extencionsFileCss
}

interface IHtmlFile {
    isHtmlFile: boolean,
    extension: "html",
    nameFile: string,
}

export const generateComponentsDir = (dir: string, defaultDir: string, projectType: IProjectType, name: string, cssFile?: ICssProp, HtmlFile?: IHtmlFile): string => {
    let basePathFile = `/${name}/${name[0].toUpperCase()}${name.slice(1).toLowerCase()}.component.${projectType.extensionFile}`;

    if(HtmlFile?.isHtmlFile) basePathFile = `/${name}/${HtmlFile.nameFile}.${HtmlFile.extension}`;
    if(cssFile?.isCssFile) basePathFile = `/${name}/Styles.module.${cssFile.extension}`;

    if(dir) {
        if(dir[dir.length - 1] === "/") dir.replace(/.$/, "");
        return `${dir}${basePathFile}`;
    }

    return `${defaultDir}${basePathFile}`;
}


export const generateContextDir = (name: string,  extensionFile: string, subNameFile: string, dir?: string, subPath?: string): string => {

    let basePath = `${Constants.dir.defaultDirForGenerateContext}/${name}Context`;
    if(dir) basePath = `${dir}`;

    if(basePath[basePath.length - 1] === "/") basePath.replace(/.$/, "");

    if(subPath) return `${basePath}/${subPath}/${name}.${subNameFile}.${extensionFile}`; 
    
    return `${basePath}/${name}.${subNameFile}.${extensionFile}`;

}