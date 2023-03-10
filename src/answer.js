import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Questions from './Questions';
import Result from './Result';
import SingleQuestion from './SingleQuestion';
import Start from './Start';
import { ThemeProvider } from "@material-tailwind/react";
import Navbar from './Navbar';
import questions from './data';
import { useGlobalContext } from './context';

function Answer() {
    const { increaseScore, questionIndex, clicked, nextQuestion, isEnd, score, addUserQuestion, userChoice } = useGlobalContext();
    let index = 0;
    console.log(questions, userChoice,score,questionIndex);
    return (
        <div className="flex items-center justify-center">
            <div className=" lg:mx-52 lg:my-50 lg:mt-10   bg-sky-50 ">
                <div className="h-10 text-center bg-sky-50 border-2 border-sky-100	 ">
                    <ul className="flex justify-between">
                        <li className="mr-3">
                            <Link to='/score' className="inline-block text-blue-500 py-2 px-4  hover:text-black" >Score</Link>
                        </li>
                        <li className="mr-3">
                            <Link to='/answer' className="inline-block text-blue-500 py-2 px-4  hover:text-black" >Answer</Link>
                        </li>
                        <li className="mr-3">
                            <Link to='/leaderboard' className="inline-block  text-blue-500 py-2 px-4  hover:text-black">Leaderboard</Link>
                        </li>
                    </ul>
                </div>

                <div className=" my-4 mx-6 ">
                    <ol className="list-decimal font-medium text-3xl space-y-16 mx-10">
                        {
                            questions.map((question, index) => {
                                const { questionText, answerOptions } = question;
                                const correctOption = answerOptions.filter((option) => {
                                    return option.isCorrect;
                                })[0]
                                return (
                                    <li className="space-y-4" key={index}>
                                        <div className="font-bold text-2xl">{questionText}</div>
                                        <div className={`text-${answerOptions[userChoice[index]].isCorrect ? "green" : "red"}-800 text-base`}>Your Answer: {answerOptions[userChoice[index]].answerText} </div>
                                        {
                                            !answerOptions[userChoice[index]].isCorrect && <div className="font-semibold text-base">Correct Answer: {correctOption.answerText}</div>
                                        }

                                        <div className="text-base font-bold">{correctOption.answerText} :- {correctOption.Meaning}</div>
                                    </li>
                                )
                            })
                        }



                        
                    </ol>
                </div>
            </div>
        </div>
    )
}
export default Answer
