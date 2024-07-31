import React from 'react';
import styled from 'styled-components';
import { Book as BookType } from '../types';
import { Button } from '../styles';

interface Props {
  book: BookType;
  onAdd: (isbn: string) => void;
  onRemove: (isbn: string) => void;
  isInReadingList: boolean;
  isInReadingListView?: boolean;
}

// Custom styled-components without forwarding the `isInReadingListView` prop
const BookContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isInReadingListView',
})<{ isInReadingListView?: boolean }>`
  display: ${({ isInReadingListView }) => (isInReadingListView ? 'flex' : 'block')};
  align-items: center;
  margin-bottom: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const BookCover = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== 'isInReadingListView',
})<{ isInReadingListView?: boolean }>`
  width: ${({ isInReadingListView }) => (isInReadingListView ? '25%' : '100%')};
  max-height: 300px;
  border-radius: 8px;
  margin-right: ${({ isInReadingListView }) => (isInReadingListView ? '20px' : '0')};
`;

const BookDetails = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isInReadingListView',
})<{ isInReadingListView?: boolean }>`
  width: ${({ isInReadingListView }) => (isInReadingListView ? '75%' : '100%')};
`;

const BookTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: #333;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 2.4em;
  line-height: 1.2em;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0px;
`;

const BookSynopsis = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== 'isInReadingListView',
})<{ isInReadingListView?: boolean }>`
  display: -webkit-box;
  -webkit-line-clamp: ${({ isInReadingListView }) => (isInReadingListView ? '2' : '3')};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
  line-height: 1.2em;
  height: ${({ isInReadingListView }) => (isInReadingListView ? '2.4em' : '3.6em')};
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #ff5c5c;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;
  
  &:hover {
    color: #ff0000;
  }
`;

const Book: React.FC<Props> = ({ book, onAdd, onRemove, isInReadingList, isInReadingListView }) => {
  return (
    <BookContainer isInReadingListView={isInReadingListView}>
      {isInReadingListView && (
        <RemoveButton onClick={() => onRemove(book.ISBN)}>
          &times;
        </RemoveButton>
      )}
      <BookCover src={book.cover} alt={book.title} isInReadingListView={isInReadingListView} />
      <BookDetails isInReadingListView={isInReadingListView}>
        <BookTitle>{book.title}</BookTitle>
        <BookSynopsis isInReadingListView={isInReadingListView}>{book.synopsis}</BookSynopsis>
        {!isInReadingListView && (
          <Button onClick={() => (isInReadingList ? onRemove(book.ISBN) : onAdd(book.ISBN))}>
            {isInReadingList ? 'Remove from Reading List' : 'Add to Reading List'}
          </Button>
        )}
      </BookDetails>
    </BookContainer>
  );
};

export default Book;
