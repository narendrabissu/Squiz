import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Typography } from "@material-tailwind/react";
import { Card, Button } from 'flowbite-react';
import Modal from './Modal';


function Hero() {
  return (
    <div className="flex justify-center  max-h-screen bg-[#fcd34d] bg-[url('bgImage.jpg')]">
      <div className="max-w-sm m-2">
        <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
          <div className=" grid grid-cols-1 grid-rows-2  place-items-center h-sm ">
            <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              Today Quiz
            </h5>
            <Modal></Modal>
          </div>
        </Card>
      </div>

    </div>
  )
}

export default Hero
