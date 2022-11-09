import config from "../config.json"
import Favoritos from "./components/Favoritos"

import Header from './components/Header'
import Profile from './components/Profile'
import Timeline from './components/Timeline'

const HomePage = () => {
  return (
    <>
      <div style={{
      display: "flex",
      flexDirection: "column",
      flex: 1,
      }}></div>
      <Header/>
      <Profile/>
      <Timeline lista={config.playlists}/>
      <Favoritos favs={config.favoritos}/>
    </>
  )
}

export default HomePage