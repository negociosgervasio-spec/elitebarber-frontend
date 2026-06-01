import React, { useState, useMemo } from "react";

import { Calendar, Clock, Check, Phone, User } from 'lucide-react'

import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ScheduleForm = () => {
    // gera opções de 30 em 30 minutos entre 09:00 e 19:00
    const options = useMemo(() => {
        const times = []
        for (let h = 9; h <= 19; h++) {
            for (let m of [0, 30]) {
                if (h === 19 && m > 0) continue // não passa das 19:00
                const hour = String(h).padStart(2, "0")
                const minute = String(m).padStart(2, "0")
                times.push(`${hour}:${minute}`)
            }
        }
        return times
    }, [])

    const servicesOptions = [
        {
            id: 'haircut',
            value: 'haircut',
            text: 'Corte Masculino',
            price: 60
        },

        {
            id: 'beard',
            value: 'beard',
            text: 'Barba Completa',
            price: 50
        },
        {
            id: 'hydratation',
            value: 'hydratation',
            text: 'Hidratação Capilas',
            price: 80
        },
        {
            id: 'full',
            value: 'full',
            text: 'Corte Completo',
            price: 140
        },
    ]

    const [name, setName] = useState("");
    const [tel, setTel] = useState("");
    const [service, setService] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const values = [
        name,
        tel,
        service,
        date,
        time
    ]

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name,
            phone: tel,
            services: [service],
            datetime: new Date(`${date}T${time}`)
        };

        const api = import.meta.env.VITE_API_URL;

        try {
            const res = await axios.post(`${api}/schedule`, data);
            toast.success(res.data.message || "Agendamento criado com sucesso!");
            // limpar campos
            setName("");
            setTel("");
            setService("");
            setDate("");
            setTime("");
        } catch (err) {
            if (err.response?.data?.errors) {
                err.response.data.errors.forEach((error) => toast.error(error.msg));
            } else {
                toast.error(err.response?.data?.error || "Erro ao criar agendamento");
            }
        }
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="m-auto bg-neutral-900 flex flex-col gap-6 pt-16 pb-16  pr-4 pl-4 md:pr-12 md:pl-12 border border-amber-400/50 rounded-sm lg:w-4xl"
        >
            {/* name */}
            <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                    <User size={24} className='text-amber-400' />
                    <label htmlFor="name" className="text-base text-white font-semibold">
                        Nome Completo
                    </label>
                </div>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Digite seu nome"
                    className="text-white border border-amber-400/50 hover:border-2 focus:outline-amber-500 focus:outline-1 outline-0 transition-colors duration-200 ease-linear p-4 text-base rounded-sm"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            {/* phone */}
            <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                    <Phone size={24} className='text-amber-400' />
                    <label htmlFor="tel" className="text-base text-white font-semibold">
                        Telefone
                    </label>
                </div>
                <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="(11) 98765-4321"
                    className="text-white border border-amber-400/50 hover:border-2 focus:outline-amber-500 focus:outline-1 outline-0 transition-colors duration-200 ease-linear p-4 text-base rounded-sm"
                    required
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                />
            </div>

            {/* services */}
            <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                    <Check size={24} className='text-amber-400' />
                    <label htmlFor="service" className="text-base text-white font-semibold">
                        Serviço desejado
                    </label>
                </div>
                <select
                    name="service"
                    id="service"
                    className="text-white border border-amber-400/50 hover:border-2 focus:outline-amber-500 focus:outline-1 outline-0 transition-colors duration-200 ease-linear p-4 text-base rounded-sm focus-visible:bg-neutral-950 focus:bg-neutral-950"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                >
                    <option value="" disabled selected>
                        Selecione um serviço
                    </option>
                    {servicesOptions.map((s) => (
                        <option key={s.id} value={s.value}>
                            {s.text} - R$ {s.price}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-6 items-center">
                {/* date */}
                <div className="flex flex-col gap-3 basis-full">
                    <div className="flex gap-2">
                        <Calendar size={24} className='text-amber-400' />
                        <label htmlFor="date" className="text-base text-white font-semibold">
                            Data
                        </label>
                    </div>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        className="text-white border border-amber-400/50 hover:border-2 focus:outline-amber-500 focus:outline-1 outline-0 transition-colors duration-200 ease-linear p-4 text-base rounded-sm"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        lang="pt-BR"
                    />
                </div>

                {/* time */}
                <div className="flex flex-col gap-3 basis-full">
                    <div className="flex gap-2 text-base">
                        <Clock size={24} className='text-amber-400' />
                        <label htmlFor="time" className="text-base text-white font-semibold">
                            Horário
                        </label>
                    </div>
                    <select
                        name="time"
                        id="time"
                        className="text-white border border-amber-400/50 hover:border-2 focus:outline-amber-500 focus:outline-1 outline-0 transition-colors duration-200 ease-linear p-4 text-base rounded-sm focus-visible:bg-neutral-950 focus:bg-neutral-950"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    >
                        {options.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <input
                type="submit"
                value="Confirmar Agendamento"
                className="btn cursor-pointer bg-amber-400 p-6 rounded-md font-bold mt-6 hover:opacity-80 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/15"
            />
        </form>
    )
}

export default ScheduleForm