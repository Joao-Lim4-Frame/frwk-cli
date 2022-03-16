// export types

export type IProjectsTypeNames = "REACT" | "VUE" | "ANGULAR" | "REACT-NATIVE" | "";

export interface IProjectType {
    type: IProjectsTypeNames,
    valid: boolean,
    extensionFile: string
} 