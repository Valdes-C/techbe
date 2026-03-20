import {useState, type SetStateAction} from "react";

export function Counter() {

    const [counter, setCounter] = useState(0)

    const [person, setPerson] = useState({
        name: '',
        email: '',
    });

    const [text, setText] = useState('');


    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    const reset = () => setCounter(0);

    const modifyPerson = () => setPerson({
        ...person,
        name: 'Krzysiek'
    });

    console.log('Reset counter');

    // @ts-ignore
    // @ts-ignore
    return (
        <div style={{width: '100vw', textAlign: 'center'}}>
            <h1>{text}</h1>
            <div style={{fontSize: '30px', marginBottom: '30px'}}>{counter}</div>
            <button onClick={increment}>Dodadaj 1</button>
            <button onClick={decrement}>Odejmij 1</button>
            <button onClick={reset}>Resetuj</button>
            <button onClick={modifyPerson}>Modyfikuj obiekt</button>
            <div>
                <button onClick={() => {
                    // doda jeden bo stan jest trzymany jako 0
                    // setCounter(counter + 1);
                    // setCounter(counter + 1);
                    // setCounter(counter + 1);

                    // doda 3x po 1 czyli 3
                    setCounter(prevCounter => prevCounter + 1);
                    setCounter(prevCounter => prevCounter + 1);
                    setCounter(prevCounter => prevCounter + 1);
                }
                }>Dodaj 3
                </button>
            </div>

            <Input value={text} onChange={(value: SetStateAction<string>) => setText(value)}/>
        </div>
    )
}

// @ts-ignore
function  Input({value, onChange}){

    console.log('Reset input');

    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}