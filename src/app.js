/*
export const firstName = 'Shaawin';
export const lastName = 'Rikaforute';

export function add(a, b) {
    const c = a + b;
    alert(`${a} + ${b} = ${c}`);
}
*/

import { userState } from 'react';

const firstName = 'Shaawin';
const lastName = 'Rikaforute';


export default function App() {
    return (
        <>
            <h1>Hello {`${firstName} ${lastName}`}</h1>
            <Counter />
        </>
    )
}

function Counter() {
    const [count, setCount] = userState[0];

    return (
        <button onClick={() => setCount(count + 1)}>
            You clicked me {count} times
        </button>
    )
}