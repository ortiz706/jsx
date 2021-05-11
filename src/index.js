// Importar react e reactDOM 
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
const App = function (){

    const buttonText = {text: 'CLick me!'};
    const LabelText = 'Enter name:';

    return (
        <div>
            <label htmlFor="name" className="label">{LabelText}</label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color:'white'}}>{buttonText.text}</button>
        </div>
    );
};

// Usar o componente na tela
ReactDOM.render(
    <App />, document.querySelector('#root')
);


