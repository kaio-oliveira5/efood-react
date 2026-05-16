
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
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
    QuantityValue,
    FormContainer,
    InputGroup,
    Row,
    DeliveryButton,
    PaymentTitle,
    PaymentContainer,
    PaymentForm,
    PaymentRow,
    PaymentGroup,
    ButtonFinish,
    BackButton
} from './styles'

import lixo from '../../assets/lixeira-de-reciclagem 1.png'
import { remove, close, add, clear } from '../../store/reducers/cart'

const Cart = () => {
    const dispatch = useDispatch()

    // controle das etapas
    const [step, setStep] = useState(1)

    // entrega
    const [receiver, setReceiver] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [number, setNumber] = useState('')
    const [complement, setComplement] = useState('')

    // pagamento
    const [cardName, setCardName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cardCode, setCardCode] = useState('')
    const [expiresMonth, setExpiresMonth] = useState('')
    const [expiresYear, setExpiresYear] = useState('')

    const [hasTriedSubmit, setHasTriedSubmit] = useState(false)
    const [hasTriedPayment, setHasTriedPayment] = useState(false)

    // pedido
    const [orderId, setOrderId] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const items = useSelector((state: any) => state.cart.items)
    const isOpen = useSelector((state: any) => state.cart.isOpen)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])


    // se estiver fechado, não renderiza nada



    const total = items.reduce((acc: number, item: any) => {
        return acc + item.preco * item.quantity
    }, 0)

    // FINALIZAR PAGAMENTO
    const handleFinishPayment = async () => {
        try {
            setIsLoading(true)

            const response = await fetch(
                'https://api-ebac.vercel.app/api/efood/checkout',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },

                    body: JSON.stringify({
                        products: items.map((item: any) => ({
                            id: item.id,
                            price: item.preco
                        })),

                        delivery: {
                            receiver,
                            address: {
                                description: address,
                                city,
                                zipCode,
                                number: Number(number),
                                complement
                            }
                        },

                        payment: {
                            card: {
                                name: cardName,
                                number: cardNumber,
                                code: Number(cardCode),

                                expires: {
                                    month: Number(expiresMonth),
                                    year: Number(expiresYear)
                                }
                            }
                        }
                    })
                }
            )

            const data = await response.json()

            setOrderId(data.orderId)

            dispatch(clear())

            setStep(4)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    const resetCheckout = () => {
        // entrega
        setReceiver('')
        setAddress('')
        setCity('')
        setZipCode('')
        setNumber('')
        setComplement('')

        // pagamento
        setCardName('')
        setCardNumber('')
        setCardCode('')
        setExpiresMonth('')
        setExpiresYear('')

        // validações
        setHasTriedSubmit(false)
        setHasTriedPayment(false)

        // fluxo
        setStep(1)

        // pedido
        setOrderId('')
    }

    if (!isOpen) return null

    return (
        <>
            <Overlay onClick={() => dispatch(close())} />

            {/* STEP 1 - CARRINHO */}
            {step === 1 && (
                <CartContainer>
                    <CartDiv>
                        {items.length > 0 ? (
                            items.map((item: any) => (
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

                                        <QuantityContainer>
                                            <QuantityButton
                                                onClick={() => dispatch(remove(item.id))}
                                            >
                                                −
                                            </QuantityButton>

                                            <QuantityValue>{item.quantity}</QuantityValue>

                                            <QuantityButton
                                                onClick={() =>
                                                    dispatch(
                                                        add({
                                                            id: item.id,
                                                            nome: item.nome,
                                                            preco: item.preco,
                                                            imagem: item.imagem
                                                        })
                                                    )
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
                            ))
                        ) : (
                            <p
                                style={{
                                    color: '#FFEBD9',
                                    textAlign: 'center',
                                    marginTop: '40px',
                                    lineHeight: '22px',
                                    fontSize: '14px'
                                }}
                            >
                                Seu carrinho está vazio.
                                <br />
                                Adicione algum prato para continuar.
                            </p>
                        )}
                    </CartDiv>

                    {items.length > 0 && (
                        <>
                            <TotalContainer>
                                <p>Valor total</p>

                                <span>
                                    {total.toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    })}
                                </span>
                            </TotalContainer>

                            <CheckoutButton onClick={() => setStep(2)}>
                                Continuar com a entrega
                            </CheckoutButton>
                        </>
                    )}
                </CartContainer>
            )}

            {/* STEP 2 - ENTREGA */}
            {step === 2 && (
                <CartContainer>
                    <h2 className="delivery">Entrega</h2>

                    <FormContainer>
                        <InputGroup $error={hasTriedSubmit && !receiver}>
                            <label>Quem irá receber</label>

                            <input
                                type="text"
                                value={receiver}
                                onChange={(e) => setReceiver(e.target.value)}
                            />
                        </InputGroup>

                        <InputGroup $error={hasTriedSubmit && !address}>
                            <label>Endereço</label>

                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </InputGroup>

                        <InputGroup $error={hasTriedSubmit && !city}>
                            <label>Cidade</label>

                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </InputGroup>

                        <Row>
                            <InputGroup $error={hasTriedSubmit && zipCode.replace(/\D/g, '').length !== 8}>
                                <label>CEP</label>

                                <input
                                    type="text"
                                    value={zipCode}
                                    maxLength={9}
                                    onChange={(e) => {
                                        let value = e.target.value.replace(/\D/g, '')

                                        value = value.replace(/^(\d{5})(\d)/, '$1-$2')

                                        setZipCode(value)
                                    }}
                                    placeholder="00000-000"
                                />
                            </InputGroup>

                            <InputGroup $error={hasTriedSubmit && !number}>
                                <label>Número</label>

                                <input
                                    type="text"
                                    value={number}
                                    maxLength={6}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, '')

                                        setNumber(value)
                                    }}
                                    placeholder="123"
                                />
                            </InputGroup>
                        </Row>

                        <InputGroup>
                            <label>Complemento (opcional)</label>

                            <input
                                type="text"
                                value={complement}
                                onChange={(e) => setComplement(e.target.value)}
                            />
                        </InputGroup>
                    </FormContainer>

                    <DeliveryButton
                        disabled={
                            !receiver ||
                            !address ||
                            !city ||
                            zipCode.replace(/\D/g, '').length !== 8 ||
                            !number
                        }
                        onClick={() => {
                            setHasTriedSubmit(true)

                            if (
                                !receiver ||
                                !address ||
                                !city ||
                                zipCode.replace(/\D/g, '').length !== 8 ||
                                !number
                            ) {
                                return
                            }

                            setStep(3)
                        }}
                    >
                        Continuar com pagamento
                    </DeliveryButton>

                    <DeliveryButton onClick={() => setStep(1)}>
                        Voltar para o carrinho
                    </DeliveryButton>
                </CartContainer>
            )}

            {/* STEP 3 - PAGAMENTO */}
            {step === 3 && (
                <CartContainer>
                    <PaymentContainer>
                        <PaymentTitle>
                            Pagamento - Valor a pagar{' '}
                            {total.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })}
                        </PaymentTitle>

                        <PaymentForm>
                            <PaymentGroup $error={hasTriedPayment && !cardName}>
                                <label>Nome no cartão</label>

                                <input
                                    type="text"
                                    value={cardName}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '')

                                        setCardName(value)
                                    }}
                                />
                            </PaymentGroup>

                            <PaymentRow>
                                <PaymentGroup style={{ maxWidth: '228px' }}
                                    $error={hasTriedPayment && cardNumber.replace(/\D/g, '').length !== 16}>
                                    <label>Número do cartão</label>

                                    <input
                                        type="text"
                                        value={cardNumber}
                                        maxLength={19}
                                        onChange={(e) => {
                                            let value = e.target.value.replace(/\D/g, '')

                                            value = value.replace(/(\d{4})(?=\d)/g, '$1 ')

                                            setCardNumber(value)
                                        }}
                                        placeholder="0000 0000 0000 0000"
                                    />
                                </PaymentGroup>

                                <PaymentGroup style={{ maxWidth: '87px' }}
                                    $error={hasTriedPayment && cardCode.length !== 3}>
                                    <label>CVV</label>

                                    <input
                                        type="text"
                                        value={cardCode}
                                        maxLength={3}
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/\D/g, '')

                                            setCardCode(value)
                                        }}
                                        placeholder="123"
                                    />
                                </PaymentGroup>
                            </PaymentRow>

                            <PaymentRow>
                                <PaymentGroup style={{ maxWidth: '155px' }}
                                    $error={hasTriedPayment &&
                                        (
                                            expiresMonth.length !== 2 ||
                                            Number(expiresMonth) < 1 ||
                                            Number(expiresMonth) > 12
                                        )
                                    }>
                                    <label>Mês de vencimento</label>

                                    <input
                                        type="text"
                                        value={expiresMonth}
                                        maxLength={2}
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/\D/g, '')

                                            setExpiresMonth(value)
                                        }}
                                        placeholder="MM"
                                    />
                                </PaymentGroup>

                                <PaymentGroup style={{ maxWidth: '155px' }}
                                    $error={hasTriedPayment && expiresYear.length !== 4}>
                                    <label>Ano de vencimento</label>

                                    <input
                                        type="text"
                                        value={expiresYear}
                                        maxLength={4}
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/\D/g, '')

                                            setExpiresYear(value)
                                        }}
                                        placeholder="AAAA"
                                    />
                                </PaymentGroup>
                            </PaymentRow>
                        </PaymentForm>

                        <ButtonFinish
                            disabled={
                                isLoading ||
                                !cardName ||
                                cardNumber.replace(/\D/g, '').length !== 16 ||
                                cardCode.length !== 3 ||
                                expiresMonth.length !== 2 ||
                                Number(expiresMonth) < 1 ||
                                Number(expiresMonth) > 12 ||
                                expiresYear.length !== 4
                            }
                            onClick={() => {
                                setHasTriedPayment(true)

                                if (
                                    !cardName ||
                                    !cardNumber ||
                                    !cardCode ||
                                    !expiresMonth ||
                                    !expiresYear
                                ) {
                                    return
                                }

                                handleFinishPayment()
                            }}
                        >
                            {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
                        </ButtonFinish>

                        <BackButton onClick={() => setStep(2)}>
                            Voltar para edição de endereço
                        </BackButton>
                    </PaymentContainer>
                </CartContainer >
            )}

            {
                step === 4 && (
                    <CartContainer>
                        <PaymentContainer>
                            <PaymentTitle>
                                Pedido realizado - {orderId}
                            </PaymentTitle>

                            <p
                                style={{
                                    color: '#FFEBD9',
                                    fontSize: '14px',
                                    lineHeight: '22px',
                                    marginTop: '16px'
                                }}
                            >
                                Estamos felizes em informar que seu pedido já está em
                                processo de preparação e, em breve, será entregue no
                                endereço fornecido.

                                <br />
                                <br />

                                Gostaríamos de ressaltar que nossos entregadores não
                                estão autorizados a realizar cobranças extras.

                                <br />
                                <br />

                                Lembre-se da importância de higienizar as mãos após o
                                recebimento do pedido.

                                <br />
                                <br />

                                Esperamos que desfrute de uma deliciosa e agradável
                                experiência gastronômica. Bom apetite!
                            </p>

                            <ButtonFinish
                                onClick={() => {
                                    resetCheckout()
                                    dispatch(close())
                                }}
                            >
                                Concluir
                            </ButtonFinish>
                        </PaymentContainer>
                    </CartContainer>
                )
            }
        </>
    )
}

export default Cart