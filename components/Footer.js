import Styled from '@emotion/styled'
import { Github } from '@icons-pack/react-simple-icons'

const Footer = ()=> {
    return(
        <FooterStyled className="footer">
            <div className="container">
                <a href="https://github.com/dev-ardha"><Github className="github"/></a>
                <p>Made with ❤️ and a keyboard by <a>dev.ardha</a></p>
            </div>
        </FooterStyled>
    )
}

const FooterStyled = Styled.footer`
    display:flex;
    align-items:center;
    justify-content:center;
    height:300px;

    border-top:1px solid #eee;
    
    .github{
        width: 40px;
        margin-bottom: 1.25rem;
        height: 40px;

        &:hover{
            fill:#ff1493;
        }
    }
    .container{
        flex-direction:column;
        align-items:center;
    }

    p{
        text-align:center;
        width:100%;

        a{
            color:${props => props.theme.colors.primary};
            font-weight:400;
        }
    }
`

export default Footer;