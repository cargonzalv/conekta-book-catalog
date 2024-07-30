# Book Catalog App

Welcome to the Book Catalog App, a JavaScript web application designed to help users browse a catalog of books and manage a personal reading list

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Display Available Books:** Browse a comprehensive list of books with detailed information including title, author, synopsis, genre, and cover image.
- **Reading List Management:** Add or remove books from your personal reading list, with a clear indication of which books are in the list.
- **Genre Filtering:** Easily filter books by genre, with counters for the total number of books, books in the reading list, and books in the selected genre.
- **Real-Time Updates:** The UI updates in real-time to reflect changes in the reading list and available book counts, across multiple tabs.
- **Data Persistence:** The reading list is saved using browser local storage, ensuring data is retained across sessions.
- **Responsive Design:** The app is fully responsive, providing an optimal viewing experience on desktops, tablets, and mobile devices.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/cargonszalv/conekta-book-catalog.git
    cd conekta-book-catalog
    ```

2. **Open the project:**
    Open the `index.html` file in your preferred web browser to view the app.

## Usage

- **Browse Books:** View the list of available books.
- **Add to Reading List:** Click the "Add to Reading List" button to add a book to your personal reading list.
- **Remove from Reading List:** Click the "Remove from Reading List" button to remove a book from your personal reading list.
- **Filter by Genre:** Use the genre filter dropdown to view books of a specific genre.

## Deployment

### Deploying on Netlify

1. **Create a new site on Netlify:**
    - Drag and drop your project folder into the Netlify dashboard.
    - Netlify will automatically deploy your app.

### Deploying on Vercel

1. **Install Vercel CLI:**
    ```bash
    npm install -g vercel
    ```

2. **Deploy the app:**
    ```bash
    vercel
    ```

### Deploying on Firebase

1. **Install Firebase CLI:**
    ```bash
    npm install -g firebase-tools
    ```

2. **Initialize Firebase in your project:**
    ```bash
    firebase login
    firebase init
    ```

3. **Deploy the app:**
    ```bash
    firebase deploy
    ```

## Testing

Unit tests are written using Jest. To run the tests, follow these steps:

1. **Install Jest:**
    ```bash
    npm install --save-dev jest
    ```

2. **Run the tests:**
    ```bash
    npm test
    ```

Example test for adding a book to the reading list:

```javascript
test('adds a book to the reading list', () => {
    const isbn = '978-0618640157';
    addToReadingList(isbn);
    expect(readingList).toContainEqual(books.find(b => b.ISBN === isbn));
});
```

## Technologies Used

- HTML, CSS, JavaScript
- Local Storage for data persistence
- Jest for unit testing

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

1. **Fork the repository**
2. **Create a new branch**
    ```bash
    git checkout -b feature-branch
    ```
3. **Make your changes**
4. **Commit your changes**
    ```bash
    git commit -m 'Add some feature'
    ```
5. **Push to the branch**
    ```bash
    git push origin feature-branch
    ```
6. **Open a pull request**

## License

This project is licensed under the MIT License.