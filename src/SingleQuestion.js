import React, { useContext, useState } from 'react'
import { Routes, Route,Link } from 'react-router-dom';
import { useGlobalContext } from './context';
import questions from './data';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Alert
} from "@material-tailwind/react";
function SingleQuestion() {
    const {increaseScore,questionIndex,clicked,nextQuestion,isEnd}=useGlobalContext();
    const question=questions[questionIndex];
    const {questionText,answerOptions}=question;
    
  return (
      <div className=''>
        
<div className="relative mx-w-screen py-16 bg-gradient-to-br  from-sky-50 to-gray-200">  
    <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12 ">
            <div className="rounded-xl bg-white shadow-xl grid place-content-center">
                <div className="p-6 sm:p-16 ">
                    <div className="space-y-4">
                        
                        <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Landing Page Heading<br></br>
                        Heading Content</h2>
                    </div>
                    <div className="mt-16 grid space-y-4">
                    {
            answerOptions.map((option,index)=>{
                const {answerText}=option;
                return <div key={index} className="bg-gray ">
                        <Button onClick={()=>increaseScore(question.answerOptions[index].isCorrect,index)} type="button" disabled={clicked!==null && index!==clicked} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
<div className="relative flex items-center space-x-4 justify-center">
                                <a href="">
                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">{answerText}</span>
                            </a>
                            </div>
 </Button>
                     </div>
            })
      }
                        
                    </div>

                    <div className="m-32 space-y-8 text-gray-600 text-center sm:-mb-8 bg-blue-600">
                    
      {
                    !isEnd && <Button className='next-question' onClick={() => nextQuestion()}>Next</Button>
                }
                {
                    isEnd &&
                    (
                        <Link to="/result/">
                            <Button>Submit</Button>
                        </Link>

                    )
                }
      
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      
       
      
      
      </div>

  )
}

export default SingleQuestion
