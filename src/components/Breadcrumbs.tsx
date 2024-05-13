import { RootState } from '@redux/store';
import { useEffect, useState } from 'react'; 
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Breadcrumbs = () => {
    const location= useSelector((state: RootState) => state.location);
    const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);

    useEffect(() => {
        const path = location.pathname;
        const paths = path.split("/");
        const breads = paths.filter((bread) => bread !== "");

        setBreadcrumbs(breads);
    }, [location.pathname]);
    return (
        <div className="text-sm breadcrumbs">
            <ul>
                <Link
                to={'/'}
                className='hover:opacity-50 transition-opacity duration-200 ease-in-out flex flex-row'
                ><p className='text-lg mr-2'>@Christian</p></Link>
                <p className='text-lg font-bold flex flex-row'>/{breadcrumbs.map((bread, index) => (
                        <Link to={bread} key={index}
                        className='hover:opacity-50 transition-opacity duration-200 ease-in-out flex flex-row'
                        >
                        <li className='ml-2' >{bread} /</li>
                        </Link>
                        ))}
                </p>
            </ul>
        </div>
    )
}