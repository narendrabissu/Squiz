import React, { useContext, useState, useEffect } from "react"
import questions from "./data";
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(questions.length===1);
    const [userChoice,setUserChoice]=useState([])
    const [isWrongSelected, setIsWrongSelected] = useState(false);
    const [score, setScore] = useState(0);
    const [clicked, setClicked] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);

    const playAgain = () => {
        setQuestionIndex(0);
        setIsEnd(questions.length===1);
        setIsWrongSelected(false);
        setClicked(null)
        setShowExplanation(false);
        setScore(0);
        setUserChoice([])
    }
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setQuestionIndex(0);
        setIsEnd(false);
        setIsWrongSelected(false);
        setClicked(null)
        setShowExplanation(false);
        setScore(0);

    };
    const nextQuestion = () => {
        if (questionIndex + 1 === questions.length - 1) {
            setIsEnd(true);
            setQuestionIndex(questionIndex + 1)
        }
        if (questionIndex + 1 === questions.length) {
            openModal();
            setQuestionIndex(questionIndex + 1)
        }
        console.log("Index  ");
        //console.log(questionIndex);
        if (!isEnd) setQuestionIndex(questionIndex + 1)
        setIsWrongSelected(false);
        setClicked(null)
        setShowExplanation(false);
    }
    const ShowAnswer = () => {
        setShowExplanation(true);
        //setClicked(null)
    }
    const addUserQuestion=(index)=>{
        const temp=userChoice;
        temp.push(index)
        setUserChoice(temp);
    }
    const increaseScore = (value, id) => {

        setIsWrongSelected(!value);
        setScore(score + value);
        //console.log(score);
        setClicked(id);
    }
    return <AppContext.Provider
        value={{
            questionIndex,
            isEnd,
            isModalOpen,
            score,
            isWrongSelected,
            clicked,
            showExplanation,
            userChoice,
            nextQuestion,
            increaseScore,
            ShowAnswer,
            openModal,
            closeModal,
            playAgain,
            addUserQuestion
        }}>
        {children}
    </AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext);
}
export { AppContext, AppProvider }