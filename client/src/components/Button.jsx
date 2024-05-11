import React from 'react'

function Button({ actionType, onClick, ...props }) {
    // Determine the button text based on the actionType
    let buttonText;
    switch (actionType) {
        case 'login':
            buttonText = 'Log In';
            break;
        case 'logout':
            buttonText = 'Log Out';
            break;
        case 'signup':
            buttonText = 'Sign Up';
            break;
        case 'startGame':
            buttonText = 'Start Game';
            break;
        case 'newGame':
            buttonText = 'New Game';
            break;
        case 'next':
            buttonText = 'Next';
            break;
        default:
            buttonText = 'Action';
            break;
    }

    return (
        <button
            className="btn p-1.5 m-3 bg-gray-200 text-bold border border-black rounded" // Add Tailwind or other CSS classes here
            onClick={onClick}
            {...props} // Pass any additional props to the button
        >
            {buttonText}
        </button>
    );
}

export default Button