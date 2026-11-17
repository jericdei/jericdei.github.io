export const site = {
    name: 'Jeric June Logan',
    role: 'Full-Stack Software Engineer',
    description:
        'Full-stack software engineer in Manila, Philippines. Senior Backend Engineer at Guerilla360, building web products with TypeScript, Next.js, Laravel and AWS.',
    url: 'https://jericdei.github.io',
    locale: 'en_US',
    city: 'Manila',
    countryCode: 'PH',
    ogImage: {
        src: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Jeric June Logan builds for the web — full-stack software engineer',
    },
    education: 'Pamantasan ng Lungsod ng Maynila',
    email: 'loganjeric25@gmail.com',
    location: 'Philippines',
    socials: [
        {
            label: 'GitHub',
            href: 'https://github.com/jericdei',
            icon: 'ri-github-fill',
        },
        {
            label: 'LinkedIn',
            href: 'https://linkedin.com/in/jericjunee',
            icon: 'ri-linkedin-box-fill',
        },
    ],
}

export const formatMonth = (date: Date | null | undefined) =>
    date
        ? date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
        : 'Present'

export const formatDate = (date: Date | null | undefined) =>
    date?.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
