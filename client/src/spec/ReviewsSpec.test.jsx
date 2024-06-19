import "@testing-library/jest-dom";
import {render, fireEvent} from '@testing-library/react';
import React from 'react';
import StarRating from '../components/Reviews/StarRating.jsx';
import CreatedAt from '../components/Reviews/CreatedAt.jsx';
import ReviewSummary from '../components/Reviews/ReviewSummary.jsx';
import ReviewBody from '../components/Reviews/ReviewBody.jsx';
import Thumbnail from '../components/Reviews/Thumbnail.jsx';
import Modal from '../components/Reviews/Modal.jsx';
import Recommend from '../components/Reviews/Recommend.jsx';
import Response from '../components/Reviews/Response.jsx';
import Helpfulness from '../components/Reviews/Helpfulness.jsx';
import Sort from '../components/Reviews/Sort.jsx';
import RatingBreakdown from '../components/Reviews/RatingBreakdown.jsx';
import RatingBars from '../components/Reviews/RatingBars.jsx';
import Factor from '../components/Reviews/Factor.jsx';
import Form from '../components/Reviews/Form.jsx';
import AddReview from '../components/Reviews/AddReview.jsx';

describe(StarRating, () => { // to test StarComponent Suite

  it('check star display for 0 to <0.25 fillRating based on rating of 1.2', () => {
    const {queryAllByTestId} = render(<StarRating rating={1.2}/>);
    const star1 = queryAllByTestId("full-filled-star");
    expect(star1.length).toBe(1);
    const star2 = queryAllByTestId("three-quarter-fill-star");
    expect(star2.length).toBe(0);
    const star3 = queryAllByTestId("nofill-outline-star");
    expect(star3.length).toBe(4);
    const star4 = queryAllByTestId("one-quarter-fill-star");
    expect(star4.length).toBe(0);
    const star5 = queryAllByTestId("half-fill-star");
    expect(star5.length).toBe(0);
  });

  it('check star display for 0.25 to <0.5 fillRating based on rating of 4.3', () => {
    const {queryAllByTestId} = render(<StarRating rating={4.3}/>);
    const star1 = queryAllByTestId("full-filled-star");
    expect(star1.length).toBe(4);
    const star2 = queryAllByTestId("three-quarter-fill-star");
    expect(star2.length).toBe(0);
    const star3 = queryAllByTestId("nofill-outline-star");
    expect(star3.length).toBe(0);
    const star4 = queryAllByTestId("one-quarter-fill-star");
    expect(star4.length).toBe(1);
    const star5 = queryAllByTestId("half-fill-star");
    expect(star5.length).toBe(0);
  });

  it('check star display for 0.5 to <0.75 fillRating based on rating of 1.5', () => {
    const {queryAllByTestId} = render(<StarRating rating={1.5}/>);
    const star1 = queryAllByTestId("full-filled-star");
    expect(star1.length).toBe(1);
    const star2 = queryAllByTestId("three-quarter-fill-star");
    expect(star2.length).toBe(0);
    const star3 = queryAllByTestId("nofill-outline-star");
    expect(star3.length).toBe(3);
    const star4 = queryAllByTestId("one-quarter-fill-star");
    expect(star4.length).toBe(0);
    const star5 = queryAllByTestId("half-fill-star");
    expect(star5.length).toBe(1);
  });

  it('check star display for 0.75 to <1 fillRating based on rating of 3.8', () => {
    const {queryAllByTestId} = render(<StarRating rating={3.8}/>);
    const star1 = queryAllByTestId("full-filled-star");
    expect(star1.length).toBe(3);
    const star2 = queryAllByTestId("three-quarter-fill-star");
    expect(star2.length).toBe(1);
    const star3 = queryAllByTestId("nofill-outline-star");
    expect(star3.length).toBe(1);
    const star4 = queryAllByTestId("one-quarter-fill-star");
    expect(star4.length).toBe(0);
    const star5 = queryAllByTestId("half-fill-star");
    expect(star5.length).toBe(0);
  });
});

  describe(CreatedAt, () => { // to test CreatedAt component

    it('should display created at date for a review in Month DD, YYYY format', () => {
        const {getByText} = render(<CreatedAt name={"kitty"} isoDate={"2023-11-27T00:00:00.000Z"}/>); // date in UTC
        expect (getByText("November 26, 2023")).toBeVisible(); //date being displayed in locale time
    });
  });

  describe(ReviewSummary, () => { // to test Review Summary

    it('should display review summary in bold for each review', () => {
      const {getByText} = render(<ReviewSummary summary={"Amazing product"}/>);
      var element = getByText("Amazing product");
      expect(element).toBeVisible();
      expect(window.getComputedStyle(element).fontWeight).toBe('bold');
    });
  });

  describe(ReviewBody, () => { //to test review body text

    it('should display 250 characters in review body without show more link in case body has 250 or less characters', () => {
      const {queryByText} = render(<ReviewBody body={"testing review body"} photos={[{id: 2459190, url: 'https://i.insider.com/602ee9ced3ad27001837f2ac?width=1000%26format=jpeg%26auto=webp'}]}/>);
      expect(queryByText("testing review body")).toBeVisible();
      expect(queryByText("...Show More")).not.toBeInTheDocument();
    });

    it('should display 250 characters in review body with show more link in case body has  more than 250 characters ', () => {
      const text = "Queries are the methods that Testing Library gives you to find elements on the page. There are several types of queries; the difference between them is whether the query will throw an error if no element is found or if it will return a Promise and retry. Depending on what page content you are selecting, different queries may be more or less appropriate. See the priority guide for recommendations on how to make use of semantic queries to test your page in the most accessible way."
      const {queryByText} = render(<ReviewBody body={text} photos={[{id: 2459190, url: 'https://i.insider.com/602ee9ced3ad27001837f2ac?width=1000%26format=jpeg%26auto=webp'}]}/>);
      expect(queryByText("Queries are the methods that Testing Library gives you to find elements on the page. There are several types of queries; the difference between them is whether the query will throw an error if no element is found or if it will return a Promise and re")).toBeVisible();
      expect(queryByText("...Show More")).toBeVisible();
    });

    it('should display all characters in review body when show more link is clicked', () => {
      const text = "Queries are the methods that Testing Library gives you to find elements on the page. There are several types of queries; the difference between them is whether the query will throw an error if no element is found or if it will return a Promise and retry. Depending on what page content you are selecting, different queries may be more or less appropriate. See the priority guide for recommendations on how to make use of semantic queries to test your page in the most accessible way."
      const {queryByText} = render(<ReviewBody body={text} photos={[{id: 2459190, url: 'https://i.insider.com/602ee9ced3ad27001837f2ac?width=1000%26format=jpeg%26auto=webp'}]}/>);

      expect(queryByText("Queries are the methods that Testing Library gives you to find elements on the page. There are several types of queries; the difference between them is whether the query will throw an error if no element is found or if it will return a Promise and retry. Depending on what page content you are selecting, different queries may be more or less appropriate. See the priority guide for recommendations on how to make use of semantic queries to test your page in the most accessible way.")).not.toBeInTheDocument();

      const ShowMore = queryByText("...Show More");

      fireEvent.click(ShowMore);
      expect(queryByText("Queries are the methods that Testing Library gives you to find elements on the page. There are several types of queries; the difference between them is whether the query will throw an error if no element is found or if it will return a Promise and retry. Depending on what page content you are selecting, different queries may be more or less appropriate. See the priority guide for recommendations on how to make use of semantic queries to test your page in the most accessible way.")).toBeVisible();

    });

  });


  describe(Thumbnail, () => { // to test review body photos

    it('should display thumbnails if review body has photos', () => {
      const {getByTestId} = render(<ReviewBody body={"testing"} photos={[{id: 2459190, url: 'https://i.insider.com/602ee9ced3ad27001837f2ac?width=1000%26format=jpeg%26auto=webp'}]}/>);
      expect(getByTestId("photo-thumbnail")).toBeVisible();

    });

    it('should not display thumbnails if review body does not have photos', () => {
      const {queryByTestId} = render(<ReviewBody body={"testing"} photos={[]}/>);
      expect(queryByTestId("photo-thumbnail")).not.toBeInTheDocument();

    });

    it('should display modal window when thumbnail is clicked', () => {
      const {queryByTestId} = render(<ReviewBody body={"testing"} photos={[{id: 2459190, url: 'https://i.insider.com/602ee9ced3ad27001837f2ac?width=1000%26format=jpeg%26auto=webp'}]}/>);

      expect(queryByTestId("modal-container")).not.toBeInTheDocument();

      const Thumbnail = queryByTestId("photo-thumbnail");

      fireEvent.click(Thumbnail);

      expect(queryByTestId("modal-container")).toBeVisible();
    });

  });

  describe(Modal, () => { // to test review body photo displayed in modular window

    it('should close modal window when close/cross button is clicked', () => {
      const {queryByTestId, getByRole} = render(<ReviewBody body={"testing"} photos={[{id: 2459190, url: 'https://i.insider.com/602ee9ced3ad27001837f2ac?width=1000%26format=jpeg%26auto=webp'}]}/>);

      const Thumbnail = queryByTestId("photo-thumbnail");

      fireEvent.click(Thumbnail);

      expect(queryByTestId("modal-container")).toBeVisible();

      const crossButton = getByRole("button", {name: "x"});

      fireEvent.click(crossButton);

      expect(queryByTestId("modal-container")).not.toBeInTheDocument();
    });

  });

  describe(Recommend, () => { // to test Recommend component

    it('should display tick mark and the text - "i recommend this product" if the product is recommended', () => {
      const {getByText} = render(<Recommend recommend={true}/>);
      var text = getByText("✓ I recommend this product");
      expect(text).toBeVisible();
    });

    it('should not display tick mark and the text - "i recommend this product" if the product is not recommended', () => {
      const {queryByText} = render(<Recommend recommend={false}/>);
      var text = queryByText("✓ I recommend this product");
      expect(text).not.toBeInTheDocument();
    });
  });

  describe(CreatedAt, () => { // to test username display

    it('should display username of reviewer', () => {
      const {getByText} = render(<CreatedAt name={"kitty"} isoDate={"2023-11-27T00:00:00.000Z"}/>)
      var text = getByText("kitty", {exact:false});
      expect(text).toBeVisible();
    });
  });

  describe(CreatedAt, () => { // to test response display

    it('should display response to a review by the internal sales team', () => {
      const {getByText} = render(<Response response={"Hello, thank you for your review"}/>)
      var head = getByText("Response:", {exact:false});
      var text = getByText("Hello, thank you for your review", {exact:false});
      expect(head).toBeVisible();
      expect(text).toBeVisible();
    });

    it('should not display response if no response has been provided by sales team', () => {
      const {queryByText} = render(<Response response={null}/>)
      expect(queryByText("Response", {exact: false})).not.toBeInTheDocument();
    });
  });

  describe(Helpfulness, () => { // to test helpfulness component

    it('should increment helpfulness count when user clicks on yes', () => {
      const {getByTestId} = render(<Helpfulness responseid={644082}/>);
      var initialCount = Number(getByTestId("count").textContent);
      const Yes = getByTestId("yes");
      fireEvent.click(Yes);
      var updatedCount = Number(getByTestId("count").textContent);
      expect(updatedCount).toBe(initialCount +1);
    });

  });

  describe(Sort, () => { // to test sort options component

    it('should display sort options component', () => {
      const {getByTestId} = render(<Sort/>);
      expect(getByTestId("sort-options-selector")).toBeVisible();
    });

    it('should display the option that has been selected in sort options selector', () => {
      const {getByText, getByTestId} = render(<Sort changeSort={() => {}}/>);
      fireEvent.change(getByTestId("select"), {target: {value: "helpful"}});
      expect(getByTestId("select")).toHaveDisplayValue("Helpfulness");
      expect(getByTestId("select")).not.toHaveDisplayValue("Newness");
      expect(getByTestId("select")).not.toHaveDisplayValue("Relevance");
    });

  });

  describe(RatingBreakdown, () => { // to test rating breakdown component

    const mockMetaData = {
      product_id: 1,
      ratings: {
       1: "1",
       2: "2",
       3: "4",
       4: "3"
      },
      recommended: {
        true: 3,
        false: 7
      },
      characteristics: {}
    };

    it('should display average rating of the product rounded to nearest single decimal', () => {
      const {getByText} = render(<RatingBreakdown metaData={mockMetaData} handleProgressBarClick={()=> {}} starFilter={{2: true, 3: true}} removeAllStarFilters={()=> {}}/>);
      expect(getByText("2.9")).toBeVisible();
    });

   it('should display total number of reviews', () => {
    const {getByText} = render(<RatingBreakdown metaData={mockMetaData} handleProgressBarClick={()=> {}} starFilter={{2: true, 3: true}} removeAllStarFilters={()=> {}}/>);
      expect(getByText("This product has 10 reviews")).toBeVisible();
   });

   it('should display percentage of reviews that recommended the product', () => {
    const {getByText} = render(<RatingBreakdown metaData={mockMetaData} handleProgressBarClick={()=> {}} starFilter={{2: true, 3: true}} removeAllStarFilters={()=> {}}/>);
    expect(getByText("30.0% of reviews recommended this product")).toBeVisible();
   });

  });

  describe(RatingBars, () => { // to test ratings bar component

    const mockRating= {
        1: "1",
        2: "2",
        3: "4",
        4: "3"
    };

    it ('should color the star rating bar green, based on percentage of reviews that provided the relevant star rating', () => {
      const {getByTestId} = render(<RatingBars ratings={mockRating} totalNumberOfRatings={10} handleProgressBarClick={()=> {}}factors={{}} />);

      expect(getComputedStyle(getByTestId("fivestar")).backgroundColor).toBe("green");
      expect(getComputedStyle(getByTestId("fivestar")).width).toBe("0%");
      expect(getComputedStyle(getByTestId("fourstar")).backgroundColor).toBe("green");
      expect(getComputedStyle(getByTestId("fourstar")).width).toBe("30%");
      expect(getComputedStyle(getByTestId("threestar")).backgroundColor).toBe("green");
      expect(getComputedStyle(getByTestId("threestar")).width).toBe("40%");
      expect(getComputedStyle(getByTestId("twostar")).backgroundColor).toBe("green");
      expect(getComputedStyle(getByTestId("twostar")).width).toBe("20%");
      expect(getComputedStyle(getByTestId("onestar")).backgroundColor).toBe("green");
      expect(getComputedStyle(getByTestId("onestar")).width).toBe("10%");
    });
  });

  describe(Factor, () => {

    it('should display the factor provided for the product along with corresponding feedback values', () => {
      const {getByText} = render(<Factor factor={"Size"} value={"3.0"}/>);
      expect(getByText("Size")).toBeVisible();
      expect(getByText("Too small")).toBeVisible();
      expect(getByText("Too big")).toBeVisible();
      expect(getByText("Perfect")).toBeVisible();
    });

    it('should display the factor provided for the product along with corresponding feedback values', () => {
      const {getByText} = render(<Factor factor={"Quality"} value={"2.0"}/>);
      expect(getByText("Quality")).toBeVisible();
      expect(getByText("Poor")).toBeVisible();
      expect(getByText("Perfect")).toBeVisible();
    });

    it('should display the average value indicated by inverted triangle', () => {
      const {getByTestId} = render(<Factor factor={"Quality"} value={"1.0"}/>);
      expect(getByTestId("pointer")).toBeVisible();
    });

  });

  describe(Form, () => {

    const mockMetaData = {
      product_id: 1,
      ratings: {
       1: "1",
       2: "2",
       3: "4",
       4: "3"
      },
      recommended: {
        true: 3,
        false: 7
      },
      characteristics: {}
    };

    it('should display form when add a review button is clicked', () => {
      const {getByText, getByTestId} = render(<AddReview metaData={mockMetaData}/>);
      const addreviewbutton = getByTestId("add-review-btn");
      fireEvent.click(addreviewbutton);
      expect(getByTestId("add-review-form")).toBeVisible();
    });

    it('should display form-fields when form modal window opens', () => {
      const {getByText} = render(<Form handleCloseForm={() => {}} metaData={mockMetaData}/>);
      expect(getByText("WRITE YOUR REVIEW")).toBeVisible();
      expect(getByText("About the Camo Onesie")).toBeVisible();
      expect(getByText("Overall rating")).toBeVisible();
      expect(getByText("Do you recommend this product?")).toBeVisible();
      expect(getByText("Characteristics")).toBeVisible();
      expect(getByText("Review Summary")).toBeVisible();
      expect(getByText("Review Body")).toBeVisible();
      expect(getByText("Upload your photos")).toBeVisible();
      expect(getByText("What is your nickname?")).toBeVisible();
      expect(getByText("Your email")).toBeVisible();
    });

    it('should display stars in form to select rating', () => {
      const {getByTestId} = render(<Form handleCloseForm={() => {}} metaData={mockMetaData}/>);
      expect(getByTestId("star1")).toBeVisible();
      expect(getByTestId("star2")).toBeVisible();
      expect(getByTestId("star3")).toBeVisible();
      expect(getByTestId("star4")).toBeVisible();
      expect(getByTestId("star5")).toBeVisible();
    });

    it('should display yes and no radio buttons for recommendations', () => {
      const {getByTestId} = render(<Form handleCloseForm={() => {}} metaData={mockMetaData}/>);
      expect(getByTestId("radio-yes")).toBeVisible();
      expect(getByTestId("radio-no")).toBeVisible();
    });

    it('should display five radio buttons for characteristics', () => {
      const {getByTestId} = render(<Form handleCloseForm={() => {}} metaData={mockMetaData}/>);
      expect(getByTestId("radio1")).toBeVisible();
      expect(getByTestId("radio2")).toBeVisible();
      expect(getByTestId("radio3")).toBeVisible();
      expect(getByTestId("radio4")).toBeVisible();
      expect(getByTestId("radio5")).toBeVisible();
    });

    it('should update form review body when review body input is typed by user' , () => {
      const {getByPlaceholderText} = render(<Form handleCloseForm={() => {}} metaData={mockMetaData}/>);
      const input = getByPlaceholderText("Why did you like the product or not?");
      fireEvent.change(input, {target: {value: 'testing review body content'}});
      expect(input.value).toBe('testing review body content');
    });

    it('should update form review summary when review summary input is typed by user' , () => {
      const {getByPlaceholderText} = render(<Form handleCloseForm={() => {}} metaData={mockMetaData}/>);
      const input = getByPlaceholderText("Example: Best purchase ever!");
      fireEvent.change(input, {target: {value: 'testing review summary content'}});
      expect(input.value).toBe('testing review summary content');
    });

    it('should update nickname when nickname input is typed by user' , () => {
      const {getByPlaceholderText} = render(<Form handleCloseForm={() => {}} metaData={mockMetaData}/>);
      const input = getByPlaceholderText("Example: jackson11!");
      fireEvent.change(input, {target: {value: 'testing nickname content'}});
      expect(input.value).toBe('testing nickname content');
    });

    it('should update email when email input is typed by user' , () => {
      const {getByPlaceholderText} = render(<Form handleCloseForm={() => {}} metaData={mockMetaData}/>);
      const input = getByPlaceholderText("Example: jackson11@email.com");
      fireEvent.change(input, {target: {value: 'testing email content'}});
      expect(input.value).toBe('testing email content');
    });

  });




