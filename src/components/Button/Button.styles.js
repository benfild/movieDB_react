import styled from "styled-components";

export const Wrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    width: 25%;
    min-width: 200px;
    height: 60px;
    border: 0;
    border-radius: 30px;
    font-size: var(--fontBig);
    margin: 20px auto;
    color: var(--white);
    transition: all 0.3s;
    outline: none;
    cursor: pointer;

    :hover{
        opacity: 0.8;
    }
`;