import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AboutIconLink = () => {
  return (
    <div>
        <Link to="/about" className='aboutlink'>
            <FaQuestion size={35} className='aboutIcon'/>
        </Link>
    </div>
  )
}

export default AboutIconLink
