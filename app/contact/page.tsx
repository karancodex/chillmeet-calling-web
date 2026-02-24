import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact Us | ListnerZone Support",
    description: "Have questions or need help? Reach out to the ListnerZone team. We're here to listen and support you.",
    alternates: {
        canonical: "https://listnerzone.com/contact",
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
