import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import CardList from './components/CardList';

import './styles.css'

function App() {
  return (
    <div className="App">
    <NavBar />

    <AboutMe />

    <CardList />

    </div>
  );
}

export default App;
