import { Toolbox } from "gluegun/build/types/domain/toolbox";
import { genericError } from "../../../generates/errors/generic.error";
import { reactContextSuccess } from "../../../generates/success/react-context.success";
import { generateContextDir } from "../../generateDir";

interface ITemplateInfo {
    template: string,
    isJsx: boolean,
    subNameFile: string
}

const templatesInfo: Array<ITemplateInfo> = [
    {
        template: "react-context/react-context.[@ext].ejs",
        isJsx: true,
        subNameFile: "context"
    },
    {
        template: "react-context/react-provider.[@ext].ejs",
        isJsx: true,
        subNameFile: "provider"
    },
    {
        template: "react-context/react-reducer.[@ext].ejs",
        isJsx: true,
        subNameFile: "reducer"
    },
    {
        template: "react-context/initial-data-context.[@ext].ejs",
        isJsx: false,
        subNameFile: "initialData"
    },
]

const generateFullReactContext = (toolbox: Toolbox, name: string, primaryExtension: string, dir?: string): void => {

    const { template } = toolbox;

    try {

        templatesInfo.forEach(async (templateInfo: ITemplateInfo) => {
            let extesionFile = `${primaryExtension}${templateInfo.isJsx ? "x" : ""}`;
            await template.generate({
                template: templateInfo.template.replace("[@ext]", extesionFile),
                target: generateContextDir(name, extesionFile, templateInfo.subNameFile, dir),
                props: { name }
            });
        });

        reactContextSuccess(toolbox, name);

    } catch (error) {
        genericError(toolbox, error)
    }

}


export { generateFullReactContext }