import "@testing-library/jest-dom";
import {render} from '@testing-library/react';
import React from 'react';
import StarRating from '../components/Reviews/StarRating';

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


