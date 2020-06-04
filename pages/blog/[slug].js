import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Styled from '@emotion/styled'
import CodeBlock from "../../components/styles/CodeBlock";
import { Calendar, User } from 'react-feather'

import Layout from '../../components/Layout'
import Head from 'next/head';

const Post = ({content, data, configData})=> {

    const frontmatter = data

    return (
        <Layout>
            <Head>
                <title>{frontmatter.title} - devArdha</title>
                <meta name="description" content={configData.siteDescription}/>
                <meta name="keywords" content={configData.siteKeywords}/>
                <meta name="author" content={configData.author}/>
            </Head>
            <PostStyled>
                <div className="content">
                    <div className="post-header">
                        <h1 className="post-title">{frontmatter.title}</h1>
                        <span className="post-details"><User/> {frontmatter.author} <Calendar className="calendar"/> {frontmatter.date}</span>
                        <img src={frontmatter.image} alt={frontmatter.imageAlt} className="hero-image"/>
                    </div>
                    <div className="post-content">
                        <ReactMarkdown escapeHtml={true} source={content} renderers={{ code: CodeBlock }}/>
                    </div>
                </div>
            </PostStyled>
        </Layout>
  )
}

const PostStyled = Styled.div`

    .post-header{
        display: flex;
        flex-direction: column;
        align-items: center;

        .post-details{
            color:#999;
            display: flex;
            align-items: center;

            svg{
                width:1.2rem;
                margin-right:.5rem;
            }
            .calendar{
                margin-left:1.25rem;
            }
        }
    }
    .post-title{
        font-size:2.8rem;
        font-weight:800;
        font-family:"Open Sans",sans-serif;
        text-align:center;
        margin-bottom:10px;
    }
    .hero-image{
        border-radius:5px;
        margin: 1.5rem auto 10px auto;
    }
    p{
        margin: 1.25rem 0;

        code{
            background-color: #84ffb5;
            padding: .3rem .5rem;
            font-size: .9rem;
            border-radius: 4px;
        }
    }
    a{
        color:#ff1493;
    }
    .post-content{
        h2{
            font-size:1.75rem;
            margin-top:2.5rem;
            font-weight:800;
            margin-bottom:-.5rem;
        }
        h3{
            font-weight:bold;
            margin-top:2rem;
        }
        h6{
            text-align: center;
            color: #999;
            font-size: .8rem;
            margin-top: -1.5rem;
        }
        img{
            margin: 1rem auto;
        }
    }
`

Post.getInitialProps = async (context) => {
    const configData = await require(`../../public/siteconfig.json`)
    const { slug } = context.query
    const content = await import(`../../content/${slug}.md`)
    const data = matter(content.default)

    return {
      ...data, configData
    }
}

export default Post