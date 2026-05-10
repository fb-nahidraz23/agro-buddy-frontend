import SectionSubTitle from "@/components/shared/SectionSubTitle"
import SectionTitle from "@/components/shared/SectionTitle"
import TransparentButton from "@/components/shared/TransparentButton"
import Image from "next/image"
import ourSolutionImage from "../../../images/our-solution.jpg"

const OurSolutions = () => {
  return (
    <div className="bg-card-background py-20">
      <div className="container mx-auto flex flex-col-reverse gap-5 md:gap-16 p-4">
        <div className="flex-1 space-y-10">
          <div className="space-y-6">
            <div>
              <SectionSubTitle text="Our Solutions" className=""/>
              <SectionTitle
                className=""
                text="Smart Farm Management, Simplified"
              />
            </div>
            <p className="md:text-xl leading-9 font-medium text-gray-500">
              <span className="font-semibold">At Agro Buddy</span>, we provide a
              complete, scalable platform to help farms manage operations
              efficiently. From crop and livestock tracking to financial
              management, our solution streamlines tasks and provides real-time
              insights for better decision-making.
            </p>
          </div>
          <TransparentButton
            text="Discover More"
            className="cursor-pointer rounded-full border border-primary bg-transparent px-8 py-5 text-xl text-primary hover:bg-primary hover:text-white md:px-16"
          />
        </div>
        <div className="flex-1">
          <Image
            src={ourSolutionImage}
            alt="Our solution Image"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  )
}

export default OurSolutions
