import { HeroContainer, Logo, Title } from './styles'
import logo from '../../assets/logo.png'

const Hero = () => (
    <HeroContainer>
        <Logo src={logo} alt="efood" />

        <Title>
            Viva experiências gastronômicas no conforto da sua casa
        </Title>
    </HeroContainer>
)

export default Hero