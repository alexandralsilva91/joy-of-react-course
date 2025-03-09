/**
 * TO DO:
 * O componente greeting vai receber como propriedades name, isMorning.O isMorning pode
 *  ser true ou false.
 * Mediante o isMorning e o name, é para colocar um h1 a dizer Good morning, Alexandra,
 * caso o isMorning seja true e o name alexandra.
 */

export function Goodnight({ name }) {
    return (
        <h1>Good <u>night</u>, {name}</h1>
    )
}


function Greetings({ name, isMorning }) {

    /*
    if (isMorning) {
        return (
            <h1>Good morning, {name}</h1>
        )
    } else
        return (
            <Goodnight name={name} />
        );
    }*/

    return <h1>Good {isMorning ? "Morning" : "Night"} {name}</h1>

}

export default Greetings;