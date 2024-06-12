import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductView from '../components/Overview/ProductView.jsx';
import Share from '../components/Overview/Share.jsx';
import ProductInfo from '../components/Overview/ProductInfo.jsx';

const mockProduct = {
  category: 'Clothes',
  name: 'Leather Jacket',
  default_price: '100',
  sale_price: '80',
  description: 'This is an Leather Jacket you should buy!',
  slogan: 'Its Leather!',
  features: [
    { feature: 'Leather', value: 'Good' },
    { feature: 'Weight', value: '3kg' }
  ],
  rating: 4.5,
  reviewCount: 10,
};

test('renders product overview correctly', () => {
  render(<ProductInfo currentProduct={mockProduct} />);
  expect(screen.getByText('Clothes')).toBeTruthy();
  expect(screen.getByText('Leather Jacket')).toBeTruthy();
  expect(screen.getByText('Its Leather!')).toBeTruthy();
  expect(screen.getByText('$80')).toBeTruthy();
  expect(screen.getByText('$100')).toBeTruthy();
  expect(screen.getByText('This is an Leather Jacket you should buy!')).toBeTruthy();
  expect(screen.getByText('Leather:')).toBeTruthy();
  expect(screen.getByText('Good')).toBeTruthy();
  expect(screen.getByText('Weight:')).toBeTruthy();
  expect(screen.getByText('3kg')).toBeTruthy();
});

test('does not render price or features if not provided', () => {
  const mockProductWithoutFeatures = {
    category: 'Clothes',
    name: 'Leather Jacket',
    default_price: '100',
    description: 'This is an Leather Jacket you should buy!',
    slogan: 'Its Leather!',
  };

  render(<ProductInfo currentProduct={mockProductWithoutFeatures} />);
  expect(screen.getByText('Clothes')).toBeTruthy();
  expect(screen.getByText('Leather Jacket')).toBeTruthy();
  expect(screen.getByText('Its Leather!')).toBeTruthy();
  expect(screen.getByText('$100')).toBeTruthy();
  expect(screen.getByText('This is an Leather Jacket you should buy!')).toBeTruthy();
  expect(screen.queryByText('Leather:')).not.toBeTruthy();
  expect(screen.queryByText('Good')).not.toBeTruthy();
  expect(screen.queryByText('Weight:')).not.toBeTruthy();
  expect(screen.queryByText('3kg')).not.toBeTruthy();
});

describe('Share component', () => {
  let openSpy;

  beforeAll(() => {
    openSpy = jest.spyOn(window, 'open').mockImplementation(() => {});
  });

  afterAll(() => {
    openSpy.mockRestore();
  });

  test('clicking the Facebook share button opens Facebook', () => {
    const { getByText } = render(<Share />);
    const facebookButton = getByText('Share on Facebook');

    fireEvent.click(facebookButton);

    expect(openSpy).toHaveBeenCalledWith('https://facebook.com');
  });

  test('clicking the Twitter share button opens Twitter', () => {
    const { getByText } = render(<Share />);
    const twitterButton = getByText('Share on Twitter');

    fireEvent.click(twitterButton);

    expect(openSpy).toHaveBeenCalledWith('https://twitter.com');
  });

  test('clicking the Pinterest share button opens Pinterest', () => {
    const { getByText } = render(<Share />);
    const pinterestButton = getByText('Share on Pinterest');

    fireEvent.click(pinterestButton);

    expect(openSpy).toHaveBeenCalledWith('https://pinterest.com');
  });
});