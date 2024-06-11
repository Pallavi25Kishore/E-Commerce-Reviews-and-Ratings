import {render, screen,fireEvent, cleanup} from '@testing-library/react';
import React from 'react';
import QuestionList from "../components/QA/QuestionList.jsx";
import Answer from "../components/QA/Answer.jsx";
import Search from "../components/QA/Search.jsx";




// test('render question list correct', ()=> {
//     // const mockQuestionList = [
//     //     {question_id: 1, question_body: "Hi, this is jest"},
//     //     {question_id: 2, question_boyd: "this is js test file"}
//     // ]
//     render(<QuestionList/>)
//     expect(screen.getByText('question_body')).toBeTruthy()

// })


test('render search component correct', ()=> {
    render(<Search/>)
    expect(screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS'));
    expect(screen.getByRole("button", {name: "Search"})).toBeDisabled;
})
// test('Check the text in the input file', () => {
//     const {input} = render(<Search />)
//     fireEvent.onChange(input, {target: {value: 'Hi'}});
//     expect(input.value).toBe('Hi');
// })
