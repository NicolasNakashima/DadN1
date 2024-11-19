import { Button, TextField } from "@mui/material";
import styled, { css } from "styled-components";


export const Wrapper = styled.div(
    () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-direction: row;
    `
)

export const TextFieldStyled = styled(TextField)(
    () => css`
      width: 100%;
    `
);

export const ButtonStyled = styled(Button)(
    () => css`
        width: 100%;
        margin-top: 2rem;
        background: rgb(250,197,82);
        background: linear-gradient(90deg,
            rgba(250,197,82,1) 0%,
            rgba(255,193,0,1) 50%,
                rgba(252,138,43,1) 100%);
    `
);
   