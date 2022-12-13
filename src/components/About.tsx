import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  /* padding: 10vh 0; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .top {
    display: flex;
    flex-direction: row;
    padding-bottom: 2vh;
    & > div {
      flex: 1;
    }
    .arrow {
      display: flex;
      justify-content: center;
      font: 500 calc(max(3rem, 3vw)) ${(props) => props.theme.sans};
      text-transform: uppercase;
      color: ${(props) => props.theme.primary};
    }
    .rectangle {
      background-color: ${(props) => props.theme.primary};
      min-height: 24vh;
    }
    /* .triangles {
      display: flex;
      flex-direction: row;
      .triangle {
        flex: 1;
        display: flex;
        flex-direction: column;
        & > div {
          flex: 1;
        }
        & .tl {
          background-image: linear-gradient(
            to right top,
            ${(props) => props.theme.primary} 0%,
            ${(props) => props.theme.primary} 50%,
            transparent 50%
          );
        }
        & .tr {
          background-image: linear-gradient(
            to left top,
            ${(props) => props.theme.primary} 0%,
            ${(props) => props.theme.primary} 50%,
            transparent 50%
          );
        }
        & .bl {
          background-image: linear-gradient(
            to right bottom,
            ${(props) => props.theme.primary} 0%,
            ${(props) => props.theme.primary} 50%,
            transparent 50%
          );
        }
        & .br {
          background-image: linear-gradient(
            to left bottom,
            ${(props) => props.theme.primary} 0%,
            ${(props) => props.theme.primary} 50%,
            transparent 50%
          );
        }
      }
    } */
  }
  .bottom {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`

const TextColumns = styled.div`
  flex: 3;
  display: flex;
  flex-direction: row;
  width: 36%;
  margin: 0 auto;
  padding: 10vh 0 8vh 0;
  gap: 2.5rem;
  font: 500 calc(max(0.875rem, 0.875vw)) ${(props) => props.theme.sans};
  color: ${(props) => props.theme.primary};
  & > div {
    flex: 1;
  }
  a {
    color: inherit;
    overflow: hidden;
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    padding-bottom: 0.05em;
  }
  a::after {
    transform: scaleX(0);
    transform-origin: bottom left;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.primary};
    opacity: 0;
    transition: all 0.3s;
  }
  a:hover::after,
  a:focus::after {
    opacity: 1;
    transform: scaleX(1);
  }
`

// const ShapeContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   /* border: 1px solid blue; */
//   /* padding: 0 0 6vh 0; */
// `

// const CIRCLE_WIDTH = 40
// const SHAPE_WIDTH = CIRCLE_WIDTH + 20

// const SemiCircle = styled.div`
//   position: relative;
//   height: ${CIRCLE_WIDTH / 2}vw;
//   width: ${CIRCLE_WIDTH}vw;
//   border-radius: 0 0 ${CIRCLE_WIDTH / 2}vw ${CIRCLE_WIDTH / 2}vw;
//   background-color: ${(props) => props.theme.primary};
// `

// const Shape = styled.div`
//   position: absolute;
//   margin-top: 5vw;
//   height: 80vh;
//   width: ${SHAPE_WIDTH}vw;
//   z-index: -1;
//   border-radius: ${SHAPE_WIDTH / 2}vw ${SHAPE_WIDTH / 2}vw 0 0;
//   background-color: ${(props) => props.theme.secondary};
// `

const Side = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: end;
  color: ${(props) => props.theme.primary};
  font: 500 calc(max(3rem, 3vw)) ${(props) => props.theme.sans};
  text-transform: uppercase;
  /* position: absolute; */
  /* writing-mode: vertical-rl; */
`

const Rectangle = styled.div`
  background-color: ${(props) => props.theme.primary};
  margin-top: 2vh;
  width: 100%;
  height: calc(100% - 2vh);
`

export default function About() {
  return (
    <Container>
      <div className='top'>
        <div className='rectangle'></div>
        <div className='arrow'>"Down Arrow"</div>
        <div className='triangles'>
          <div className='triangle'>
            <div className='tl'></div>
            <div className='bl'></div>
          </div>
          <div className='triangle'>
            <div className='tr'></div>
            <div className='br'></div>
          </div>
        </div>
      </div>
      {/* <ShapeContainer>
        <Side>About Me</Side>
        <SemiCircle />
        <Shape />
      </ShapeContainer> */}
      <div className='bottom'>
        <Side>About me</Side>
        <TextColumns>
          <div>
            I am a junior studying cs. I'm considering doing frontend
            engineering or UI/UX design. However, I chose to violate a lot of
            usability, and accessibility principles for the sake of fun designs
            for this portfolio.
            <br />
            <br />
            I just want a simple life where I can just bum around at home, maybe
            even make a typeface or a UI library like MUI if I'm feeling really
            ambitious.
            <br />
            <br />
            I am looking for a job <br />
            Please hire me.
            <br />
            <br />
            Here is my{' '}
            <a
              href='https://docs.google.com/file/d/1ZrYRPF4IyXtiuhcH4dc8jcnG7tLdQVwEjm9s7L3FJHo/view'
              target='_blank'
            >
              RÉSUMÉ
            </a>{' '}
            if that helps.
          </div>
          <div>
            {/* I ran out of content to put here <br /> */}
            Last updated December 12th, 2022.
            <Rectangle />
          </div>
        </TextColumns>
      </div>
    </Container>
  )
}
