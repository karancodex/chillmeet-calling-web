import { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
    title: "Pricing & Plans | ListnerZone",
    description: "Transparent pricing for professional emotional support. Choose between pay-per-call or monthly subscription plans for unconditional listening.",
    alternates: {
        canonical: "https://listnerzone.com/pricing",
    },
};

export default function PricingPage() {
    return <PricingClient />;
}
