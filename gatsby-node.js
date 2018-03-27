const path = require(`path`);

const { createFilePath } = require(`gatsby-source-filesystem`);

// Parse date information out of blog post filename.
const BLOG_POST_FILENAME_REGEX = /([0-9]+)-([0-9]+)-([0-9]+)-(.+)\.md$/;

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === `MarkdownRemark`) {
    const { relativePath } = getNode(node.parent);
    if (relativePath.includes('blog')) {
      const match = BLOG_POST_FILENAME_REGEX.exec(relativePath);
      const year = match[1];
      const month = match[2];
      const day = match[3];
      const filename = match[4];

      const slug = `/blog/${year}/${month}/${day}/${filename}`;
      const date = new Date(year, month - 1, day);

      // Blog posts are sorted by date and display the date in their header.
      createNodeField({
        node,
        name: 'date',
        value: date.toJSON(),
      });

      createNodeField({
        node,
        name: 'slug',
        value: slug,
      });

      createNodeField({
        node,
        name: 'path',
        value: relativePath,
      });
    } else {
      const slug = createFilePath({ node, getNode });
      createNodeField({
        node,
        name: 'path',
        value: relativePath,
      });
      createNodeField({
        node,
        name: 'slug',
        value: slug,
      });
    }
  }
};

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage, createRedirect } = boundActionCreators;
  const allMarkdown = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);
    throw Error(allMarkdown.errors);
  }

  allMarkdown.data.allMarkdownRemark.edges.map(({ node }) => {
    const { slug } = node.fields;
    const slugWithoutSlash = slug.replace(/\/$/, ``);
    createPage({
      path: slugWithoutSlash,
      component: path.resolve('./src/templates/withSidebar.js'),
      layout: 'sidebar-layout',
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug,
      },
    });
    // Only redirect on doc pages to ensure the relative paths working
    if (!slug.includes('blog')) {
      createRedirect({
        fromPath: slug,
        redirectInBrowser: true,
        toPath: slugWithoutSlash,
      });
    }
  });

  const newestBlogEntry = await graphql(`
    {
      allMarkdownRemark(
        limit: 1
        filter: { id: { regex: "/blog/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const newestBlogNode = newestBlogEntry.data.allMarkdownRemark.edges[0].node;
  // Blog landing page should always show the most recent blog entry.
  createRedirect({
    fromPath: '/blog/',
    redirectInBrowser: true,
    toPath: newestBlogNode.fields.slug,
  });

  createRedirect({
    fromPath: '/blog',
    redirectInBrowser: true,
    toPath: newestBlogNode.fields.slug,
  });
};
