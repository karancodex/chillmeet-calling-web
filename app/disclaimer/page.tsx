import LegalLayout from "@/components/ui/LegalLayout";

const content = (
    <>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2>Legal Disclaimer</h2>
        <p>The information and content provided on ChillMeet, including our website and services, are for informational and emotional support purposes only.</p>

        <h2>Not a Substitute for Professional Advice</h2>
        <p>We are not a provider of medical, psychological, or psychiatric services. Never disregard professional medical advice or delay in seeking it because of something you have read or heard on ChillMeet.</p>

        <h2>No Liability</h2>
        <p>We are not liable for any damages or injuries arising from the use of our services. Use at your own risk.</p>

        <h2>Emergencies</h2>
        <p>If you or someone you know is in immediate danger or experiencing a medical emergency, call emergency services immediately (911 in US, 112 in India/Europe, or local emergency numbers).</p>
    </>
);

export default function DisclaimerPage() {
    return <LegalLayout title="Disclaimer">{content}</LegalLayout>;
}
