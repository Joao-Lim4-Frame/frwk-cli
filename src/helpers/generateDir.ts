import { IProjectType } from "../types"

export type extencionsFileCss = "css" | "jsx" | "tsx";

interface ICssProp {
    isCssFile: boolean,
    extension: extencionsFileCss
}

export const generateComponentsDir = (dir: string, defaultDir: string, projectType: IProjectType, name: string, cssFile?: ICssProp): string => {
    let basePathFile = `/${name}/${name[0].toUpperCase()}${name.slice(1).toLowerCase()}.component.${projectType.extensionFile}`;

    if(cssFile?.isCssFile) basePathFile = `/${name}/Styles.module.${cssFile.extension}`;

    if(dir) {
        if(dir[dir.length - 1] === "/") dir.replace(/.$/, "");
        return `${dir}${basePathFile}`;
    }

    return `${defaultDir}${basePathFile}`;

}