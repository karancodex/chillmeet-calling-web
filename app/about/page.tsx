import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "About ListnerZone | Our Mission and Values",
    description: "Learn about the story behind ListnerZone. We provide a safe, anonymous space for empathetic listening and human connection.",
    alternates: {
        canonical: "https://listnerzone.com/about",
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
