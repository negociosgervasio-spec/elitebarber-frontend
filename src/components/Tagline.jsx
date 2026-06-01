

import React from 'react'

const Tagline = ({ title }) => {
    return (
        <div className='self-center bg-linear-to-r from-bg-amber-400/30 to-25% via-amber-400/30 to-amber-400/30 border border-amber-400 w-max rounded-4xl pt-4 pb-4 pl-8 pr-8'>
            <p className='text-lg font-semibold text-amber-400'>{title}</p>
        </div>
    )
}

export default Tagline