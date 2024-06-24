import './App.css'
import Weather from './components/Weather'
import clear_icon from "./assets/clear.png"
function App() {

  return (
    <div className="App">
      <div className='heading'>
        <h1>Get Weather</h1> 
        <img height="100px" src={clear_icon} alt="" />
      </div>
      <Weather />
    </div>
  );
}

export default App
