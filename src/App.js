import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Questions from './Questions';
import Result from './Result';
import SingleQuestion from './SingleQuestion';
import Start from './Start';
import { ThemeProvider } from "@material-tailwind/react";
import Navbar from './srcHome/component/Home/Navbar';
import Score from './score';
import Answer from './answer';
import Leaderboard from './leaderBoard';
import HomePage from './srcHome/component/Home/HomePage';
import QuizCategory from './srcHome/component/Home/QuizCategory';
import StartQuiz from './srcHome/component/Home/StartQuiz';
import Login from './login';



function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route exact path='/startQuiz' element={<Home />}></Route>
      <Route exact path='/questions' element={<Questions></Questions>}></Route>
      <Route exact path='/result' element={<Result></Result>}></Route>
      <Route exact path='/score' element={<Score></Score>}></Route>
      <Route exact path='/answer' element={<Answer></Answer>}></Route>
      <Route exact path='/leaderboard' element={<Leaderboard></Leaderboard>}></Route>
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path="/quizzes/:category" element={<QuizCategory />} />
      <Route exact path="/quizzes/:category/:name" element={<StartQuiz />} />
    </Routes>
    
    </>
  )
}

export default App
