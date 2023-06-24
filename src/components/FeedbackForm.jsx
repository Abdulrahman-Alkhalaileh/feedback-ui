import {useState,useEffect,useContext} from 'react'
import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
    const {addFeedback,feedbackEdit,addEditedFeedbacks}=useContext(FeedbackContext)

    const [btnActive, setBtnActive]=useState('secondary')
    const [inputValue,setInputValue]=useState('');
    const [rating,setRating]=useState(10);

    useEffect(()=>{
        if(inputValue.length>=10){
            setBtnActive((prev)=>prev='primary')
        }else{
            setBtnActive((prev)=>prev='secondary')
        }
    },[inputValue])

    useEffect(()=>{
        if(feedbackEdit.item.text){
        setInputValue(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])

    const handleSubmin=(e)=>{
        e.preventDefault()
        if(feedbackEdit.edit){
            addEditedFeedbacks(rating , inputValue)
        }else{
            addFeedback(rating , inputValue)
        }
        setInputValue('')
        setRating(10)
    }

    return (
        <Card>
            <form onSubmit={handleSubmin}>
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
