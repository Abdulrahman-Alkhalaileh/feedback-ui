import React,{useContext} from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = () => {

  const {feedbacks,setFeedbacks}=useContext(FeedbackContext)

  const handleDelete=(id)=>{
    setFeedbacks(feedbacks.filter(feedback=>feedback.id !== id))
  }

  return (
    <>
    {feedbacks.length===0? <p><strong>There is no feedbacks to show</strong></p> :
    (feedbacks.slice(0).reverse().map(feedback=>(
    <FeedbackItem feedback={feedback} key={feedback.id} handleDelete={()=>handleDelete(feedback.id)}/>
    )))
    }
    </>
  )
}

export default FeedbackList
