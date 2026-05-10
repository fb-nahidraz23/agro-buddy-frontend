import React from "react"
import SectionSubTitle from "./SectionSubTitle"
import SectionTitle from "./SectionTitle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Check, Gift } from "lucide-react"
import { Button } from "../ui/button"

const monthlyPlan = [
  {
    title: "Free",
    icon: <Gift className="h-1/4 w-14" />,
    price: "$0",
    desc: "Perfect for small farms getting started",
    feats: [
      {
        item: "Up to 5 Acres management",
      },
      {
        item: "Basic Crop tracking",
      },
      {
        item: "Weather Updates",
      },
      {
        item: "Community support",
      },
      {
        item: "Mobile App access",
      },
    ],
    cta: "Select Plan",
  },
  {
    title: "Pro",
    icon: <Gift className="h-1/4 w-14" />,
    price: "$110",
    desc: "Perfect for small farms getting started",
    feats: [
      {
        item: "Unlimited acres management",
      },
      {
        item: "Advanced crop management",
      },
      {
        item: "Al yield prediction",
      },
      {
        item: "Financial analytics",
      },
      {
        item: "Inventory management",
      },
      {
        item: "Priority support",
      },
      {
        item: "Export reports (PDF/CSV)",
      },
      {
        item: "Multi-user access",
      },
    ],
    cta: "Select Plan",
  },
  {
    title: "Enterprise",
    icon: <Gift className="h-1/4 w-14" />,
    price: "$510",
    desc: "Perfect for small farms getting started",
    feats: [
      {
        item: "Unlimited acres management",
      },
      {
        item: "Advanced crop management",
      },
      {
        item: "Al yield prediction",
      },
      {
        item: "Financial analytics",
      },
      {
        item: "Inventory management",
      },
      {
        item: "Priority support",
      },
      {
        item: "Export reports (PDF/CSV)",
      },
      {
        item: "Multi-user access",
      },
    ],
    cta: "Start Now",
  },
]

const quarterlyPlan = [
  {
    title: "Free",
    icon: <Gift className="h-1/4 w-14" />,
    price: "$0",
    desc: "Perfect for small farms getting started",
    feats: [
      { item: "Up to 5 Acres management" },
      { item: "Basic Crop tracking" },
      { item: "Weather Updates" },
      { item: "Community support" },
      { item: "Mobile App access" },
    ],
    cta: "Select Plan",
  },
  {
    title: "Pro",
    icon: <Gift className="h-1/4 w-14" />,
    price: "$297", // 110 * 3 = 330 → discounted
    desc: "Save 10% with quarterly billing",
    feats: [
      { item: "Unlimited acres management" },
      { item: "Advanced crop management" },
      { item: "AI yield prediction" },
      { item: "Financial analytics" },
      { item: "Inventory management" },
      { item: "Priority support" },
      { item: "Export reports (PDF/CSV)" },
      { item: "Multi-user access" },
    ],
    cta: "Select Plan",
  },
  {
    title: "Enterprise",
    icon: <Gift className="h-1/4 w-14" />,
    price: "$1377", // 510 * 3 = 1530 → discounted
    desc: "Save 10% with quarterly billing",
    feats: [
      { item: "Unlimited acres management" },
      { item: "Advanced crop management" },
      { item: "AI yield prediction" },
      { item: "Financial analytics" },
      { item: "Inventory management" },
      { item: "Priority support" },
      { item: "Export reports (PDF/CSV)" },
      { item: "Multi-user access" },
    ],
    cta: "Start Now",
  },
]

const yearlyPlan = [
  {
    title: "Free",
    icon: <Gift className="h-1/4 w-14" />,
    price: "$0",
    desc: "Perfect for small farms getting started",
    feats: [
      { item: "Up to 5 Acres management" },
      { item: "Basic Crop tracking" },
      { item: "Weather Updates" },
      { item: "Community support" },
      { item: "Mobile App access" },
    ],
    cta: "Select Plan",
  },
  {
    title: "Pro",
    icon: <Gift className="h-1/4 w-14" />,
    price: "$1056", // 110 * 12 = 1320 → discounted
    desc: "Save 20% with yearly billing",
    feats: [
      { item: "Unlimited acres management" },
      { item: "Advanced crop management" },
      { item: "AI yield prediction" },
      { item: "Financial analytics" },
      { item: "Inventory management" },
      { item: "Priority support" },
      { item: "Export reports (PDF/CSV)" },
      { item: "Multi-user access" },
    ],
    cta: "Select Plan",
  },
  {
    title: "Enterprise",
    icon: <Gift className="h-1/4 w-14" />,
    price: "$4896", // 510 * 12 = 6120 → discounted
    desc: "Save 20% with yearly billing",
    feats: [
      { item: "Unlimited acres management" },
      { item: "Advanced crop management" },
      { item: "AI yield prediction" },
      { item: "Financial analytics" },
      { item: "Inventory management" },
      { item: "Priority support" },
      { item: "Export reports (PDF/CSV)" },
      { item: "Multi-user access" },
    ],
    cta: "Start Now",
  },
]

