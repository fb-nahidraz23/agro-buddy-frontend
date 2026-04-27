import SectionSubTitle from "@/components/shared/SectionSubTitle"
import SectionTitle from "@/components/shared/SectionTitle"
import TransparentButton from "@/components/shared/TransparentButton"
import Image from "next/image"
import ourSolutionImage from "../../../images/our-solution.jpg"

const OurSolutions = () => {
  return (
    <div className="bg-card-background py-20">
      <div className="container mx-auto flex gap-16">
        <div className="flex-1 space-y-10">
          <div className="space-y-6">
            <div>
              <SectionSubTitle
                className="pt-5 leading-7 font-bold text-primary md:pt-20 lg:text-2xl"
                text="Our Solutions"
              />
              <SectionTitle
                className="pt-4 text-lg font-bold lg:text-3xl lg:leading-10"
                text="Smart Farm Management, Simplified"
              />
            </div>
            <p className="text-xl font-medium leading-9 text-gray-500">
              <span className="font-semibold">At Agro Buddy</span>, we provide a complete, scalable platform to help
              farms manage operations efficiently. From crop and livestock
              tracking to financial management, our solution streamlines tasks
              and provides real-time insights for better decision-making.
            </p>
          </div>
          <TransparentButton
            text="Discover More"
            className="cursor-pointer rounded-full border border-primary bg-transparent hover:bg-primary hover:text-white px-8 py-5 text-xl text-primary md:px-16"
          />
        </div>
        <div className="flex-1">
          <Image src={ourSolutionImage} alt="Our solution Image" className="rounded-md"/>
        </div>
      </div>
    </div>
  )
}

export default OurSolutions
