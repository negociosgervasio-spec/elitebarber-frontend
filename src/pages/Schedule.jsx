import { Check } from 'lucide-react'

import { ToastContainer } from 'react-toastify';

import ScheduleForm from '../components/ScheduleForm';
import Tagline from '../components/Tagline'
import CaptionSection from '../components/CaptionSection'

const hours = [
    {
        id: 1,
        day: 'Segunda à Sexta',
        time: '09:00 - 19:00'
    },
    {
        id: 2,
        day: 'Sábado',
        time: '08:00 - 21:00'
    },
    {
        id: 3,
        day: 'Domingo',
        time: '08:00 - 14:00'
    }
]

const info = [
    {
        id: 1,
        text: 'Confirmaremos seu agendamento por WhatsApp'
    },
    {
        id: 2,
        text: 'Chegue com 5 minutos de antecedência'
    },
    {
        id: 3,
        text: 'Em caso de atraso, avise pelo telefone'
    },
    {
        id: 4,
        text: 'Aceitamos dinheiro, cartão e PIX'
    }
]
const Schedule = () => {

    return (
        <main >
            <section className='flex flex-col items-center pl-4 pr-4 pt-32 pb-32 gap-8 bg-linear-to-r from-neutral-950 via-neutral-800 via-50% to-neutral-950'>
                <Tagline title='Rápido e Fácil' />
                <CaptionSection
                    title='Agende seu' hightlight='Horário'
                    subtitle='Reserve seu horário de forma rápida e garanta o melhor atendimento'
                    textSize='text-5xl'
                />
            </section>

            <section className='pt-32 pb-32 pl-4 pr-4'>
                <ScheduleForm />
                <ToastContainer position="top-right" autoClose={3000} />
            </section>

            <div className="flex flex-wrap pl-4 pr-4 pt-6 pb-32 gap-6">
                <section className='container p-6  md:p-12 rounded-sm border border-amber-400/50 gap-6 bg-neutral-900'>
                    <h2 className='text-3xl text-amber-400 font-black'>Horário de Funcionamento</h2>
                    <ul className='flex flex-col  gap-4 text-white mt-8'>
                        {hours.map((h) => (
                            <li key={h.id} className='flex gap-2 justify-between items-start text-lg'>
                                <p className='font-normal'>{h.day}</p>
                                <p className='font-semibold'>{h.time}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className='container p-6 md:p-12 rounded-sm border border-amber-400/50 gap-6 bg-neutral-900'>
                    <h2 className='text-3xl text-amber-400 font-black'>Informações Importantes</h2>
                    <ul className='flex flex-col gap-6 text-white mt-8'>
                        {info.map((i) => (
                            <li key={i.id} className='flex gap-3 items-center'>
                                <Check size={24} className='text-amber-400' />
                                <p className='text-lg font-normal'>{i.text}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    )
}

export default Schedule