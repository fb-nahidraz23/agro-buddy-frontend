import React from "react"
import { Button } from "../ui/button"
import { ButtonTextProps } from "./SolidButton"

const TransparentButton = ({text, className}: ButtonTextProps) => {
  return (
    <Button
      variant={"outline"}
      className={className}
    >
      {text}
    </Button>
  )
}

export default TransparentButton
