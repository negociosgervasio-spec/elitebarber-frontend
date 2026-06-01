
import { Link } from 'react-router-dom'

import { Scissors } from 'lucide-react'

const Logo = () => {
    return (
        <Link to='/' className='flex gap-3 items-center'>
            <div className="w-max h-max p-4 rounded-md bg-amber-400 text-black">
                <Scissors size={32} />
            </div>
            <div className="text-white">
                <h2 className="text-3xl font-semibold capitalize text-amber-400">Elite Barber</h2>
                <p className="text-lg font-normal">Desde 2010</p>
            </div>
        </Link>
    )
}

export default Logo