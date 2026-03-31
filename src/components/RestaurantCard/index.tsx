import { Card, Image, Content, Title, Description, CardLink, Button, Rating, TitleContainer, ImageContainer, Category, Badge } from './styles'
import { FaStar } from 'react-icons/fa'

type Props = {
    id: number
    title: string
    description: string
    image: string
    rating: number
    category: string
    highlight: boolean
}

const RestaurantCard = ({ title, description, image, id, rating, category, highlight }: Props) => {
    return (
        <Card>
            <ImageContainer>
                <Image src={image} alt={title} />


                <Category>
                    {highlight && <Badge>Destaque da semana</Badge>}
                    <Badge>{category}</Badge>
                </Category>
            </ImageContainer>

            <Content>
                <TitleContainer>
                    <Title>{title}</Title>
                    <Rating> {rating} <FaStar /> </Rating>
                </TitleContainer>

                <Description>{description}</Description>
                <CardLink to={`/restaurant/${id}`}>
                    <Button>Saiba mais</Button>
                </CardLink>
            </Content>
        </Card>
    )
}



export default RestaurantCard