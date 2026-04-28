/* eslint-disable @typescript-eslint/no-explicit-any */

import { useParams } from 'react-router-dom'
import {
    Banner,
    Overlay,
    BannerText,
    Container,
    FoodList,
    FoodCard,
    FoodImage,
    FoodTitle,
    FoodDescription,
    Button,
    ModalContainer,
    OverlayModal,
    ModalImage,
    ModalContent,

} from './styles'
import { useState, useEffect } from 'react'
import fechar from '../../assets/fechar.png'

import { getRestaurants } from '../../api/restaurants'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'


type Food = {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
}

type Restaurant = {
    id: number
    titulo: string
    capa: string
    tipo: string
    cardapio: Food[]
}



const Restaurant = () => {
    const [restaurants, setRestaurants] = useState<any[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedFood, setSelectedFood] = useState<any>(null)
    const dispatch = useDispatch()

    const handleAddToCart = (food: any) => {
        dispatch(add({
            id: food.id,
            nome: food.nome,
            preco: food.preco || 0,
            imagem: food.foto
        }))
        dispatch(open())
        setIsModalOpen(false)
    }


    useEffect(() => {
        getRestaurants().then(data => {
            console.log('RESPOSTA COMPLETA', data)
            setRestaurants(data)
        })
    }, [])


    const { id } = useParams()

    if (restaurants.length === 0) return <h2>Carregando...</h2>

    const restaurant = restaurants.find((r) => r.id === Number(id))
    if (!restaurant) return <h2>Restaurante não encontrado</h2>


    return (
        <>
            <Banner style={{ backgroundImage: `url(${restaurant.capa})` }}>
                <Overlay />
                <BannerText>
                    <p>{restaurant.tipo}</p>
                    <h2>{restaurant.titulo}</h2>
                </BannerText>
            </Banner>

            <Container>

                <FoodList>
                    {restaurant.cardapio?.map((food: any) => (
                        <FoodCard key={food.id}>
                            <FoodImage src={food.foto} alt={food.nome} />


                            <FoodTitle>{food.nome}</FoodTitle>
                            <FoodDescription>{food.descricao}</FoodDescription>

                            <Button onClick={() => {
                                setSelectedFood(food)
                                setIsModalOpen(true)

                            }}>Saiba mais</Button>
                            {/* <Button>Adicionar ao carrinho</Button> */}

                        </FoodCard>
                    ))}
                </FoodList>
            </Container>
            {isModalOpen && (
                <>
                    <OverlayModal onClick={() => setIsModalOpen(false)} />

                    <ModalContainer>
                        <ModalImage src={selectedFood.foto} />

                        <ModalContent>
                            <img onClick={() => setIsModalOpen(false)} src={fechar} />
                            <h2>{selectedFood.nome}</h2>
                            <p>{selectedFood.descricao}</p>
                            <p>{selectedFood.porcao}</p>

                            <button onClick={() => handleAddToCart(selectedFood)}  >Adicionar ao carrinho - {selectedFood.preco.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })}
                            </button>
                        </ModalContent>
                    </ModalContainer>
                </>
            )}
        </>
    )
}

export default Restaurant