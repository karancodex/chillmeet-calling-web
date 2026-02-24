import { Metadata } from "next";
import ApplyClient from "./ApplyClient";

export const metadata: Metadata = {
    title: "Become a Listener | Join Our Mission | ListnerZone",
    description: "Want to help others by offering a compassionate ear? Apply to become a listener on ListnerZone. We provide training and a supportive community.",
    alternates: {
        canonical: "https://listnerzone.com/listener/apply",
    },
};

export default function ApplyPage() {
    return <ApplyClient />;
}
