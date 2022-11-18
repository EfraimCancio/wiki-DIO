import styled from 'styled-components'

export const ButtonContainer = styled.div`
    background-color: #22272e;    
    border: 2px solid #FAFAFA;
    border-radius: 1.6rem;
    cursor: pointer;

    height: 3rem;
    width: 15%;

    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;

    &:hover {
        transition: 1s;
        background-color: #FAFAFA; 
        color: #22272e;
    }
`