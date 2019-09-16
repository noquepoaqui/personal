import React from "react"
import styled from "styled-components"

const BioWrapper = styled.section`
  display: block;
  opacity: 0;
  transition: opacity 1s;
  position: fixed;
  background-color: black;
  color: white;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999999;
  overflow: auto;
  z-index: -1;
  font-size: 0.7em;

  &:target {
    display: block;
    opacity: 1;
    z-index: 9999999;

    .bio__content {
      opacity: 1;
    }
  }

  .bio__content {
    padding: 20px;
    max-width: 960px;
    margin: auto;
    opacity: 0;
    transition: opacity 1s 1s;
  }

  .bio__close {
    position: fixed;
    right: 20px;
    top: 20px
  }
`;

const Bio = () => (
  <BioWrapper id="bio" className="h-card">
    <div className="bio__close"><a href="#cerrar">X Cerrar</a></div>
    <div className="bio__content">

      <h2>Soy <a href="mailto:andres.poole@gmail.com" className="highlight p-name u-url u-uid" rel="me">Andy Poole</a></h2>

      <div className="p-note">
        <p>Nací en Buenos Aires pero he vivido siempre en Barcelona. Estudié Ingeniería informática y Telecomunicaciones y me especialicé en sonido, imagen y multimedia. Entre 2002 y 2010 tomé parte activa en gestionar y producir para el estudio multidisciplinar de arte y música Parashuts. Durante ese tiempo contribuí a todo tipo de proyectos creativos, participando en varios grupos de música, produciendo videoarte, preparando exposiciones y performances.</p>
        <p>Después de vivir en París durante un año, empecé a trabajar como programador en <a href="https://basetis.com" target="_blank" rel="noopener noreferrer">Basetis</a>, una consultora tecnológica en la que he podido ayudar a muchas empresas a adaptarse a Internet, mejorando su imagen o interconectando sus sistemas y servicios. Desde entonces, he tocado en varias bandas de Barcelona, he actuado en otras experiencias performativas y he estudiado teoría literaria en la escuela Bloom.</p>
      </div>

    </div>
  </BioWrapper>
);

export default Bio;
