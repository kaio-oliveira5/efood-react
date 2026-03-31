import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Card = styled.div`
    border: 1px solid #e66767;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
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
    align-items: flex-start;
`
export const Title = styled.h3`
    margin: 0 0 8px;
    font-size: 18px;
`
export const TitleContainer = styled.div`
    color: #e66767;
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 100%
`
export const Rating = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: #e66767;
    display: flex;
    align-items: center;
    gap: 4px;

    svg {
    color: #ffb930;
    font-size: 16px;
    transform: translateY(-2px);
    }
`
export const Description = styled.p`
    color: #e66767;
    margin: 0;
    font-size: 12px;
    line-height: 1;4;
`
export const CardLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`
export const Button = styled.button`
    margin-top: 16px;
    margin-left: 8px;
    margin-bottom: 8px;
    display: inline-block;
    padding: 6px 12px;
    background-color: #e66767;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 12px;   
`
export const ImageContainer = styled.div`
    position: relative;
    `


export const Category = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    display:flex;
    gap:8px;
    `

export const Badge = styled.span`
    background-color: #e66767;
    color: #fff;
    font-size: 12px;
    padding: 6px 10px;
    font-weight: bold;
    `