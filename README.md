# Frontend - Elite Barber

Aplicação React + Vite para o site da barbearia, responsável pela interface de agendamento, contato e apresentação dos serviços.

## Visão geral

- Formulário de agendamento usando `ScheduleForm`
- Formulário de mensagem usando `MessageForm`
- Consome backend via `VITE_API_URL`

## Pré-requisitos

- Node.js 18+ instalado
- O backend deve estar disponível e acessível pela mesma rede ou por URL pública

## Variáveis de ambiente

Crie um arquivo `.env` na pasta `frontend` com a variável abaixo:

```env
VITE_API_URL=http://localhost:3000
```

No ambiente de produção, o backend já está configurado em `frontend/.env.production` com:

```env
VITE_API_URL=https://elitebarber-backend.onrender.com
```

## Instalação

```bash
cd frontend
npm install
```

## Execução local

```bash
npm run dev
```

Para testar no celular pela rede local, execute:

```bash
npm run dev -- --host
```

Em seguida, abra no navegador do celular:

```bash
http://<IP-do-PC>:5173
```

## Uso em mobile

- Se usar backend local, defina `VITE_API_URL` com o IP do computador, por exemplo `http://192.168.0.10:3000`.
- Não use `localhost` no celular porque ele se refere ao próprio dispositivo.

## Rotas de API utilizadas

- `POST ${api}/messages/create`
- `POST ${api}/schedules`

## Observações

- O endereço do backend deve ser consistente entre frontend e backend.
- Se o backend estiver em uma máquina diferente, verifique se ele está acessível pela rede e se a porta não está bloqueada.
