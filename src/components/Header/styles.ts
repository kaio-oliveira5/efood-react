import styled from 'styled-components'
import hero from '../../assets/Vector.png'

export const HeaderBar = styled.header`
    background-image: url(${hero});
    width: 100%;
    justify-content: center;
    align-items: center;
    color:rgb(230, 103, 103);
    padding: 40px 0;
    top: 0;
    z-index: 100;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;

    `

export const Container = styled.div`
    max-width:1024px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;


        @media (max-width: 1024px) {
        flex-direction: column;
        gap: 16px;
    }


    @media (max-width: 480px) {
        flex-direction: column;
        gap: 16px;
        
    }
    `

export const Logo = styled.img`
    width: 125px;
    height: 58px;

    @media (max-width: 1024px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
    `

export const Nav = styled.nav`
        text-decoration: none;
        color: rgb(230, 103, 103);
    `

export const LinkItem = styled.span`
    font-weight: 900;
    font-size: 18px;
    border:none;
    background-color: transparent;
    color: rgb(230, 103, 103);
    cursor: pointer;
    
    `

export const Empty = styled.div`
    width: 120px;
    `