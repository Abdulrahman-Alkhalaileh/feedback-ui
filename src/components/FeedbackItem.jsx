import { FaTimes } from 'react-icons/fa'
import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

const FeedbackItem = ({feedback , handleDelete }) => {
  return (
    <Card>
        <div className='rating ratingItem'>{feedback.rating}</div>
        <Button version='close' handleClick={()=>handleDelete()}>
          <FaTimes />
        </Button>
        {feedback.text}
      </Card>
  )
}

export default FeedbackItem
