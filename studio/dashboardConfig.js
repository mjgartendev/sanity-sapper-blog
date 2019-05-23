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
                  buildHookId: '5ce68b6fb34ba7e06ac263fc',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-tc6ebm3s',
                  apiId: '217a3efd-cf08-4cc8-b765-b761363763b6'
                },
                {
                  buildHookId: '5ce68b6f416da8fe294795a4',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-fiaz4zpk',
                  apiId: '77ed8f34-b7f1-4ad4-bcd7-7e6c7053f99f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mjgartendev/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-fiaz4zpk.netlify.com', category: 'apps'}
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
