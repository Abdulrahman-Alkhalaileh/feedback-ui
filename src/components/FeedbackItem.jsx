import { FaTimes,FaEdit } from 'react-icons/fa'
import React, { useContext } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({feedback }) => {

  const {deleteFeedback,editFeedback}=useContext(FeedbackContext);

  return (
    <Card>
        <div className='rating ratingItem'>{feedback.rating}</div>
        <Button version='close' handleClick={()=>deleteFeedback(feedback.id)}>
          <FaTimes />
        </Button>
        <Button version='edit' handleClick={()=>editFeedback(feedback)}>
          <FaEdit />
        </Button>
        {feedback.text}
      </Card>
  )
}

export default FeedbackItem
