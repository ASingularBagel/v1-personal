import React from 'react'

// Components 
import { Breadcrumbs } from '@components/Breadcrumbs';

// Icons
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { setMenuOpen } from '@redux/features/ui/uiSlice';

const Header = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: RootState) => state.ui.isMenuOpen);
  const bgColor = useSelector((state: RootState) => state.theme.bgColor);

  const handleMenu = () => {
    dispatch(setMenuOpen(!isMenuOpen));
  }

  return (
    <div className='fixed top-4 z-50 navbar items-center px-8'>
        <div className='navbar-start grid grid-flow-row'>
            <div className=''>
            <Breadcrumbs />
            </div>
            <div className='text-green-500 flex items-center gap-2'>
              <p className='animate-ping h-2 w-2 rounded-full bg-green-500'></p>
              Open to work
            </div>
        </div>
        <div className='navbar-end'>
            <div className='navbar-item'>
                <label className='cursor-pointer text-white text-4xl' onClick={handleMenu}>{isMenuOpen ? <p className='border-2 rounded-full mr-3 mt-1'><IoCloseOutline /></p> : <p className={`${bgColor === 'orange-50' ? 'text-black' : 'text-white'}`}><IoIosMenu /></p>}</label>
            </div>
        </div>
    </div>
  )
}

export default Header