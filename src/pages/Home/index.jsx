/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"

import { Container } from "./style"

import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Icon from "@mui/material/Icon"

import Aos from "aos"
import "aos/dist/aos.css"

import CircularProgress from "@mui/material/CircularProgress"

const Home = () => {
  async function handleSubmit(e) {
    if (e) {
      e.preventDefault()
    }

    setLoading(true)

    try {
      // convert to formData
      const formData = new FormData()
      Object.keys(dataContato).forEach((key) =>
        formData.append(key, dataContato[key])
      )

      await fetch("https://formspree.io/f/xbjbabap", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      setSuccessSent(true)
    } catch (err) {
      alert("Erro ao enviar os dados")
    }

    setLoading(false)
  }

  useEffect(() => {
    // inicia lib AOS
    Aos.init({ duration: 2000 })
  }, [])

  function openWhatsApp() {
    window.location.href =
      "https://api.whatsapp.com/send?phone=551599842-6617&text=Oi, tudo bem? Estou no site da Servenc administradora. Poderia me ajudar?"
  }

  const [showAcaoSocial, setShowAcaoSocial] = useState(false)
  const [acaoSelected, setAcaoSelected] = useState("casalarsaojose")

  return (
    <Container>
      <div
        id="showAcaoSocial"
        className={showAcaoSocial ? "" : "disabled"}
        onClick={() => setShowAcaoSocial(false)}
      >
        <img src="/casalarsaojose.jpg" />
      </div>
      <div id="main">
        <div className="desktop-align">
          <div id="main-text" data-aos="fade-left">
            <h1>Administramos Sonhos</h1>
            <h2>Foque no que realmente importa</h2>
            <Button
              variant="contained"
              style={{ marginTop: 20 }}
              onClick={openWhatsApp}
            >
              Receba uma cotação personalizada
            </Button>
          </div>
          <div id="person" data-aos="fade-right">
            <img src="/homem.png" alt="Senhor" />
          </div>
        </div>
      </div>
      <div id="info-inicial">
        <div className="desktop-align">
          <h2>
            Sem preocupação, nós cuidamos para você focar <br />
            no que realmente importa
          </h2>
          <p data-aos="fade-up">
            Aqui na Servenc é assim, temos um time de especialistas em
            <br />
            administração para cada segmento:
          </p>
          <p data-aos="fade-up">
            Condomínios Residenciais, Prédios Comerciais e Associações! <br />
            Quer saber mais? Então solicite uma proposta e fale com o nosso
            time!
            <br />É simples e fácil! E você ainda escolhe se deseja receber uma
            ligação.
          </p>
          <Button
            variant="contained"
            style={{ marginTop: 20 }}
            data-aos="fade-up"
            onClick={openWhatsApp}
          >
            Receba uma cotação personalizada
          </Button>
        </div>
      </div>
      <div id="solucoes">
        <div className="desktop-align">
          <h2 data-aos="fade-up">Nossos Soluções</h2>
          <p data-aos="fade-up">Tudo que você precisa em uma administradora</p>
          <div id="grid-solucoes">
            <div className="item" data-aos="fade-up">
              <div>
                <Icon>subject</Icon>
                <h3>Prestação de contas</h3>
              </div>
            </div>
            <div className="item" data-aos="fade-up">
              <div>
                <Icon>gavel</Icon>
                <h3>Gestão de Inadimplência</h3>
              </div>
            </div>
            <div className="item" data-aos="fade-up">
              <div>
                <Icon>support_agent</Icon>
                <h3>Atendimento Dedicado</h3>
              </div>
            </div>
            <div className="item" data-aos="fade-up">
              <div>
                <Icon>currency_exchange</Icon>
                <h3>Pagar e Receber</h3>
              </div>
            </div>
            <div className="item" data-aos="fade-up">
              <div>
                <Icon>business</Icon>
                <h3>Assessoria Especializada</h3>
              </div>
            </div>
            <div className="item" data-aos="fade-up">
              <div>
                <Icon>maps_home_work</Icon>
                <h3>Implantação</h3>
              </div>
            </div>
            <div className="item" data-aos="fade-up">
              <div>
                <Icon>manage_search</Icon>
                <h3>Processos e Contratos</h3>
              </div>
            </div>
            <div className="item" data-aos="fade-up">
              <div>
                <Icon>supervised_user_circle</Icon>
                <h3>Gestão de Pessoas</h3>
              </div>
            </div>
            <div className="item" data-aos="fade-up">
              <div>
                <Icon>engineering</Icon>
                <h3>Central de Apoio Técnico</h3>
              </div>
            </div>
            <div className="item" data-aos="fade-up">
              <div>
                <Icon>pan_tool</Icon>
                <h3>Canal do Sindico</h3>
              </div>
            </div>
              <a href="https://servenc.hlp.polgo.online/" target="_blank" rel="noopener noreferrer">
            <div className="item" data-aos="fade-up">
              <div>
                <Icon>attach_money</Icon>
                <h3>Cashback</h3> 
              </div>
            </div>
              </a>
            <div className="item" data-aos="fade-up">
              <div>
                <Icon>emoji_events</Icon>
                <h3>Prêmios</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="servicos">
        <div className="desktop-align">
          <h2 data-aos="fade-up">Nossos Serviços</h2>
          <p data-aos="fade-up">Tudo que você precisa em uma administradora</p>
          <br />
          <div className="itemLeft" data-aos="fade-left">
            <h2>Empresarial</h2>
            <img src="/empresarial.png" alt="Empresarial" />
            <div className="align">
              <ul>
                <li>Administração de Contas</li>
                <li>Gestão de Contratos</li>
                <li>Admissão e Demissão</li>
                <li>Gestão de Mensalidade</li>
                <li>Gestão de Cobrança</li>
              </ul>
              <ul>
                <li>Assessoria Jurídica</li>
                <li>Gestão de Conseração</li>
                <li>Gestão e Assessoria em Gestão de Resíduos</li>
                <li>- Documentação</li>
                <li>- Rastreio</li>
                <li>- Pagamentos</li>
                <li>- Suporte Técnico</li>
              </ul>
            </div>
          </div>
          <div className="itemRight" data-aos="fade-right">
            <h2>Residencial</h2>
            <img src="/residencial.png" alt="Residencial" />
            <div className="align">
              <ul>
                <li>50% nos 2 primeiros meses</li>
                <li>Gestão de Contratos</li>
                <li>Admissão e Demissão</li>
                <li>Gestão de Mensalidade</li>
              </ul>
              <ul>
                <li>Gestão de Cobrança</li>
                <li>Gestão de Inadimplência</li>
                <li>Cobrança de Inadimplente</li>
                <li>Assessoria em Assembleia Condominal</li>
              </ul>
            </div>
          </div>
          <div className="itemLeft" data-aos="fade-left">
            <h2>Comercial</h2>
            <img src="/comercial.png" alt="Comercial" id="icone-comercial" />
            <div className="align">
              <ul>
                <li>50% nos 2 primeiros meses</li>
                <li>Administração de contas</li>
                <li>Administração de Conseração</li>
                <li>Admissão e Demissão</li>
              </ul>
              <ul>
                <li>Gestão de Mensalidade</li>
                <li>Gestão de Cobrança</li>
                <li>Assessoria em Assembleia Condominal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="service-prime">
        <div className="desktop-align">
          <div className="align">
            <img src="/service-prime-adv.jpg" alt="ServenC Prime Adv" />
            <div>
              <h2>ServenC Prime</h2>
              <p>
                Já pensou na comodidade reunida em um único canal de para
                soluções Administrativa e Gestão Condominial?!
              </p>
              <p>
                A ServenC Prime oferece essa solução, onde reúne a Gestão
                Condominial e Gestão Administrativa.
              </p>
            </div>
          </div>
          <div id="text-service-prime">
            <img src="/prime.png" alt="Prime" />
            <ul>
              <li>
                <strong>1) – Sindico Profissional</strong>
              </li>
              <li>Gestão Condominial; </li>
              <li>Gestão de Pessoa;</li>
              <li>Gestão de Conflitos Internos;</li>
              <li>Representação Condominial;</li>
              <br />

              <li>
                <strong>2) – Administradora;</strong>
              </li>
              <li>Gestão das Finanças;</li>
              <li>Admissão e Demissão;</li>
              <li>Gestão de Contratos;</li>
              <li>Gestão de Mensalidades;</li>
            </ul>
            <ul>
              <li>
                <strong>3) – Benefícios da Junção;</strong>
              </li>
              <li>Redução de Custo na mensalidade: Sindico + Administração;</li>
              <li>Redução de Burocracia quanto a solução de conflitos;</li>
              <li>
                Fiscalização direta por meio do Conselho Fiscal formada pelos
                Condôminos;
              </li>
              <li>Todos os benefícios ServenC;</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="acoes-sociais">
        <div className="desktop-align">
          <h2 data-aos="fade-up">Ações Sociais</h2>
          <p data-aos="fade-up">Nós apoiamos a sociedade e suas causas</p>
          <div id="slider">
            <Icon data-aos="fade-up">arrow_circle_left</Icon>
            <div className="item selected" data-aos="fade-up">
              <img
                src="/logo-casalarsaojose.png"
                alt="Casa Lar Sao Jose"
                onClick={() => setShowAcaoSocial(true)}
              />
              <h2>Casa Lar São José</h2>
              <p>@casalarsaojose</p>
            </div>
            <Icon data-aos="fade-up">arrow_circle_right</Icon>
          </div>
        </div>
      </div>
      <div id="video-conheca">
        <div className="desktop-align">
          <img
            src="/video-example.png"
            alt="Video Example"
            data-aos="fade-left"
          />
          <div data-aos="fade-right">
            <h2>Conheça a ServenC</h2>
            <Button
              variant="outlined"
              style={{ marginTop: 20 }}
              onClick={openWhatsApp}
            >
              Receba uma cotação personalizada
            </Button>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="desktop-align" data-aos="fade-up">
          <div id="grid-footer">
            <img src="/ServenC-branco.png" alt="Logo ServenC branco" />
            <div>
              <p>Atendimento ao síndico</p>
              <p>Telefone: (15) 99842-6617</p>
              <br />
              <p>Atendimento comercial</p>
              <a href="https://api.whatsapp.com/send?phone=551599842-6617&text=Oi, tudo bem? Estou no site da Servenc administradora. Poderia me ajudar?">Solicitar proposta</a>
            </div>
            <div>
              <p>Linha direta condôminos</p>
              <p>WhatApp: (15) 99842-6617</p>
              <p>Telefone: (15) 99842-6617</p>
              <p>atendimento@servenc.com.br</p>
            </div>
            <div>
              <p>Horário de atendimento:</p>
              <p>Segunda a sexta das 8:30h às 17:30h</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Home
