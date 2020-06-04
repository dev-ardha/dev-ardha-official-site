import { Global, css } from '@emotion/core';

const GlobalStyles = ()=> {
    return(
        <>
        <Global styles={css`
        
        /*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
        html,
        body,
        p,
        ol,
        ul,
        li,
        dl,
        dt,
        dd,
        blockquote,
        figure,
        fieldset,
        legend,
        textarea,
        pre,
        iframe,
        hr,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
        margin: 0;
        padding: 0;
        }

        body{
            font-family: 'Inter', sans-serif;
            font-size:16px;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
        font-size: 100%;
        font-weight: normal;
        }

        a{
            text-decoration:none;
            color: #000;
            cursor: pointer;
        }
        p{
            font-weight: 300;
            line-height:30px;
            font-size: 1.1rem;
        }

        ul {
        list-style: none;
        }

        button,
        input,
        select,
        textarea {
        margin: 0;
        }

        html {
        box-sizing: border-box;
        }

        *, *::before, *::after {
        box-sizing: inherit;
        }

        img,
        video {
        height: auto;
        max-width: 100%;
        }

        iframe {
        border: 0;
        }

        table {
        border-collapse: collapse;
        border-spacing: 0;
        }

        td,
        th {
        padding: 0;
        }

        td:not([align]),
        th:not([align]) {
        text-align: left;
        }

        /* Imports
        ========================================================================== */
        
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');
        

        /* Components
        ========================================================================== */
        .container{
            padding: 0 10%;
            margin: 0 auto;
            max-width:100%;
            display:flex;
        }
        .content{
            padding:70px 20%;
            max-width:100%;
        }

        `}/>
    </>
    )
}

export default GlobalStyles;