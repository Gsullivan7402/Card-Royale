import React from 'react'

function Button({ children, onClick, ...props }) {
    return (
        <button
            className="btn p-1.5 m-3 bg-gray-200 text-bold border border-black rounded" // Add Tailwind or other CSS classes here
            onClick={onClick}
            {...props} // Pass any additional props to the button
        >
            {children}
        </button>
    );
}

export default Button