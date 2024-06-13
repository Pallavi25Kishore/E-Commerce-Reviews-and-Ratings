import { render, screen, fireEvent, cleanup, getByRole } from '@testing-library/react';
import React from 'react';
import QuestionList from "../components/QA/QuestionList.jsx";
import Answer from "../components/QA/Answer.jsx";
import Search from "../components/QA/Search.jsx";
import Question from "../components/QA/Question.jsx"
import Photo from "../components/QA/Photo.jsx"
import AnswerBody from '../components/QA/AnswerBody.jsx';
import AnswerList from '../components/QA/AnswerList.jsx';


afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})

describe('Question Component', () => {
    const mockQuestion = {
        question: "This is jest"
    }

    test('should redner in h4 format', () => {
        render(<Question question={mockQuestion.question} />)
        expect(screen.getByText('Q: This is jest')).toBeTruthy();
    })
})

describe('Search Component', () => {
    test('render search component correct', () => {
        render(<Search />)
        expect(screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS')).toBeTruthy;
    })
})

describe('Photo Component', () => {
    const mockPhotos = [
        {url: "11231dsa.jpg"},
        { url:"12315613dsa.jpg"}
    ]
    test('Render Photo component correct', ()=> {
        const {queryAllByTestId} = render(<Photo photo = {mockPhotos}/>)
        expect(queryAllByTestId("photo")).toBeInTheDocument;
    });
    test('Render Photo component correct', ()=> {
        const {queryByTestId} = render(<Photo photo = {[]}/>)
        expect(queryByTestId("photo")).not.toBeInTheDocument;
    })
})

describe('Answer Component',()=> {
    const {queryAllByTestId} = render(<Answer/>)
    expect(queryAllByTestId("test-list")).toBeInTheDocument
    expect(queryAllByTestId("test-single-answer")).toBeInTheDocument
    expect(queryAllByTestId("test-photo-list")).toBeInTheDocument
})

describe('Question Component', ()=> {
    const {queryAllByTestId} = render(<QuestionList/>)
    expect(queryAllByTestId("test-question")).toBeInTheDocument
    expect(queryAllByTestId("test-answer")).toBeInTheDocument
})

describe('Answer List', () => {
    const mockAnswerList = [
        {name: "Seller"},
        { name:"abc"}
    ]
    test('should redner in Bold format', () => {
        render(<AnswerList name={mockAnswerList[0].name} />)
        expect(screen.getByRole('strong')).toBeTruthy();
    })
    test('should redner in Regular format', () => {
        render(<AnswerList name={mockAnswerList[1].name} />)
        expect(screen.getByText('abc')).toBeTruthy();
    })
})
describe('Answer Body', () => {
    const mockAnswerBody = {body: "What is your question"}
    
    test('should render Correctly', () => {
        render(<AnswerBody body={mockAnswerBody.body} />)
        expect(screen.getByText('A: What is your question')).toBeTruthy();
    })
    
})