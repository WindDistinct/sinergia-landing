export const useSEO = ({
    title,
    description,
    keywords = [],
    image,
    url
}: {
    title: string
    description: string
    keywords?: string[]
    image?: string
    url?: string
}) => {

    useSeoMeta({

        title,
        description,

        keywords: keywords.join(','),

        ogTitle: title,
        ogDescription: description,
        ogImage: image,
        ogUrl: url,

        twitterTitle: title,
        twitterDescription: description,
        twitterImage: image,

        twitterCard: 'summary_large_image'
    })

}