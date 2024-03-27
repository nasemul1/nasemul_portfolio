import First from "./First"
import Navbar from "./Navbar"

function App() {

  return (
    <>
      <section id="main">
        <Navbar />
        <First />
      </section>
      <section id="about">01.About</section>
      <section id="works">02.Works</section>
      <section id="experiences">03.Experience</section>
      <section id="contact">04.Contact</section>
    </>
  )
}

export default App
