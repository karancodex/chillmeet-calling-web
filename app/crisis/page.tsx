import { Metadata } from "next";
import CrisisClient from "./CrisisClient";

export const metadata: Metadata = {
    title: "Crisis Support | Immediate Help Resources",
    description: "If you are in immediate danger or experiencing a crisis, please use these professional emergency resources and helplines. Your safety is our priority.",
    alternates: {
        canonical: "https://listnerzone.com/crisis",
    },
};

export default function CrisisPage() {
    return <CrisisClient />;
}
