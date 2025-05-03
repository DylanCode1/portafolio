import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column'}}>
     <div style={{ flex:1 }}>
     <Header />
      <Routes>
        <Route path="/" element={<SobreMi />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
     </div>
      <Footer />
    </div>
  )
}

export default App
