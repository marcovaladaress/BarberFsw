import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlignJustify } from "lucide-react"
import Image from "next/image"

const Header = () => {
  return (
    <Card className="rounded-none p-6">
      <CardContent className="flex items-center justify-between">
        <Image src="logo.svg" width={120} height={18} alt="Logo FswBarber" />
        <Button size="icon" variant="outline" className="border-0 bg-none p-0">
          <AlignJustify />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
