import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Card = styled.div`
    border: 1px solid #e66767;
    overflow: hidden;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 398px;
`

export const Image = styled.img`
    width: 100%;
    height: 205px;
    object-fit: contain;
    display: block;

    @media (max-width: 480px) {
        height: 180px;
    }
`
export const Content = styled.div`
    padding: 16px 16px 8px;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;

`
export const Title = styled.h3`
    margin-top: 8px;
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: bold;
    line-height: 18px;
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
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
`
export const CardLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`
export const Button = styled.button`
    margin-top: 16px;
    margin-bottom: 8px;
    align-self: flex-start;
    display: inline-block;
    padding: 2px 8px;
    background-color: #e66767;
    color: #ffebd9;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    height: 24px;   
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