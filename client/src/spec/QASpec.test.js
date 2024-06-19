import { render, screen, fireEvent, cleanup, getByRole } from '@testing-library/react';
import React from 'react';
import QuestionList from "../components/QA/QuestionList.jsx";
import Answer from "../components/QA/Answer.jsx";
import Search from "../components/QA/Search.jsx";
import Question from "../components/QA/Question.jsx"
import Photo from "../components/QA/Photo.jsx"
import AnswerBody from '../components/QA/AnswerBody.jsx';
import AnswerList from '../components/QA/AnswerList.jsx';
import AddQuestion from '../components/QA/AddQuestionModal.jsx';
import IsoConvert from '../components/QA/IsoConvert.jsx'
import Addanswer from '../components/QA/Addanswer.jsx';
import AddPhoto from '../components/QA/AddPhoto.jsx';
import AnswerForm from '../components/QA/AnswerForm.jsx';
import AddQuestionForm from '../components/QA/AddQuestionForm.jsx';




describe('Question Component', () => {
    const mockQuestion = {
        question: "This is jest",
        helpfulness: 5,
        id: 321
    }

    test('Eveything should be render', () => {
        render(<Question question={mockQuestion.question} />)
        expect(screen.getByText('Q: This is jest')).toBeTruthy();
        expect(screen.getByText('Helpful?')).toBeVisible;
        expect(screen.getByText('Yes')).toBeVisible;
    })
    test('increment helpfulness correctly when not disable', ()=> {
        render(<Question {...mockQuestion} />)
        const yesButton = screen.getByTestId('yes');
        fireEvent.click(yesButton);
        const count = screen.getByTestId('count').textContent;
        expect(count).toBe('(6)')
    })
    test('increment helpfulness correctly when not disable', ()=> {
        render(<Question {...mockQuestion} />)
        const yesButton = screen.getByTestId('yes');
        fireEvent.click(yesButton);
        fireEvent.click(yesButton);
        const count = screen.getByTestId('count').textContent;
        expect(count).toBe('(5)')
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
        { url: "11231dsa.jpg" },
        { url: "12315613dsa.jpg" }
    ]
    test('Render Photo component correct', () => {
        const { queryAllByTestId } = render(<Photo photo={mockPhotos} />)
        expect(queryAllByTestId("photo")).toBeInTheDocument;
    });
    test('Render Photo component correct', () => {
        const { queryByTestId } = render(<Photo photo={[]} />)
        expect(queryByTestId("photo")).not.toBeInTheDocument;
    })
})

describe('Answer Component', () => {
    const { queryAllByTestId } = render(<Answer />)
    expect(queryAllByTestId("test-list")).toBeInTheDocument
    expect(queryAllByTestId("test-single-answer")).toBeInTheDocument
    expect(queryAllByTestId("test-photo-list")).toBeInTheDocument
    const mockQuestion = {question_id: 329179}
    test('redners answer and toggles more answer correctly', async ()=> {
        render(<Answer id = {mockQuestion.question_id}/>);
        const button = await screen.findByText('LOAD MORE ANSWERS')
        expect(button).toBeInTheDocument;
    })
    
})

describe('QuestionList Component', () => {
    const { queryAllByTestId } = render(<QuestionList />)
    expect(queryAllByTestId("test-question")).toBeInTheDocument
    expect(queryAllByTestId("test-answer")).toBeInTheDocument
    test('redners questions and toggles more question correctly', async ()=> {
        render(<QuestionList />);
        const button = await screen.findByText('MORE ANSWEREDED QUESTION')
        expect(button).toBeInTheDocument;
    })
})

describe('Answer List', () => {
    const mockAnswerList = [
        { name: "Seller" },
        { name: "abc" }
    ]
    const props = {
        name: 'John Doe',
        isoDate: '2021-01-01',
        answer_id: '123',
        helpfulness: 5
    };
    test('should redner in Bold format', () => {
        render(<AnswerList name={mockAnswerList[0].name} />)
        expect(screen.getByRole('strong')).toBeInTheDocument;
    })
    test('should redner in Regular format', () => {
        render(<AnswerList name={mockAnswerList[1].name} />)
        expect(screen.getByText('by abc')).toBeInTheDocument;
    })
    test('increments helpfulness correctly when not disabled', () => {
        render(<AnswerList {...props} />);
        const yesButton = screen.getByTestId('yes');
        fireEvent.click(yesButton);
        const count = screen.getByTestId('count').textContent;
        expect(count).toBe('(6)'); // Should increment since initially not disabled
    });
    test('toggle helfulness up and down on subsequent clicks', () => {
        render(<AnswerList {...props} />);
        const yesButton = screen.getByTestId('yes');
        fireEvent.click(yesButton);
        fireEvent.click(yesButton);
        const count = screen.getByTestId('count').textContent;
        expect(count).toBe('(5)');
    })
    test("report show up", () => {
        render(<AnswerList {...props} />)
        const reportLink = screen.getByText('Report');
        fireEvent.click(reportLink);
        expect(screen.getByText('Reported')).toBeInTheDocument;
        fireEvent.click(reportLink);
        expect(screen.getByText('Report')).toBeInTheDocument;  // Check if the text changes back to 'Report'
    })
    

})
describe('Answer Body', () => {
    const mockAnswerBody = { body: "What is your question" }

    test('should render Correctly', () => {
        render(<AnswerBody body={mockAnswerBody.body} />)
        expect(screen.getByText('A: What is your question')).toBeTruthy();
    })
})

describe(IsoConvert, () => { // to test username display

    it('should display in rugular format of date', () => {
      const {getByText} = render(<IsoConvert isoDate={"2023-11-27T00:00:00.000Z"}/>)
      var text = getByText("November 26, 2023", {exact:false});
      expect(text).toBeVisible;
    });
  });

describe(Addanswer, () => {
    it('Should go to Answer Modal',() => {
        render(<Addanswer />)
        const AddanswerLink = screen.getByText('Add Answer');
        fireEvent.click(AddanswerLink);
        expect(screen.getAllByRole('button')).toBeInTheDocument;
        expect(screen.getAllByText("Submit your Answer")).toBeInTheDocument;
        expect(screen.getAllByText("Product Name : Question Body")).toBeInTheDocument;
        expect(screen.getAllByText("Your Answer")).toBeInTheDocument;
        expect(screen.getAllByText("Your Nickname")).toBeInTheDocument;
        expect(screen.getAllByText("Your email")).toBeInTheDocument;
        expect(screen.getAllByText("For authentication reasons, you will not be emailed")).toBeInTheDocument;
        expect(screen.getAllByText("For privacy reasons, do not use your full name or email address")).toBeInTheDocument;

    })
})
describe(AddQuestion, ()=> {
    it('should render all question Modal and Form', ()=> {
        render(<AddQuestion />)
        const AddQuestionLink = screen.getByText('ADD A QUESIONTION +');
        fireEvent.click(AddQuestionLink);
        expect(screen.getAllByRole('button')).toBeInTheDocument;
        expect(screen.getAllByText("Ask Your Question")).toBeInTheDocument;
        expect(screen.getAllByText("Product Name(passing in variable from Overview)")).toBeInTheDocument;
        expect(screen.getAllByText("Your Question")).toBeInTheDocument;
        expect(screen.getAllByText("Your Nickname")).toBeInTheDocument;
        expect(screen.getAllByText("Your email")).toBeInTheDocument;
        expect(screen.getAllByText("For authentication reasons, you will not be emailed")).toBeInTheDocument;

    })
})
describe(AnswerForm, ()=> {
    it('shoud render AddPhoto component', ()=> {
        render(<AnswerForm />)
        const AddPhoto = screen.getByText("Add Photo");
        fireEvent.click(AddPhoto);
        expect(screen.getAllByText("Upload")).toBeInTheDocument;
        expect(screen.getByTestId("photo_test")).toBeInTheDocument;
        const input1 = screen.getByPlaceholderText('Example: jackson11!');
        fireEvent.change(input1, {target:{value:'I am jest'}});
        expect(input1.value).toBe('I am jest');
        const input2 = screen.getByPlaceholderText('nickname');
        fireEvent.change(input2, {target:{value:'I am jest'}});
        expect(input2.value).toBe('I am jest');
        const input3 = screen.getByPlaceholderText('Why did you like the product or not?');
        fireEvent.change(input3, {target:{value:'331@gmail.com'}});
        expect(input3.value).toBe('331@gmail.com');
    })
})

describe(AddQuestionForm, ()=> {
    it('user should type in input field', ()=> {
        render(<AddQuestionForm />)

        const input1 = screen.getByPlaceholderText('Example: jackson11!');
        fireEvent.change(input1, {target:{value:'I am jest'}});
        expect(input1.value).toBe('I am jest');
        const input2 = screen.getByPlaceholderText('nickname');
        fireEvent.change(input2, {target:{value:'I am jest'}});
        expect(input2.value).toBe('I am jest');
        const input3 = screen.getByPlaceholderText('Why did you like the product or not?');
        fireEvent.change(input3, {target:{value:'331@gmail.com'}});
        expect(input3.value).toBe('331@gmail.com');
    })
})


afterEach(() => {
    cleanup(); // Resets the DOM after each test suite
})