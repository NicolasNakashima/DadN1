import { Button } from '@mui/material'
import * as S from './styles'


export interface ICandidateListProps {
    name: string
    votos: number
    handleClickVote: () => void
    handleCLickDelete: () => void
}

const CandidateList = ({name, votos, handleClickVote}: ICandidateListProps) => {

    return(
        <S.Wrapper>
            <S.Name>{name}</S.Name>
            Votos: {votos}
            <Button onClick={handleClickVote}>Votar</Button>
        </S.Wrapper>
    )

}

export { CandidateList }