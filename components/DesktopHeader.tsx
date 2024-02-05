"use client"

import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import YoutubeLogoIcon from "@/app/asset/youtubelogo.svg"

function DesktopHeader() {
  return (
    <>
      <nav className="flex">
        <Button variant={"ghost"} className="rounded-full">
          <Menu size={20} strokeWidth={1.5} />
        </Button>
        <span className="pointer p-2">
          <Image src={YoutubeLogoIcon} alt="logo" width={70} height={8} />
        </span>
        <span className="flex w-full justify-center">
          <span className="flex max-w-sm items-center">
            <Input type="email" placeholder="Email" />
            <Button variant={'destructive'} type="submit">Subscribe</Button>
          </span>
        </span>
      </nav>
      <div className="absolute right-0 top-0">
        <ThemeToggle />
      </div>
    </>
  )
}

export default DesktopHeader
