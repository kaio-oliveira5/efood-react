import RestaurantCard from '../../components/RestaurantCard'
import { List } from './styles'
import { Container } from '../../components/Container/styles'
import restaurants from '../../data/restaurants'
import Hero from '../../components/Hero'

const Home = () => {
    return (
        <Container>
            <>
                <Hero />
                <Container>
                    <List></List>
                </Container>
            </>
            <h2>Lista de restaurantes</h2>

            <List>
                {restaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.id}
                        id={restaurant.id}
                        title={restaurant.title}
                        description={restaurant.description}
                        image={restaurant.image}
                    />
                ))}
            </List>
        </Container>
    )
}

export default Home