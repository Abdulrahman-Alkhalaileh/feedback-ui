import { createContext , useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider=({children})=>{
    const [feedbacks,setFeedbacks]=useState([{
        id: 1,
        rating: 8,
        text: 'This is a feedback from context'
    }])

    return (
        <FeedbackContext.Provider value={{
            feedbacks:feedbacks,
            setFeedbacks:setFeedbacks,
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext