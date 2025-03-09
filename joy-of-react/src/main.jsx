import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Greetings, { Goodnight } from './componentes/Greetings';

function Soma({ num1, num2 }) {
    return <h2>{num1 + num2}</h2>
}

function Xana({ children }) {
    return <h3>{children}</h3>
}

function HelloWorld({ name, children }) {
    const date = new Date();

    return (
        <h1>Hello World {children} {name} {date.toISOString()}</h1>
    );

    // Depois de ser processado e "compilado" pelo vite o React vai ser comvertido em 
    // algo parecido com isto:
    //
    // const h = document.createElement('h1');
    // h.innerText = `hello world ${name} ${date.toISOString()}`
    // document.body.append(h);
    //  ^
    //   \___ Este é o codigo javascript que vai ser gerado quando compilado
    //        E faz exactamente o mesmo.

}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HelloWorld name="Xana" />             {/*HelloWorld({ name: "Xana" }); */}
        <Soma num1={1} num2={100} />           {/*Soma({ num1: 1, num2: 100 }); */}
        <Xana>                                 {/*Xana({ children: "Eu sou a Xana" }); */}
            Eu sou a Xana
        </Xana>
        <Greetings name="Alexandra" isMorning={true} />
        <Greetings name="Jacinta" isMorning={false} />
        <Goodnight name="Victor" />
    </StrictMode>,
);