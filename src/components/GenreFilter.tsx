import React from 'react';
import styled from 'styled-components';

interface Props {
  genres: string[];
  selectedGenre: string;
  onSelectGenre: (genre: string) => void;
}

const FilterContainer = styled.div`

  select {
    padding: 10px;
    border-radius: 25px;
    border: 1px solid #E0E0E0;
    background-color: #F7F7F7;
    font-size: 1rem;
    color: #333333;
    cursor: pointer;
  }
`;

const GenreFilter: React.FC<Props> = ({ genres, selectedGenre, onSelectGenre }) => {
  return (
    <FilterContainer>
      <select value={selectedGenre} onChange={e => onSelectGenre(e.target.value)}>
        <option value="">All Genres</option>
        {genres.map(genre => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </FilterContainer>
  );
};

export default GenreFilter;
