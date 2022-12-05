import React, { useRef, useState } from 'react'
import styled from 'styled-components'

type Props = {
  title: string
  desc: string
  link: string
  img: string
}

const top = Math.floor(Math.random() * 30)
const left = Math.floor(-Math.random() * 20) - 10

const PanelHeader = styled.div`
  cursor: pointer;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  color: ${(props) => props.theme.primary};
  &:hover {
    opacity: 0.5;
  }
  a {
    word-break: break-word;
    text-transform: lowercase;
    font: 400 clamp(2rem, 5vw, 5rem) / 1em 'Bodoni Mona';
    text-decoration: none;
    color: inherit;
  }
  p {
    margin-top: auto;
    color: ${(props) => props.theme.secondary};
    font: 500 clamp(1.25rem, 1.5vw, 1.375rem) sans-serif;
  }
`

const SideImage = styled.img`
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  /* display: inline; */
  height: calc(min(50vw, 70vh));
  width: auto;
  animation: pulse 12s linear infinite;
  /* transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1); */
`

const ClipImg = styled.div`
  position: fixed;
  top: ${top}vh;
  left: ${left}vw;
  -webkit-clip-path: circle(0);
  clip-path: circle(0);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  &.active {
    -webkit-clip-path: circle(calc(min(25vw, 35vh)));
    clip-path: circle(calc(min(25vw, 35vh)));
  }
`

export default function Project({ title, desc, img, link }: Props) {
  const [active, setActive] = useState(false)
  return (
    <div>
      <ClipImg className={active ? 'active' : ''}>
        <SideImage src={require(`../assets/images/${img}`)} alt='' />
      </ClipImg>
      <PanelHeader
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <a href={link} target='_blank'>
          {title}
        </a>
        <p>{desc}</p>
      </PanelHeader>
    </div>
  )
}
