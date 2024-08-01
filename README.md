# :star:Ratings and Reviews feature for an e-commerce platform 

## :books:About
The Ratings and Reviews feature is designed to allow users to easily view, add, and filter reviews by rating, relevance, newness, and helpfulness. This feature enhances the user experience by providing detailed review tiles, dynamic filters, and a streamlined design.

## :movie_camera:Demo
<div align="center">
  <a href="https://youtu.be/Yy85ctGMjbo">
    <img src="https://img.youtube.com/vi/Yy85ctGMjbo/0.jpg" alt="Watch the demo video" width="800px"/>
  </a>
</div>

## :rocket:Technologies
### Front-End
![React](https://img.shields.io/badge/react-black?style=for-the-badge&logo=react)
![HTML5](https://img.shields.io/badge/html5-black?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/css3-black?style=for-the-badge&logo=css3)
![Axios](https://img.shields.io/badge/axios-black?style=for-the-badge&logo=axios)

## :sparkles:Features
- **Review Tiles**: Showcase reviews submitted for a particular product, including star ratings, review body, and picture thumbnails.
- **More Reviews Button**: Displays remaining reviews when clicked.
- **Thumbnail Modal**: Click on thumbnails to view the picture in a modal window.
- **Sort Options**: Sort reviews by relevance, helpfulness, and newness.
- **Search Bar**: Search reviews containing a particular search term.
- **Star Filter Rating Bars**: Dynamic bars that render the percentage of reviews based on star ratings and act as filters.
  - **Additive Filters**: Clicking on star bars filters reviews accordingly; for example, clicking on 5-star bar and then 4-star bar shows both 4 and 5-star reviews.
  - **Remove Filters**: Clear all applied filters.
- **Add Review**: A form to submit a new review.
- **Characteristics Breakdown Bars**: Displays average ratings based on particular characteristics, dynamically rendered for each product.

## :red_car:Roadmap
- [X] Set up the React framework.
- [X] Utilize external API for fetching reviews and related data.
- [X] Display reviews using lazy loading (including star rating for each review, review summary, thumbnails etc)
- [X] Render rating bars dynamically, and implement additive filters
- [X] Implement sort functionality 
- [X] Implement search bar functionality
- [X] Add form to submit new reviews 
- [X] Dynamically render average rating for each characteristic based on the product selected 

## :white_check_mark:Installation and Setup
### Prerequisites
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
```sh
npm install
```

1. Get a free API key at GitHub Settings.
   
2. Clone the repo:
```sh
     git clone https://github.com/Pallavi25Kishore/E-Commerce-Reviews-and-Ratings.git
```
3. Install NPM packages.
```sh
  npm install
```

4. Make a copy of the .config.example.js file and rename it to config.js. Enter the following in the file.
```sh
const API_KEY = "Enter API KEY";
const CAMPUS_CODE = "hr-rfp";
const BASE_URL = `https://app-hrsei-api.herokuapp.com/api/fec2/:${CAMPUS_CODE}/`;
```

5. Run in dev environment.
```sh
  npm run start-server
  npm run react-dev
```

## :blush:Collaboration Details
The front-end of the e-commerce platform was a collaborative project, with 3 main components:
1. **Product Overview** which contains the image gallery, product information, style selector and add to cart feature
2. **Questions and Answers** which contains features for question viewing, searching, asking a question and answering questions
3. **Reviews and Ratings** which contains functionality to write new reviews, view exisitng review tiles, filter reviews, sort reviews and view rating and product breakdowns.

## :raised_hands:Acknowledgments
I am grateful to the following developers for their contribution towards this project.
<br>
-Michael Trofimov https://github.com/mictro97 - for implementing the front-end for the product overview component 
<br>
-Shaoyu Chen https://github.com/shaoyuchen3213 - for implementing the front-end for the questions and answers component 




