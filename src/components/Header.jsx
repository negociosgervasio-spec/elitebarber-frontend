import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Scissors, Menu, X } from 'lucide-react'
import Logo from './Logo'

const Header = () => {
    const [open, setOpen] = useState(false)
    const location = useLocation()

    const navItems = [
        { path: '/', label: 'Ínicio' },
        { path: '/services', label: 'Serviços' },
        { path: '/schedule', label: 'Agendamento' },
        { path: '/contact', label: 'Contato' },
    ]

    const { scrollY } = useScroll()
    const opacity = useTransform(scrollY, [0, 200], [1, 0])

    return (
        <motion.header className='sticky top-0 left-0 right-0 z-50 border-b border-amber-400/30 bg-neutral-950' style={{ opacity }}>
            <nav className='container pl-4 pr-4 pt-6 pb-6 flex justify-between items-center'>
                <Logo />
                <button
                    className='lg:hidden text-white z-50'
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>

                {open && (
                    <div
                        className='fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden'
                        onClick={() => setOpen(false)}
                    ></div>
                )}

                <ul className={`flex flex-col gap-8 lg:flex-row text-white font-normal text-base
          lg:static lg:w-auto lg:p-0 transition-transform duration-300 ease-in-out z-50
          ${open ? 'fixed top-14 left-0 w-full bg-neutral-dark p-6 translate-x-0' : 'translate-x-full lg:translate-x-0 hidden lg:flex'}`}>

                    {navItems.map(item => (
                        <li key={item.path}>
                            <Link
                                onClick={() => open ? setOpen(false) : null}
                                to={item.path}
                                className={`text-base md:text-2xl hover:decoration-1 hover:decoration-amber-400/30
    ${location.pathname === item.path
                                        ? 'border-b-4 pb-3  text-amber-400 font-semibold border-amber-400'
                                        : ''}`}
                            >
                                {item.label}
                            </Link>

                        </li>
                    ))}
                </ul>
            </nav>
        </motion.header>
    )
}

export default Header
