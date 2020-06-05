import Layout from '../components/Layout'
import BlogPost from '../components/BlogPost'
import matter from 'gray-matter'
import Head from'next/head'

const Home = ({posts, config})=> {

  function compare( a, b ) {
    if ( a.frontmatter.date < b.frontmatter.date ){
      return 1;
    }
    if ( a.frontmatter.date > b.frontmatter.date ){
      return -1;
    }
    return 0;
  }

  const sorted = posts.sort( compare );
  
  return (
    <Layout>
      <Head>
        <title>{config.siteTitle}</title>
        <meta name="description" content={config.siteDescription}/>
        <meta name="keywords" content={config.siteKeywords}/>
        <meta name="author" content={config.author}/>
      </Head>
      <div className="message">#BlackLivesMatter</div>
      <div className="content">
        <ul>
          {
            sorted.map((post, index) => {
              return(
                <BlogPost
                key={index}
                slug={post.slug}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                img={post.frontmatter.image}
                body={post.markdownBody}
                author={post.frontmatter.author}
                />
              )
            })
          }
        </ul>
      </div>
      <style jsx>{`
      
      .message{
        width:100%;
        text-align:center;
        transform:translateY(2rem);
        
        color:#fff;
      }

      `}</style>
    </Layout>
  )
}

Home.getInitialProps = async (context)=> {

  const configData = await require(`../public/siteconfig.json`)


  const posts = (context => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../content', true, /\.md$/))

  return {
    posts: posts, config: configData
  }
}

export default Home;