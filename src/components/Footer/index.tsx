import { FooterContainer, Logo, Text } from './styles'
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <FooterContainer>
            <Logo src={logo} />
            <Text>
                A efood é uma plataforma para divulgação de estabelecimentos, a
                responsabilidade pela entrega, qualidade dos produtos é toda do
                estabelecimento contratado.
            </Text>
        </FooterContainer>
    )
}

export default Footer