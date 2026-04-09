import styled from 'styled-components'

export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px 80px;
    margin-top: 80px;

    @media (max-width: 768px) {
    gap: 32px;
    }

    @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-top: 40px;
    }
`

export const Container = styled.div`
max-width: 1024px;
width: 100%;
margin: 0 auto;
`