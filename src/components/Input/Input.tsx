import { useState } from "react";
import './Input.css';

interface IInput {
    setCityName: React.Dispatch<React.SetStateAction<string>>,
}

function Input({setCityName}: IInput) {
    const [ inputValue, setInputValue ] = useState('');
    return (
        <div className="input__container">
            <form action="" onSubmit={(e) => {
                e.preventDefault();
                setCityName(inputValue)
            }}>
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value)
                    }}
                />
            </form>
        </div>
    )
}

export default Input;