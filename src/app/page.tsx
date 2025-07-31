import { Input } from "@/components/ui/input"

import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Header from "./_components/header"
import { db } from "@/lib/prisma"
import BarberShopItem from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-item"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})

  return (
    <div>
      <Header />
      <div className="p-5">
        <div>
          <h2 className="text-xl font-bold">Olá, Marco!</h2>
          <p>Segunda-feira, 28 de julho</p>
          <div className="mt-6 flex items-center gap-2">
            <Input placeholder="Faça sua busca..." />
            <Button size="icon">
              <SearchIcon />
            </Button>
          </div>
        </div>

        <div className="mt-6 flex gap-2 overflow-auto [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button variant="secondary" key={option.title}>
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
        </div>
        <div className="relative -mx-5 mt-3 h-[150px]">
          <Image
            src="/banner.svg"
            fill
            className="rounded-xl object-cover"
            alt="Agende nos melhores com FSW Barber"
          />
        </div>

        {/* Agendamentos */}
        <BookingItem />
        {/* Recomendados */}

        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        {/* Populares*/}

        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          Populares
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <footer>
        <Card className="rounded-none">
          <CardContent className="text-xs font-bold text-slate-400">
            © 2025 Copyright FSW Baber
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
