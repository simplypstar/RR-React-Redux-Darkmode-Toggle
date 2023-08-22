import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useSelector, useDispatch } from 'react-redux';
import { toggleDark, toggleLight} from './features/modeSlice'


function App() {
  const mode = useSelector((state) => state.mode)
  const dispatch = useDispatch()

  const toggleMode =() => {
    mode.darkMode 
      ? dispatch(toggleLight()) 
      : dispatch(toggleDark())
  }    

  return (
    <div style={{ backgroundColor: mode.color4, color: 'black' }} className="App">
      <Nav />
      <button onClick={toggleMode}>Toggle Here</button>
      <ContentWrapper />
      <Footer />
    </div>
  );

  }
export default App
