import {useState,useEffect} from 'react'
import {v4 as uuidv4} from 'uuid';
import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

const FeedbackForm = ({setFeedbacks , feedbacks}) => {
    const [btnActive, setBtnActive]=useState('secondary')
    const [inputValue,setInputValue]=useState('');
    const [rating,setRating]=useState('10');

    useEffect(()=>{
        if(inputValue.length>=10){
            setBtnActive((prev)=>prev='primary')
        }else{
            setBtnActive((prev)=>prev='secondary')
        }
    },[inputValue])

    const addFeedback=(e)=>{
        e.preventDefault()
        const newFeedback={
            id: uuidv4(),
            rating: rating,
            text: inputValue
        }
        const newFeedbacks=[...feedbacks,newFeedback]
        setFeedbacks(()=>feedbacks=newFeedbacks)
        setInputValue('')
        setRating('10')
    }

    return (
        <Card>
            <form onSubmit={addFeedback}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect setRating={setRating} rating={rating}/>
                <div className="input-group">
                <input 
                    type="text"
                    placeholder='Write a review' 
                    id='textField'
                    value={inputValue}
                    onChange={(e)=>setInputValue((prev)=>prev=e.target.value)}
                />
                <Button version={btnActive} >
                    Send
                </Button>
                </div>
                {(inputValue.length<10 && inputValue.length>0) &&  (
                    <p>Your feedback should be at least 10 characters</p>
                )}
            </form>
        </Card>
    )
}

export default FeedbackForm
