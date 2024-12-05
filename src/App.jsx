import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Creations } from "./components/main/Creations"
import { Leader } from "./components/main/Leader"

function App() {

  return (
    <>
      <Header />
      <Leader />
      <Creations />
      <Footer />
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Diego Ramírez</a>.
      </div>
    </>
  )
}

export default App
