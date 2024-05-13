import { useEffect } from 'react';

// Components
import Sidebar from '@components/Sidebar';
import Content from '@components/Content';

// Redux
import { useDispatch } from 'react-redux';
import { setLocation } from '@redux/features/location/locationSlice';
import { setBgColor } from '@redux/features/theme/themeSlice';

const NotFound = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "NotFound @Christian";

    dispatch(setLocation('/Where Am I ?'));
    dispatch(setBgColor('cyan-950'));

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [dispatch])
  return (
    <div>
        <Sidebar />
        <Content 
        children= {
          <>
            <p>I could swear this page exists...</p>
            <p>...or does it ?</p>
          </>
        }
        />
    </div>
  )
}

export default NotFound