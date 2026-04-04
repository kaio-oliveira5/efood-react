import styled from 'styled-components'
import hero from '../../assets/Vector.png'

export const HeroContainer = styled.div`
    background-image: url(${hero});
    background-size: cover;
    background-position: center;

    text-align: center;
    padding: 96px 16px;
    `

export const Logo = styled.img`
    height: 46px;
    margin-bottom: 40px;
    `

export const Title = styled.h1`
    font-size: 36px;
    color: #e66767;
    font-weight: 900;

    max-width: 540px;
    margin: 0 auto;

    line-height: 1.4;
    `