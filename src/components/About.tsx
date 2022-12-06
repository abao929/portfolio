import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 10vh 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
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
  color: ${(props) => props.theme.dark};
  & > div {
    flex: 1;
  }
`

const ShapeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid blue; */
  /* padding: 0 0 6vh 0; */
`

const CIRCLE_WIDTH = 40
const SHAPE_WIDTH = CIRCLE_WIDTH + 20

const SemiCircle = styled.div`
  position: relative;
  height: ${CIRCLE_WIDTH / 2}vw;
  width: ${CIRCLE_WIDTH}vw;
  border-radius: 0 0 ${CIRCLE_WIDTH / 2}vw ${CIRCLE_WIDTH / 2}vw;
  background-color: ${(props) => props.theme.primary};
`

const Shape = styled.div`
  position: absolute;
  margin-top: 5vw;
  height: 80vh;
  width: ${SHAPE_WIDTH}vw;
  z-index: -1;
  border-radius: ${SHAPE_WIDTH / 2}vw ${SHAPE_WIDTH / 2}vw 0 0;
  background-color: ${(props) => props.theme.secondary};
`

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
  height: 100%;
`

export default function About() {
  return (
    <Container>
      {/* <ShapeContainer>
        <Side>About Me</Side>
        <SemiCircle />
        <Shape />
      </ShapeContainer> */}
      <Side>About me</Side>
      <TextColumns>
        <div>
          I am a junior studying cs. I'm considering doing frontend engineering
          or UI/UX design but I tend to violate most of the principles we learn
          in class. Could be interesting doing this for a job.
          <br />
          <br />
          I just want a simple life where I can just bum around at home, maybe
          even make a typeface or a UI library like MUI if I'm feeling really
          ambitious.
          <br />
          <br />
          Please hire me. <br />
          I swear I am not a brand risk. I can clean up my act if need be.
          <br />
          <br />
          Here is my RESUME if that helps.
        </div>
        <div>
          I ran out of content to put here <br />
          Last updated December 6th, 2022.
          <Rectangle />
        </div>
      </TextColumns>
    </Container>
  )
}
