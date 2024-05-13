import { BrowserRouter, Routes, Route } from "react-router-dom"

// Components
import Header from '@components/Header';
import Footer from '@components/Footer';
import Menu from '@components/Menu';

// Pages
import Home from '@pages/Home';
import Blog from '@pages/Blog';
import Projects from '@pages/Projects';
import Contact from '@pages/Contact';
import NotFound from "./pages/NotFound";

// Redux
import { useSelector } from 'react-redux'
import { RootState } from "@redux/store";
import { motion } from 'framer-motion';
import { useEffect } from "react";

function App() {
  const bgColor = useSelector((state: RootState) => state.theme.bgColor);

  const colorMap: { [key: string]: string } = {
    'stone-950': 'bg-stone-950',
    'teal-950': 'bg-teal-950',
    'cyan-950': 'bg-cyan-950',
    'orange-50': 'bg-orange-50',
  }

  const bgColorClass = colorMap[bgColor] || 'stone-950';

  const isMenuOpen = useSelector((state: RootState) => state.ui.isMenuOpen);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

  }, [isMenuOpen, bgColorClass]);

  return (
   <>
      <div className={` ${bgColorClass === 'bg-orange-50' ? 'text-black' : 'text-white'} font-jetbrains flex flex-col overflow-x-hidden h-max`}>
        <BrowserRouter>
          <Header />
          <div className={`h-max ${bgColorClass}`}>
          {isMenuOpen && <Menu />}
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            transition={{ duration: isMenuOpen ? 0.2 : 0.5 }}
            className={`${bgColorClass}`}
            children={
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            }
            />
          </div>
          <Footer />
        </BrowserRouter>
      </div>
   </>
  )
}

export default App