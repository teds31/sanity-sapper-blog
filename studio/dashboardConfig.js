export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6058eaf121d0c32082c0d503',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-cff67j3r',
                  apiId: 'fd671c85-a333-4456-bbb8-bdb4d55a71f6'
                },
                {
                  buildHookId: '6058eaf1cd3c7530c1dc6cd3',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-rzkkgfyv',
                  apiId: 'a1aaafe7-9681-4d7e-b8a4-677af114b451'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/teds31/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-rzkkgfyv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
