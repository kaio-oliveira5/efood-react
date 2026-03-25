import { Card, Image, Content, Title, Description, CardLink, Button } from './styles'

type Props = {
    id: number
    title: string
    description: string
    image: string
}

const RestaurantCard = ({ title, description, image, id }: Props) => {
    return (
        <CardLink to={`/restaurant/${id}`}>
            <Card>
                <Image src={image} alt={title} />
                <Content>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Content>
                <Button>Saiba mais</Button>
            </Card>
        </CardLink>
    )
}



export default RestaurantCard