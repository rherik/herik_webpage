import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Homepage from './Components/Homepage/Homepage'

export default function App () {
  return (
    <>
    <div className="app-shell">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
    </>
  )
}
