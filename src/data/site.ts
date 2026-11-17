export const site = {
    name: 'Jeric June Logan',
    role: 'Software Engineer',
    description:
        'Jeric June Logan — full-stack software engineer building fast, thoughtful web products with TypeScript, React, Next.js, Laravel and Vue.',
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
