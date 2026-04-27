import React from "react"
import { Button } from "../ui/button"

export type ButtonTextProps = {
  text: string;
  className?: string
}

const SolidButton = ({text} : ButtonTextProps) => {
  return (
    <Button className="rounded-full px-8 py-5 text-xl md:px-16 cursor-pointer">
      {text}
    </Button>
  )
}

export default SolidButton;
