import { createContext , useState } from 'react'
import {v4 as uuidv4} from 'uuid';


const FeedbackContext = createContext()

export const FeedbackProvider=({children})=>{
    const [feedbacks,setFeedbacks]=useState([
        {
            id: 1,
            rating: 8,
            text: 'This is a feedback 1 from context'
        },
        {
            id: 2,
            rating: 9,
            text: 'This is a feedback 2 from context'
        },
        {
            id: 3,
            rating: 10,
            text: 'This is a feedback 3 from context'
        },   
])

    const [feedbackEdit,setFeedbackEdit]=useState({
        item: {},
        edit: false
    })

    // Delete feedback 
    const deleteFeedback=(id)=>{
        setFeedbacks(feedbacks.filter(feedback=>feedback.id !== id))
        }

    // Add feedback
    const addFeedback=(rating,inputValue)=>{
            setFeedbacks()
            const newFeedback={
                id: uuidv4(),
                rating: rating,
                text: inputValue
            }
            setFeedbacks([...feedbacks,newFeedback])
            //or
            // const newFeedbacks=[...feedbacks,newFeedback]
            // setFeedbacks((prev)=>prev=newFeedbacks)
    }

    // Edit a specific feedback
    const editFeedback=(feedback)=>{
        setFeedbackEdit({
            item: feedback,
            edit:true
        })
    }
    // Add edited feedback
    const addEditedFeedbacks=(rating , inputValue)=>{
        
        const newFeedback={
            rating: rating,
            text: inputValue
        }
        setFeedbacks(
            feedbacks.map((feedback)=>(
                (feedback.id===feedbackEdit.item.id) ?
                ({...feedback,...newFeedback}):
                ({...feedback})
                    ))
            )
    }

    return (
        <FeedbackContext.Provider value={{
            feedbacks:feedbacks,
            setFeedbacks:setFeedbacks,
            deleteFeedback:deleteFeedback,
            addFeedback:addFeedback,
            editFeedback:editFeedback,
            feedbackEdit:feedbackEdit,
            addEditedFeedbacks:addEditedFeedbacks,
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext