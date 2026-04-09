import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Card = styled.div`
    overflow: hidden;
    margin-bottom: 24px;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 398px;
`

export const Image = styled.img`
    width: 100%;
    height: 217px;
    object-fit: cover;
    display: block;

    @media (max-width: 480px) {
        height: 180px;
    }
`
export const Content = styled.div`
    border: 1px solid #e66767;
    border-top: none;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    color: #E66767;
    background-color: #FFFFFF;
`
export const Title = styled.h3`
    display: flex;
    font-size: 18px;
    font-weight: 700;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    margin-top: 8px;
    margin-bottom: 16px;
    width: 100%;
`
export const TitleContainer = styled.div`
    color: #e66767;
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
`
export const Rating = styled.span`
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    color: #e66767;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 8px;
    margin-bottom: 16px;
    margin-top: 8px;

    svg {
    color: #ffb930;
    font-size: 19px;
    transform: translateY(-2px);
    }
`
export const Description = styled.p`
    color: #e66767;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    padding: 0 8px;

`
export const CardLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    padding: 0 8px 8px;
    margin-top: 16px;
`
export const Button = styled.button`

    align-self: flex-start;
    display: inline;
    padding: 6px 4px;
    background-color: #e66767;
    color: rgba(255, 235, 217, 1);
    border: none;
    cursor: pointer;
    font-size: 14px;

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
    z-index: 1;
    `

export const Badge = styled.span`
    background-color: #E66767;
    color: #FFEBD9;
    font-size: 12px;
    padding: 6px 10px;
    font-weight: bold;
    `