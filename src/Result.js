import React from 'react'
import { Routes, Route ,Link} from 'react-router-dom';
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
function Result() {
    const {score,playAgain}=useGlobalContext();
  return (
    <section className='h-screen  bg-[#b45309] flex justify-center text-midnight items-center content-center'>
      <div className='bg-[#171717]'>
        <div className='bg-[#94a3b8] flex justify-center m-5'>
        <h1 className='text-white'>Result: {score}/{questions.length} </h1>
        </div>
      
        <Link to="/questions">
            <Button className='text-green'  color="white" onClick={()=>{playAgain()}}>Play Again</Button>
        </Link>
      </div>
    </section>
  )
}

export default Result
