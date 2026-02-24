import LegalLayout from "@/components/ui/LegalLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | ListnerZone",
    description: "Read our terms and conditions for using the ListnerZone platform. Learn about user conduct, payment terms, and our service disclaimer.",
    alternates: {
        canonical: "https://listnerzone.com/terms",
    },
};


const content = (
    <>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2>Introduction</h2>
        <p>By using ListnerZone, you agree to these Terms and Conditions. You must be at least 18 years old to use this service.</p>

        <h2>Not Therapy or Medical Advice</h2>
        <p>ListnerZone provides peer support and emotional connection. It is <strong>NOT</strong> a substitute for professional mental health services, therapy, or medical advice. Listeners are not licensed professionals.</p>

        <h2>User Conduct</h2>
        <p>You agree to treat listeners with respect. Harassment, hate speech, or inappropriate behavior will result in an immediate ban without refund.</p>

        <h2>Payment & Billing</h2>
        <p>Services are billed per minute or based on subscription. All fees are non-refundable except as provided in our Refund Policy.</p>
    </>
);

export default function TermsPage() {
    return <LegalLayout title="Terms & Conditions">{content}</LegalLayout>;
}
