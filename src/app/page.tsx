import { Input } from "@/components/ui/input"
import Header from "./_components/ui/header"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Marco!</h2>
        <p>Segunda-feira, 28 de julho</p>
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-3 h-[180px] w-full">
          <Image
            src="/banner.svg"
            fill
            className="w-full object-cover"
            alt="Agende nos melhores com FSW Barber"
          />
        </div>
      </div>
    </div>
  )
}
