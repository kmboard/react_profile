import './App.css';
import Header from "./components/Header";
import Profile from './components/Profile';
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App" style={{backgroundColor: '#1EFFC9', color: 'FFFFFF'}}>
      <Header/>
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
