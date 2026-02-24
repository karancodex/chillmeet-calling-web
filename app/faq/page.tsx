import { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
    title: "FAQ | Frequently Asked Questions | ListnerZone",
    description: "Find answers to common questions about ListnerZone's anonymous listening sessions, privacy, safety, and how our platform works.",
    alternates: {
        canonical: "https://listnerzone.com/faq",
    },
};

export default function FAQPage() {
    return <FAQClient />;
}
