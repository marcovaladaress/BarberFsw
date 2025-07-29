import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MenuIcon } from "lucide-react"
import Image from "next/image"

const Header = () => {
  return (
    <Card className="rounded-none">
      <CardContent className="flex items-center justify-between">
        <Image src="/logo.svg" width={130} height={100} alt="Logo FSW" />
        <Button size="icon" variant="ghost">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
