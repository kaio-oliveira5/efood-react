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
    background-position: center center;

    @media (max-width: 1024px) {
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
    background-color: rgba(0, 0, 0, 0.5);
    
    `

export const OverlayModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);

    z-index: 1000;

    
    `

export const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    // display:flex;
    gap: 24px;
    transform: translate(-50%, -50%);

    // background-color: #e66767;
    // color: #fff;

width: 1024px;
padding: 32px;
display:flex; 
color: rgb(255, 248, 242);
background-color: rgb(230, 103, 103);

    // width: 1024px;
    // height: 344px;
    // max-width: 90%;
    // padding: 24px;
    

    z-index: 1001;

    @media (max-width: 768px) {
    width: 100%;
    // flex-direction: column;
    padding: 16px;
    }

    @media (max-width: 425px) {
    width: 95%;
    flex-direction: column;
    padding: 16px;
    }

    
    
`
export const ModalImage = styled.img`
width:280px;
height:280px;
object-fit: cover;

@media (max-width: 768px) {
    width: 50%;
    }

    @media (max-width: 425px) {
    width: 100%;
    padding: 16px;

    }
`
export const ModalContent = styled.div`
flex:1;

h2 {
    font-size: 18px;
    font-weight: 900;
    linne-heigth: 100%;
    margin-bottom: 16px;
    color: #FFFFFF;
    font-style: black;
}

p{
font-size: 14px;
font-weight: 400;
margin-bottom: 16px;
line-height: 22px;
color: #FFFFFF;
}

img{
position: absolute;
top: 0;
right: 0;
padding: 8px;
cursor: pointer;
}

button{
    background-color: #FFEBD9;
    color: #E66767;
    border-width: medium;
    border-style: none;
    padding: 4px 16px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    width: fit-content;
    line-height: 100%;
}
`


export const BannerText = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px 0;
    position: relative;
    z-index: 1;

    h2 {
        font-size: 32px;
        font-weight: 900;

    }


    p {
        font-size: 32px;
        font-weight: 100;
        color: #FFFFFF;
        margin-bottom: 0;
    }

    @media (max-width: 768px) {
        padding: 24px 16px;

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
    padding: 56px 0;
    gap:32px;
    `

export const FoodList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;


    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 0 26px;
        gap: 32px;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
    `

export const FoodCard = styled.div`
    width: 100%;
    color: #FFEBD9;
    background-color: #E66767;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
        transform: scale(1.02);
    }
    `

export const FoodImage = styled.img`
    width: 100%;
    height: 167px;
    display: block;
    padding-bottom: 8px;
    `


export const FoodTitle = styled.h4`
    font-size: 16px;
    font-weight: 900;
    margin:8px 0;
    `

export const FoodDescription = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 8px;
    color: #FFEBD9;
    `


export const Button = styled.button`
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    padding: 4px 0;
    background-color: #FFEBD9;
    color: #E66767;
    border: none;
    cursor: pointer;
    margin-top: auto;

    &:hover {
        opacity: 0.8;
    }
    `