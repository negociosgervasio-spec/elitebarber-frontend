import { Link } from 'react-router-dom'

// icons
import { FaStar } from 'react-icons/fa6'
import { ChevronRight } from 'lucide-react'

// images
import heroImg from '../assets/hero.jpg'

// framer-motion
import { motion, useScroll, useTransform } from "framer-motion"

// components
import { FadeInSection } from '../components/FadeInSection'
import Overlay from '../components/Overlay'
import ServicesCard from '../components/ServicesCard'
import CaptionSection from '../components/CaptionSection'
import TestimonialsCard from '../components/TestimonialsCard'

const Home = () => {
    const { scrollY } = useScroll()
    const headerOpacity = useTransform(scrollY, [0, 200], [1, 0])
    return (
        <main>
            <section className="relative p-4 md:h-screen flex items-center justify-start"
                style={{
                    backgroundImage: `linear-gradient(to left, rgba(0, 0, 0,0.3), rgba(0, 0, 0, 1)), url(${heroImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                <Overlay />
                <div className="container flex flex-col gap-12 text-white w-full">
                    <div className='bg-amber-400/10 border border-amber-400 w-max rounded-4xl pt-4 pb-4 pl-8 pr-8'>
                        <p className='text-base text-brand-light'>Desde 2010 - Qualidade Premium</p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h1 className='text-6xl uppercase'>Estilo e <span className='text-amber-400'>Elegância</span></h1>
                        <p className='text-2xl'>A melhor experiência em barbearia clássica com toque<br /> moderno</p>

                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Link to='/schedule' className=' text-black font-semibold flex items-center gap-2 btn bg-amber-400 hover:bg-neutral-950/30 hover:text-amber-400 hover:border hover:border-amber-400 transition-colors duration-500 ease-in w-max pt-4 pb-4 pl-8 pr-8 rounded-xs'>
                            <p>Agendar Horário</p>
                            <ChevronRight size={24} className='self-center' />
                        </Link>
                        <Link to='/schedule' className='btn text-amber-400 font-semibold bg-neutral-950/30 hover:bg-amber-400/30 hover:text-black border border-amber-400 transition-colors duration-500 ease-in w-max pt-4 pb-4 pl-8 pr-8 flex items-center rounded-xs'>
                            <p>Ver serviços</p>
                        </Link>
                    </div>
                </div>
            </section>
            {/* services */}
            <section
                className="pl-4 pr-4 md:h-full pb-36 pt-36 flex flex-col justify-center items-center bg-neutral-800"
            >
                <CaptionSection
                    title='Nossos'
                    hightlight='Serviços'
                    subtitle='Oferecemos uma gama completa de serviços para você ficar sempre impecável'
                />
                <ServicesCard />
            </section>
            {/* call to action */}
            <section className='flex items-center flex-col justify-center pr-4 pl-4 pt-36 pb-36 ml-auto mr-auto border-b border-amber-400/30 bg-linear-to-b from-neutral-900 to-neutral-950'>
                <CaptionSection
                    title='Pronto para um Novo'
                    hightlight='Visual'
                    subtitle='Agende seu horário de forma rápida e fácil. Estamos prontos para atendê-lo com excelência.' icon={true} btn={true}
                />
            </section>

            {/* testimonials */}
            <section className='flex items-center flex-col justify-center pr-4 pl-4 pt-36 pb-36 ml-auto mr-auto border-b border-amber-400/30 bg-neutral-800' >
                <CaptionSection
                    title='O que dizem Nossos'
                    hightlight='Clientes'
                    subtitle='A satisfação dos nossos clientes é nossa maior recompensa'
                />
                <TestimonialsCard />
            </section>

        </main>
    )
}

export default Home