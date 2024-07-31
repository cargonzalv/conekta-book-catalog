# conekta-book-catalog

## Description

Book Catalog App is a React web application designed to help users browse a catalog of books and manage a personal reading list. This project is part of a technical challenge for Conekta.

## Features

- Display available books with detailed information.
- Add or remove books from a personal reading list.
- Filter books by genre with dynamic counters.
- Real-time state synchronization across multiple tabs.
- Data persistence using browser local storage.
- Responsive design for optimal viewing on all devices.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/conekta-book-catalog.git
    cd conekta-book-catalog
    ```

2. **Install dependencies:**
    ```bash
    yarn install
    ```

3. **Start the development server:**
    ```bash
    yarn start
    ```

## Usage

- **Browse Books:** View the list of available books.
- **Add to Reading List:** Click the "Add to Reading List" button to add a book to your personal reading list.
- **Remove from Reading List:** Click the "Remove from Reading List" button or the "X" icon to remove a book from your personal reading list.
- **Filter by Genre:** Use the genre filter dropdown to view books of a specific genre.

## Deployment

This project is deployed on Vercel. Visit the live app [here](https://conekta-book-catalog.vercel.app).

## Testing

Unit tests are written using Jest and React Testing Library. To run the tests, follow these steps:

1. **Run the tests:**
    ```bash
    yarn test
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

- React
- TypeScript
- Styled Components
- Local Storage for data persistence
- Jest and React Testing Library for unit testing

## License

This project is licensed under the MIT License.