import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Home from './Pages/Home'
import Restaurant from './Pages/Restaurant'
import Footer from './components/Footer'
import GlobalStyle from './styles'
import Cart from './components/Cart'

const AppContent = () => {
  const location = useLocation()

  return (
    <>
      <GlobalStyle />
      <Cart />
      {/* ❌ NÃO mostra header na home */}
      {location.pathname !== '/' && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
      </Routes>

      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App