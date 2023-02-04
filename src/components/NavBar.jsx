import React from 'react'
import deletebtn from '../assets/deletebtn.png'

const NavBar = ({saveToLocal, deleteLocal, startDownload}) => {
  const handleSave = (e) => {
    saveToLocal();
  };
  
  const handleDownload = (e) => {
    startDownload();
  };

  return (
    <div className='flex justify-between px-4 py-2 bg-gray-600 text-white'>
        <h1 className='left text-3xl tracking-widest'>MARKDOWN</h1>
        <div className='right flex'>
            <img src={deletebtn} className="m-auto mr-2 max-h-7" onClick={deleteLocal}></img>
            <button className='bg-orange-600 p-2 rounded-md mr-2 hover:bg-orange-800' onClick={handleDownload}>Download</button>
            <button className='bg-orange-600 p-2 rounded-md hover:bg-orange-800' onClick={handleSave}>Save</button>
        </div>
    </div>
  )
}

export default NavBar