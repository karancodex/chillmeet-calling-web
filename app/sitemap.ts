import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://listnerzone.com';

    const routes = [
        '',
        '/about',
        '/contact',
        '/crisis',
        '/pricing',
        '/safety',
        '/terms',
        '/privacy',
        '/refund',
        '/faq',
        '/disclaimer',
        '/listener/apply',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
