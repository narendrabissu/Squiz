import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
function Start() {
  const [open, setOpen] = useState(false);

  function handleOpen(){
    console.log("Hane");
     setOpen(!open);
  }
  console.log("Hanfffffffe");
  return (
    <Fragment >
      <section className="h-screen  bg-[#b45309] flex justify-center text-midnight items-center content-center">
        <Dialog 
          open={open}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
         
          <DialogHeader>How Would you like to join the Quiz</DialogHeader>
          <DialogBody divider className='padding flex space-x-6'>
          <h1>Enter The Name</h1>
          <input type="text" className='focus:outline-none focus:ring focus:border-blue-500' />
       
          </DialogBody>
          <DialogFooter>
          
          <Button
              variant="text"
              color="black"
              onClick={handleOpen}
              className="bg-yellow"
            >
              <Link to='/questions'><span>Login</span></Link>
            </Button>
            <Button variant="gradient" className='bg-green' onClick={handleOpen}>
            <Link to='/questions'><span>Guest</span></Link>
            </Button>
            
            
          </DialogFooter>
        </Dialog>
        <div className='bg-indigo-500'>
        
          <Button onClick={handleOpen} variant="gradient" className='text-midnight'>
            Start The Quiz
            {/* <input>Please Enter your name</input> */}
            {/* //<Link t> */}

            {/* </Link> */}
          </Button>
        </div>
      </section>



    </Fragment>

  )
}

export default Start
