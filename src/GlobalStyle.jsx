import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

    * { box-sizing: border-box }
    
    html, body {
        margin: 0;
        padding: 0;
        border: 0;
        background-color: #F5F7F9;
        
        @media screen and (max-width: 1000px) {
            overflow-x: hidden !important;
        }
    }


    h1, h2, h3, p, a, div {
        font-family: 'Inter', sans-serif;
    }
    
    p {
        line-height: 125%;
    }
    

    a, a:visited {
        text-decoration: none;
        color: #000;
    }

    a:hover {
        color: #172c92;
    }

    html { scroll-behavior: smooth !important }

    .disabled {
        display: none !important;
    }
    
    @media screen and (max-width: 1000px) {
        .hide-mobile {
            display: none !important;
        }
    }
    
    @media screen and (min-width: 1000px) {
        .hide-desktop {
            display: none !important;
        }
    }

    .desktop-align {
        width: 1000px;
        margin: 0 auto;

        @media screen and (max-width: 1000px) {
            width: 80vw;
        }
    }
`
