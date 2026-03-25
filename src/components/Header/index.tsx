import { Link, useLocation } from 'react-router-dom'
import {
    HeaderBar,
    Container,
    Logo,
    Nav,
    LinkItem,
    Empty
} from './styles'
import Img from '../../assets/logo.png'

const Header = () => {
    const location = useLocation()
    const isHome = location.pathname === '/'

    return (
        <HeaderBar>
            <Container>
                {/* ESQUERDA */}
                {isHome ? (
                    <Empty />
                ) : (
                    <Link to="/">
                        <LinkItem>Restaurantes</LinkItem>
                    </Link>
                )}

                {/* LOGO CENTRAL */}
                <Link to="/">
                    <Logo src={Img} />
                </Link>

                {/* DIREITA */}
                {isHome ? (
                    <Empty />
                ) : (
                    <Nav>
                        <LinkItem>0 produto(s)</LinkItem>
                    </Nav>
                )}
            </Container>
        </HeaderBar>
    )
}

export default Header