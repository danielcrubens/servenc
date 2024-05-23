/* eslint-disable react-hooks/exhaustive-deps */
import { Icon } from "@mui/material"
import React, { useState, useEffect } from "react"

import { Container, WppButton } from "./style"

import Scroll from "react-scroll"
import { Button } from "@mui/material"

const Header = () => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false)

  function showBoxLogin() {
    document.querySelector("#box-select-login").style.display = "block"
  }

  return (
    <>
      <WppButton>
        <a href="https://api.whatsapp.com/send?phone=551532243762&text=Oi, tudo bem? Estou no site da Servenc administradora. Poderia me ajudar?">
          <img src="/whatsapp-logo-icone.png" />
        </a>
      </WppButton>
      <Container>
        <div className="desktop-align hide-mobile">
          <Scroll.Link
            smooth={true}
            activeClass="active"
            spy={true}
            to="main"
            offset={-150}
          >
            <img src="/ServenC.png" />
          </Scroll.Link>

          <div id="menu-options">
            <Scroll.Link
              smooth={true}
              activeClass="active"
              spy={true}
              to="servicos"
              offset={-150}
            >
              <p>Serviços</p>
            </Scroll.Link>

            <Scroll.Link
              smooth={true}
              activeClass="active"
              spy={true}
              to="solucoes"
              offset={-50}
            >
              <p>Diferenciais</p>
            </Scroll.Link>

            <Scroll.Link
              smooth={true}
              activeClass="active"
              spy={true}
              to="acoes-sociais"
              offset={-80}
            >
              <p>Ações Sociais</p>
            </Scroll.Link>

            <Scroll.Link
              smooth={true}
              activeClass="active"
              spy={true}
              to="service-prime"
              offset={-150}
              className="button-rounded"
            >
              <p>ServenC Prime</p>
            </Scroll.Link>

            
            <a href="https://www.brcondominio.com.br/br1/app/index.html" className="button-rounded"
            >
              <p>Boleto</p>
            </a>
          </div>
          <a href="https://servenceconomia.polgo.com.br" target="_blank" rel="noopener noreferrer">
            <div id="menu-login" onClick={showBoxLogin}>
              <Icon>login</Icon>
              <p>Login</p>
            </div>
          </a>
        </div>
        <div id="menu-mobile" className="hide-desktop">
          <div id="menu-mobile-align-header">
            <Scroll.Link
              smooth={true}
              activeClass="active"
              spy={true}
              to="main"
              offset={-150}
              onClick={() => setOpenMenuMobile(false)}
            >
              <img src="/ServenC.png" />
            </Scroll.Link>
            <Icon
              onClick={() => setOpenMenuMobile(true)}
              className={openMenuMobile ? "disabled" : ""}
            >
              menu
            </Icon>
            <Icon
              onClick={() => setOpenMenuMobile(false)}
              className={!openMenuMobile ? "disabled" : ""}
            >
              cancel
            </Icon>
          </div>

          <div
            id="menu-mobile-options"
            className={!openMenuMobile ? "disabled" : ""}
          >
            <Scroll.Link
              smooth={true}
              activeClass="active"
              spy={true}
              to="servicos"
              offset={-30}
              onClick={() => setOpenMenuMobile(false)}
            >
              <h2>Serviços</h2>
            </Scroll.Link>
            <hr />

            <Scroll.Link
              smooth={true}
              activeClass="active"
              spy={true}
              to="solucoes"
              offset={-150}
              onClick={() => setOpenMenuMobile(false)}
            >
              <h2>Diferenciais</h2>
            </Scroll.Link>
            <hr />

            <Scroll.Link
              smooth={true}
              activeClass="active"
              spy={true}
              to="acoes-sociais"
              offset={-150}
              onClick={() => setOpenMenuMobile(false)}
            >
              <h2>Ações Sociais</h2>
            </Scroll.Link>
            <hr />

            <Scroll.Link
              smooth={true}
              activeClass="active"
              spy={true}
              to="service-prime"
              offset={-150}
              className="button-rounded"
              onClick={() => setOpenMenuMobile(false)}
            >
              <h2>ServenC Prime</h2>
            </Scroll.Link>

            <hr />
            <a href="https://servenceconomia.polgo.com.br" onClick={showBoxLogin}>
              <div id="menu-login">
                <Icon>login</Icon>
                <h2>Login</h2>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Header
