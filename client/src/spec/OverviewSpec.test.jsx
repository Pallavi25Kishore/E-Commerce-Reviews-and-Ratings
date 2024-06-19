import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductView from '../components/Overview/ProductView.jsx';
import Share from '../components/Overview/Share.jsx';
import ProductInfo from '../components/Overview/ProductInfo.jsx';
import SizeSelector from '../components/Overview/SizeSelector.jsx';
import QuantitySelector from '../components/Overview/QuantitySelector.jsx';
import StyleSelector from '../components/Overview/StyleSelector.jsx';
import ImageGallery from '../components/Overview/ImageGallery.jsx';
import fetchProduct from '../components/Overview/ProductController.js';
import fetchStyles from '../components/Overview/StyleController.js';


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

const mockImages = [
  { url: 'https://example.com/image1.jpg', thumbnail_url: 'https://example.com/thumb1.jpg' },
  { url: 'https://example.com/image2.jpg', thumbnail_url: 'https://example.com/thumb2.jpg' },
  { url: 'https://example.com/image3.jpg', thumbnail_url: 'https://example.com/thumb3.jpg' }
];

describe('ImageGallery', () => {
  it('renders the main image', () => {
    render(<ImageGallery images={mockImages} />);
    const bigImage = screen.getByRole('big-image');
    expect(bigImage).toHaveStyle(`background-image: url(${mockImages[0].url})`);
  });

  it('changes the main image when a thumbnail is clicked', () => {
    render(<ImageGallery images={mockImages} />);
    const thumbnails = screen.getAllByTestId('thumbnail');
    fireEvent.click(thumbnails[1]);
    const bigImage = screen.getByRole('big-image');
    expect(bigImage).toHaveStyle(`background-image: url(${mockImages[1].url})`);
  });

  it('navigates to the next image when the right arrow is clicked', () => {
    render(<ImageGallery images={mockImages} />);
    const rightArrow = screen.getByTestId("arrow-button-right");
    fireEvent.click(rightArrow);
    const bigImage = screen.getByRole('big-image');
    expect(bigImage).toHaveStyle(`background-image: url(${mockImages[1].url})`);
  });

  it('navigates to the previous image when the left arrow is clicked', () => {
    render(<ImageGallery images={mockImages} />);
    const rightArrow = screen.getByTestId("arrow-button-right");
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);
    const leftArrow = screen.getByTestId("arrow-button-left");
    fireEvent.click(leftArrow);
    const bigImage = screen.getByRole('big-image');
    expect(bigImage).toHaveStyle(`background-image: url(${mockImages[1].url})`);
  });

  it('opens the expanded view when the main image is clicked', () => {
    render(<ImageGallery images={mockImages} />);
    const bigImage = screen.getByRole('big-image');
    fireEvent.click(bigImage);
    const expandedImageContainer = screen.getByTestId('expanded-image-container');
    expect(expandedImageContainer).toBeVisible();
  });

  it('zooms in on the image when clicked in the expanded view', () => {
    render(<ImageGallery images={mockImages} />);
    const bigImage = screen.getByRole('big-image');
    fireEvent.click(bigImage);
    const expandedImage = screen.getByTestId('expanded-image');
    fireEvent.click(expandedImage);
    expect(expandedImage).toHaveClass('zoomed');
  });

  it('closes the expanded view when the exit button is clicked', () => {
    render(<ImageGallery images={mockImages} />);
    const bigImage = screen.getByRole('big-image');
    fireEvent.click(bigImage);
    const exitButton = screen.getByText('X');
    fireEvent.click(exitButton);
    const expandedImageContainer = screen.queryByTestId('expanded-image-container');
    expect(expandedImageContainer).not.toBeInTheDocument();
  });
});
jest.mock('../components/Overview/ProductController.js', () => jest.fn());
jest.mock('../components/Overview/StyleController.js', () => jest.fn());

fetchProduct.mockResolvedValue(mockProduct);
fetchStyles.mockResolvedValue(styles);

describe('ProductView', () => {
  beforeEach(() => {
    render(<ProductView />);
  });

  it('renders the ProductInfo component', async () => {
    const productName = await screen.findByText('Leather Jacket');
    expect(productName).toBeInTheDocument();
  });



  it('renders the SizeSelector component', async () => {
    const sizeSelector = await screen.findByTestId('size-selector');
    expect(sizeSelector).toBeInTheDocument();
  });

  it('renders the QuantitySelector component', async () => {
    const quantitySelector = await screen.findByTestId('quantity-selector');
    expect(quantitySelector).toBeInTheDocument();
  });

  it('renders the Add to Cart button', async () => {
    const addToCartButton = await screen.findByText('Add to Cart');
    expect(addToCartButton).toBeInTheDocument();
  });
});