import Styled from '@emotion/styled'
import Link from './Link'
import useDarkMode from 'use-dark-mode'
import { Sun, Moon } from 'react-feather'

const Header = ()=> {

    const isDark = useDarkMode(false);
    return(
        <HeaderStyled className="navbar">
            <div className="container">
                <ul>
                    <Link href="/" activeClassName="active"><li className="nav-link">Blog</li></Link>
                    <Link href="/projects" activeClassName="active"><li className="nav-link">Projects</li></Link>
                    <Link href="/about" activeClassName="active"><li className="nav-link">About</li></Link>
                    <Link href="/github"><li className="nav-link">GitHub</li></Link>
                </ul>
                <div className="nav-button">
                    <span onClick={isDark.toggle} className="toggle-dark">
                        {isDark.value ? <Sun/> : <Moon/>}
                    </span>
                </div>
            </div>
           {
               isDark.value
               ? <style jsx global>{`

                .navbar, .footer{
                   border-color:#111 !important;
                   background-color:#111213;
                }
                body{
                    background-color:#131415;
                }
                body, .post-title a, p{
                    color:#fff !important;
                }
                .post-title{
                    color:#ff1493;
                }
                .post-title a:hover{
                    color:#ff1493 !important;
                }
                .themeSwitch{
                    fill:#fff !important;
                    stroke:#fff !important;
                }
                p code{
                    color:#000;
                }
                .post-content h2{
                    color:#ff1493;
                }
                .next svg{
                    fill:#fff !important;
                }
                .github{
                    fill:#fff;
                }
               
               `}</style>
               : ''
           }
        </HeaderStyled>
    )
}

const HeaderStyled = Styled.header`
    border-bottom: 1px solid #eee;
    background-color:#fff;

    .toggle-dark{
        cursor:pointer;
    }

    .nav-button{
        margin-left: auto;
        display: flex;
        align-items: center;
    }

    ul{
        display:flex;

        li{
            padding: 1rem 1.25rem;
            font-size:.9rem;
            cursor:pointer;

            &:hover{
                color:${props => props.theme.colors.primary};
            }
        }
        .active{
            border-bottom:2px solid ${props => props.theme.colors.primary};
            color:${props => props.theme.colors.primary};
        }
    }
`

export default Header;