import { useState } from 'react'
import * as S from './styles'


export interface ICandidateProps {
    name: string
}

export interface IDataProps {
    handleSubmit: (values: ICandidateProps) => void;
  }

const CandidateForm = ({handleSubmit}: IDataProps) => {

    const [name, setName] = useState('')


    return(
        <S.Wrapper>
            <S.TextFieldStyled
                label="Nome do candidato"
                variant="standard"
                onChange={(e) => setName(e.target.value)} 
            />
            <S.ButtonStyled
                color="inherit"
                onClick={() => {
                handleSubmit({ name });
                }}
            >
                Adicionar Candidato
            </S.ButtonStyled>
        </S.Wrapper>
        
    )

}

export { CandidateForm }