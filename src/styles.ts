import styled from 'styled-components';

// Colors
const primaryColor = '#1E90FF';
const secondaryColor = '#FF4500';
const backgroundColor = '#f4f7f6';
const cardBackgroundColor = '#ffffff';
const textColor = '#333333';
const borderColor = '#dddddd';

// Fonts
const primaryFont = "'Open Sans', sans-serif";
const headerFont = "'Roboto', sans-serif";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: ${primaryFont};
    background-color: ${backgroundColor};
`;

export const Header = styled.header`
    background-color: ${primaryColor};
    color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h1 {
        margin: 0;
        font-family: ${headerFont};
        font-size: 24px;
    }
`;

export const FilterBar = styled.div`
    display: flex;
    align-items: center;

    & > div {
        margin-left: 20px;
    }
`;

export const SearchBar = styled.div`
    input {
        padding: 10px;
        border-radius: 4px;
        border: 1px solid ${borderColor};
        outline: none;
        font-size: 16px;
        width: 250px;

        &:focus {
            border-color: ${secondaryColor};
        }
    }
`;

export const Main = styled.main`
    display: flex;
    flex-direction: row;
    flex: 1;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;

    section {
        flex: 3;
        margin-left: 20px;
        background-color: ${cardBackgroundColor};
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

        h2 {
            font-family: ${headerFont};
            font-size: 20px;
            margin-bottom: 20px;
        }
    }
`;

export const Footer = styled.footer`
    background-color: ${primaryColor};
    color: white;
    text-align: center;
    padding: 20px;
    font-size: 14px;
    font-family: ${primaryFont};
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

export const Counters = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    span {
        background-color: ${backgroundColor};
        padding: 10px;
        border-radius: 4px;
        font-size: 14px;
        color: ${textColor};
        border: 1px solid ${borderColor};
    }
`;
