import { Link } from 'react-router-dom'

import { MapPin, Phone, Scissors } from 'lucide-react'

import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

import { FaXTwitter } from "react-icons/fa6";

import { LuFacebook } from "react-icons/lu";

const navigations = [
    {
        id: 1,
        name: 'Ínicio',
        page: '/'
    },
    {
        id: 2,
        name: 'Serviços',
        page: '/services'
    },
    {
        id: 3,
        name: 'Agendamento',
        page: '/schedule'
    },
    {
        id: 4,
        name: 'Contato',
        page: '/contact'
    }
]

import Logo from '../components/Logo'
const Footer = () => {
    return (
        <footer className='grid grid-rows-1 gap-6 p-4 bg-neutral-950'>
            <div className='container p-4 pt-6 pb-6 grid grid-cols-1 lg:grid-cols-3 md:justify-between gap-6  border-b border-amber-400/50'>
                <div className="flex flex-col gap-4">
                    {/* Logo */}
                    <Logo />
                    <p className='text-lg text-gray-400'>A Elite Barber oferece os melhores serviços de barbearia com estilo clássico e atendimento moderno.</p>
                </div>
                <div className='flex flex-col gap-6'>
                    <h2 className="text-3xl font-semibold capitalize text-amber-400">Contato</h2>
                    <div className='flex gap-4 text-gray-400'>
                        <MapPin size={24} className='text-amber-400' />
                        <address>
                            <p className='text-base'>
                                Rua das Palmeiras, <br />123<br />
                                Centro - São Paulo,<br /> SP
                            </p>
                        </address>
                    </div>
                    <div className='flex gap-4 text-gray-400'>
                        <Phone size={24} className='text-amber-400' />
                        <address>
                            <p className='text-base'>
                                (11) 98765-4321
                            </p>
                        </address>
                    </div>
                </div>

                <nav className='flex flex-col gap-6'>
                    <h2 className='text-3xl font-semibold text-amber-400'>Redes Sociais</h2>
                    <ul className='flex gap-6 items-center cursor-pointer'>
                        <li className='bg-neutral-800 w-max h-max p-4 rounded-md text-white hover:bg-amber-400  hover:text-black transition-colors duration-300'>
                            <a
                                href="https://instagram.com/elitebarber"
                                target='_blank'
                            >
                                <FaInstagram size={24} />
                            </a>
                        </li>

                        <li className='bg-neutral-800 w-max h-max p-4 rounded-md text-white hover:bg-amber-400  hover:text-black transition-colors duration-300'>
                            <a
                                href="https://facebook.com/elitebarber"
                                target='_blank'
                            >
                                <LuFacebook size={24} />
                            </a>
                        </li>

                        <li className='bg-neutral-800 w-max h-max p-4 rounded-md text-white hover:bg-amber-400  hover:text-black transition-colors duration-300'>
                            <a
                                href="https://x.com/elitebarber"
                                target='_blank'
                            >
                                <FaXTwitter size={24} />
                            </a>
                        </li>
                    </ul>
                </nav>


            </div>
            <div className="container grid grid-rows-1 text-center md:text-start md:grid-cols-2 gap-4 p-4 pb-6 pt-6 justify-around text-base text-gray-400 font-medium">
                <p >&copy; 2026 Elite Barber. Todos os direitos reservados</p>
                <nav>
                    <ul className='flex flex-wrap md:flex-nowrap items-center gap-6 justify-self-end'>
                        {navigations.map((n) => (
                            <li key={n.id}>
                                <Link to={n.page} className='hover:text-amber-400 transition-colors duration-300'>{n.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>
        </footer >
    )
}

export default Footer