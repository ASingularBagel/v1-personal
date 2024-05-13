const Profile = () => {
  return (
    <div className='relative mb-52'>
        <h1 className='text-xl mb-8'>Hi ! I'm Christian.</h1>
        <div className='text-xl break-words mb-4'>
          I am an aspiring <p className="inline-flex text-blue-500">Software Engineer</p>, with a passion for building full stack web applications.
        </div>
        <div className='break-words flex-wrap text-xl'>
          <div className="mb-4">
            I've been mostly learning and developing software using React and <p className='inline-flex text-blue-500'>Typescript/Javascript</p>,
            with React frameworks like <p className='inline-flex text-blue-500'>React.js and Next.js</p>, in addition to state management libraries like <p className="inline-flex text-blue-500">Redux</p> for front-end development.
          </div>
          <div>
            This is in addition to my experience with <p className="inline-flex text-blue-500">Node.js and Java</p> with <p className='inline-flex text-blue-500'>Express.js, MongoDB and Redis</p> for back-end development.
          </div>
        </div>
        <div className='mt-10 break-words inline-flex flex-wrap text-xl'>
            <p className=''>Feel free to check out my professional and educational experience down below (currently building, view resume for this information), or navigate to my projects page to see what I've been working on.</p>
        </div>
        <div className='absolute left-1/2 flex flex-col gap-4 my-16 -translate-x-[20px] items-center justify-center cursor-pointer'
          onClick={() => {
            document.getElementById('timeline')?.scrollIntoView({behavior: 'smooth'})
          }}>
        </div>
    </div>
  );
};

export default Profile;