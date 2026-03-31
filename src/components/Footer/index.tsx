import { FooterContainer, Logo, Text, Social } from './styles'
import logo from '../../assets/logo.png'
import insta from '../../assets/instagram-round-svgrepo-com (1) 1.png'
import face from '../../assets/facebook-round-svgrepo-com 1.png'
import twitter from '../../assets/twitter-2-svgrepo-com 1.png'

const Footer = () => {
    return (
        <FooterContainer>
            <Logo src={logo} />
            <Social>
                <img src={insta} />
                <img src={face} />
                <img src={twitter} />
            </Social>
            <Text>
                A efood é uma plataforma para divulgação de estabelecimentos, a
                responsabilidade pela entrega, qualidade dos produtos é toda do
                estabelecimento contratado.
            </Text>
        </FooterContainer>
    )
}

export default Footer