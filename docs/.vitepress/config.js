export default {
    title: 'My Documentation',
    description: 'Documentation built with VitePress',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide' },
        ],
        sidebar: {
            '/': [
                { text: 'Introduction', link: '/' },
                { text: 'Guide', link: '/guide' },
            ],
        },
    },
}