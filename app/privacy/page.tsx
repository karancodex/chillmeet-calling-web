import LegalLayout from "@/components/ui/LegalLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Your Anonymity Matters | ListnerZone",
    description: "Learn how ListnerZone protects your privacy and maintains your anonymity during listening sessions. We prioritize your emotional safety.",
    alternates: {
        canonical: "https://listnerzone.com/privacy",
    },
};


const content = (
    <>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2>Introduction</h2>
        <p>ListnerZone takes your privacy seriously. We operate on a principle of anonymity and emotional safety.</p>

        <h2>Information We Collect</h2>
        <p>We do not collect personal identifiers like your real name or address. We may collect:</p>
        <ul>
            <li>Usage data (time spent, features used)</li>
            <li>Technical data (device type, IP address for security)</li>
            <li>Payment information (processed securely by third-party payment gateways, not stored on our servers)</li>
        </ul>

        <h2>Call Privacy</h2>
        <p>Calls are audio-only and are not recorded by ListnerZone unless explicitly stated for quality assurance in specific training modules (with prior consent). We do not listen to your live calls.</p>

        <h2>Data Security</h2>
        <p>We use industry-standard encryption to protect your data.</p>
    </>
);

export default function PrivacyPage() {
    return <LegalLayout title="Privacy Policy">{content}</LegalLayout>;
}
