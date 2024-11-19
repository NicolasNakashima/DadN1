import styled, { css } from "styled-components";

export const Title = styled.h1(
    () => css`
    color: aquamarine;
    
    `
)
 
export const Wrapper = styled.div(
  () => css`
    display: flex;
    border-radius: 0.5rem;
    width: 60rem;
    height: 30rem;
    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: aliceblue;
    background-color: aliceblue;
    margin-top: 100px;
    margin-left: 160px;
    
    
  `
);


export const CandidadeDiv = styled.div(
    () => css`
    display: flex;
    flex-direction: column;
    border: 0.5px solid greenyellow;
    border-radius: 10px;
    padding: 0.5rem;
    justify-content: flex-start;
    width: 100%;
    min-height: 100px;


    h2 {
        color: aquamarine;
    }
    `
)