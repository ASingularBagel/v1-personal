import React from 'react';

type ContentProps = {
    children?: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className='lg:w-2/3 md:w-2/3 sm:w-full static pt-64 float-right w-full p-8 min-h-screen overflow-auto flex flex-col gap-10'>
        {children}
    </div>
  )
}

export default Content;