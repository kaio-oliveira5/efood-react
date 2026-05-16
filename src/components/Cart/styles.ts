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

    .delivery {
        font-size: 16px;
        font-weight: 700;
        color: #FFEBD9;
        margin-top: 32px;
        margin-left: 8px;
    }

    .payment{
        font-size: 16px;
        font-weight: 700;
        color: #FFEBD9;
        margin-top: 32px;
        margin-left: 8px;
    }

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
    /* max-width: 344px; */
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

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px 8px;
`

export const InputGroup = styled.div<{ $error?: boolean }>`
    display: flex;
    flex-direction: column;

    label {
        font-size: 14px;
        font-weight: 700;
        color: #FFEBD9;
        margin-bottom: 8px;
    }

    input {
        height: 32px;
        width: 100%;
        box-sizing: border-box;

        border: ${({ $error }) =>
        $error ? '2px solid red' : '2px solid transparent'};

        padding: 0 8px;
        background: #FFEBD9;
        color: #4b4b4b;

        &:focus {
            outline: none;
        }

        &::placeholder {
        color: #e66767 ;
            font-size: 12px;
        }
    }
`

export const Row = styled.div`
    display: flex;
    
    gap: 8px;

    div {
        flex: 1;
    }
`


export const PaymentContainer = styled.div`
    padding: 0 8px;
    /* max-width: 360px; */


`

export const PaymentTitle = styled.h2`
    font-size: 16px;
    font-weight: 700;
    color: #FFEBD9;
    margin-top: 32px;
    margin-bottom: 16px;
`

export const PaymentForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    
`


export const PaymentGroup = styled.div<{ $error?: boolean }>`
    display: flex;
    flex-direction: column;

    label {
        font-size: 14px;
        font-weight: 700;
        color: #FFEBD9;
        margin-bottom: 8px;
    }

    input {
        width: 100%;
        height: 32px;

        border: ${({ $error }) =>
        $error ? '2px solid red' : '2px solid transparent'};

        background: #FFEBD9;
        padding: 0 8px;
        color: #4b4b4b;
        font-size: 14px;
        box-sizing: border-box;

        
        &:focus {
            outline: none;
        }
        
        &::placeholder {
        color: #e66767 ;
            font-size: 12px;
        }
    }
`

export const PaymentRow = styled.div`
    display: flex;
    gap: 8px;
    justify-content: space-between;

    > div {
        flex: 1;
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

export const DeliveryButton = styled.button`
    font-size: 14px;
    padding: 4px 16px;
    background: #fff;
    color: #e66767;
    border: none;
    font-weight: 700;
    margin: 0 8px;
    margin-top: 8px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover{
        opacity: 0.9;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    `

export const ButtonFinish = styled.button`
    font-size: 14px;
    padding: 4px 16px;
    background: #fff;
    color: #e66767;
    border: none;
    font-weight: 700;
    width: 100%;
    margin-top: 24px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover{
        opacity: 0.9;
    }

    &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
    `

export const BackButton = styled.button`
    font-size: 14px;
    padding: 4px 16px;
    background: #fff;
    color: #e66767;
    border: none;
    font-weight: 700;
    width: 100%;
    margin-top: 8px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover{
        opacity: 0.9;
    }
    `

export const CheckoutButton = styled.button`
    padding: 4px 16px;
    background: #fff;
    color: #e66767;
    border: none;
    font-weight: bold;
    margin: 16px 8px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover{
        opacity: 0.9;
    }

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
    transition: 0.2s ease;

    &:hover {
        background: rgba(0, 0, 0, 0.1);;
    }
    `

export const QuantityValue = styled.span`
    font-size: 10px;
    font-weight: bold;
    `