
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    HeaderBar,
    Container,
    Logo,
    Nav,
    LinkItem,
    Empty
} from './styles'

import logo from '../../assets/logo.png'
import { open } from '../../store/reducers/cart'

const Header = () => {
    const location = useLocation()
    const isHome = location.pathname === '/'

    const dispatch = useDispatch()
    const items = useSelector((state: any) => state.cart.items)

    const totalItems = items.reduce((acc: number, item: any) => {
        return acc + item.quantity
    }, 0)

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
                    <Logo src={logo} alt="efood" />
                </Link>

                {/* DIREITA */}
                {isHome ? (
                    <Empty />
                ) : (
                    <Nav>
                        <LinkItem onClick={() => dispatch(open())}>
                            {totalItems} produto(s)
                        </LinkItem>
                    </Nav>
                )}
            </Container>
        </HeaderBar>
    )
}

export default Header