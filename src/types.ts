// export types

type IProjectNameTypes = "react" | "vue" | "angular" | "react-native" | "outros";

interface IInitFileProps {
    projectName: string,
    projectType: IProjectNameTypes,
    templates?: {
        use: boolean,
        dir: string
    }
}

type IProjectsTypeNames = "REACT" | "VUE" | "ANGULAR" | "REACT-NATIVE" | "";

interface IProjectType {
    type: IProjectsTypeNames,
    valid: boolean,
    extensionFile: string
} 

export type { IProjectsTypeNames, IProjectType, IInitFileProps }