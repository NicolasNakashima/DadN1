import styled, { css } from "styled-components";

export const Wrapper = styled.div(
    () => css`

    display: flex;
    border-radius: 10px;
    justify-content: space-between;

    
    `
)


export const ActionButtons = styled.div(
    () => css`
    display: flex;
    justify-content: center;
    gap: 5px;
    `
)


export const Name = styled.p(
    () => css`
    color: beige;
    font-weight: 700;
    `

)

