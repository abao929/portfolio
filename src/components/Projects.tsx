import React from 'react'
import styled from 'styled-components'

type Props = {}

const circleWidth = 34
const circleHeight = 24
const circlePadding = 1
const ovalHeight = 36
const ovalWidth = 24

const Stripes = styled.div`
  position: absolute;
  height: 100%;
  left: 0;
  width: calc(78vw);
  left: 11vw;
  /* border: 1px solid blue; */
  background-image: linear-gradient(
      to left,
      transparent 1px,
      transparent calc((78vw - 1px) / 24 - 1px),
      ${(props) => props.theme.primary} calc((78vw - 1px) / 24 - 1px),
      ${(props) => props.theme.primary} calc((78vw - 1px) / 24)
    ),
    linear-gradient(
      to left,
      transparent 1px,
      transparent calc((78vw - 1px) / 24 - 1px),
      ${(props) => props.theme.primary} calc((78vw - 1px) / 24 - 1px),
      ${(props) => props.theme.primary} calc((78vw - 1px) / 24)
    );
  background-size: calc((78vw - 1px) / 24) 100%, calc((78vw - 1px) / 24) 93%;
  background-position-x: calc((78vw - 1px) / 24 / 2), calc((78vw - 1px) / 24);
  /* background-image: linear-gradient(
      to left,
      transparent 1px,
      transparent calc((88vw - 2px) / 8 - 1px),
      rgba(255, 255, 255, 0.6) calc((88vw - 2px) / 8 - 1px),
      rgba(255, 255, 255, 0.6) calc((88vw - 2px) / 8)
    ),
    linear-gradient(
      to left,
      transparent 1px,
      transparent calc((88vw - 2px) / 8 - 1px),
      rgba(255, 255, 255, 0.6) calc((88vw - 2px) / 8 - 1px),
      rgba(255, 255, 255, 0.6) calc((88vw - 2px) / 8)
    );
  background-size: calc((88vw - 2px) / 8) 100%, calc((88vw - 2px) / 8) 97%;
  background-position-x: calc((88vw - 2px) / 8 / 2), calc((88vw - 2px) / 8); */
`

const Middle = styled.div`
  position: absolute;
  height: 100%;
  left: 30vw;
  width: 40vw;
  background-color: ${(props) => props.theme.bg};
`

const SemiCircle = styled.div`
  position: relative;
  height: ${circleHeight}vw;
  width: calc(${circleWidth}vw - ${2 * circlePadding}rem);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.secondary};
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: ${circleWidth / 2}vw ${circleWidth / 2}vw 0 0;
  padding: ${circlePadding}rem;

  background-clip: content-box;
  box-sizing: content-box;
`

const ShapeContainer = styled.div`
  /* position: absolute; */
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid blue; */
  margin-top: 20vh;
`

const Oval = styled.div`
  position: relative;
  top: ${-ovalHeight + (circleWidth - circleHeight + 2) / 2}vw;
  height: ${ovalHeight}vw;
  width: ${ovalWidth}vw;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 50%;
  transform: rotate(-45deg);
`

const Text = styled.div`
  font: 400 italic 6vw 'Bodoni Mona';
  color: ${(props) => props.theme.primary};
`

export default function Projects({}: Props) {
  return (
    <div>
      <Stripes></Stripes>
      <Middle>
        <ShapeContainer>
          <SemiCircle>
            <Text>ui/ux</Text>
            <Text>projects</Text>
          </SemiCircle>
          <Oval></Oval>
        </ShapeContainer>
        <div className='what'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </Middle>
    </div>
  )
}
