import styled from 'styled-components'
import hero from '../../assets/Vector.png'

export const HeroContainer = styled.div`
    background-image: url(${hero});
    display: flex;
    flex-direction: column;
    align-items: center;
    `

export const Logo = styled.img`
    width: 125px;
    height: 58px;
    margin-bottom: 128px;
    margin-top: 64px;
    `

export const Title = styled.h1`
    font-size: 36px;
    color: #E66767;
    font-weight: 900;
    margin-bottom: 40px;
    text-align: center;
    `