import React from 'react'
import styled from 'styled-components'

type Props = {}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.bg};
  /* border: 1px solid red; */
`

const Stripes = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
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
  top: 0;
  left: 30vw;
  width: calc(40vw);
  background-color: ${(props) => props.theme.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  width: 120%;
  & > div:first-child {
    text-align: left;
  }
  & > div:last-child {
    text-align: right;
  }
`

const Text = styled.div`
  color: ${(props) => props.theme.primary};
  font: 400 6vw 'Bodoni Mona';
  width: 100%;
  /* border: 1px solid blue; */
`

export default function Title({}: Props) {
  return (
    <Container>
      <Stripes></Stripes>
      <Middle>
        <TextContainer>
          <Text>cs1300: ui/ux</Text>
          <Text>final portfolio</Text>
        </TextContainer>
      </Middle>
    </Container>
  )
}
