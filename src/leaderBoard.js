import React, { useContext } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Questions from './Questions';
import Result from './Result';
import SingleQuestion from './SingleQuestion';
import Start from './Start';
import { ThemeProvider } from "@material-tailwind/react";
import Navbar from './Navbar';
import { useGlobalContext } from './context';
// import correctGif from '../public/correct.gif'
function Leaderboard() {
    const {playAgain,score}=useGlobalContext()
    return (

        <div className=" lg:flex lg:items-center lg:justify-center">
            <div className=" lg:mx-52 lg:my-50 mt-20   ">

                <div className="h-10 text-center bg-sky-50 border-2 border-sky-100	 ">
                    <ul className="flex justify-between">
                        <li className="mr-3">
                            <Link to='/score' className="inline-block text-blue-500 py-2 px-4  hover:text-black" >Score</Link>
                        </li>
                        <li className="mr-3">
                            <Link to='/answer' className="inline-block text-blue-500 py-2 px-4  hover:text-black" >Answer</Link>
                        </li>
                        <li className="mr-3">
                            <Link to='/leaderboard' className="inline-block  text-blue-500 py-2 px-4  hover:text-black" >Leaderboard</Link>
                        </li>
                    </ul>
                </div>



                <div className=" p-2  bg-[url('exam.jpg')]  ">
                    <div className=" sm:mx-8 py-6 mt-6 mb-6 space-y-4  md:grid grid-cols-2 md:space-x-16 md:space-y-0">
                        <div>
                            <div className=" flex	 md:w-96	px-12 py-4 rounded-lg	bg-white flex-col	  border-2 border-sky-300	">
                                <h1 className="font-bold  text-center ">Top Score For This Quiz </h1>
                                <div className="my-3 ">
                                    <table className="border-2 border-sky-300 rounded-md ">
                                        <tr className="border border-sky-300">
                                            <td className="px-1"> <b>1. sonu yadav</b></td>
                                            <td className="px-14 ">7000</td>
                                        </tr>
                                        <tr className="border border-sky-300">
                                            <td className="px-1"> <b>2. Abhinav</b></td>
                                            <td className="px-14">5000</td>
                                        </tr>

                                        <tr className="border border-sky-300">
                                            <td className="px-1" ><b>3. Abhishek</b></td>
                                            <td className="px-14 ">2000</td>
                                        </tr>
                                        <tr className="border border-sky-300">
                                            <td className="px-1"><b>4. mandeep</b></td>
                                            <td className="px-14 ">1000</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="flex	 md:w-96	px-12 py-4 rounded-lg	bg-blue-900 flex-col	  border-2 border-sky-300">
                                <h1>Climb the Leaderboard! </h1>
                                <h1><u>login to save your progress</u></h1>

                                <div className="bg-sky-600  my-4 ">
                                    <div className="float-left mx-2 my-3">YOU</div>
                                    <div className="float-right mx-2 my-3">{score*1000}</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border rounded-md    ">
                            <h1 className="font-bold	 flex  items-center justify-center my-4 text-2xl	"><b>This quiz</b></h1>
                            <div className="grid grid-cols-2 space-x-8">
                                <div className=" mx-6">
                                    <div className="font-bold texl-lg text-blue-900 flex">
                                        
                                        <h1 className="mx-2">{score} Correct</h1>

                                    </div>


                                    <p className="font-bold texl-lg text-black ">

                                        5200 Points

                                    </p>
                                    <div className="my-3 space-x-2">
                                        <div className="font-bold texl-lg text-green-800 flex  ">
                                            <img src="watch-16.gif"  ></img>
                                            <h1 className="mx-2">Time Bonus</h1>


                                        </div>
                                        <h className="font-bold texl-lg text-black">
                                            points 1300

                                        </h>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="font-bold text-3xl	 text-blue-900">6500 </p>
                                    <p className="font-bold texl-lg text-black"> of 8000 </p>
                                </div>

                            </div>
                            <div className="lg:mx-28 lg:my-5 mx-24 my-3">
                                <Link to='/questions'>
                                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4 "
                                    onClick={playAgain}
                                    >play again</button>
                                </Link>

                            </div>

                        </div>

                    </div>
                </div>
            </div>







        </div>
    )
}

export default Leaderboard
