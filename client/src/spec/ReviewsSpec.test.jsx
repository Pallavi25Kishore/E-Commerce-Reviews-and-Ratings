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
      const {getByText, getByTestId} = render(<Sort changeSort={(value) => {}}/>);
      fireEvent.change(getByTestId("select"), {target: {value: "helpful"}});
      expect(getByTestId("select")).toHaveDisplayValue("Helpfulness");
      expect(getByTestId("select")).not.toHaveDisplayValue("Newness");
      expect(getByTestId("select")).not.toHaveDisplayValue("Relevance");
    });

  });

