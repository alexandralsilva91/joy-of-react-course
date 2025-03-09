import { useState } from "react";

function Button({ children, onClick }) {
    const [count, setCount] = useState(0);

    return (
        <button
            style={{
                background: 'gold',
                border: 'transparent',
                padding: 10,
                borderRadius: 4,
                margin: 10
            }}
            onClick={() => {
                setCount(count + 1);
                onClick();
            }}
        >
            {children} ({count})
        </button>
    )
}

export default Button;