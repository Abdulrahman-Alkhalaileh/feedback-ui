import React from 'react'

const FeedbackStats = ({ feedbacks }) => {

  const ratingAvg=()=>{
    let Avg=0;
    feedbacks.forEach(feedback=>{
      Avg+=(Number)(feedback.rating)
    })
    const roundedAvg = (Avg/feedbacks.length)
    if (roundedAvg%1!==0){
      return roundedAvg.toFixed(1);
    }
    return( roundedAvg)
  }

  
  return (
    <div className='stats'>
      <span className="statItem">{feedbacks.length} Reviews</span>
      <span className="statItem">Rating Average: {ratingAvg()}</span>
    </div>
  )
}

export default FeedbackStats
