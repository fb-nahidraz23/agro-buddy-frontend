import Card from "@/components/shared/ManualCard"
import CardTitle from "@/components/shared/ManualCardTitle"
import SectionSubTitle from "@/components/shared/SectionSubTitle"
import SectionTitle from "@/components/shared/SectionTitle"
import { ShelvingUnit, TreePalm, UserStar, Warehouse } from "lucide-react"
import React from "react"

const features = [
  {
    icon: <TreePalm className="h-16 w-16 text-primary" />,
    title: "Crop Tracking",
    desc: "Monitor and analyze crop growth and yield.",
  },
  {
    icon: <Warehouse className="h-16 w-16 text-primary" />,
    title: "Livestock Management",
    desc: "Track animal health, production, and breeding.",
  },
  {
    icon: <UserStar className="h-16 w-16 text-primary" />,
    title: "Accounting System",
    desc: "Manage finances, expenses, and profits.",
  },
  {
    icon: <ShelvingUnit className="h-16 w-16 text-primary" />,
    title: "Inventory Management",
    desc: "Track inputs like seeds, fertilizers, and chemicals.",
  },
]

const KeyFeatures = () => {
  return (
    <div className="container mx-auto my-4 space-y-8 p-4 lg:my-10 lg:p-0">
      <div>
        <SectionSubTitle className="text-center" text="Key Features" />
        <SectionTitle
          className="text-center"
          text="Track crops, livestock, inventory, and finances with ease, all from one platform"
        />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feat, index) => (
          <Card
            key={index}
            icon={feat.icon}
            title={feat.title}
            desc={feat.desc}
          />
        ))}
      </div>
    </div>
  )
}

export default KeyFeatures
