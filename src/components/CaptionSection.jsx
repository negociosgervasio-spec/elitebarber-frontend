import { Link } from 'react-router-dom'
import { ChevronRight, Clock } from 'lucide-react'

const CaptionSection = ({ title, hightlight, subtitle, icon = false, btn = false, textSize = 'text-5xl' }) => {
    return (
        <div className='container flex flex-col items-center justify-center gap-6 text-white text-center'>
            {icon &&
                <div className='bg-amber-400/30 text-amber-400 p-6 rounded-[50px] w-max h-max self-center mb-6'>
                    <Clock size={48} />
                </div>
            }
            <h2 className={`${textSize} font-black capitalize`}>
                {title} <span className='text-amber-400'>{hightlight}</span>
            </h2>
            <p className='text-gray-400 font-normal text-3xl mb-12'>{subtitle}</p>
            {btn &&
                <Link
                    to='/schedule'
                    size={32}
                    className='btn flex gap-3 item-center bg-amber-400 hover:bg-neutral-900/30 hover:text-amber-400 hover:border hover:border-amber-400 text-neutral-950 pt-4 pb-4 pl-8 pr-8 text-2xl font-medium w-max self-center transition-colors duration-500 shadow-2xl'
                >
                    <p>Agendar Agora</p>
                    <ChevronRight size={24} className='self-center' />
                </Link>
            }
        </div>
    )
}

export default CaptionSection