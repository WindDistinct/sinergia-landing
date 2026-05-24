export interface HeroContent {
    title: string
    subtitle: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
}

export interface SectionContent {
    title: string
    subtitle?: string
    description?: string
}

export interface CardContent {
    title: string
    description: string
    icon?: string
}

export interface ExperienceLevel {
    name: string
    description: string
    includes: string[]
    result: string[]
    featured?: boolean
}