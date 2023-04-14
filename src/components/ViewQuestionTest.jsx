// import "./AccountInfo.css"
import { useState, useEffect } from 'react'
import ViewQuestionTestService from '../services/ViewQuestionTestService'

export default function ViewQuestionTest(){
    const [id, setId] = useState("")
    const [questionText, setQuestionText] = useState("")
    const [questionType, setQuestionType] = useState("")
    const [answerChoices, setAnswerChoices] = useState([])
    const [correctAnswer, setCorrectAnswer] = useState([])
    const [library, setLibrary] = useState(0)
    const [tags, setTags] = useState([])
    const [imgURL, setImgURL] = useState("")
    
    // useEffect(() => {
    //     loadQuestionData()
    // }, [])

    // async function loadQuestionData(){
        ViewQuestionTestService.getAllQuestion().then(res => {
            let testQuestion = res.data[0]
            setId(testQuestion.id)
            setQuestionText(testQuestion.questionText)
            setQuestionType(testQuestion.questionType)
            setAnswerChoices(testQuestion.answerChoices)
            setCorrectAnswer(testQuestion.correctAnswer)
            setLibrary(testQuestion.library)
            setTags(testQuestion.tags)
            setImgURL(testQuestion.imgURL)
        })
    // }
    
    return (
        <div>
            id = {id}<br/>
            questionText = {questionText}<br/>
            questionType = {questionType}<br/>
            
            answerChoices = {answerChoices.map(choice => {
                                return <div>{choice}</div>;
                            })}

            correctAnswer = {correctAnswer}<br/>
            library = {library}<br/>
            tags = {tags}<br/>
            imgURL = {imgURL}<br/>
        </div>
    )
}