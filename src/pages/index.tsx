import styled from 'styled-components'
import ReactPlayer from 'react-player/lazy'

export default function Home() {
  /** github pagesにあげる際はパス変わるので hlsjs-playground配下に作られるので */
  const URL = (uniqueURL: string) => process.env.NODE_ENV === "production" ? `/hlsjs-playground${uniqueURL}` : uniqueURL

  return (<>
    <PlayerArea>
      <ReactPlayer url={URL('/data/video.m3u8')} playing playsinline controls  muted width='100%'  config={{file: {
        // forceHLS: true, // これiOSでもhls.js使っちゃう
      }}} />
      {/* 一応video直書きでhlsの動画を入れた場合も見たいので */}
      <video src={URL('/data/video.m3u8')} controls muted></video>
      <FuncButton>Button</FuncButton>
    </PlayerArea>
  </>)
}

const PlayerArea = styled.div`
  width: 100%;

  * {
    width: 100%;
  }
`

const FuncButton = styled.button`
  width: 100px;
  height: 100px;
`