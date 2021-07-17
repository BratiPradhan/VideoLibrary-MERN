import styled, {css} from 'styled-components'

export const WrapperVideoPlayer = styled.form`
grid-column: 1 / -1;
display: flex;
  background: #7A419B;
  min-height: 70vh;
  background: linear-gradient(135deg, #7c1599 0%,#921099 48%,#7e4ae8 100%);
  background-size: cover;
  align-items: center;
  justify-content: center;
`

export const Player = styled.div`
max-width: 750px;
  border: 5px solid rgba(0,0,0,0.2);
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  position: relative;
  font-size: 0;
  overflow: hidden;

  &:fullscreen {
    max-width: none;
  width: 100%;

  &:-webkit-full-screen {
    max-width: none;
  width: 100%;
  }
  }
`

export const PlayerVideo = styled.video`
width: 100%;
`

export const PlayerControls = styled.div`
display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: translateY(100%) translateY(-5px);
  transition: all .3s;
  flex-wrap: wrap;
  background: rgba(0,0,0,0.1);


  ${props => props.isHover && css`
  transform: translateY(0);
  `};

  & > *{
    flex: 1;
  }
`

export const Progress = styled.div`
flex: 10;
  position: relative;
  display: flex;
  flex-basis: 100%;
  height: 5px;
  transition: height 0.3s;
  background: rgba(0,0,0,0.5);
  cursor: ew-resize;

 ${props => props.isHover && css`
 height: 15px;
  `};
`

export const ProgressFilled = styled.div`
width: 50%;
  background: #ffc600;
  flex: 0;
  flex-basis: 50%;
`



export const PlayerButton = styled.button`
 background: none;
  border: 0;
  line-height: 1;
  color: #ffc600;
  text-align: center;
  outline: 0;
  padding: 0;
  cursor: pointer;
  max-width: 50px;

  &:focus {
    border-color: #ffc600;
  }
`

export const InputRange = styled.input`
-webkit-appearance: none;
background: transparent;
  width: 100%;
  margin: 0 5px;

  &:focus{
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0 0 1px rgba(13, 13, 13, 0);
  background: rgba(255,255,255,0.8);
  border-radius: 1.3px;
  border: 0.2px solid rgba(1, 1, 1, 0);
  }

  &::-webkit-slider-thumb{
    height: 15px;
  width: 15px;
  border-radius: 50px;
  background: #ffc600;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -3.5px;
  box-shadow:0 0 2px rgba(0,0,0,0.2);
  }

  &:focus::-webkit-slider-runnable-track {
    background: #bada55;
  }

  &::-moz-range-track{
    width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0 0 1px rgba(13, 13, 13, 0);
  background: #ffffff;
  border-radius: 1.3px;
  border: 0.2px solid rgba(1, 1, 1, 0);
  }


  &::-moz-range-thumb {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(13, 13, 13, 0);
  height: 15px;
  width: 15px;
  border-radius: 50px;
  background: #ffc600;
  cursor: pointer;
  }



`

export const PlayerSlider = styled(InputRange)`
width: 10px;
  height: 30px;
`

