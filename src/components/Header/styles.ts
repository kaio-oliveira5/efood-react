import styled from 'styled-components'
import hero from '../../assets/Vector.png'

export const HeaderBar = styled.header`
    background-image: url(${hero});
    display: flex;
    justify-content: center;
    align-items: center;
    color:rgb(230, 103, 103);
    padding: 48px 0;
    `

export const Container = styled.div`
    max-width:100% ;
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `

export const Logo = styled.img`
    width: 125px;
    height: 58px;
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