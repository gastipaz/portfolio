import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;
    background: #1f1e1e;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    max-width: 100vw;
    height: 100%;
    min-height: 100vh;
`

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    max-width: 100vw;
    height: 100%;
`

export const PageRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 'col1 col2';
    width: 100%;
    margin: 30px 0px;
    height: fit-content;

    @media screen and (max-width: 1000px) {
        grid-template-areas: 
        'col1 col1'
        'col2 col2'
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        width: 90%;
    }
`

export const PageColumn1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    grid-area: col1;
    padding: 0px 30px;
    height: 100%;
    width: 90%;
    overflow: hidden;
    justify-self: end;

    @media screen and (max-width: 1000px) {
        justify-self: center;
        width: 100%;
    }

`
export const PageColumn2 = styled.div`
    display: flex;
    height: 100%;
    width: 90%;
    padding: 0px 30px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    grid-area: col2;
    overflow: hidden;
    justify-self: start;

    @media screen and (max-width: 1000px) {
        justify-self: center;
        width: 100%;
    }
`
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    margin: 10px 10px;
`

export const ElementWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 90%;
    height: fit-content;

    @media screen and (max-width: 1000px) {
        justify-self: center;
        width: 100%;
    }
`
export const TopLine = styled.p`
    color: #A47551;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    font-family: prompt;
    align-self: flex-start;

    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: justify;
        margin-top: 30px;
    }

    @media screen and (max-width: 480px) {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: justify;
    }
`
export const Title = styled.h2`
    font-family: Prompt;
    color: #D0B49F;
    font-size: 30px;
    margin: 5px 5px;

    @media screen and (max-width: 767px) {
        font-size: 20px;
    }
`
export const Subtitle = styled.h3`
    font-family: Prompt;
    font-size: 23px;
    margin: 5px 5px;
    color: white;
`
export const Paragraph = styled.p`
    font-family: Prompt;
    font-size: 20px;
    max-width: 80%;
    text-align: justify;
    text-justify: "inter-word";
    overflow-wrap: "break-word"; 
    margin: 5px 5px;
    color: white;

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        max-width: 100%;
    }

    @media screen and (max-width: 767px) {
        font-size: 15px;
        max-width: 100%;
    }
`