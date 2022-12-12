import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

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
  transition: transform 0.3s ease-out;
  &:hover {
    -webkit-transform: translateY(0.5rem);
    transform: translateY(0.5rem);
    color: ${(props) => props.theme.dark};
  }
  &.blurred {
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
    font: 500 clamp(1.25rem, 1.5vw, 1.375rem) ${(props) => props.theme.sans};
  }
  .extra {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font: 500 clamp(1rem, 1vw, 1.25rem) ${(props) => props.theme.sans};
    color: ${(props) => props.theme.dark};
    gap: 0.25rem;
    div:first-child {
      flex: 1;
      text-align: right;
    }
    div:last-child {
      flex: 1;
      text-align: left;
    }
    .dot {
      height: 6px;
      width: 6px;
      background-color: ${(props) => props.theme.dark};
      border-radius: 50%;
    }
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
  height: calc(60vmin);
  width: auto;
  animation: pulse 12s linear infinite;
  /* transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1); */
`

const ClipImg = styled.div<{ top: number; isLeft: boolean; side: number }>`
  position: fixed;
  top: ${(props) => props.top}vh;
  ${(props) =>
    props.isLeft
      ? 'left: ' + props.side + 'vw;'
      : 'right: ' + props.side + 'vw;'}
  -webkit-clip-path: circle(0);
  clip-path: circle(0);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  &.active {
    -webkit-clip-path: circle(30vmin);
    clip-path: circle(30vmin);
  }
`

const ProjectLine = ({
  title,
  desc,
  img,
  link,
  month,
  time,
  idx,
  states,
  setStates,
}: Project & {
  idx: number
  states: number[]
  setStates: React.Dispatch<React.SetStateAction<number[]>>
}) => {
  const [active, setActive] = useState(false)
  const [top, setTop] = useState(0)
  const [side, setSide] = useState(0)
  useEffect(() => {
    setTop(Math.floor(Math.random() * 10) + idx * 12)
    setSide(Math.floor(-Math.random() * 5) - 7)
  }, [])
  return (
    <div>
      <ClipImg
        className={states[idx] === 1 ? 'active' : ''}
        top={top}
        isLeft={idx % 2 !== 0}
        side={side}
      >
        {/* <SideImage src={require(`${path}${img}`)} alt='' /> */}
        <SideImage src={require(`../assets/images/${img}`)} alt='' />
      </ClipImg>
      <PanelHeader
        onMouseEnter={() => {
          let tempStates = new Array(states.length).fill(-1)
          tempStates[idx] = 1
          setStates(tempStates)
        }}
        onMouseLeave={() => setStates(new Array(states.length).fill(0))}
        className={states[idx] === -1 ? 'blurred' : ''}
      >
        <a href={link} target='_blank'>
          {title}
        </a>
        {/* <p>{desc}</p> */}
        <div className='extra'>
          <div className='l'>{month}</div>
          <div className='dot'></div>
          <div className='r'>{time}</div>
        </div>
      </PanelHeader>
    </div>
  )
}

const ProjectPage = ({
  title,
  desc,
  img,
  link,
  month,
  time,
  idx,
}: Project & { idx: number }) => {
  return <div>What</div>
}

export { ProjectLine, ProjectPage }
