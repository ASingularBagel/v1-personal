import { useEffect } from 'react';

// Components
import Content from '@components/Content';
import Sidebar from '@components/Sidebar';

// Redux
import { useDispatch } from 'react-redux';
import { setLocation } from '@redux/features/location/locationSlice';
import { setBgColor } from '@redux/features/theme/themeSlice';

const Blog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Blog @Christian";

    dispatch(setLocation('/blog'));
    dispatch(setBgColor('cyan-950'));

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [dispatch])
  return (
    <div>
        <Sidebar />
        <Content 
        children = {
          <>
            Blog...
          </>
        }
        /> 
    </div>
  )
}

export default Blog