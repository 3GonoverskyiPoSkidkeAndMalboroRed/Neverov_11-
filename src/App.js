/* eslint-disable */
import './App.css';
import Header from './components/Header/header';
import MainForm from './components/Form/form';
import Footer from './components/Footer/footer';
import Info from './components/Information/Info';
import Main from './components/Main/Main'
function App() {
  return (
    <div className="App">

      <Header />
      <div className="main-container">
        <Main />
      </div>
      <Footer />
      
      </div>
  );
}

export default App;
