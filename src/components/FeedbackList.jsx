import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({feedbacks,setFeedbacks}) => {

  const handleDelete=(id)=>{
    setFeedbacks(feedbacks.filter(feedback=>feedback.id !== id))
  }

  return (
    <>
    {feedbacks.length===0? <p><strong>There is no feedbacks to show</strong></p> :
    (feedbacks.map(feedback=>(
    <FeedbackItem feedback={feedback} key={feedback.id} handleDelete={()=>handleDelete(feedback.id)}/>
    )))
    }
    </>
  )
}

export default FeedbackList
