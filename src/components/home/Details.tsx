import React, { useState, useEffect } from 'react';

// Icons
import { BiExpandHorizontal } from "react-icons/bi";

type DetailProps = {
  pre: string;
  placeholder: string; 
  details: JSX.Element | string;
  end: string; 
  separator: string;
  additional?: JSX.Element | string;
  className?: string;
}

const Details: React.FC<DetailProps> = ({ pre, placeholder, details, end, separator, additional, className }) => {
  const [ show, setShow ] = useState<boolean>(false);
    const handleExpand = () => {
      setShow(!show);
    }

    return (
      <>
      <div className={`break-words items-center gap-2 ${className}`}>
        {show ? 
        <>
        <span>{pre}</span>
        <span className="text-blue-500 hover:text-blue-400 cursor-pointer" onClick={handleExpand}>{placeholder}</span>
        <span>{separator}</span>
        <span>{details}</span>
        <span className=''>{additional}</span>
        </>
       : 
          <>
            <span>{pre}</span>
            <span className="text-blue-500 hover:text-blue-400 cursor-pointer" onClick={handleExpand}>{placeholder}</span>
          </>
        }
        { !show && 
          <>
          <span className='inline-flex bg-stone-700 hover:bg-stone-600 rounded-md mx-2 w-6 cursor-pointer '>
            <BiExpandHorizontal onClick={handleExpand} /> 
          </span> 
          <span className=''>{additional}</span>
          {end}
          </>
        }
      </div>
    </>
    );
};

export default Details;