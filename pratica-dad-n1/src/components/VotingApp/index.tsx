/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { CandidateForm, ICandidateProps } from '../CandidateForm'
import * as S from './styles'
import { CandidateList, ICandidateListProps } from '../CandidateList'

//comentei para não dar erro quando você rodar


const VotingApp = () => {

    const [candidates, setCandidates] = useState([])

    const handleCandidate = (item: ICandidateProps) => {
        // setCandidates([...candidates, item.name])
    }

    return(
        <S.Wrapper>
            <S.Title>App Votos</S.Title>
            <CandidateForm handleSubmit={handleCandidate}/>
            <S.CandidadeDiv>
                <h2>Candidatos</h2>
                {/* {candidates.map((item: ICandidateListProps) => (
                    <CandidateList name={item.name} />
                ))} */}
            </S.CandidadeDiv>
        </S.Wrapper>
    )

}

export { VotingApp }