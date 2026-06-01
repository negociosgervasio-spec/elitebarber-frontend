import { Link } from 'react-router-dom'

// icons
import { ChevronRight, Clock, Medal, Scissors, Sparkles } from 'lucide-react'

// images
import cutImg from '../assets/cut.jpg'
import beardImg from '../assets/beard.jpg'
import hydratationImg from '../assets/hydratation.jpg'

// components
import Overlay from './Overlay'


const services = [
    {
        id: "haircut",
        title: "Corte",
        description: "Cortes modernos e clássicos com precisão profissional",
        img: cutImg,
        icon: <Scissors size={24} />,
    },
    {
        id: "beard",
        title: "Barba",
        description: "Design e aparação de barba com técnicas especializadas",
        img: beardImg,
        icon: <Sparkles size={24} />,
    },
    {
        id: "hydratation",
        title: "Hidratação",
        description: "Tratamentos capilares premium para seu cabelo",
        img: hydratationImg,
        icon: <Medal size={24} />,
    },
]

const ServicesCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
            {services.map((service, index) => (
                <article
                    key={service.id}
                    className="group border border-amber-400/30 hover:border-amber-400 pb-8 rounded-md overflow-hidden h-max md:w-86 bg-neutral-900 
                     transition-all duration-500 hover:shadow-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                >
                    <div className="img-wrapper relative overflow-hidden z-0 w-full h-96">
                        <img
                            src={service.img}
                            alt={`Imagem de ${service.title}`}
                            className="relative h-full w-full transform transition-transform duration-1000 object-cover object-center group-hover:scale-110"
                            style={{ filter: "brightness(80%)" }}
                        />
                        <Overlay />
                        <div className="absolute left-4 bottom-6 z-10 bg-amber-400 text-black p-4 rounded-sm flex items-center justify-center shadow-lg">
                            {service.icon}
                        </div>
                    </div>

                    <div className="flex flex-col justify-center gap-2 mt-8 mx-4">
                        <h3 className="text-2xl text-amber-400 font-black">{service.title}</h3>
                        <p className="text-lg text-gray-400 font-medium">{service.description}</p>
                        <Link
                            to="/services"
                            className="btn flex gap-2 mt-4 ml-4 hover:underline hover:decoration-1 text-amber-400 text-lg"
                        >
                            <p>Ver Detalhes</p>
                            <ChevronRight size={20} className="self-center" />
                        </Link>
                    </div>
                </article>
            ))}
        </div>

    )
}

export default ServicesCard