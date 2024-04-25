import styled from "styled-components"

export const WppButton = styled.div`
  position: fixed;
  z-index: 99;
  bottom: 20px;

  @media screen and (max-width: 1000px) {
    left: 20px;
  }

  @media screen and (min-width: 1000px) {
    right: 20px;
  }

  img {
    width: 90px;
  }
`

export const Container = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 99;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);

  a {
    cursor: pointer;
  }

  .desktop-align {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;

    img {
      width: auto !important;
      height: 45px;
      margin-top: 7px;
    }

    #menu-options {
      display: flex;

      p {
        margin-top: 20px;
        font-size: 16px;
        margin-left: 40px;
      }

      a:hover {
        p {
          color: #172c92;
          font-weight: 700;
        }
      }

      .active {
        p {
          color: #172c92;
          font-weight: 700;
        }
      }
    }

    #menu-login {
      display: flex;
      margin-top: 3px;

      .material-icons {
        margin-top: 15px;
        margin-right: 10px;
      }

      p {
        font-size: 16px;
      }
    }

    #menu-login:hover {
      p {
        color: #172c92;
        font-weight: 700;
      }
    }

    .button-rounded {
      margin-top: -5px;

      p {
        /* border: solid 1px #172c92; */
        border-radius: 24px;
        padding: 5px 10px;
        background:#172c92;
        color:#dcb51a;

        :hover {
          /* border-color: #172c92; */
          border-width: 2px;
          background:#dcb51a;
          color:#172c92;

        }
      }
    }
  }

  #menu-mobile {
    padding: 5px 40px;
    height: 100%;

    #menu-mobile-align-header {
      display: flex;
      justify-content: space-between;

      img {
        width: auto;
        height: 40px;
        margin-top: 10px;
        margin-bottom: 10px;
      }

      .material-icons {
        font-size: 32px;
        margin-top: 14px;
      }
    }

    #menu-mobile-options {
      height: 100vh;
      margin-top: 40px;

      h2 {
        font-size: 24px;
        margin: 30px 0;
      }

      #menu-login {
        margin: 40px 0;
        display: flex;

        .material-icons {
          font-size: 32px;
        }

        h2 {
          margin: -3px 0 0 10px;
        }
      }

      .button-rounded {
        margin-top: -5px;

        p {
          border: solid 1px #172c92;
          border-radius: 24px;
          padding: 5px 10px;

          :hover {
            border-color: #172c92;
            border-width: 2px;
          }
        }
      }
    }
  }
`
