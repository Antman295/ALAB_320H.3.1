import { useState } from 'react'
import { learners } from './utilites/data.mjs'
import './App.css'

function App() {
  const [learnerData] = useState(learners);


// Coded an App component to display a Leaner component
  function Learner({ learner }) {
    return (
      <div>
        {/* Renders the learners's name and bio */}
        <h2>{learner.name}</h2>
        <p>{learner.bio}</p>
        <ul>
          {learner.scores.map((score, index) => 
          <Score key={index} score = {score} />
        )}
        </ul>
      </div>
    );
  }

  // Coded the score component so that it renders the score data and score
  function Score({ score }) {
    return (
      <li>
        <p>{score.date} - {score.score}</p>
      </li>
    )
  }
  return (
    <>
      <h1>Learners: </h1>
      <ul>
        {learnerData.map((learner) => (
        // Initialized state as an object with a learners key
          <li key={learner.name}>
            <Learner learner = {learner}/>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
