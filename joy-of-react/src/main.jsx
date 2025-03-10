import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Greetings, { Goodnight } from './componentes/Greetings';
import Soma from './componentes/Soma';
import Xana from './componentes/Xana';
import Button from './componentes/Button';
import Counter from './componentes/Counter';
import Toggle from './componentes/Toggle';

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
        <Button onClick={() => console.log('uiii uiii uii')}>
            Olá eu sou um botão
        </Button>
        <Button onClick={() => console.error('ai ai ai')}>
            Olá eu sou outro botão
        </Button>
        <Button onClick={() => window.alert('Atenção!!!')}>
            Atention!
        </Button> {/*Button({ children: "Atention!", onClick: () =>  window.alert('Atenção!!!')}); */}
        <Counter />
        <Toggle />
    </StrictMode>,
);