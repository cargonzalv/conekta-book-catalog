import styled from 'styled-components';

// Colors
const backgroundColor = '#F7F7F7';
const primaryColor = '#333333';
const accentColor = '#D4AF37';
const softGray = '#E0E0E0';
const mutedTeal = '#8DAA91';
const headerBackground = '#333';
const headerTextColor = '#fff';

// Fonts
const bodyFont = "'IBM Plex Sans', sans-serif";
const headerFont = "'Playfair Display', serif";

// General Container
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: ${bodyFont};
  background-color: ${backgroundColor};
  color: ${primaryColor};
`;

// Header
export const Header = styled.header`
  background-color: ${headerBackground};
  color: ${headerTextColor};
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000;
  align-items: center;
  border-bottom: 2px solid ${softGray};

  h1 {
    font-family: ${headerFont};
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px 20px;

    h1 {
      font-size: 2rem;
      margin-bottom: 10px;
    }
  }
`;

// Filter and Search
export const FilterBar = styled.div`
  display: flex;
  align-items: center;

  & > div {
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    & > div {
      margin-left: 0;
      margin-bottom: 10px;
    }
  }
`;

export const SearchBar = styled.div`
  input {
    padding: 10px 20px;
    border-radius: 25px;
    border: 1px solid ${softGray};
    outline: none;
    font-size: 1rem;
    color: ${primaryColor};
    background-color: ${backgroundColor};

    &:focus {
      border-color: ${accentColor};
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;

// Main Layout
export const Main = styled.main`
  display: grid;
  grid-template-columns: 1.5fr 1.1fr;
  gap: 40px;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;

  section {
    background-color: ${backgroundColor};
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    h2 {
      font-family: ${headerFont};
      font-size: 1.8rem;
      margin: 0 0 20px 0;
      margin-top: 0px;
      color: ${accentColor};
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr; /* Stack columns on smaller screens */
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

// Footer
export const Footer = styled.footer`
  background-color: ${primaryColor};
  color: ${headerTextColor};
  text-align: center;
  padding: 20px;
  font-size: 1rem;
  font-family: ${bodyFont};
  border-top: 2px solid ${softGray};
  margin-top: auto;
`;

// Counters
export const Counters = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  span {
    background-color: ${softGray};
    padding: 10px;
    border-radius: 25px;
    font-size: 1rem;
    color: ${primaryColor};
    border: 1px solid ${softGray};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    span {
      margin-bottom: 10px;
    }
  }
`;

// Button
export const Button = styled.button`
  background-color: ${mutedTeal};
  color: ${backgroundColor};
  padding: 10px 20px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${accentColor};
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
  }
`;

// ReadingListSection
export const ReadingListSection = styled.section`
  position: sticky;
  top: 120px;
  height: 80vh;

  @media (max-width: 1024px) {
    position: static;
    height: auto;
    top: unset;
  }
`;
