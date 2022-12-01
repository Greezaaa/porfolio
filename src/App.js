import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header.js'
import Main from './components/Main/Main';
function App() {
  const [coordsOne, setCoordsOne] = useState([])
  const [coordsTwo, setCoordsTwo] = useState([])
  const [coordsThree, setCoordsThree] = useState([])
  const handleMouseMove = (e) => {
    let coord = [e.clientX, e.clientY]

    setTimeout(() => {
      setCoordsOne(coord)
    }, 15)

    setTimeout(() => {
      setCoordsTwo(coord)
    }, 100)

    setTimeout(() => {
      setCoordsThree(coord)
    }, 200)



  }
  const printCursor = (coordsOne, coordsTwo, coordsThree) => {
    return (
      <>
        <div className="cursorOne" style={{
          left: coordsOne[0] ? coordsOne[0] - 25: 0 ,
          top: coordsOne[1] ? coordsOne[1] - 25: 0 
        }}></div>
        <div className="cursorTwo" style={{
          left: coordsTwo[0] ? coordsTwo[0] - 25: 0 ,
          top: coordsTwo[1] ? coordsTwo[1] - 25: 0 
        }}></div>
        <div className="cursorThree" style={{
          left: coordsThree[0] ? coordsThree[0] - 25: 0 ,
          top: coordsThree[1] ? coordsThree[1] - 25: 0 
        }}></div>
      </>
    )
  }
  // useEffect(() => {
  //     printCursor(coords)
  // }, [coords])
  return (
    <BrowserRouter>


  
        
        <div className="App"  onMouseMove={(e) => {
          handleMouseMove(e)
        }}>{printCursor(coordsOne, coordsTwo, coordsThree)}
          
          <Header cords={coordsOne}/>
          <Main />
        </div>

    </BrowserRouter>
  );
}

export default App;
