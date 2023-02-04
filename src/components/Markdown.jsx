import React from 'react'

const Markdown = ({handleChange}) => {
    const handleTyping = (e) => {
        handleChange(e.target.value);
    };
    
  return (
    <div className='bg-gray-800 w-1/2 text-white text-lg'>
        <div className='p-1 text-center w-full bg-gray-700'>Markdown</div>
        <textarea className='w-full bg-transparent h-screen outline-none px-4 py-2' onChange={handleTyping}/> 
    </div>
  )
}

export default Markdown;