import { useState } from "react"

import config from "../config.json"
import Favoritos from "./components/Favoritos"

import Header from './components/Menu/Header'
import Profile from './components/Perfil/Profile'
import Timeline from './components/Timeline'

const HomePage = () => {
  const [valorDaBusca, setValorDaBusca] = useState("");

  return (
    <>
      <div style={{
      display: "flex",
      flexDirection: "column",
      flex: 1,
      }}></div>
      <Header searchValue={valorDaBusca} setSearchValue={setValorDaBusca}/>
      <Profile/>
      <Timeline searchValue={valorDaBusca} lista={config.playlists}/>
      <Favoritos favs={config.favoritos}/>
    </>
  )
}

export default HomePage