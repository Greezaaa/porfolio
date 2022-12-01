import { Route, Routes } from 'react-router-dom';
import style from './main.module.scss'
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';
const Main = () => {

    return (
        <div className={style.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
    )
}
export default Main