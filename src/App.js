import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import About from "./components/About"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" style={{backgroundColor: '#1EFFC9', color: 'FFFFFF'}}>
      <Header />
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
