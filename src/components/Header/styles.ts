import styled from 'styled-components'

export const HeaderBar = styled.header`
    background-color: #fff8f2;
    padding: 24px 0;
    `

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;

    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    `

export const Logo = styled.img`
    height: 40px;
    justify-self: center;
    `

export const Nav = styled.nav`
    justify-self: end;
    color: #e66767;
    font-weight: bold;
    `

export const LinkItem = styled.span`
    color: #e66767;
    font-weight: bold;
    cursor: pointer;
    `

export const Empty = styled.div`
    width: 120px;
    `