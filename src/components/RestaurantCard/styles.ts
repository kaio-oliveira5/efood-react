import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Card = styled.div`
    border: 1px solid #e66767;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const Image = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
`

export const Content = styled.div`
    padding: 16px;
    display:flex;
    flex-direction: column;
    flex:1;
`

export const Title = styled.h3`
    margin: 0 0 8px;
    font-size: 18px;
`

export const Description = styled.p`
    margin: 0;
    font-size: 12px;
    line-height: 1;4;
    color: #666;
`

export const CardLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

export const Button = styled.button`
    margin-top: auto;
    padding: 8px;
    background-color: #e66767;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 12px;
    
    `