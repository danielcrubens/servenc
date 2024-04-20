import styled from "styled-components"

export const Container = styled.div`
  #main {
    width: 100%;
    height: 500px;
    background: url("/bg-main.jpg");
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;

    .desktop-align {
      display: flex;
      justify-content: space-between;

      #main-text {
        width: 400px;
        margin-top: 100px;

        h1,
        h2 {
          line-height: 90%;
          color: #172c92;
        }

        h1 {
          font-size: 48px;
          font-weight: 900;
        }

        h2 {
          font-size: 24px;
          font-weight: 600;
        }
      }

      #person {
        img {
          height: 500px;
        }
      }
    }
  }

  #info-inicial {
    padding: 125px 0;
    text-align: center;

    h2 {
      font-size: 32px;
      padding-bottom: 20px;
    }

    p {
      font-size: 24px;
      color: #545454;
    }
  }

  #solucoes {
    background-color: #172c92;
    width: 100%;
    padding: 125px 0;
    text-align: center;

    h2 {
      font-size: 32px;
      padding-bottom: 20px;
      color: white;
    }

    p {
      font-size: 24px;
      color: white;
    }

    #grid-solucoes {
      padding-top: 100px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 40px;

      @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(1, 1fr);
      }

      .item {
        border: white solid 1px;
        border-radius: 24px;
        width: 307px;
        height: 100px;
        display: flex;
        padding: 20px;
        text-align: center;

        div {
          align-items: center;
          display: flex;
          margin: 0 auto;

          h3 {
            color: white;
            font-weight: 400;
          }

          .material-icons {
            color: white;
            font-size: 32px;
            margin-right: 10px;
          }
        }
      }
    }
  }
  #servicos {
    width: 100%;
    padding: 125px 0;
    text-align: center;

    h2 {
      font-size: 32px;
      padding-bottom: 20px;
      color: #172c92;
    }

    p {
      font-size: 24px;
      color: #172c92;
    }

    .itemLeft,
    .itemRight {
      border: #172c92 solid 1px;
      border-radius: 44px;
      padding: 20px 60px;
      margin-top: 40px;
      padding-bottom: 40px;
      text-align: left;

      h2 {
        padding-bottom: 0;
      }

      div.align {
        display: flex;

        ul {
          li {
            font-size: 18px;
            margin-top: 12px;
            color: #172c92;
          }
        }
      }
    }

    .itemLeft {
      img {
        width: 250px;
        position: absolute;
        right: -76px;
        margin-top: -20px;
      }

      #icone-comercial {
        margin-top: -80px;
      }
    }

    .itemRight {
      padding-left: 250px;

      img {
        width: 250px;
        position: absolute;
        left: -76px;
        margin-top: -80px;
      }
    }
  }

  #service-prime {
    background-color: #172c92;
    width: 100%;
    padding: 125px 0;
    text-align: left;

    .desktop-align {
      .align {
        display: flex;

        img {
          width: 550px;
          height: 350px;
        }

        div {
          margin-left: 80px;
          margin-top: 40px;

          h2 {
            font-size: 32px;
            padding-bottom: 20px;
            color: #fff;
          }

          p {
            font-size: 16px;
            color: #fff;
          }
        }
      }

      #text-service-prime {
        margin-top: 50px;
        display: flex;
        border: #fff solid 1px;
        border-radius: 44px;
        padding: 20px 60px;

        img {
          width: 200px;
          height: 200px;
          margin-right: 60px;
          margin-top: 20px;
        }

        ul {
          padding-right: 20px;
          width: 40%;

          li {
            color: #fff;
          }
        }
      }
    }
  }

  #showAcaoSocial {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    text-align: center;
    align-items: center;
    background-color: rgb(0 0 0 / 78%);

    img {
      margin-top: 100px;
      height: 80%;
    }
  }

  #acoes-sociais {
    background-color: #fff;
    width: 100%;
    padding: 125px 0;
    text-align: center;

    h2 {
      font-size: 32px;
      padding-bottom: 20px;
      color: #172c92;
    }

    p {
      font-size: 24px;
      color: #172c92;
    }

    #slider {
      display: flex;
      justify-content: space-around;
      margin-top: 80px;
      align-items: center;

      .material-icons {
        font-size: 60px;
        color: #172c92;
        cursor: pointer;

        :hover {
          opacity: 0.9;
        }
      }

      .item {
        width: 700px;
        height: 400px;
        background-color: #efefef;
        padding-top: 40px;
        border-radius: 40px;

        img {
          width: 200px;
          height: 200px;
        }

        h2 {
          padding-bottom: 0;
        }
      }
    }
  }

  #video-conheca {
    background-color: #884194;
    padding: 125px 0;
    width: 100%;

    .desktop-align {
      display: flex;
      align-items: center;

      div {
        margin-left: 40px;
        margin-top: -30px;

        h2 {
          color: white;
          font-size: 42px;
          margin-bottom: 10px;
        }

        .MuiButtonBase-root {
          color: white !important;
          border-color: white !important;
        }
      }
    }
  }

  #footer {
    background-color: black;
    padding: 125px 0;
    width: 100%;

    #grid-footer {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 40px;

      img {
        width: 170px;
      }

      p,
      a {
        color: white;
      }

      a {
        text-decoration: underline;
      }
    }
  }
`
