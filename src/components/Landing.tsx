import styled from 'styled-components'
import useMousePosition from '../hooks/MousePosition'
import useWindowDimensions from '../hooks/WindowSize'

const Container = styled.div`
  width: 100%;
  height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .text {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font: 600 italic 14vh 'Bodoni Mona';
    letter-spacing: 1vh;
    transition: all 0.2s linear;
    &:nth-child(odd) {
      color: ${(props) => props.theme.secondary};
      .bold {
        color: ${(props) => props.theme.dark};
        font-weight: 800;
      }
    }
    &:nth-child(even) {
      color: ${(props) => props.theme.secondary};
      .bold {
        color: ${(props) => props.theme.primary};
      }
    }
    .bold {
      /* font: 800 italic 14vh 'Bodoni Mona'; */
    }
  }
`

export default function Landing() {
  const mousePosition = useMousePosition()
  const { height, width } = useWindowDimensions()
  const shift = 6 * (mousePosition.x / width + mousePosition.y / height - 1)

  return (
    <Container>
      <div className='text' style={{ transform: `translateX(${shift}vw)` }}>
        SOMBERSHEEPSOMBERSHEEP<span className='bold'>SOMBERSHEEP</span>
        SOMBERSHEEPSOMBERSHEEP
      </div>
      <div className='text' style={{ transform: `translateX(${-shift}vw)` }}>
        PORTFOLIOPORTFOLIO<span className='bold'>PORTFOLIO</span>
        PORTFOLIOPORTFOLIO
      </div>
      <div className='text' style={{ transform: `translateX(${shift}vw)` }}>
        SOMBERSHEEPSOMBERSHEEP<span className='bold'>SOMBERSHEEP</span>
        SOMBERSHEEPSOMBERSHEEP
      </div>
      <div className='text' style={{ transform: `translateX(${-shift}vw)` }}>
        PORTFOLIOPORTFOLIO<span className='bold'>PORTFOLIO</span>
        PORTFOLIOPORTFOLIO
      </div>
      <div className='text' style={{ transform: `translateX(${shift}vw)` }}>
        SOMBERSHEEPSOMBERSHEEP<span className='bold'>SOMBERSHEEP</span>
        SOMBERSHEEPSOMBERSHEEP
      </div>
    </Container>
  )
}
