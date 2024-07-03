import { useConfig } from 'nextra-theme-docs'


export default {
  logo: <span>Meta Language Learning</span>,
  project: {
    link: 'https://github.com/jackdfraser/meta-language-learning',
  },
  docsRepositoryBase:
    'https://github.com/jackdfraser/meta-language-learning',
  search: {
    placeholder: "Search..."
  },
  // there was a duplicate title & description in the nextra
  // causing link previews to preview to nextra of your site
  // this keeps the viewport and removes the default preview to nextra
  head:(
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  ),
  useNextSeoProps() {
    const { frontMatter } = useConfig()
    return {
      titleTemplate: '%s | Meta Language Learning',
      description: frontMatter.description || `Language learning fundamentals in English`,
    }
  },
}