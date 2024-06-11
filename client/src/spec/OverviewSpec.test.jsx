import React from 'react';
import '@testing-library/jest-dom';
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
  expect(screen.getByText('Clothes')).toBeInTheDocument();
  expect(screen.getByText('Leather Jacket')).toBeInTheDocument();
  expect(screen.getByText('Its Leather!')).toBeInTheDocument();
  expect(screen.getByText('$80')).toBeInTheDocument();
  expect(screen.getByText('$100')).toBeInTheDocument();
  expect(screen.getByText('This is an Leather Jacket you should buy!')).toBeInTheDocument();
  expect(screen.getByText('Leather:')).toBeInTheDocument();
  expect(screen.getByText('Good')).toBeInTheDocument();
  expect(screen.getByText('Weight:')).toBeInTheDocument();
  expect(screen.getByText('3kg')).toBeInTheDocument();
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
  expect(screen.getByText('Clothes')).toBeInTheDocument();
  expect(screen.getByText('Leather Jacket')).toBeInTheDocument();
  expect(screen.getByText('Its Leather!')).toBeInTheDocument();
  expect(screen.getByText('$100')).toBeInTheDocument();
  expect(screen.getByText('This is an Leather Jacket you should buy!')).toBeInTheDocument();
  expect(screen.queryByText('Leather:')).not.toBeInTheDocument();
  expect(screen.queryByText('Good')).not.toBeInTheDocument();
  expect(screen.queryByText('Weight:')).not.toBeInTheDocument();
  expect(screen.queryByText('3kg')).not.toBeInTheDocument();
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