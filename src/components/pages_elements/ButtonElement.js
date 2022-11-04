import styled from 'styled-components';
import {Link} from 'react-scroll';


export const ScrollButton = styled(Link)`
    font-family: prompt;
    text-decoration: none;
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#A47551': '#E4D4C8')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px': '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    position: relative;

    &:active{
        transform: scale(0.7);
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#E4D4C8': '#A47551')};
    }
`

export const Button = styled.button`
    font-family: prompt;
    text-decoration: none;
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#A47551': '#E4D4C8')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px': '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:active{
        transform: scale(0.7);
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#E4D4C8': '#A47551')};
    }
`