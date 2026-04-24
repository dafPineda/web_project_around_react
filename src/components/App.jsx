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
  const [popup, setPopup] = useState(null)
  useEffect(()=>{
    api.getAppInfo()
    .then(([userData, cardsData])=>{
      setCurrentUser(userData)
      setCards(cardsData)
    })
  },[])

  function handleOpenPopup(popup){
      setPopup(popup)
  }
  function handleClosePopup() {
      setPopup(null);
  }
  const handleUpdateUser = (data) => {
        api.setUserInfo(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
  };
   const handleUpdateAvatar = (data) => {
        api.setUserAvatar(data.avatar)
       .then((newData) => {
         setCurrentUser(newData);
         handleClosePopup();
       })
       .catch((error) => console.error(error));
  };
  return (
    <CurrentUserContext.Provider value={{currentUser, handleUpdateUser, handleUpdateAvatar}}>
    <div className="page">
      <Header/>
      <Main 
        onOpenPopup={handleOpenPopup}
        onClosePopup={handleClosePopup}
        popup={popup}
        setPopup={setPopup}
        cards={cards} 
        setCards={setCards} 
        api={api}/>
      <Footer/>  
    </div>

    </CurrentUserContext.Provider>
  )
}

export default App
