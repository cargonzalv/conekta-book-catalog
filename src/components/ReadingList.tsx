import React from 'react';
import { Book as BookType } from '../types';
import Book from './Book';
import styled from 'styled-components';

interface Props {
  readingList: BookType[];
  onRemove: (isbn: string) => void;
}

const ReadingListContainer = styled.div`
  max-height: 75vh; /* Ensures the reading list doesn't overflow the screen height */
  overflow-y: auto;
  padding-right: 10px; /* Prevent hiding content behind scrollbar */
  
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #8DAA91;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #D4AF37;
  }
`;

const ReadingList: React.FC<Props> = ({ readingList, onRemove }) => {
  return (
    <ReadingListContainer>
      {readingList.length > 0 ? (
        readingList.map(book => (
          <Book
            key={book.ISBN}
            book={book}
            onAdd={() => {}}
            onRemove={onRemove}
            isInReadingList={true}
            isInReadingListView={true}
          />
        ))
      ) : (
        <p>Your reading list is empty.</p>
      )}
    </ReadingListContainer>
  );
};

export default ReadingList;
