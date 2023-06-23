import {useState} from 'react'
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import FeedbackData from './data/feedbackData'
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header'
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';


function App() {

  const [feedbacks,setFeedbacks]= useState(FeedbackData)

  

  return (
    <Router>
      <Header />
    <div className="container">
      <Routes>
        <Route path='/' element={
          <>
            <FeedbackForm setFeedbacks={setFeedbacks} feedbacks={feedbacks}/>
            <FeedbackStats feedbacks={feedbacks}/>
            <FeedbackList feedbacks={feedbacks} setFeedbacks={setFeedbacks}/>
            <AboutIconLink />
          </>
        }/>
        <Route path='/about' element={<AboutPage />}/>
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
