// @ts-nocheck

import * as React from "react";
import {memo, useCallback, useMemo} from "react";

export function Main(){

    const componentStartRendering =performance.now();

    const [open, setOpen] = React.useState(false);
    const [obj, setObj] = React.useState({});

    const uselessFunction =useCallback(() => {
        console.log("unselessFunction");
    },[])

    const expensiveMessage =useMemo(() =>{
        let startTime=performance.now();

        while (performance.now() - startTime<1000){

        }

        return 'Wiadomość na której wygenerowanie potrzeba dużo czasu';

    },[obj]);

    alert(`Czas renderu componentu: ${performance.now()-componentStartRendering}`)

    return (
        <div style={{paddingLeft: '30px'}}>
            <h1>{expensiveMessage}</h1>
            <button onClick={() => setOpen(!open)}>Zmień stan</button>
            <button onClick={() => setObj({})}>Zmień obiekt</button>
            <List uselessFunction={uselessFunction} />
        </div>
    )
}




const List = memo(function({open}){

    console.log('List!!')

    return (
        <ul>
            <Item />
            <Item />
            <Item />
        </ul>
    )
},(oldProps,newProps) => {return true; })

function  Item(){

    console.log('Item!!')

    return (
        <li>Item</li>
    )
}