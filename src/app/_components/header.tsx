import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, MenuIcon } from "lucide-react"
import Image from "next/image"

const Header = () => {
  return (
    <Card className="rounded-none">
      <CardContent className="flex items-center justify-between">
        <Image src="/logo.svg" width={130} height={100} alt="Logo FSW" />
        <Button size="icon" variant="ghost" className="visible md:invisible">
          <MenuIcon />
        </Button>
        <div className="hidden items-center gap-3 md:flex">
          <Button className="invisible md:visible" variant="ghost">
            <CalendarIcon />
            Agendamentos
          </Button>
          <Avatar className="h-6 w-6">
            <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
          </Avatar>
          <p className="invible text-xs md:visible"> Marco Valadares</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default Header
