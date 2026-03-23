//@ts-nocheck

import {createContext, useContext, useState} from "react";

export const LangaugeContext =createContext("PL");

const langData ={
    langauge:{
        PL: 'Aktualny język',
        EN: 'Current language'
    }
}

export function ContextCoponent(){

    const [langauge, setLangauge] = useState('PL');

    const changeLangauge = () => setLangauge(langauge === 'PL' ? 'EN' : 'PL');

    return (
        <LangaugeContext value={langauge}>
            <section style={{ paddingLeft: '30px' }}>
                <header style={{position: 'absolute', top: '20px'}}>
                    <button onClick={changeLangauge}>Zmień język</button>
                </header>
                <SecondComponent/>
            </section>
        </LangaugeContext>
    )
}

function SecondComponent(){
    return (
        <div style={{ backgroundColor: 'lightblue', paddingLeft: '20px' }}>
            <ThirdComponent/>
        </div>
    )
}

function ThirdComponent(){

    const lang=useContext(LangaugeContext);
    // @ts-ignore
    return (
        <h1>
            {langData.langauge[lang]}: {lang}
        </h1>
    )
}