//@Framework dev kit

import { ReactNode, useEffect, useState } from 'react';

import { ContainerForm } from './styles';


const FormComponent: React.FC<ReactNode> = ({ children }): JSX.Element => {

    const [myFirstState, setMyFirstState] = useState("Olá, esse é o component Form");

    useEffect(() => {
        console.log("Um exemplo de como usar o useEffect");

        return () => {
            console.log("Sempre que o ciclo de vida do seu component se encerrar, essa função é chamada");
        }
    }, []);

    return (
        
        <ContainerForm>
            <h1> { myFirstState } </h1>
        </ContainerForm>
        
    )
} 

export { FormComponent }