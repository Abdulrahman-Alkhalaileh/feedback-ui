import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <Card>
        <h2>About this project</h2>
        <h4>This is a React app to leave a feedback for a service or a product</h4>
        <p><strong>Created by: </strong>Abdulrahman Alkhalaileh</p>
        <Link to='/'>Back to Home</Link>
    </Card>
  )
}

export default AboutPage
