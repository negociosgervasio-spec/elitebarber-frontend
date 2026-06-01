import { MessageSquare } from 'lucide-react'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const MessageForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            name,
            email,
            message
        }

        const api = import.meta.env.VITE_API_URL;

        try {
            const res = await axios.post(`${api}/messages/create`, data);
            toast.success(res.message || "Mensagem enviada com sucesso!");
            setName('')
            setEmail('')
            setMessage('')

            setTimeout(() => navigate('/'), 3000)
        } catch (err) {
            if (err.response?.data?.errors) {
                err.response.data.errors.forEach((error) => toast.error(error.msg));
            } else {
                toast.error(err.response?.data?.error || "Erro ao criar mensagem!");
            }
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="m-auto bg-neutral-900 flex flex-col gap-6 p-4 md:p-16 border border-amber-400/50 rounded-2xl lg:w-4xl">
            <div className="flex items-center gap-4 text-amber-400">
                <MessageSquare size={28} className='self-center' />
                <h2 className='text-3xl font-black self-center'>Envie uma Mensagem</h2>
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="name" className='text-base text-white font-semibold'>Nome</label>
                <input
                    className="text-white border border-amber-400/50 hover:border-2 focus:outline-amber-500 focus:outline-1 outline-0 transition-colors duration-200 ease-linear p-4 text-base rounded-sm"
                    type="text"
                    name="name"
                    id="name"
                    placeholder='Seu nome completo'
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="email" className='text-base text-white font-semibold'>E-mail</label>
                <input
                    className="text-white border border-amber-400/50 hover:border-2 focus:outline-amber-500 focus:outline-1 outline-0 transition-colors duration-200 ease-linear p-4 text-base rounded-sm"
                    type="email"
                    name="email"
                    id="email"
                    placeholder='seu@email.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="message" className='text-base text-white font-semibold'>Mensagem</label>
                <textarea
                    className="text-white border border-amber-400/50 hover:border-2 focus:outline-amber-500 focus:outline-1 outline-0 transition-colors duration-200 ease-linear p-4 text-base rounded-sm"
                    name="message"
                    id="message"
                    placeholder='Digite sua mensagem aqui...'
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                >
                </textarea>
            </div>

            <input
                type="submit"
                value="Enviar Mensagem"
                className="btn cursor-pointer bg-amber-400 p-6 rounded-md font-bold mt-6 hover:opacity-80 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/15"
            />
        </form>
    )
}

export default MessageForm