/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector, useDispatch } from 'react-redux'
import {
    Overlay,
    CartContainer,
    CartItem,
    ItemImage,
    ItemInfo,
    RemoveButton,
    TotalContainer,
    CheckoutButton,
    CartDiv,
    QuantityContainer,
    QuantityButton,
    QuantityValue
} from './styles'

import lixo from '../../assets/lixeira-de-reciclagem 1.png'
import { remove, close, add } from '../../store/reducers/cart'

const Cart = () => {
    const dispatch = useDispatch()

    const items = useSelector((state: any) => state.cart.items)
    const isOpen = useSelector((state: any) => state.cart.isOpen)

    // 🔥 se estiver fechado, não renderiza nada
    if (!isOpen) return null


    const total = items.reduce((acc: number, item: any) => {
        return acc + item.preco * item.quantity
    }, 0)

    return (
        <>
            {/* 🔥 clicar fora fecha */}
            <Overlay onClick={() => dispatch(close())} />

            <CartContainer>
                <CartDiv>
                    {items.map((item: any) => (
                        <CartItem key={item.id}>
                            <ItemImage src={item.imagem} />

                            <ItemInfo>
                                <h4>{item.nome}</h4>
                                <p>
                                    {item.preco.toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    })}
                                </p>
                                {/* <span>Qtd: {item.quantity}</span> */}
                                {/* <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <button onClick={() => dispatch(remove(item.id))}>➖</button>

                                    <span>{item.quantity}</span>

                                    <button
                                        onClick={() =>
                                            dispatch(add({
                                                id: item.id,
                                                nome: item.nome,
                                                preco: item.preco,
                                                imagem: item.imagem
                                            }))
                                        }
                                    >
                                        ➕
                                    </button>
                                </div> */}
                                <QuantityContainer>
                                    <QuantityButton onClick={() => dispatch(remove(item.id))}>
                                        −
                                    </QuantityButton>

                                    <QuantityValue>{item.quantity}</QuantityValue>

                                    <QuantityButton
                                        onClick={() =>
                                            dispatch(add({
                                                id: item.id,
                                                nome: item.nome,
                                                preco: item.preco,
                                                imagem: item.imagem
                                            }))
                                        }
                                    >
                                        +
                                    </QuantityButton>
                                </QuantityContainer>
                            </ItemInfo>

                            <RemoveButton onClick={() => dispatch(remove(item.id))}>
                                <img src={lixo} alt="Remover" />
                            </RemoveButton>
                        </CartItem>
                    ))}
                </CartDiv>

                <TotalContainer>
                    <p>Valor total</p>
                    <span>
                        {total.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                    </span>
                </TotalContainer>

                <CheckoutButton>
                    Continuar com a entrega
                </CheckoutButton>
            </CartContainer>
        </>
    )
}

export default Cart