import React from 'react'

const Overlay = ({ direction = 'bg-gradient-to-t', position = 'bottom-0 left-0', height = 'h-1/3' }) => {
    return (
        <div className={`absolute ${position} w-full ${height} ${direction}  from-black to-transparent drop-shadow-black pointer-events-none`}></div>

    )
}

export default Overlay