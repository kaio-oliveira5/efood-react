import styled from 'styled-components'

export const Banner = styled.div`
    width: 100%;
    height: 280px;
    display: flex;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: rgb(255, 248, 242);
    position: relative;

    @media (max-width: 768px) {
        height: 220px;
    }

    @media (max-width: 480px) {
        height: 180px;
    }
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

    }


    p {
        font-size: 32px;
        font-weight: 100;
        color: #FFFFFF;
        margin-bottom: 156px;
    }

    @media (max-width: 768px) {
        left: 16px;
        bottom: 24px;

        h2 {
            font-size: 24px;
        }

        p {
            font-size: 14px;
        }
    }

    @media (max-width: 480px) {
        left: 12px;
        bottom: 16px;

        h2 {
            font-size: 20px;
            line-height: 24px;
        }

        p {
            font-size: 12px;
            line-height: 16px;
        }
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
    max-width: 304px;
    width: 100%;
    color: rgb(255, 248, 242);
    background-color: rgb(230, 103, 103);
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
        transform: scale(1.02);
    }
    `

export const FoodImage = styled.img`
    max-width: 304px;
    max-height: 167px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    `


export const FoodTitle = styled.h4`
    font-size: 16px;
    font-weight: 900;
    margin:8px 0;
    `

export const FoodDescription = styled.p`
    font-weight: 400;
    font-size: 14px;
    `


export const Button = styled.button`
    width: 100%;
    font-size: 14px;
    font-weight: bold;
    padding: 4px 0;
    background-color: rgb(255, 248, 242);
    color: rgb(230, 103, 103);
    border: none;
    cursor: pointer;
    margin-top: 8px;

    &:hover {
        background-color: #c0bebe;
    }
    `