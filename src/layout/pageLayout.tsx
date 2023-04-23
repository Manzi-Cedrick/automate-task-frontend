import React from 'react'

const PageLayout = ({ children }: { children: JSX.Element }) => {
    return (
        <div className='bg-[#111111] min-h-screen min-w-screen flex justify-start'>
            {children}
        </div>
    )
}

export default PageLayout