# BarberFsw

Aplicação de agendamento para barbearias, desenvolvida acompanhando as aulas do curso **Full Stack Club**, para praticar Next.js com Prisma e PostgreSQL.

## O que está implementado

- Modelagem do banco com Prisma e PostgreSQL: usuários, barbearias, serviços e agendamentos
- Seed do banco com dados de exemplo
- Página inicial com lista de barbearias e página de detalhes de cada barbearia
- Componente de exibição de agendamentos

## Qualidade de código

ESLint, Prettier, Husky e lint-staged rodando antes de cada commit.

## Stack

Next.js · TypeScript · Prisma · PostgreSQL · Tailwind CSS · shadcn/ui

## Como rodar

1. `npm install`
2. Crie um arquivo `.env` com `DATABASE_URL` apontando para um banco PostgreSQL
3. `npx prisma migrate dev`
4. `npm run dev`

---

Desenvolvido por [Marco Valadares](https://github.com/marcovaladaress)
