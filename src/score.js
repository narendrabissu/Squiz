import React, { useEffect, useRef, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Questions from './Questions';
import Result from './Result';
import SingleQuestion from './SingleQuestion';
import Start from './Start';
import { ThemeProvider } from "@material-tailwind/react";
import Navbar from './Navbar';
import { useGlobalContext } from './context';


function Score() {
    const circularProgressRef = useRef(null)
    const progressValueRef = useRef(null)
    const { increaseScore, questionIndex, clicked, nextQuestion, isEnd, score,playAgain} = useGlobalContext();
    //const [progressStartValue,setProgressStartValue]= useState(0);
    let progressStartValue = 0;
    console.log(questionIndex);
    const progressEndValue = (score * 100) / questionIndex;
    const speed = 50;
    useEffect(() => {
        const progress = setInterval(() => {
            if (score === 0) {
                clearInterval(progress);
            } else
                progressStartValue++;   

            progressValueRef.current.textContent = `${progressStartValue}%`
            circularProgressRef.current.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`
            console.log(progressEndValue);
            if (progressStartValue == progressEndValue) {
                clearInterval(progress);
            }
        }, speed);
        return () => clearInterval(progress);
    }, [])

    return (
        <div className="flex items-center justify-center">
            <div className=" mx-52 my-50 mt-10  ">


                <div className="h-10 text-center bg-sky-50 border-2 border-sky-100	 ">
                    <ul className="flex justify-between">
                        <li className="mr-3">
                            <Link to='/score' className="inline-block text-blue-500 py-2 px-4  hover:text-black" >Score</Link>
                        </li>
                        <li className="mr-3">
                            <Link to='/answer' className="inline-block text-blue-500 py-2 px-4  hover:text-black" href="1.html">Answer</Link>
                        </li>
                        <li className="mr-3">
                            <Link to='/leaderboard' className="inline-block  text-blue-500 py-2 px-4  hover:text-black" href="2.html">Leaderboard</Link>
                        </li>
                    </ul>
                </div>



                <div className=" p-2 space-x-6 bg-[url('exam.jpg')]      ">
                    <div className=" bg-white sm:mx-8 py-6 mt-6 mb-10  sm:flex ">
                        <div className=" absolute mx-24	">
                            <h1> <b>Quiz Name: Math</b> </h1>
                        </div>




                        <div className=" flex	mt-12 	px-12 py-0 rounded-lg	 flex-col	items-center  	">


                            <div className="circular-progress  relative	h-60 w-60 bg-slate-100		rounded-full flex items-center justify-center  " ref={circularProgressRef}>
                                <div className="   absolute	h-52 w-52 rounded-full bg-white	  "></div>
                                <span className="progress-value  relative text-lg	font-semibold	" ref={progressValueRef}> 0% </span>

                            </div>
                            <span className="text-xl font-semibold 	p-2 mt-4	">correct question </span>
                            <div>
                                <Link to='/questions'>
                                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4 "
                                    onClick={playAgain}
                                    >play again</button>
                                </Link>
                            </div>
                        </div>
                        <div className=" my-4 text-blue-700 "></div>
                        <div className="	 "> <h1 className="absolute mx-32  "><b>Next Up!</b></h1></div>




                        <div className="flex justify-center mt-12 mx-8">
                            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                                <a href="#!">
                                    <img className="rounded-t-lg" src="sonu.jpg" alt="" />
                                </a>
                                <div className="p-6">
                                    <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                                    <p className="text-gray-700 text-base mb-4">
                                        Some quick example text to build on the card title and make up the bulk of the card's
                                        content.
                                    </p>
                                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center sm:ml-28 ml-16 ">Next</button>

                                </div>
                            </div>

                        </div>

                    </div>




                </div>
            </div>
        </div>
    )
}
export default Score
