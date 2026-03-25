import { Container } from './styles'

type Props = {
    children: React.ReactNode
}

const ContainerComponent = ({ children }: Props) => {
    return <Container>{children}</Container>
}

export default ContainerComponent