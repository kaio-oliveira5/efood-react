import RestaurantCard from '../../components/RestaurantCard'
import { List } from './styles'
import { Container } from '../../components/Container/styles'
import restaurants from '../../data/restaurants'
import Hero from '../../components/Hero'


const Home = () => {
    return (

        <>
            <Hero />
            <Container>
                <List>
                    {restaurants.map((restaurant) => (
                        <RestaurantCard
                            key={restaurant.id}
                            id={restaurant.id}
                            title={restaurant.title}
                            description={restaurant.description}
                            image={restaurant.image}
                            rating={restaurant.rating}
                            category={restaurant.category}
                            highlight={restaurant.highlight} />
                    ))}
                </List>
            </Container>
        </>
    )
}

export default Home