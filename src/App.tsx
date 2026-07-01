import Nav from "./components/Nav";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="top">
      <Nav />
      <main>
        <About />
        <TechStack />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
