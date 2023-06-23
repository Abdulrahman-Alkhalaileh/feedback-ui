import React from 'react'

const RatingSelect = ({ setRating , rating }) => {
  const numbering=['1','2','3','4','5','6','7','8','9','10']

  return (
    <div className="ratingList">
      {numbering.map(num=>(
      <div className="formRatingItem" key={num}>
        <input 
          type='radio' 
          id={num} 
          name='rating' 
          value={num} 
          onChange={()=>{
            setRating(prev=>prev=(Number)(num))
          }}
          checked={(Number)(rating) === (Number)(num)}
        />
        <label htmlFor={num} className='ratingLabel rating'>{num}</label>
      </div>
      ))}

    </div>
  )
}

export default RatingSelect
