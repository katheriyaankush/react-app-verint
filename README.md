# Folder Structure
src/
│
├── Assests/            # Static data and assets
│   └── data.json       # Product data file
│
├── Components/         # Reusable UI components
│   ├── Filter/         # Filter component
│   ├── ProductCard/    # Product component
│   ├── Header/         # Header component
│   └── UI/             # Generic components like buttons
│
├── pages/              # Application pages
│   ├── StorePage/      # Store listing page
│   ├── CheckoutPage/   # Checkout page
│   └── Confirmation/   # Confirmation page
│
├── Hooks/             # Debounce logic
│     └── data.json    # Custom Hook
|
|
├── types/              # TypeScript types and enums
│   └── types.ts        # Type definitions
│   └── enums.ts        # Enums for sorting logic
│
└── App.tsx             # Main App component



# Prerequisites
Before starting, ensure you have the following installed on your machine:

* Node.js (>= 16.x)
* Yarn (>= 1.22.x)



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

### `yarn install`

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



# Usage

## Sorting and Filtering

Use the input field at the top to filter products by name.
Use the sort buttons to sort products by name or price in ascending or descending order.

## Checkout

* Click the "Buy" button on any product.
* Fill in the form on the checkout page.
* Submit the form to place the order.

## Order Confirmation

After submitting the checkout form, view the order summary with details about the item and the order number.


# Technologies Used
* React: Frontend framework
* TypeScript: Type-safe JavaScript
* CSS: Styling
* Yarn: Package manager


# Future Enhancements
* Develop this online Store project using NextJS(SSR) or Remix for better performance.
* Implement unit and integration testing with Jest or React Testing Library.
* Add more user-friendly features, such as a shopping cart and multiple item checkout