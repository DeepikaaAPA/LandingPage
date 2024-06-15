import { NavBar } from "./Components/NavBar";
import { Header } from "./Components/Header";
import { Features } from "./Components/Features";
import "./App.css";
import { Reviews } from "./Components/Reviews";
import { CallToAction } from "./Components/CallToAction";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Features />
      <Reviews />
      <CallToAction />
      {/* <Footer /> */}
    </>
  );
}

export default App;
