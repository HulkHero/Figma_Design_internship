import React from 'react'

const Typography = ({ heading, caption, classes }) => {
    return (
        <>
            <h1 className='text-4xl font-semibold'>{heading}</h1>
            <h4 className={`text-[#757575] ${classes}  `}>{caption}</h4>
        </>

    )
}

export default Typography