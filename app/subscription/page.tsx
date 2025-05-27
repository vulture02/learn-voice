import { PricingTable } from "@clerk/nextjs"

const Subscription = () => {
  return (
    <div className="pt-24"> {/* Adjust according to navbar height */}
      <PricingTable />
    </div>
  )
}

export default Subscription
