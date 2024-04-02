import First from "./First"
import Navbar from "./Navbar"
import Achiev from "./achievements/Achiev"
import Skills from "./skill/Skills"

function App() {

  return (
    <>
      <section id="main">
        <Navbar />
        <First />
      </section>
      <section id="skill">
        <Skills />
      </section>
      <section id="achievements">
        <Achiev />
      </section>
      <section id="works">03.Works</section>
      <section id="contact">04.Contact</section>
    </>
  )
}

export default App
