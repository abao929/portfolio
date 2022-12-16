import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const PanelHeader = styled.div`
  cursor: pointer;
  width: 40%;
  margin: 0 auto;
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
  .title {
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
  url,
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
  const [top, setTop] = useState(0)
  const [side, setSide] = useState(0)
  const navigate = useNavigate()
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
        <SideImage src={require(`../assets/images/${url}/${img}`)} alt='' />
      </ClipImg>
      <PanelHeader
        onMouseEnter={() => {
          let tempStates = new Array(states.length).fill(-1)
          tempStates[idx] = 1
          setStates(tempStates)
        }}
        onMouseLeave={() => setStates(new Array(states.length).fill(0))}
        className={states[idx] === -1 ? 'blurred' : ''}
        onClick={() => navigate(`/${url}`)}
      >
        <div className='title'>{title}</div>
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

const Container = styled.div`
  padding: 0 10vw;
  display: flex;
  flex-direction: column;
`

const PageTitle = styled.div`
  text-align: center;
  font: 600 calc(max(6rem, 6vw)) ${(props) => props.theme.sans};
  color: ${(props) => props.theme.dark};
  text-transform: uppercase;
`

const PageDesc = styled.div`
  text-align: center;
  font: 400 calc(max(1.75rem, 1.75vw)) ${(props) => props.theme.sans};
  color: ${(props) => props.theme.primary};
`

const ImageCard = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 2vw;
  border-radius: 1vw;
  /* width: 100%; */
  background-color: ${(props) => props.theme.primary};
  margin: 0 auto;
  img {
    margin: 0 auto;
    height: auto;
    border-radius: 1vw;
    width: auto;
    max-width: 100%;
    max-height: 100vh;
  }
`

const ImageGallery = styled.div<{ n: number }>`
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(${(props) => Math.min(props.n, 3)}, 1fr);
  width: 100%;
  padding: 3vh 0;
`

const Section = styled.div`
  margin: 3vh 0;
  h1 {
    font: 600 calc(max(3rem, 3vw)) ${(props) => props.theme.sans};
    color: ${(props) => props.theme.dark};
  }
  p {
    font: 400 calc(max(1rem, 1vw)) ${(props) => props.theme.sans};
    color: ${(props) => props.theme.dark};
    white-space: pre-line;
    padding: 0.5em 0;
  }
`

const BackButton = styled.div`
  position: fixed;
  left: 2vw;
  top: 2vw;
  cursor: pointer;
  font: 500 calc(max(1rem, 1vw)) ${(props) => props.theme.sans};
  color: ${(props) => props.theme.primary};
  &:hover {
  }
`

const ProjectPage = ({
  title,
  desc,
  img,
  link,
  month,
  time,
  url,
  content,
  idx,
}: Project & { idx: number }) => {
  const navigate = useNavigate()
  return (
    <Container>
      <BackButton>
        {/* <svg
          width='26'
          height='22'
          viewBox='0 0 26 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M1 11L11 1M1 11L11 21M1 11H26' stroke='black' />
        </svg> */}
        {/* <a href='/'>"BACK"</a> */}
        <div onClick={() => navigate(-1)}>"BACK"</div>
      </BackButton>
      <PageTitle>{title}</PageTitle>
      <PageDesc>{desc}</PageDesc>
      {content.map((section, idx) => (
        <Section>
          <h1>{section.header}</h1>
          <p>{section.body}</p>
          {section.imgs?.map((gallery, _) => (
            <ImageGallery n={gallery.length}>
              {gallery.map((img, _) => (
                <ImageCard>
                  <img
                    src={require(`../assets/images/${url}/${img}`)}
                    alt=''
                    className='card'
                  />
                </ImageCard>
              ))}
            </ImageGallery>
          ))}
        </Section>
      ))}
      {/* <ImageCard>
        <img src={require('../assets/images/ivrogne.png')} alt='' />
      </ImageCard> */}
    </Container>
  )
}

export { ProjectLine, ProjectPage }
