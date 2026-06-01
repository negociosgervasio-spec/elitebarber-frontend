import { Link } from 'react-router-dom';

import { Check, Medal, Scissors, Sparkles } from 'lucide-react'
import { FaCircle } from 'react-icons/fa6';

import haircutImg from '../assets/cut.jpg'
import fullpackImg from '../assets/full-pack.jpg'
import hydratationImg from '../assets/hydratation.jpg'
import beardImg from '../assets/beard.jpg'

import CaptionSection from '../components/CaptionSection'
import Tagline from '../components/Tagline'
import OverLay from '../components/Overlay'
import Overlay from '../components/Overlay';

const services = [
    {
        id: 1,
        image: haircutImg,
        icon: <Scissors size={32} />,
        title: 'Corte Masculino',
        price: 'R$ 40',
        time: '45 min',
        benefits: [
            'Análise de tipo de cabelo',
            'Consulta de estilo personalizada',
            'Corte com tesoura ou máquina',
            'Finalização com produtos premium',
            'Lavagem inclusa'
        ]
    },
    {
        id: 2,
        image: beardImg,
        icon: <Sparkles size={32} />,
        title: 'Barba Completa',
        price: 'R$ 50',
        time: '40 min',
        benefits: [
            'Design personalizado de barba',
            'Aparação com navalha profissional',
            'Toalha quente',
            'Hidratação e tratamento',
            'Óleo de barba premium'
        ]
    },
    {
        id: 3,
        image: hydratationImg,
        icon: <Medal size={32} />,
        title: 'Hidratação Capilar',
        price: 'R$ 80',
        time: '60 min',
        benefits: [
            'Tratamento profundo',
            'Produtos de alta qualidade',
            'Massagem relaxante',
            'Recuperação capilar',
            'Nutrição intensiva'
        ]
    },
    {
        id: 4,
        image: fullpackImg,
        icon: <Scissors size={32} />,
        title: 'Pacote Completo',
        price: 'R$ 140',
        time: '120 min',
        benefits: [
            'Corte de cabelo premium',
            'Design completo de barba',
            'Hidratação capilar',
            'Tratamento facial',
            'Produtos exclusivos'
        ]
    }
]

const Services = () => {
    return (
        <main>
            <section className='flex flex-col items-center pl-4 pr-4 pt-32 pb-32 gap-8 bg-linear-to-r from-neutral-950 via-neutral-900 via-50% to-neutral-950'>
                <div className='flex flex-col gap-6'>
                    <Tagline title={'Serviços Premium'} />
                    <CaptionSection textSize='text-5xl' title={'Nossos'} hightlight={'Serviços'} subtitle={'Oferecemos uma experiência completa com os melhores profissionais e produtos do mercado'} />
                </div>
            </section>
            <section className='pt-32 pb-32 pl-4 pr-4 bg-neutral-900'>
                <div className='container grid grid-rows-1 items-center justify-center gap-8'>
                    {services.map((s) => (
                        <article key={s.id} className='overflow-hidden lg:w-4xl lg:gap-11 grid grid-cols-1 md:grid-cols-2 border border-amber-400/30 rounded-md'>
                            <div className='overflow-hidden relative'>
                                <img
                                    src={s.image}
                                    alt='Imagem Ilustrativa'
                                    className='w-full h-full object-center object-cover hover:scale-110 transition-transform duration-1000'
                                />
                                <Overlay direction='bg-gradient-to-r' position='top-0 left-0' height='h-full' />
                                <div className='absolute left-4 top-6 z-10 w-max h-max p-6 rounded-md bg-amber-400 text-black'>
                                    {s.icon}
                                </div>
                            </div>
                            <div className='flex flex-col gap-6 p-4 md:pt-11 md:pb-11 bg-linear-to-r from-neutral-900 to-neutral-950'>
                                <h3 className='text-5xl font-black text-amber-400 uppercase'>{s.title}</h3>
                                <div className='flex items-end gap-8'>
                                    <p className='text-5xl text-white font-black'>{s.price}</p>
                                    <div className='flex gap-2 items-center text-gray-400'>
                                        <FaCircle size={8} />
                                        <p className='text-2xl font-light'>{s.time}</p>
                                    </div>
                                </div>
                                <ul className='flex flex-col gap-6 mb-6'>
                                    {Array.from(s.benefits).map((b, index) => (
                                        <li key={index} className='flex gap-2 items-center text-gray-200'>
                                            <Check size={24} className='text-brand' />
                                            <p className='text-2xl'>{b}</p>
                                        </li>
                                    ))}

                                </ul>

                                <Link to='/schedule' className='btn cursor-pointer bg-amber-400 p-6 rounded-md font-bold mt-6 hover:opacity-80 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/15'>
                                    <p className='text-center'>Agendar Agora</p>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            <section className='pl-4 text-center pr-4 pt-32 pb-32 bg-neutral-950 border-b border-amber-400/50 border-t '>
                <CaptionSection title={'Dúvidas sobre nosso'} hightlight={'Serviço'} subtitle={'Entre em contato conosco e tire todas as suas dúvidas com nossa equipe especializada'} />
                <Link className='btn p-4 pl-6 pr-6 bg-neutral-950/30 hover:bg-amber-400/30 hover:text-black border border-amber-400/30 hover:border-amber-400 text-amber-400 w-max text-lg font-bold transition-colors duration-500 mt-6'>Entrar em Contato</Link>
            </section>
        </main>
    )
}

export default Services