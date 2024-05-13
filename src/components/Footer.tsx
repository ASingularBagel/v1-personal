import { RootState } from '@redux/store';
import { useSelector } from 'react-redux';

const Footer = () => {
  const bgColor = useSelector((state: RootState) => state.theme.bgColor);

  const colorMap: { [key: string]: string } = {
    'stone-950': 'bg-stone-950',
    'teal-950': 'bg-teal-950',
    'cyan-950': 'bg-cyan-950'
  }

  const bgColorClass = colorMap[bgColor] || 'stone-950';
  return (
    <>
    <div id="boundary-element"></div>
    <footer className={`${bgColorClass} `}>
        <div className={`h-44 bg-transparent text-white flex justify-center items-center`}>
            <p>© 2024 Portfolio</p>
        </div>
    </footer>
    </>
    
  )
}

export default Footer