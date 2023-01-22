import React, { useState } from 'react'
import Layout from '../layout';
import Quiz from '../Quiz'

const QuizResult = () => {
    const [finish, setFinish] = useState(false);
    const [result, setResult] = useState();
    if (finish) {
        return (
            <Layout>
                <h1>Results Are Ready: {result} </h1>
                <button onClick={() => setFinish(false)}>Wanna Try again...?</button>
            </Layout>
        )
    }
    return (
        <Layout>
            <div><Quiz onResult={(result) => setResult(result)} onFinish={(finish) => setFinish(finish)} /></div>
        </Layout>
    )
}

export default QuizResult