import React from 'react';
import { useParams } from 'react-router-dom';
import Home from '../../../Home';

const StartQuiz = (props) => {
    let { category,name} = useParams();

    return (
        <div>
            <div className='h-30 text-center'>
            <h1>{name}</h1>
            </div>
           
           <Home></Home>
        </div>
    );
}

export default StartQuiz;
