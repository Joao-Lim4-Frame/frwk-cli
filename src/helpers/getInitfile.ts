import { Toolbox } from "gluegun/build/types/domain/toolbox";
import { Constants } from "../constants/constants";
import { IInitFileProps } from "../types";

const getInitFile = async (toolbox: Toolbox): Promise<IInitFileProps> => {
    return await toolbox.filesystem.read(`${Constants.cliName}.init.jsonc`, 'json');
}

export { getInitFile }