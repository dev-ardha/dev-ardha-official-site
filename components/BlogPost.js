import Styled from '@emotion/styled'
import Link from 'next/link'
import { Calendar, User } from 'react-feather'

const BlogPost = ({title, author, date, img, body, tags, slug})=> {
    return(
        <BlogPostStyled className="blog-post">
            <div className="post-image">
                <img src={img} alt=""/>
            </div>
            <div className="post-preview">
                <ul className="labels">
                    {
                        tags.map((tag, index) => {
                            return(
                                <li key={index}>{tag}</li>
                            )
                        })
                    }
                </ul>
                <Link href="/blog/[slug]" as={`/blog/${slug}`}><h2 className="post-title"><a>{title}</a></h2></Link>
                <span className="post-details"><User/> {author} <Calendar className="calendar"/> {date}</span>
                <p>{body.slice(0, 120)} ...</p>
            </div>
        </BlogPostStyled>
    )
}

const BlogPostStyled = Styled.div`
    display:flex;
    border-bottom:1px solid #eee;
    margin-bottom:2rem;
    padding-bottom:2rem;

    .post-image{
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 280px;
        height:210px;

        img{
            height:100%;
            object-fit:cover;
            max-width: 100%;
            border-radius: 6px;
        }
    }
    .post-preview{
        max-width: 100%;
        overflow-wrap: break-word;
        display: flex;
        flex-direction: column;
        padding: 0 0 0 1rem;

        .labels{
            display:flex;
            margin-bottom:4px;
        }
        .labels li{
            background: rgb(255, 20, 147);
            color: #fff;
            font-weight: 300;
            font-size: .9rem;
            padding: .5rem;
            border-radius: 5px;
            margin: 0 10px 0 0;
        }

        .post-title{
            font-size:1.8rem;
            font-weight:800;
            font-family:"Open Sans",sans-serif;
            color: ${props => props.theme.colors.text};

            a:hover{
                color:${props => props.theme.colors.primary};
            }
        }

        .post-details{
            font-size:.8rem;
            font-family: 'Open Sans', sans-serif;
            margin-top:10px;
            color:#999;
            align-items:center;
            display: flex;
            margin-bottom:5px;

            svg{
                width:1rem;
                margin-right:5px;
            }
            .calendar{
                margin-left:1rem;
            }
        }
    }
    P{
        font-size:1rem;
        color: ${props => props.theme.colors.text};
    }
`

export default BlogPost;