import SectionSubTitle from "@/components/shared/SectionSubTitle"
import SectionTitle from "@/components/shared/SectionTitle"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import testimonialBg from "../../../images/testimonial-bg.jpg"

const testimonialData = [
  {
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    comment:
      "This platform has completely transformed how we manage our farms. From crop monitoring to resource planning, everything is now more efficient and data-driven.",
    name: "David Miller",
    designation: "Farm Operations Manager",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    comment:
      "The smart agricultural tools helped us reduce operational costs while improving overall productivity. It’s exactly the innovation modern farming needs.",
    name: "Sarah Johnson",
    designation: "Agribusiness Consultant",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    comment:
      "Managing multiple farming sites became much easier with their scalable solutions. The insights and automation features save us valuable time every day.",
    name: "Michael Thompson",
    designation: "Agricultural Project Director",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    comment:
      "Their technology-driven approach has helped us improve crop yield while maintaining sustainable farming practices. The impact has been outstanding.",
    name: "Emily Carter",
    designation: "Sustainability Specialist",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    comment:
      "The platform is intuitive and easy to use, even for teams with limited technical experience. It has streamlined our daily farm management operations.",
    name: "James Wilson",
    designation: "Livestock Farm Owner",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    comment:
      "We’ve seen measurable improvements in profitability and resource management since adopting their agricultural solutions. Highly recommended for modern agribusinesses.",
    name: "Olivia Brown",
    designation: "AgriTech Business Owner",
  },
]

const Testimonial = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-16 bg-[length:100%_142.549%] bg-[position:0px_-45.668px] bg-no-repeat py-36"
      style={{
        backgroundImage: `linear-gradient(
      180deg,
      rgba(132,132,132,0.54) 0%,
      rgba(63,63,63,0.54) 100%
    ), url(${testimonialBg.src})`,
      }}
    >
      <div className="text-center">
        <SectionSubTitle text="Testimonial" />
        <SectionTitle text="What they say about us" className="text-white" />
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full max-w-7xl"
        >
          <CarouselContent className="-ml-4">
            {testimonialData.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full">
                  <Card className="flex h-full min-h-[260px] flex-col justify-between rounded-2xl bg-card-background">
                    <CardContent className="flex-1 p-5 sm:p-6">
                      <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        {testimonial.comment}
                      </p>
                    </CardContent>

                    <CardFooter className="flex items-center gap-3">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={53}
                        height={53}
                        className="rounded-full object-cover"
                      />

                      <div>
                        <h3 className="text-sm font-semibold sm:text-base">
                          {testimonial.name}
                        </h3>

                        <p className="text-xs text-gray-500 sm:text-sm">
                          {testimonial.designation}
                        </p>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious className="-left-4 hidden sm:flex lg:-left-12" />

          <CarouselNext className="-right-4 hidden sm:flex lg:-right-12" />
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonial
