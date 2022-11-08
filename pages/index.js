import config from "../config.json"

import Menu from './components/Menu'
import Header from './components/Header'
import Timeline from './components/Timeline'

const HomePage = () => {
  return (
    <>
      <Menu/>
      <Header/>
      <Timeline lista={config.playlists}/>
    </>
  )
}

export default HomePage