const SubscriptionPlan = () => {
  return (
    <div className="w-full px-4 py-10 sm:px-6 lg:px-8">
      <div>
        <SectionSubTitle
         className="pt-5 md:pt-20 lg:text-2xl font-bold leading-7 text-primary text-center"
         text="Choose Your Subscription Plan" 
         />
        <SectionTitle
          className="pt-4 text-center text-lg font-bold lg:px-96 lg:text-3xl lg:leading-10"
          text="Select the perfect plan for your farm. Upgrade, downgrade, or cancel anytime."
        />
      </div>
      {/* Pricing Tabs */}
      <div className="flex justify-center items-center py-16">
        <Tabs defaultValue="monthly" className="w-full max-w-6xl">
          <TabsList>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="quaterly">Quaterly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>

          {/* Monthly Plan */}
          <TabsContent
            value="monthly"
            className="grid grid-cols-1 lg:grid-cols-3 gap-5 "
          >
            {monthlyPlan.map((plan, index) => (
              <Card
                key={index}
                className={`justify-between p-8 lg:w-96 ${index === 1 ? "border border-[#237A50] bg-card-background" : ""}`}
              >
                <div>
                  <CardHeader className="space-y-4">
                    <CardTitle className="text-center">{plan.title}</CardTitle>
                    <div className="flex flex-col items-center gap-3">
                      <div>{plan.icon}</div>
                      <p className="text-4xl font-bold">
                        {plan.price}
                        <span className="text-base font-normal text-gray-400">
                          /user
                        </span>
                      </p>
                    </div>
                    <CardDescription className="text-center">
                      {plan.desc}
                    </CardDescription>
                  </CardHeader>
                  <hr className="my-6" />
                  <CardContent className="text-sm text-muted-foreground">
                    <ul className="space-y-3">
                      {plan.feats.map((feat, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Check className="text-primary" />
                          <li>{feat.item}</li>
                        </div>
                      ))}
                    </ul>
                  </CardContent>
                </div>
                <CardFooter className="flex-col gap-2">
                  <Button
                    type="submit"
                    className="w-full cursor-pointer hover:bg-primary hover:text-white"
                    variant={"outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>

          {/* Quaterly Plan */}
          <TabsContent
            value="quaterly"
            className="grid grid-cols-1 gap-5 lg:grid-cols-3"
          >
            {quarterlyPlan.map((plan, index) => (
              <Card
                key={index}
                className={`justify-between p-8 lg:w-96 ${index === 1 ? "border border-[#237A50] bg-card-background" : ""}`}
              >
                <div>
                  <CardHeader className="space-y-4">
                    <CardTitle className="text-center">{plan.title}</CardTitle>
                    <div className="flex flex-col items-center gap-3">
                      <div>{plan.icon}</div>
                      <p className="text-4xl font-bold">
                        {plan.price}
                        <span className="text-base font-normal text-gray-400">
                          /user
                        </span>
                      </p>
                    </div>
                    <CardDescription className="text-center">
                      {plan.desc}
                    </CardDescription>
                  </CardHeader>
                  <hr className="my-6" />
                  <CardContent className="text-sm text-muted-foreground">
                    <ul className="space-y-3">
                      {plan.feats.map((feat, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Check className="text-primary" />
                          <li>{feat.item}</li>
                        </div>
                      ))}
                    </ul>
                  </CardContent>
                </div>
                <CardFooter className="flex-col gap-2">
                  <Button
                    type="submit"
                    className="w-full cursor-pointer hover:bg-primary hover:text-white"
                    variant={"outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>

          {/* Yearly Plan */}
          <TabsContent
            value="yearly"
            className="grid grid-cols-1 gap-5 lg:grid-cols-3"
          >
            {yearlyPlan.map((plan, index) => (
              <Card
                key={index}
                className={`justify-between p-8 lg:w-96 ${index === 1 ? "border border-[#237A50] bg-card-background" : ""}`}
              >
                <div>
                  <CardHeader className="space-y-4">
                    <CardTitle className="text-center">{plan.title}</CardTitle>
                    <div className="flex flex-col items-center gap-3">
                      <div>{plan.icon}</div>
                      <p className="text-4xl font-bold">
                        {plan.price}
                        <span className="text-base font-normal text-gray-400">
                          /user
                        </span>
                      </p>
                    </div>
                    <CardDescription className="text-center">
                      {plan.desc}
                    </CardDescription>
                  </CardHeader>
                  <hr className="my-6" />
                  <CardContent className="text-sm text-muted-foreground">
                    <ul className="space-y-3">
                      {plan.feats.map((feat, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Check className="text-primary" />
                          <li>{feat.item}</li>
                        </div>
                      ))}
                    </ul>
                  </CardContent>
                </div>
                <CardFooter className="flex-col gap-2">
                  <Button
                    type="submit"
                    className="w-full cursor-pointer hover:bg-primary hover:text-white"
                    variant={"outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default SubscriptionPlan
