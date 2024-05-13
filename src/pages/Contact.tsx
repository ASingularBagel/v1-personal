import { useEffect } from 'react';

// Components
import Content from '@components/Content';
import Sidebar from '@components/Sidebar';

// Redux
import { useDispatch } from 'react-redux';
import { setLocation } from '@redux/features/location/locationSlice';
import { setBgColor } from '@redux/features/theme/themeSlice';

const Contact = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Contact @Christian";

    dispatch(setLocation('/contact'));
    dispatch(setBgColor('orange-50'));

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [dispatch])
  return (
    <div>
        <Sidebar />
        <Content 
        children = {
          <>
            Contact information goes here !
          </>
        }
        />
    </div>
  )
}

export default Contact