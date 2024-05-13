import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Redux
import { setMenuOpen } from '@redux/features/ui/uiSlice';
import { useDispatch } from 'react-redux';

const Menu = () => {
    const dispatch = useDispatch();
    const closeMenu = () => {
        dispatch(setMenuOpen(false));
    }
  return (
    <>
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1}}
    transition={{ duration: 0.2 }}
    style={{ zIndex: 99 }}
    children={
        <div className='fixed text-left p-12 bg-stone-950 h-screen w-full z-30'>
            <div className='absolute bottom-24 flex flex-col'>
                <Link to={'/blog'}
                className='text-2xl font-bold text-white mb-4'
                >
                    Blog
                </Link>
                <Link to={'/projects'}
                className='text-2xl font-bold text-white mb-4'
                >
                    Projects
                </Link>
            </div>
            <div className='absolute h-12 w-3/4 bottom-0 border-t-2 pr-12'>
                <p>© 2024 Portfolio</p>
            </div>
        </div>
    }
    onClick={closeMenu}
    />
    </>
  )
}

export default Menu