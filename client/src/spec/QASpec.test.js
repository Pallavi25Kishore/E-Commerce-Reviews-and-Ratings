import "@testing-library/jest-dom";
import {render, fireEvent} from '@testing-library/react';
import React from 'react';
import QuestionList from "../components/QA/QuestionList";
import Answer from "../components/QA/Answer";
import Search from "../components/QA/Search";

jest.mock('./Answer',() => (props) => <div data-testid = "answer-component" 
id = {props.id}></div>)
describe('QuestionList component', () => {
    const mockQuestions = [
        {question_id: 1, question_body: "What is jest test"},
        {question_id: 2, question_body: "How react work"}
    ];
    test('renders without crashing', () => {
        render(<QuestionList filterQuestion = {mockQuestions} setsearchKey = {()=> {}} />);
    });
})