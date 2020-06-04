import React from 'react'
import Styled from '@emotion/styled'
import Layout from '../components/Layout'
import Head from 'next/head';
import { Html5, Css3, Javascript, Sass, ReactJs, NextDotJs, Mysql, Mongodb, Python, Github, Bootstrap, Typescript, Jquery, Webpack } from '@icons-pack/react-simple-icons'


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
                        <h1 className="post-title">About</h1>
                    </div>
                    <div className="post-content">
                        <p>Nama Saya Yudhatama Indra Wardhana. Saya seorang Front-End Developer yang mencoba merangkap sebagai Full-Stack Developer. Saya seorang mahasiswa yang sekarang sedang berkuliah semester dua di jurusan Teknik Informatika Universitas Semarang.</p>
                        <p>Masuk ke dunia pemrograman sejak lulus sma, PHP menjadi bahasa pertama saya. Namun saya kemudian jatuh cinta dengan JavaScript dan mulai mendalami dunia front-end web development dan kemudian berkenalan dengan React.js. Kini saya mencoba menambah skill saya dengan belajar Node.js dan Deno untuk melengkapi tech stack saya sebagai seorang Full-Stack Javascript Developer</p>
                        <p>Berikut ini adalah beberapa teknologi yang saya gunakan:</p>
                        <ol className="skill-group">
                            <li className="skill html">
                                <Html5/>
                                <span>HTML 5</span>
                            </li>
                            <li className="skill css">
                                <Css3/>
                                <span>CSS 3</span>
                            </li>
                            <li className="skill js">
                                <Javascript/>
                                <span>Javascript</span>
                            </li>
                            <li className="skill ts">
                                <Typescript/>
                                <span>Typescript</span>
                            </li>
                            <li className="skill jquery">
                                <Jquery/>
                                <span>jQuery</span>
                            </li>
                            <li className="skill bootstrap">
                                <Bootstrap/>
                                <span>Bootstrap 5</span>
                            </li>
                            <li className="skill sass">
                                <Sass/>
                                <span>Sass</span>
                            </li>
                            <li className="skill react">
                                <ReactJs/>
                                <span>React.js</span>
                            </li>
                            <li className="skill next">
                                <NextDotJs/>
                                <span>Next.js</span>
                            </li>
                            <li className="skill mysql">
                                <Mysql/>
                                <span>MySQL</span>
                            </li>
                            <li className="skill mongo">
                                <Mongodb/>
                                <span>MongoDB</span>
                            </li>
                            <li className="skill python">
                                <Python/>
                                <span>Python</span>
                            </li>
                            <li className="skill webpack">
                                <Webpack/>
                                <span>Webpack</span>
                            </li>
                            <li className="skill github">
                                <Github/>
                                <span>GitHub</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </AboutStyled>
        </Layout>
  )
}

const AboutStyled = Styled.div`

    .html svg{
        fill: rgb(227, 79, 38);
    }
    .css svg{
        fill: rgb(21, 114, 182);
    }
    .js svg{
        fill:rgb(247, 223, 30);
    }
    .sass svg{
        fill:rgb(204, 102, 153);
    }
    .react svg{
        fill:rgb(97, 218, 251);
    }
    .next svg{
        fill:#000;
    }
    .mysql svg{
        fill:rgb(68, 121, 161);
    }
    .mongo svg{
        fill: #589636;
    }
    .ts svg{
        fill:#007acc;
    }
    .bootstrap svg{
        fill:#553C7B;
    }
    .python svg{
        fill:#4b8bbe;
    }
    .gatsby svg{
        fill:#663399;
    }
    .jquery svg{
        fill:#0769ad;
    }
    .webpack svg{
        fill:#1C78C0;
    }

    .skill{
        display:flex;
        flex-direction:column;

        span{
            font-size:.9rem;
            margin-top:10px;
            text-align:center;
            color:#999;
        }
    }
    .skill-group{
        display: flex;
        justify-content: center;
        flex-wrap:wrap;
        margin-top:2rem;

        li{
            list-style: none;
            width: 100px;
            justify-content: center;
            align-items: center;
            display: flex;
            margin:0 5px 2.5rem 5px;

            svg{
                width: auto;
                height: 3rem;
            }
        }
    }
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

    p{
        margin: 1.25rem 0;
        text-align:justify;

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
`

export default About

About.getInitialProps = async (context) => {
    const configData = await require(`../public/siteconfig.json`)

    return{
        configData
    }
}