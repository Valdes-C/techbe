//@ts-nocheck

// @ts-ignore
import {forwardRef, useRef, useState} from "react";
// @ts-ignore
import {node} from "globals";

export function RefComponent(){

    const [change, setChange] = useState(false);

    let clickCounterNotRef=0;

    const countRef= useRef(0);

    const inputRef = useRef(null);

    const listRef = useRef(new Map());
    console.log(listRef.current);

    // @ts-ignore
    // @ts-ignore
    return (
        <div style={{ padding: '30px' }}>
            <div>
                <button onClick={() => {
                    countRef.current++;
                    clickCounterNotRef++;
                }}>Kliknij</button>
                <button onClick={() => {
                    alert(`Ilość kliknięć z ref-a ${countRef.current}`);
                    alert(`Ilość kliknięć ze zmiennej ${clickCounterNotRef}`);
                }}>Sprawdź ilość kliknięć</button>
                <button onClick={() => setChange(!change)}>Zmień stan</button>
            </div>
            <button onClick={() => inputRef.current.focus()}>FOCUS</button>
            <Input ref={inputRef} />
            <ul>
                <li ref={node => listRef.current.set('1',node)}> 1.</li>
                <li ref={node => listRef.current.set('2',node)}> 2.</li>
                <li ref={node => listRef.current.set('3',node)}> 3.</li>

            </ul>
        </div>
    )
}

// @ts-ignore
function Input({ref}){
    return <input type="text" ref={ref}/>
}

// const Input= forwardRef(function Input(props, ref){
//     return <input type="text" ref={ref}/>
// })