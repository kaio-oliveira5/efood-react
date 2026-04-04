import styled from 'styled-components'

export const Banner = styled.div`
    width: 100%;
    height: 280px;
    background-size: cover;
    background-position: center ;
    background-repeat: no-repeat;
    position: relative;
    `

export const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    `


export const BannerText = styled.div`
    position: absolute;
    bottom: 32px;
    left: calc((100% - 1024px) / 2);
    color: #fff;

    h2 {
        font-size: 32px;
        font-weight: 900;
        font-style: black;

    }

    p {
        font-size: 12px;
    }
    `

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 32px 0;
    gap:32px;
    `

export const FoodList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-top: 24px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
    `

export const FoodCard = styled.div`
    background-color: #e66767;
    overflow: hidden;
    color: #fff;
    transition: transform 0.2s ease;
    display:flex;
    flex-direction: column;
    min-height: 320px;
    padding: 8px;
    height: 100%;

    &:hover {
        transform: scale(1.02);
    }
    `

export const FoodImage = styled.img`
    width: 100%;
    height: 140px;
    object-fit: contain;
    `

export const FoodContent = styled.div`
    padding: 12px;
    display:flex;
    flex-direction:column;
    flex:1;
    `

export const FoodTitle = styled.h4`
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 900;
    font-style: black;
    line-height: 100%;
    color: #FFEBD9;
    `

export const FoodDescription = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #FFEBD9;
    line-height: 22px;
    `

export const Button = styled.button`
    width: 100%;
    padding: 6px ;
    font-size: 14px;
    font-weight: bold;
    background-color: #fff;
    color: #e66767;
    border: none;
    cursor: pointer;
    margin-top: auto;

    &:hover {
        background-color: #c0bebe;
    }
    `