import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
    }

    body, h1, h2, h3, p, span, textarea {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        color: rgb(30, 30, 30);
    }

    body {
        background-color: #F5F7F9;
    }

    p {
        padding: 30px 0;
    }

    h1, h2, h3 {
        margin: 0;
        font-weight: 700;
    }

    .disabled {
        display: none !important
    }

    .desktop-align {
        width: 1131px;
        margin: 0 auto;

        @media screen and (max-width: 1000px) {
            width: 100%;
        }
    }

`