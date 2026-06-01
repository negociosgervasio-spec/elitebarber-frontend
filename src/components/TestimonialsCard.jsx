
import { FaStar } from "react-icons/fa6"

const testimonials = [
    {
        id: 1,
        name: 'Carlos-Silva',
        message: '"Melhor barbearia da região! Atendimento impecável e profissionais de primeira."'
    },
    {
        id: 2,
        name: 'Rafael Martins',
        message: '"Ambiente moderno e confortável. Sempre saio satisfeito com o resultado."'
    },
    {
        id: 3,
        name: 'Pedro Santos',
        message: '"Excelente trabalho! A atenção aos detalhes faz toda a diferença."'
    }
]

const TestimonialsCard = () => {
    return (
        <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8 gap-12">
            {testimonials.map((t) => (
                <article
                    key={t.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='flex flex-col gap-8 pb-20 pt-20 pl-12 pr-12 bg-neutral-900 border border-amber-400/30 hover:border-amber-400 rounded-md hover:shadow-2xl transition-colors duration-500'>
                    <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <FaStar key={i} size={32} className="text-yellow-500" />
                        ))}
                    </div>
                    <blockquote className='flex flex-col gap-4'>
                        <p className='text-2xl text-gray-100 text-start'>{t.message}</p>
                        <cite className='text-yellow-500 text-2xl font-extrabold mt-auto'>— {t.name}</cite>
                    </blockquote>
                </article>
            ))}

        </div>
    )
}

export default TestimonialsCard