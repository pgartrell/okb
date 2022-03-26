import React from 'react'
import { Container } from 'react-bootstrap'
import {Link} from "react-router-dom"
import { VAQuestionsh1, VAQuestionsButton } from '../styles/VAQuestions.styles'

const VAQuestions = () => {
  return (
    <Container>
        <div>
            <VAQuestionsh1> What are you applying as?</VAQuestionsh1>
            <Link to="#"><VAQuestionsButton>Student</VAQuestionsButton></Link>
            <Link to="#"><VAQuestionsButton>Health Professional</VAQuestionsButton></Link>

        </div>

    </Container>
  )
}

export default VAQuestions