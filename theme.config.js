import { useConfig } from 'nextra-theme-docs'


export default {
  logo: <span>Meta Language Learning (English)</span>,
  project: {
    link: 'https://github.com/jacfra/en',
  },
  docsRepositoryBase:
    'https://github.com/jacfra/en',
    search:{
      placeholder: "Search..."
    },
  useNextSeoProps() {
    const { frontMatter } = useConfig()
    return {
      titleTemplate: '%s - Meta Language Learning (English)',
      description: frontMatter.description,
    }
  },
}