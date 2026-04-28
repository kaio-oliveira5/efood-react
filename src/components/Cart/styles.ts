import styled from 'styled-components'

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: hsla(0, 0%, 0%, 0.70);
    z-index: 998;
    `

export const CartContainer = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    width: 360px;
    height: 100%;
    background: #e66767;
    z-index: 999;
    /* padding: 16px; */
    display: flex;
    flex-direction: column;

    /* @media (max-width: 760px) {
        width: 100%;
    } */
    
    /* @media (max-width: 1024px) {
        width: 50%;
    } */
    `

export const CartItem = styled.div`
    display: flex;
    gap: 12px;
    width: 344px;
    height: 100px;
    background: #ffe5d9;
    padding: 8px;
    
    position: relative;
    margin-top: 16px;
    margin-left: 8px;

    /* @media (max-width: 768px) {
        padding: 8px;
        gap: 8px;
        width: 95%;
    } */
    `

export const CartDiv = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
margin-top: 16px;
margin-bottom: 40px;
`

export const ItemImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;

    /* @media (max-width: 768px) {
        width: 60px;
        height: 60px;
    } */
    `

export const ItemInfo = styled.div`
    flex: 1;
    color: #000;

    h4 {
        margin: 0;
        font-weight: 900;
        line-height: 100%;
        font-size: 18px;
        color: #E66767;
    }

    p {
        margin: 4px 0;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #E66767;
        margin-top: 16px;
    }

    span {
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color: #E66767; 

    }
    `

export const RemoveButton = styled.button`
    position: absolute;
    margin-top: 76px;
    bottom: 8px;
    right: 8px;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 16px;
    height: 16px;
    width: 16px;
    `

export const TotalContainer = styled.div`
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    line-height: 100%;
    color: #FFEBD9;
    padding: 8px;
    
    `

export const CheckoutButton = styled.button`
    padding: 4px 16px;
    background: #fff;
    color: #e66767;
    border: none;
    font-weight: bold;
    margin: 16px 8px;
    cursor: pointer;
    `

export const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
    `

export const QuantityButton = styled.button`
    width: 15px;
    height: 15px;
    border: none;
    background: transparent;
    color: #e66767;
    font-weight: bold;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: #b3b3b3;
    }
    `

export const QuantityValue = styled.span`
    font-size: 10px;
    font-weight: bold;
    `