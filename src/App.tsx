import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './Pages/Home'
import Restaurant from './Pages/Restaurant'
import Footer from './components/Footer'
import GlobalStyle from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App