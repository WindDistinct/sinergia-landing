import type {
    HeroContent,
    SectionContent,
    CardContent,
    ExperienceLevel
} from '../types/content'


export const hero: HeroContent = {
    title: 'Stands que',
    titleHighLight: 'detienen',
    titleEnd: 'a todos.',

    description:
        'Diseñamos experiencias de marca que atraen, generan interacción y construyen recordación.',

    ctaPrimary: 'Conversemos',
    ctaSecondary: 'Ver experiencias'
}


export const competition: SectionContent = {

    title: 'Las marcas hoy no compiten por espacio',

    subtitle: 'Compiten por atención en entornos masivos',

    description:
        'La visibilidad ya no depende únicamente de estar presente. Las marcas necesitan experiencias que las personas quieran vivir y recordar.'
}


export const problemSection: SectionContent = {

    title: 'Así lo',

    description:
        'Cada stand nace en nuestro taller en Chorrillos. Lo fabricamos, lo pre-ensamblamos y lo llevamos a feria listo para montar. Cero improvisación el día del evento.'
}


export const problems: CardContent[] = [

    {
        title: 'Solo exhiben',
        description:
            'Muestran información y productos sin generar impacto.'
    },

    {
        title: 'No generan interacción',
        description:
            'Las personas observan pero no participan.'
    },

    {
        title: 'No crean recordación',
        description:
            'La experiencia desaparece cuando termina el evento.'
    }

]


export const mindset: SectionContent = {

    title: 'Un stand no es un espacio',

    description:
        'Es una experiencia de marca.'
}


export const solution: SectionContent = {

    title: 'Convertimos espacios en experiencias',

    description:
        'Diseñamos e implementamos stands y activaciones que atraen, conectan y generan recordación.'
}


export const about: SectionContent = {

    title: '¿Quiénes somos?',

    description:
        'En Sinergia diseñamos experiencias de marca en espacios físicos que generan conexión real. Con Crealab extendemos esa experiencia mediante soluciones tangibles que fortalecen la recordación.'
}


export const methodologySection: SectionContent = {

    title: 'Nuestro enfoque'
}

export const methodology: CardContent[] = [

    {
        title: 'Brief & Estrategia',
        description:
            'Entendemos tu feria, tu competencia y el espacio asignado. Definimos objetivos antes de dibujar una línea.'
    },

    {
        title: 'Diseño & Render',
        description:
            '3D fotorrealista del stand completo. Ves exactamente lo que vamos a construir antes de aprobar.'
    },

    {
        title: 'Montaje en Feria',
        description:
            'Nuestro equipo monta el stand en sitio. Tú llegas y vendes. Nosotros nos ocupamos del resto.'
    },
    {
        title: 'Desmontaje',
        description:
            'Al cierre de la feria recogemos todo. Si el stand es reutilizable, lo almacenamos para tu próximo evento.'
    }
]


export const servicesSection: SectionContent = {

    title: '¿Qué hacemos?'
}


export const services: CardContent[] = [

    {
        title: 'Stands y ferias',

        description:
            'Diseño, producción e implementación.'
    },

    {
        title: 'Activaciones de marca',

        description:
            'Experiencias que generan interacción y engagement.'
    },

    {
        title: 'Merchandising (Crealab)',

        description:
            'Productos, kits y branding físico.'
    }

]


export const differentiatorSection: SectionContent = {

    title: 'No diseñamos stands para exhibir',

    subtitle:
        'Diseñamos espacios que generan resultados para la marca'
}


export const differentiators: CardContent[] = [

    {
        title: 'Pensamiento estratégico',

        description:
            'Cada decisión responde a objetivos concretos.'
    },

    {
        title: 'Experiencia de usuario',

        description:
            'Creamos recorridos y puntos de interacción.'
    },

    {
        title: 'Ejecución integral',

        description:
            'Desde el concepto hasta la implementación.'
    }

]


export const portfolio: SectionContent = {

    title: 'Lo que',

    description:
        'Stands, activaciones y experiencias desarrolladas para generar impacto.'
}


export const experienceSection: SectionContent = {

    title: 'Niveles de experiencia según el impacto que buscas'
}


export const experienceLevels: ExperienceLevel[] = [

    {
        name: 'Stand Impacto',

        description:
            'Presencia sólida y profesional.',

        includes: [
            'Stand prediseñado',
            'Producción e implementación',
            'Branding integral',
            'Iluminación estratégica'
        ],

        result: [
            'Visibilidad',
            'Orden de marca',
            'Diferenciación básica'
        ]
    },

    {
        name: 'Stand Experiencial',

        featured: true,

        description:
            'Interacción que conecta con tu audiencia.',

        includes: [
            'Todo lo anterior',
            'Diseño conceptual',
            'Activación dentro del stand',
            'Kits y productos'
        ],

        result: [
            'Más tráfico',
            'Mayor interacción',
            'Conexión con la marca'
        ]
    },

    {
        name: 'Stand 360°',

        description:
            'Experiencia completa y recordación.',

        includes: [
            'Todo lo anterior',
            'Merchandising personalizado',
            'Elementos interactivos',
            'Registro fotográfico'
        ],

        result: [
            'Alto impacto',
            'Recordación post evento',
            'Mayor retorno'
        ]
    }

]


export const helpSection: SectionContent = {

    title: 'Cómo podemos potenciar tu presencia en feria'
}


export const helpItems: CardContent[] = [

    {
        title: 'Destacar',

        description:
            'Destaca frente a competidores.'
    },

    {
        title: 'Atraer',

        description:
            'Genera más tráfico hacia tu espacio.'
    },

    {
        title: 'Interactuar',

        description:
            'Incrementa la participación.'
    },

    {
        title: 'Recordar',

        description:
            'Construye una experiencia memorable.'
    }

]


export const cta = {

    title:
        'La diferencia no está en el espacio que ocupas',

    description:
        'Sino en cómo se vive y se recuerda tu marca.',

    button:
        'Conversemos'
}


export const contact = {

    phone: '+51 949 246 107',

    email: 'm.ortega@sinergiasmc.com',

    address:
        'Av. Defensores del Morro 1615–1625 Of.1–111, Chorrillos'
}