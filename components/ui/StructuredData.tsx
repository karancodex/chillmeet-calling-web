export default function StructuredData() {
    const organizationData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ListnerZone',
        url: 'https://listnerzone.com',
        logo: 'https://listnerzone.com/favicon.svg',
        sameAs: [
            'https://twitter.com/listnerzone',
            'https://instagram.com/listnerzone'
        ],
        description: 'A digital sanctuary for anonymous emotional support and active listening.'
    };

    const websiteData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'ListnerZone',
        url: 'https://listnerzone.in',
    };

    const serviceData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Anonymous Emotional Support',
        provider: {
            '@type': 'Organization',
            name: 'ListnerZone'
        },
        description: 'Professional anonymous listening service for emotional well-being.',
        areaServed: 'Global'
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
            />
        </>
    );
}
