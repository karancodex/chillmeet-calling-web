import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/_next/',
                    '/static/',
                    '/admin/',
                    '/private/',
                ],
            },
            {
                userAgent: 'GPTBot',
                disallow: ['/api/'],
            }
        ],
        sitemap: 'https://listnerzone.com/sitemap.xml',
        host: 'https://listnerzone.com',
    };
}
