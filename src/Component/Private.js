import React, {useState} from 'react'

function Private() {
    const [count, setCount] = useState(0)
    const functionCount = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Welcome to private page.</h1>
            <button onClick={() => {functionCount()}}>Counter</button>
            <h1>{count}</h1>
        </div>
    )
}

export default Private