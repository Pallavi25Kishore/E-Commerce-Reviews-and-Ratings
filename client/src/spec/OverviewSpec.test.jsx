import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductView from '../components/Overview/ProductView.jsx';
import Share from '../components/Overview/Share.jsx';
import ProductInfo from '../components/Overview/ProductInfo.jsx';
import SizeSelector from '../components/Overview/SizeSelector.jsx';
import QuantitySelector from '../components/Overview/QuantitySelector.jsx';
import StyleSelector from '../components/Overview/StyleSelector.jsx';

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


// Style Selector Tests
const styles = [
  {
    style_id: 1,
    name: 'Forest Green & Black',
    photos: [
      { thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg' }
    ],
    'default?': true,
    skus: { 37: { quantity: 8, size: 'XS' } }
  },
  {
    style_id: 2,
    name: 'Desert Brown & Tan',
    photos: [
      { thumbnail_url: 'urlplaceholder/style_2_photo_number_thumbnail.jpg' }
    ],
    'default?': false,
    skus: { 37: { quantity: 8, size: 'XS' } }
  }
];

test('renders StyleSelector with styles', () => {
  const handleSelectStyle = jest.fn();
  render(<StyleSelector styles={styles} onSelectStyle={handleSelectStyle} />);

  expect(screen.getByText('Forest Green & Black')).toBeInTheDocument();
  expect(screen.getByText('X')).toBeInTheDocument();
  expect(screen.getAllByTestId('style-thumbnail').length).toBe(2);
});

test('selects a new style on click', () => {
  const handleSelectStyle = jest.fn();
  render(<StyleSelector styles={styles} onSelectStyle={handleSelectStyle} />);

  const newStyleThumbnail = screen.getAllByTestId('style-thumbnail')[1];
  fireEvent.click(newStyleThumbnail);

  expect(handleSelectStyle).toHaveBeenCalledWith(styles[1]);
  expect(screen.getByText('Desert Brown & Tan')).toBeInTheDocument();
  expect(screen.getByText('X')).toBeInTheDocument();
});

//Size Selector Test:

const sizes = [
  { size: 'XS', quantity: 8 },
  { size: 'S', quantity: 0 }
];

test('renders SizeSelector with sizes', () => {
  const handleSelectSize = jest.fn();
  render(<SizeSelector sizes={sizes} onSelectSize={handleSelectSize} />);

  expect(screen.getByText('Select Size')).toBeInTheDocument();
  expect(screen.getByText('XS')).toBeInTheDocument();
  expect(screen.getByText('S (OUT OF STOCK)')).toBeInTheDocument();
});

test('selects a size on change', () => {
  const handleSelectSize = jest.fn();
  render(<SizeSelector sizes={sizes} onSelectSize={handleSelectSize} />);

  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'XS' } });
  expect(handleSelectSize).toHaveBeenCalledWith('XS');
});

//Quantity Selector Test:
test('renders QuantitySelector with maxQuantity', () => {
  const handleSelectQuantity = jest.fn();
  render(<QuantitySelector maxQuantity={5} onSelectQuantity={handleSelectQuantity} />);

  expect(screen.getByText('Select Quantity')).toBeInTheDocument();
  expect(screen.getAllByRole('option').length).toBe(6);
});

test('disables QuantitySelector when maxQuantity is 0', () => {
  const handleSelectQuantity = jest.fn();
  render(<QuantitySelector maxQuantity={0} onSelectQuantity={handleSelectQuantity} />);

  expect(screen.getByText('-')).toBeInTheDocument();
  expect(screen.getByRole('combobox')).toBeDisabled();
});

test('selects a quantity on change', () => {
  const handleSelectQuantity = jest.fn();
  render(<QuantitySelector maxQuantity={5} onSelectQuantity={handleSelectQuantity} />);

  fireEvent.change(screen.getByRole('combobox'), { target: { value: '3' } });
  expect(handleSelectQuantity).toHaveBeenCalledWith('3');
});