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
    width: 90%; /* mobile */
    height: 100%;
    background: #e66767;
    z-index: 999;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    /* tablet */
    @media (min-width: 768px) {
        width: 50%;
    }

    /* desktop */
    @media (min-width: 1024px) {
        width: 360px;
    }

    `

export const CartItem = styled.div`
    display: flex;
    gap: 12px;
    width: 100%;
    max-width: 344px;
    height: 100px;
    background: #ffe5d9;
    padding: 8px;
    align-items: center;
    
    position: relative;
    `

export const CartDiv = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
padding: 32px 8px  40px;

overflow-y: auto ;

&::-webkit-scrollbar {
    width: 5px;
}

&::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.40);
    border-radius: 10px;
}
`

export const ItemImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;

    `

export const ItemInfo = styled.div`
    flex: 1;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h4 {
        margin: 0;
        font-weight: 900;
        line-height: 100%;
        font-size: 18px;
        color: #E66767;

        @media (max-width: 768px) {
            font-size: 14px;
    }
    }

    p {
        margin: 4px 0;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #E66767;
        margin-top: 16px;

        @media (max-width: 768px) {
            font-size: 12px;
    }
    }

    span {
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color: #E66767; 

        @media (max-width: 768px) {
            font-size: 12px;
}

    }
    `

export const RemoveButton = styled.button`
    position: absolute;
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

    @media (max-width: 768px) {
        padding: 4px 10px;
        font-size: 14px;
}
    `

export const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;

    min-width: 70px;
    `

export const QuantityButton = styled.button`
    width: 22px;
    height: 22px;
    border: none;
    background: transparent;
    color: #e66767;
    font-weight: bold;
    cursor: pointer;
    flex-shrink: 0;

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