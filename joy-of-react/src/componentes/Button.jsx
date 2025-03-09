function Button({ children, onClick, disabled = false }) {
    return (
        <button
            style={{
                background: 'gold',
                border: 'transparent',
                padding: 10,
                borderRadius: 4,
                margin: 10
            }}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button;