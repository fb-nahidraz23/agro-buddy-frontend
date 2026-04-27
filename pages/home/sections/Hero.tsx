import Image from "next/image"
import React from "react"
import heroBg from "../../../images/hero-bg.jpg"
import { Button } from "@/components/ui/button"
import SolidButton from "@/components/shared/SolidButton"
import TransparentButton from "@/components/shared/TransparentButton"

const Hero = () => {
  return (
    <div>
      <div className="relative">
        <div>
          <Image
            src={heroBg}
            alt="hero-banner"
            className="h-[calc(100vh-70px)] lg:h-[calc(100vh-84px)] object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-1/2 md:w-full text-center -translate-y-1/2 p-4">
          <div className="flex flex-col gap-8">
            <h1 className="text-xl md:text-4xl md:leading-14 font-bold tracking-wider text-white">
              Multi-Farm Management System <br /> Make Your Farm Smarter & More{" "}
              <br />
              Organized with Technology
            </h1>
            <h4 className="md:text-xl md:leading-8 font-medium text-white">
              Powerful solutions for managing crops, livestock, and finances all
              in one place.
            </h4>
          </div>
          <div className="pt-10 flex flex-col md:flex-row gap-4 md:gap-8 justify-center">
            <SolidButton
              text="Get Started"
            />
            <TransparentButton
              text="Learn More"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
