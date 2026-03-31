import styled from 'styled-components'
import bg from '../../assets/Rectangle 2.png'

export const FooterContainer = styled.footer`
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    background-color: #FFEBD9;
    padding: 40px 0;
    text-align: center;
    margin-top: 120px;

    display: flex;
    flex-direction: column;
    align-items: center;
    `

export const Logo = styled.img`
    width: 125px;
    margin-bottom: 16px;
    `

export const Text = styled.p`
    font-size: 10px;
    color: #e66767;
    max-width: 480px;
    margin: 16px auto 0;
    line-height: 18px;
    `

export const Social = styled.div`
    display:flex;
    gap: 8px;
    margin: 16px 0;
    margin-top: 32px;
    margin-bottom: 80px;

    img {
    width: 24px;
    heigth: 24px;
    }
    `