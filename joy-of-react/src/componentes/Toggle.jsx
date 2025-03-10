import { useState } from "react"
import Button from "./Button"

function Toggle() {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Button onClick={() => setVisible(!visible)}  >
                Sou um botão Toggle
            </Button>
            <p> {visible ? `Um galo estava ciscando, procurando o que comer no terreiro, quando encontrou uma pérola. Ele então pensou:

Se fosse um joalheiro que te encontrasse, ia ficar feliz. Mas para mim uma pérola de nada serve; seria muito melhor encontrar algo de comer.

Deixou a pérola onde estava e se foi, para procurar alguma coisa que lhe servisse de alimento.

A história do galo e da pérola nos ensina que cada um de nós considera que algo é precioso de acordo com as suas próprias necessidades.

Ao ter encontrado uma pérola, o galo reconheceu que, no seu lugar, um joalheiro teria a sorte grande. Mas para ele, galo, a pérola não servia de nada - 
o que ele precisava mesmo era de alimento.

Em poucas linhas a história ensina para as crianças que somos seres diferentes e com exigências distintas.` : null}</p>
        </>
    )
}

export default Toggle