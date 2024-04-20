import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Container } from "./AppStyle"
import { BrowserRouter } from "react-router-dom"

import Routes from "./routes"
import Header from "./layout/Header"

import GlobalStyle from "./GlobalStyle"

const theme = createTheme({
  palette: {
    primary: {
      main: "#172c92",
    },
    secondary: {
      main: "#fff",
    },
  },
})

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Container>
            <Header />
            <Routes />
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
