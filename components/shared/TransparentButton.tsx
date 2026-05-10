import React from "react"
import { Button } from "../ui/button"
import { ButtonTextProps } from "./SolidButton"

const TransparentButton = ({text}: ButtonTextProps) => {
  return (
    <Button
      variant={"outline"}
      className="rounded-full bg-transparent px-8 py-5 text-xl text-white md:px-16 cursor-pointer"
    >
      {text}
    </Button>
  )
}

export default TransparentButton
