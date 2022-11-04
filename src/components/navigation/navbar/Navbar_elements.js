import styled from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'


export const Nav = styled.nav`
    position: absolute;
    width: 100%;
    max-width: 100vw;
    background: transparent;
    top: 0;
    height: 60px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
`

export const NavLogo = styled(ScrollLink)`
    color: #D0B49F;
    text-decoration: none;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
    width: fit-content;
    transition: all 0.2s ease-in-out;

    &.active {
        color: #A47551;
        transition: all 0.2s ease-in-out;
        border-bottom: #A47551;
    }
    
    &:hover {
        color: white;
        transition: all 0.2s ease-in-out;
    }
`
export const NavMenu = styled.div`
    display: flex;
    width: fit-content;
    list-style: none;
    margin-left: auto;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavLink = styled(ScrollLink)`
    color: #D0B49F;;
    display: flex;
    font-family: prompt;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 60px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &.active {
        color: #A47551;
        transition: all 0.2s ease-in-out;
        border-bottom: 2px solid #A47551;
    }
    
    &:hover {
        color: white;
        transition: all 0.2s ease-in-out;
    }
`
export const MobileIcon = styled.div`
    display: flex;
    display: none;
    align-items: center;
    width: fit-content;

    @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 0;
    top: -24px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #D0B49F;

    &:hover {
        color: #A47551;
        }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`