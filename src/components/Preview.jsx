import React from 'react'

const Preview = ({mdValue = ''}) => {
  return (
    <div className='w-1/2 bg-gray-800 ml-1'>
        <div className='p-1 text-white text-lg text-center w-full bg-gray-700'>Preview</div>
        <div className='preview bg-transparent prose prose-invert lg:prose-xl text-lg px-4 py-2 text-white' dangerouslySetInnerHTML={{__html: mdValue}}></div>
    </div>
  )
}

export default Preview;