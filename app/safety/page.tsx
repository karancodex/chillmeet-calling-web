import { Metadata } from "next";
import SafetyClient from "./SafetyClient";

export const metadata: Metadata = {
    title: "Trust & Safety | Your Privacy is Our Priority",
    description: "Learn about our safety protocols, verified listeners, and end-to-end privacy measures. ListnerZone is designed to be a completely secure and anonymous sanctuary.",
    alternates: {
        canonical: "https://listnerzone.com/safety",
    },
};

export default function SafetyPage() {
    return <SafetyClient />;
}
