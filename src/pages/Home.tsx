import { useEffect } from 'react';

// Components
import Content from '@components/Content';
import Sidebar from '@components/Sidebar';
import Profile from '@components/home/Profile';

// Redux
import { useDispatch } from 'react-redux';
import { setLocation } from '@redux/features/location/locationSlice';
import { setBgColor } from '@redux/features/theme/themeSlice';
import { setMenuOpen } from '@redux/features/ui/uiSlice';

const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    document.title = "Home @ Christian"

    dispatch(setLocation('/'));
    dispatch(setBgColor('stone-950'));
    dispatch(setMenuOpen(false));

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [dispatch])
  return (
    <div className={`h-max relative`}>
      <div className='fixed top-0'>
      </div>
        <Sidebar />
        <Content 
        children = {
          <>
            <Profile />
          </>
        }
        />
    </div>
  )
}

export default Home