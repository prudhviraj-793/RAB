import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Network from "./components/Network";
import Numbers from "./components/Numbers";
import Plans from "./components/Plans";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";
import Summery from "./components/Summery";
import Testimonials from "./components/Testimonials";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <Summery />
      <Numbers />
      <Services />
      <Plans />
      <Network />
      <Clients />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
