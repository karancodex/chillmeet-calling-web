import LegalLayout from "@/components/ui/LegalLayout";
import Link from "next/link";

const content = (
    <>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2>Our Refund Policy</h2>
        <p>ListnerZone strives to provide quality connection. We understand things don't always go as planned.</p>

        <h2>Eligible Refunds</h2>
        <ul>
            <li>Call drops within the first 2 minutes due to technical issues.</li>
            <li>Listener behaves inappropriately (immediate refund + investigation).</li>
            <li>Accidental double charges.</li>
        </ul>

        <h2>Non-Eligible Refunds</h2>
        <p>We do not offer refunds if:</p>
        <ul>
            <li>You were slightly dissatisfied with the conversation after a full session.</li>
            <li>You changed your mind after the call started.</li>
            <li>You missed a scheduled appointment.</li>
        </ul>

        <h2>How to Request</h2>
        <p>Please <Link href="/contact" className="text-primary hover:underline">contact us via our official form</Link> within 24 hours of the incident.</p>
    </>
);

export default function RefundPage() {
    return <LegalLayout title="Refund Policy">{content}</LegalLayout>;
}
