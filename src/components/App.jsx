import Header from "./Header/Header"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"
import { useState, useEffect } from "react"
import CurrentUserContext from "../contexts/CurrentUserContext"
import Api from "../utils/api"

const api = new Api("https://around-api.es.tripleten-services.com/v1", {Authorization:"39e7e87b-63d8-4747-bf9f-2089ed281080", "Content-Type": "application/json"})
function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [cards, setCards] = useState([])
  useEffect(()=>{
    api.getAppInfo()
    .then(([userData, cardsData])=>{
      setCurrentUser(userData)
      setCards(cardsData)
    })
  },[])
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header/>
      <Main cards={cards} setCards={setCards}/>
      <Footer/>  
    </div>

    </CurrentUserContext.Provider>
  )
}

export default App
