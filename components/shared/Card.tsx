import { Trees } from "lucide-react"
import React from "react"
import CardTitle from "./CardTitle"

const Card = ({ icon, title, desc }) => {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-card-border bg-card-background px-2 py-6">
      <div className="">{icon}</div>
      <div className="flex flex-col items-center px-8 gap-3">
        <CardTitle text={title} />
        <p className="text-center">{desc}</p>
      </div>
    </div>
  )
}

export default Card
