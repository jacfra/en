import { useConfig } from 'nextra-theme-docs'


export default {
  logo: <span>Meta Language Learning</span>,
  project: {
    link: 'https://github.com/jackdfraser/meta-language-learning',
  },
  docsRepositoryBase:
    'https://github.com/jackdfraser/meta-language-learning',
    search:{
      placeholder: "Search..."
    },
  useNextSeoProps() {
    const { frontMatter } = useConfig()
    return {
      titleTemplate: '%s - Meta Language Learning',
      description: frontMatter.description,
    }
  },
}