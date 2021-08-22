import logo from './logo.svg';
import './App.css';
import Body from '../src/components/store';
import Header from '../src/components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
     <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
