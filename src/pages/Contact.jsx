import React from 'react';

import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react'
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

import { ToastContainer } from 'react-toastify'

import MessageForm from '../components/MessageForm'
import Tagline from '../components/Tagline'
import CaptionSection from '../components/CaptionSection'
import { m } from 'framer-motion';

const contacts = [
    {
        id: 1,
        title: 'Endereço',
        subtitle: 'Rua das Palmeiras, 123\nCentro - São Paulo, SP\nCEP: 01234-567',
        icon: <MapPin size={40} />,
    },
    {
        id: 2,
        title: 'Telefone',
        subtitle: '(11) 98765-4321\n(11) 3456-7890\nSegunda a Sábado',
        icon: <Phone size={40} />,
    },
    {
        id: 2,
        title: 'E-mail',
        subtitle: 'contato@elitebarber.com.br\nagendamento@elitebarber.com.br\nResposta em até 24h',
        icon: <MessageSquare size={40} />

    },

]

const medias = [
    {
        id: 1,
        title: 'Whatsapp',
        subtitle: '(11) 98765-4321',
        href: 'https://www.wa.m/11987654321',
        icon: <FaWhatsapp size={32} />
    },
    {
        id: 2,
        title: 'Instagram',
        subtitle: '@elitebarber',
        href: 'https://www.instagram.com/elitebarber',
        icon: <FaInstagram size={32} />
    },

    {
        id: 3,
        title: 'Facebook',
        subtitle: '/elitebarber',
        href: 'https://www.facebook/elitebarber',
        icon: <FaFacebook size={32} />
    }
]

const Contact = () => {
    return (
        <main className=''>
            <section className='flex flex-col items-center pl-4 pr-4 pt-32 pb-32 gap-8 bg-linear-to-r from-neutral-950 via-neutral-900 via-50% to-neutral-950'>
                <Tagline title='Estamos a disposição' />
                <CaptionSection textSize='text-5xl' title='Entre em' hightlight='Contato' subtitle='Tire suas dúvidas, faça sugestões ou simplesmente diga olá. Estamos aqui para você!' />
            </section>
            <section className='container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 m-auto pl-4 pr-4 pt-32 pb-32'>
                {contacts.map((c) => (
                    <article className='bg-neutral-900 w-full border border-amber-400/30 hover:border-amber-400 hover:shadow flex flex-col items-center justify-center gap-4 h-96 transition-colors duration-500 rounded-md'>
                        <div className='h-max bg-amber-400/10 text-amber-400 rounded-[50px] p-6 flex items-center text-center'>
                            {c.icon}
                        </div>
                        <h3 className='text-3xl text-amber-400 font-black'>{c.title}</h3>
                        <p className='text-gray-400 font-normal text-center md:text-lg m-4'>
                            {c.subtitle.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>

                    </article>
                ))}


            </section>

            <div className="container flex flex-col items-center gap-12 pb-32 pl-4 pr-4">
                <section>
                    <MessageForm />
                    <ToastContainer position="top-right" autoClose={3000} />
                </section>

                <section className='lg:w-4xl pt-32 pb-32 pl-4 pr-4 text-2xl text-gray-400 font-light  bg-neutral-800 rounded-2xl border border-amber-400/30'>
                    <address className='flex flex-col gap-6 items-center lg:w-3xl m-auto text-center'>
                        <MapPin size={48} className='text-amber-400 self-center' />
                        <p >Localizão no Mapa</p>
                        <p >Reserve seu horário de forma rápida e garanta o melhor atendimento</p>
                    </address>
                </section>

                <section className="p-4 md:p-16 bg-neutral-900 lg:w-4xl m-auto border border-amber-400/30 rounded-2xl">
                    <div className="grid grid-rows-1 gap-6 text-gray-400 text-start">
                        <h2 className="text-3xl font-semibold text-amber-400">Redes Socias</h2>
                        <p className='text-2xl'>Siga-nos nas redes sociais para ficar por dentro das novidades e promoções!</p>
                        {/* medias */}
                        {medias.map((m) => (
                            <a key={m.id} href={m.href} target='_blank' className='group flex gap-4 border border-amber-400/30 hover:border-amber-400/60 bg-neutral-800 hover:bg-neutral-900 transition-all duration-300 p-6 rounded-md mt-4'>
                                <div className='flex gap-2 w-max h-max p-4 rounded-md bg-amber-400/30 group-hover:bg-amber-400 group-hover:text-black transition-colors duration-500 text-amber-400'>
                                    {m.icon}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className='text-2xl font-semibold text-white'>{m.title}</h3>
                                    <p className='text-gray-400 text-lg'>{m.subtitle}</p>
                                </div>
                            </a>
                        ))}

                    </div>
                </section>
            </div>

        </main>
    )
}

export default Contact