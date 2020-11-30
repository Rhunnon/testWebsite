import { useState } from 'react';

function Home() {
    return (
        <div>
        
            <h1>Home</h1>
            <Counter />
            <h1>teste hehe</h1>
        
        </div>
    )
}



function Counter() {
    const [counter, setCounter] = useState(1);

    function incrementCounter() {
        setCounter(counter+1);
    }

    return (
        <div>
            <div>{counter}</div>
            <button onClick = {incrementCounter}>Adicionar</button>
        </div>
    )
}



export default Home