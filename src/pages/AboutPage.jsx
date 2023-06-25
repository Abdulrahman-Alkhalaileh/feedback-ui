import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <Card>
        <h2>About this project</h2>
        <h4>This is a React app to leave a feedback for a service or a product</h4>
        <p><strong>Created by: </strong>Abdulrahman Alkhalaileh</p>
        <p className='about-paragraph'>To see the source code of this project, go to my <b>
                <a rel="noreferrer" target="_blank"
                href='https://github.com/Abdulrahman-Alkhalaileh/feedback-ui'
                >GitHub repository</a></b></p>
        <p className='back-to-home'><Link to='/' ><b>Back to Home</b></Link></p>
    </Card>
  )
}

export default AboutPage
