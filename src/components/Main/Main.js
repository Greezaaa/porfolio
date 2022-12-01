import { Route, Routes } from 'react-router-dom';
import style from './main.module.scss'
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { useState, useEffect } from 'react';
const Main = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={style.main}>
      {loading ? (<div className={style.loader}>
        <div className={style.container}>
          <div className={style.spinner}></div>
        </div>
        <div className={style.container}>
          <div className={style.spinner}></div>
        </div>
        {/* 
        <div className={style.container}>
          <div className={style.spinner}></div>
        </div>
        <div className={style.container}>
          <div className={style.spinner}></div>
        </div> */}
      </div>
      ) : (
        <Routes>

          <>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </>

        </Routes>
      )}

      
    </div>
  )
}
export default Main