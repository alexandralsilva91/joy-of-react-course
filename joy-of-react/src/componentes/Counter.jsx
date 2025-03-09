import Button from "./Button";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Actual number of people: {count}</h1>
            <Button onClick={() => setCount(count + 1)}>
                Increase
            </Button>
            <Button onClick={() => setCount(count - 1)} disabled={count <= 0}>
                Decrease
            </Button>
            <Button onClick={() => setCount(0)}>
                Set to Zero
            </Button>
        </div>
    )
}

export default Counter;