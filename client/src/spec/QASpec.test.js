import { render, screen, fireEvent, cleanup, getByRole } from '@testing-library/react';
import React from 'react';
import QuestionList from "../components/QA/QuestionList.jsx";
import Answer from "../components/QA/Answer.jsx";
import Search from "../components/QA/Search.jsx";
import Question from "../components/QA/Question.jsx"
import Photo from "../components/QA/Photo.jsx"

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
        expect(screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS'));
        expect(screen.getByRole("button", { name: "Search" })).toBeDisabled;

    })
    test('should set value to state when input is changed', ()=> {

        render(<Search />)
        const input = screen.getByLabelText('search-input')
        fireEvent.change(input, {target: {value:"Hi, i am jest"}});
        expect(input.value).toBe("Hi, i am jest");
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