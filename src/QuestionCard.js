import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Typography } from "@material-tailwind/react";
import Navbar from './Navbar';
import Hero from './Hero';
import { Card, Button, Alert } from 'flowbite-react';
import SingleQuestion from './SingleQuestion';
import questions from './data';
import { useGlobalContext } from './context';
import { FaDuotone, FaCheck, FaXmark } from "react-icons/fa";

function QuestionCard() {
    const { increaseScore, questionIndex, clicked, nextQuestion, isEnd, score,addUserQuestion,userChoice } = useGlobalContext();
    const { isWrongSelected, ShowAnswer, showExplanation } = useGlobalContext();
    console.log("Index in QuestionCard",questionIndex);
    const [optionBorder,setOptionBorder]=useState(["sky","sky","sky","sky"]);
    const [questionTime,setQuestionTime]=useState(30)
    const question = questions[questionIndex];
    const { questionText, answerOptions } = question;
    console.log("UserChoice",userChoice);
    const myInterval=setInterval(()=>{
        setQuestionTime(questionTime-1);
    },1000)
    const correctOption = answerOptions.filter((option) => {
        return option.isCorrect;
    })[0]
    return (

        <div className=" sm:mx-32 my-12 mt-7 border-sky-100 border-2 rounded-md  bg-sky-50">
            <div className="border-2 border-sky-100 rounded-md 	h-14 bg-white ">

                <h1 className="  mx-4 float-right my-4 border-2 border-sky-50 rounded-md "> <b>{score}</b> </h1>

                <h1 className="  mx-4 float-left my-4   "> <b>Quiz name: math</b> </h1>


                <div
                    className="circular-progress  relative	h-10 w-10 bg-slate-100	 rounded-full flex items-center justify-center float-right mx-4 my-2  ">
                    <span className="progress-value  relative text-lg	font-semibold	 "> {questionTime} </span>

                </div>
                <p className="text-right pb-2 text-green-600">


                    {questionIndex + 1}/{questions.length}

                </p>
            </div>

            <div className=" my-12">

                <p className="text-center  py-3"><b>{questionText}</b></p>

                <div className=" flex-row 	 lg:grid grid-cols-2  gap-14">
                    {answerOptions.map((answer, index) => {
                        return (
                            <div className={`bg-white-600  border-${optionBorder[index]}-800	border-solid rounded-md	mt-4	mx-4 border-2  text-center p-2`}>
                                <button
                                    onClick={() =>{
                                        if(answer.isCorrect){
                                            optionBorder[index]='green';
                                            setOptionBorder(optionBorder);
                                        }else{
                                            optionBorder[index]='red';
                                            setOptionBorder(optionBorder);
                                        }
                                        increaseScore(answer.isCorrect, index)
                                        addUserQuestion(index);
                                    }}
                                    type="button"
                                    disabled={clicked !== null}
                                    key={index}
                                    className="w-full h-full font-bold"
                                    
                                >{answer.answerText}</button>
                            </div>
                        );
                    })}

                </div>

                <div className="text-center py-8 px-14 ">
                    {
                        !isEnd && <button
                        disabled={clicked === null}
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() =>{
                                nextQuestion();
                                
                                setQuestionTime(30)
                                setOptionBorder(["sky","sky","sky","sky"]);
                            }}>{!isEnd ? "Next" : "Submit"}
                        </button>
                    }
                    {
                        isEnd && <Link to="/score">
                            <button
                            disabled={clicked === null}
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() =>{
                                nextQuestion();
                                setOptionBorder(["sky","sky","sky","sky"]);
                            }}>{!isEnd ? "Next" : "Submit"}
                        </button></Link>
                    }


                </div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-sky-900"></hr>
            <div className=" mx-7 my-5 ">
                {/* {
                    clicked !== null && !answerOptions[userChoice[questionIndex]].isCorrect && 
                } */}
                {
                    clicked !== null && <p>{`${correctOption.answerText}: ${correctOption.Meaning}`}</p>
                }


            </div>

            {/* <div >
                <Card href="#">
                    <h5 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
                        Today Quiz Title
                        ${clicked !== null && "not-allowed"} ${clicked !== null && answer.isCorrect ? "bg-green-500 " : (clicked === index) ? "bg-red-600" : "bg-blue-500 "} ${clicked === null && "hover:bg-blue-400"}  
                    </h5>
                </Card>
            </div>
            <Card>
                <main className="min-h-screen flex items-center justify-center">

                    <div className="p-3 py-5 md:p-8 bg-white shadow rounded-lg max-w-[800px] w-11/12 min-h-[300px]">
                        <p className="text-right pb-2 text-green-600">
                            Number:{" "}
                            <span>
                                {questionIndex + 1}/{questions.length}
                            </span>
                        </p>
                        <div className="mt-3">
                            <p
                                className="text-center font-medium text-2xl lg:text-3xl leading-loose"
                                dangerouslySetInnerHTML={{ __html: questionText }}
                            />
                            <div className="grid grid-cols-1 my-5 space-y-2 place-content-center">
                                {answerOptions.map((answer, index) => {
                                    return (
                                        <button
                                            onClick={() => increaseScore(answer.isCorrect, index)}
                                            type="button"
                                            disabled={clicked !== null}
                                            key={index}
                                            className={`${clicked !== null && "not-allowed"} ${clicked !== null && answer.isCorrect ? "bg-green-500" : (clicked === index) ? "bg-red-600" : "bg-blue-500 "} ${clicked === null && "hover:bg-blue-400"} w-4/5 rounded-lg mx-auto text-white p-2 `}
                                            dangerouslySetInnerHTML={{
                                                __html: answer.answerText,
                                            }}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex justify-center pt-4">
                            <Button className="py-2 px-7 text-medium flex rounded-lg text-white bg-yellow-600 hover:bg-green-700" onClick={() => nextQuestion()}>{!isEnd ? "Next" : "Submit"}</Button>


                        </div>
                    </div>
                </main>

            </Card>
            <div >

                <Card href="#">
                    <h5 className="text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                        Explanation
                    </h5>
                    <div className=' text-center '>
                        {/* <Button onClick={() => ShowAnswer()} className="placed-center"> Show Explanation </Button> */}

            {/* <div className='m-5'>
                            {
                                isWrongSelected && (

                                    <Alert
                                        color="failure"
                                    >
                                        <span>
                                            <span className="font-bold">
                                                Wrong Answer
                                            </span>
                                            {''}<p>{`${answerOptions[clicked].answerText}: ${answerOptions[clicked].Meaning}`}</p>
                                        </span>
                                    </Alert>

                                )
                            }
                            {
                                clicked !== null && (
                                    <div>
                                        <Alert
                                            color="success"
                                        >
                                            <span><FaCheck></FaCheck>
                                                <span className="font-bold">
                                                    Correct Answer
                                                </span>
                                                {''}<p>{`${correctOption.answerText}: ${correctOption.Meaning}`}</p>
                                            </span>
                                        </Alert>

                                    </div>
                                )
                            }

                        </div>

                    </div> */}



        </div>

    )
}

export default QuestionCard
