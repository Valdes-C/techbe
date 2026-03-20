const names =[
    {
        id: crypto.randomUUID(),
        label: 'Alan'
    },
    {
        id: crypto.randomUUID(),
        label: 'Karolcia'
    },
    {
        id: crypto.randomUUID(),
        label: 'Musztafa'
    }
]

export default function Basics(){

    const name= 'React';

    return (
        <>
            <h1 onClick={() => alert('Test')}
                style={{color:'red'}}>
                Testowy komponent {name}
            </h1>
            <h2 onClick={() =>alert('Test 2')}>Testowy komponent {name+ ' nr 2'}</h2>

            <NextComponent/>

            {
                names.map(({id,label})=><Item key={id} name={label}/>)
            }
        </>
    )
}

// @ts-ignore
function Item({name}){
    const handleClick = ()=>{
        alert(`Click on ${name}!`);
    }
    return (
        <li onClick={handleClick}>{name}</li>
    )

}

function NextComponent(){
    const curDate= new Date().toLocaleDateString();
    const imgSrc='src/assets/react.svg';

    return (
        <div>
            Kolejny Komponent {curDate}
            <img src={imgSrc}/>
            <div style={{height: '5px',background: 'darkblue'}}></div>
            <PropsComponent name="Zenek">
                <h1>Cechy komponentów</h1>
                <ul>
                    <li>Cecha 1</li>
                    <li>Cecha 2</li>
                    <li>Cecha 3</li>
                </ul>
            </PropsComponent>
        </div>
    )
}

// @ts-ignore
function PropsComponent({name, children}){

    return (
        <>
            <h2> Witaj {name}</h2>
            {children ? children :<div>Brak elementu porzędnego</div>}
        </>
    )
}