import { useState } from 'react';

import { Link } from 'react-router-dom'
import Sticky from 'react-stickynode'

// Icons
import { HiOutlineArrowUpRight } from "react-icons/hi2";

// Redux
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const bgColor = useSelector((state: RootState) => state.theme.bgColor);

  return (
    <div className='lg:block md:block hidden absolute w-max'>
    <Sticky bottomBoundary='#boundary-element'
    >
        <div className={'w-1/4 overflow-auto p-16 h-screen'}>
          <div className='absolute bottom-8 w-max'>
          <p className='text-2xl mb-3'>Check out my...</p>
            <ul className='list-disc w-max text-2xl z-0' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <li>
                <Link className={isHovered ? 'opacity-50 hover:opacity-100' : ''} to={'/projects'}>
                  Projects
                </Link>
              </li>
              <li>
                <Link className={isHovered ? 'opacity-50 hover:opacity-100' : ''} to={'/blog'}>
                  Blog
                </Link>
              </li>
              <li>
                <Link className={isHovered ? 'opacity-50 hover:opacity-100' : ''} to={'/'}>
                  Resume
                </Link>
              </li>
              <li>
                <Link
                className={isHovered ? 'opacity-50 hover:opacity-100' : ''}
                to={'https://github.com/ASingularBagel'}
                target='_blank' rel='noreferrer'
                >
                <p className='inline-flex'>Github <HiOutlineArrowUpRight /></p>
                </Link>
              </li>
            </ul>
            <Link to={'/contact'}>
              <p className={`mt-4 btn btn-primary no-animation bg-transparent text-xl ${bgColor === 'orange-50' ? 'text-black hover:text-black border-black hover:bg-orange-100' : 'text-white hover:text-black'}`}>Contact info</p>
            </Link>
          </div>
        </div>
      </Sticky>
    </div>
  )
}

export default Sidebar