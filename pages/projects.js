import React from 'react'
import Styled from '@emotion/styled'
import Layout from '../components/Layout'
import Head from 'next/head';

const About = ({configData})=> {

    return (
        <Layout>
            <Head>
                <title>{configData.siteTitle} - About</title>
                <meta name="description" content={configData.siteDescription}/>
                <meta name="keywords" content={configData.siteKeywords}/>
                <meta name="author" content={configData.author}/>
            </Head>
            <AboutStyled>
                <div className="content">
                    <div className="post-header">
                        <h1 className="post-title">Projects</h1>
                    </div>
                    <div className="post-content">
                    <ol className="grid-group">
                        <li className="grid-item">
                            <div className="image">
                                <img src="/images/cov-id19-screenshot.png"></img>
                                <a href="https://cov-id19.herokuapp.com">Covid 19 Tracker Website</a>
                                <span>React.js, Express, Node.js, MongoDB</span>
                            </div>
                        </li>
                        <hr/>
                    </ol>
                    </div>
                </div>
            </AboutStyled>
        </Layout>
  )
}

const AboutStyled = Styled.div`
    .post-header{
    display: flex;
    flex-direction: column;
    align-items: center;

        .post-title{
        font-size:2.8rem;
        font-weight:800;
        font-family:"Open Sans",sans-serif;
        text-align:center;
        margin-bottom:10px;
        }
    }
    hr{
        border: 1px solid #eee;
        margin:3rem 0;
    }
    .image{
        display: flex;
        flex-direction: column;
        align-items: center;
}
    }
    .image a{
        text-align:center;
        margin-top:1rem;
        font-style:italic;
        font-weight:bold;
    }
    .image span{
        text-align:center;
        font-size:.9rem;
        margin-top:.5rem;
        color:#999;
        font-style:italic;
    }
    .image img{
        border:1px solid #eee;
        border-radius:10px;
    }
    .grid-group{
        display: grid;
        margin-top:1.25rem;
        list-style: none;
    }
    a{
        color:#ff1493;
    }

`

export default About

About.getInitialProps = async (context) => {
    const configData = await require(`../public/siteconfig.json`)

    return{
        configData
    }
}