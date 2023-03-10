import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { useGlobalContext } from './context';
import questions from './data';
import SingleQuestion from './SingleQuestion';
import { Button,Label,TextInput,Checkbox} from 'flowbite-react';
import Navbar from './Navbar';
import QuestionCard from './QuestionCard';
import Modal from './Modal2';

function Questions() {
    const { questionIndex, isEnd, nextQuestion, isWrongSelected, clicked,playAgain, ShowAnswer, showExplanation } = useGlobalContext();
    
    const options = questions[questionIndex].answerOptions;
    const correctOption = options.filter((option) => {
        return option.isCorrect;
    })[0]
    useEffect(()=>{
        playAgain();
    },[])
    return (
        <div className='max-h-screen'>
            <section>
            {/* <Modal></Modal> */}
            <QuestionCard></QuestionCard>
            </section>
        </div>
        
    )
}

export default Questions
