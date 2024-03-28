import First from "./First"
import Navbar from "./Navbar"
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
      <section id="works">02.Works</section>
      <section id="experiences">03.Experience</section>
      <section id="contact">04.Contact</section>
    </>
  )
}

export default App
