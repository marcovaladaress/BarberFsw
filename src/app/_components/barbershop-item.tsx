import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Barbershop } from "@prisma/client"
import { StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BarberShopItemProps {
  barbershop: Barbershop
}

const BarberShopItem = async ({ barbershop }: BarberShopItemProps) => {
  return (
    <Card className="flex min-w-[167px] flex-col rounded-2xl p-0 pb-2">
      <CardContent className="p-0">
        <div className="relative h-[159px] w-full">
          <Image
            fill
            src={barbershop.imageUrl}
            className="rounded-2xl object-cover p-1"
            alt={barbershop.name}
          />
          <Badge
            className="absolute top-2 left-2 z-50 space-x-1"
            variant="secondary"
          >
            <StarIcon className="fill-primary text-primary" />
            <p className="text-xs font-semibold">5,0</p>
          </Badge>
        </div>
        <div className="px-2 py-3">
          <h3 className="truncate font-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-400">{barbershop.address}</p>
          <Button className="mt-3 w-full" variant="secondary" asChild>
            <Link href={`/barbershops/${barbershop.id}`}>Reservar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarberShopItem
