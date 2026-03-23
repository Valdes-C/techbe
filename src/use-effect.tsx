import {useEffect, useRef, useState} from "react";

export function UseEffectComponent(){

    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        const interval = setInterval(() => setCounter(c =>c+1), 1000);

        return () => clearInterval(interval);
        },[]);

    useEffect(() =>{
       const resizeFunction =() => console.log("test123");
       window.addEventListener("resize", resizeFunction);

       return () => window.removeEventListener("resize", resizeFunction);
    },[]);

    const inputRef = useRef(null);

    const [text, setText] = useState('');

    useEffect(() =>{
        // @ts-ignore
        inputRef.current?.focus();
    },[]);
    //
    // useEffect(() => {
    //     document.title = text;
    // }, [text]);

    return (
        <div style={{padding:'30px'}}>
            <h1>{counter}</h1>
            <input type="text" ref={inputRef}
                   value={text}
                   onChange={
                            (e) => {
                                setText(e.target.value);
                                document.title = e.target.value;
                            }

            } />

        </div>
    )
}