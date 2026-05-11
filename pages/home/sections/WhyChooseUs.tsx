import Image from "next/image"
import React from "react"
import whychooseus from "../../../images/why-choose-us.jpg"
import SectionSubTitle from "@/components/shared/SectionSubTitle"
import SectionTitle from "@/components/shared/SectionTitle"
import { Blocks, Leaf, Vegan, Wrench } from "lucide-react"

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto my-20 flex flex-col lg:flex-row items-center justify-center gap-5 md:gap-20 p-4 md:p-0">
      <div className="flex-1">
        <Image
          src={whychooseus}
          alt="Why choose us image"
          className="rounded-md"
        />
      </div>
      <div className="flex-1 space-y-14">
        <div>
          <SectionSubTitle text="Why Choose us" className="" />
          <SectionTitle text="It’s excellent for the environment, and it’s also good for your health." />
          <p className="mt-4 text-gray-500">
            From crop and livestock tracking to financial management, our
            solution streamlines tasks and provides real-time insights for
            better decision-making.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Features */}
          <div className="space-y-3">
            <div className="h-16 w-16 rounded-full bg-[rgba(46,139,87,0.25)] p-4">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-4">
              <h3 className="font-bold">Scalable & Easy-to-Use</h3>
              <p className="text-gray-500">
                Monitor and analyze crop growth and yield.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-16 w-16 rounded-full bg-[rgba(46,139,87,0.25)] p-4">
              <Vegan className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-4">
              <h3 className="font-bold">Scalable & Easy-to-Use</h3>
              <p className="text-gray-500">
                Monitor and analyze crop growth and yield.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-16 w-16 rounded-full bg-[rgba(46,139,87,0.25)] p-4">
              <Blocks className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-4">
              <h3 className="font-bold">Scalable & Easy-to-Use</h3>
              <p className="text-gray-500">
                Monitor and analyze crop growth and yield.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-16 w-16 rounded-full bg-[rgba(46,139,87,0.25)] p-4">
              <Wrench className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-4">
              <h3 className="font-bold">Scalable & Easy-to-Use</h3>
              <p className="text-gray-500">
                Monitor and analyze crop growth and yield.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
