import { useEffect, useState } from "react";
import EditProfile from "./components/Forms/EditProfile/EditProfile";
import NewCard from "./components/Forms/NewCard/NewCard";
import EditAvatar from "./components/Forms/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";
import RemoveCard from "./components/RemoveCard/RemoveCard";
import Popup from "./components/Popup/Popup";
import ImagePopup from "./components/ImagePopup/ImagePopup";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Main({cards, setCards, api}){
    const currentUser = useContext(CurrentUserContext)
    const [popup, setPopup] = useState(null)
    const [selectedCard, setSelectedCard] = useState(null)
    const newCardPopup = {title: "Nuevo lugar", children: <NewCard/>};
    const editProfilePopup = {title: "Editar perfil", children: <EditProfile/>}
    const editAvatarPopup = {title:"Editar avatar", children:<EditAvatar/>}

    function handleOpenPopup(popup){
        setPopup(popup)
    }
    function handleClosePopup() {
        setPopup(null);
    }
    function handleOpenRemovePopup(card) {
        setSelectedCard(card);
        setPopup({
            title: "Borrar foto",
            children: <RemoveCard card={card} />
        });
    }
    function handleOpenImagePopup(card){
        setPopup({
            title:"",
            children:<ImagePopup card={card}/>
        })
    }
    async function handleCardLike(card) {
        const isLiked = card.isLiked;

        await api.changeLikeCardStatus(card._id, !isLiked)
        .then((newCard) => {
            setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
        })
        .catch((error) => console.error(error));
    }

    return(
        <div className="main">
          <section className="forms">              
          </section>
          <section className="profile">
              <div className="profile__image" onClick={()=>{handleOpenPopup(editAvatarPopup)}}><div className="edit-icon"/></div>
              <h2 className="profile__name">{currentUser.name}</h2>
              <button type="button" className="profile__button-edit" onClick={()=>{handleOpenPopup(editProfilePopup)}} 
                    style={{backgroundImage:`url(${currentUser.avatar})`}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
                      <rect x="2" y="2" width="20" height="20" rx="3" stroke="black" strokeWidth="2" fill="none"/>
                      <path d="M3 17.25V21h3.75L17.8 9.94l-3.75-3.75L3 17.25zM20.7 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 
                              3.75 3.75 1.83-1.83z"/>
                  </svg>
              </button>
              <h3 className="profile__ocupation">{currentUser.about}</h3>
              <button type="button" className="profile__button-add" onClick={()=> handleOpenPopup(newCardPopup)}>+</button>
          </section>
          <section className="element" id="element">
               <ul className="element">
                    {cards.map((card) => (
                    <Card key={card._id} card={card} onDeleteClick={handleOpenRemovePopup} onImageClick={handleOpenImagePopup} onCardLike={handleCardLike}/>
                    ))}
                </ul>
          </section>
          {popup && (
                <Popup onClose={handleClosePopup} title={popup.title} isOpen={!!popup}>
                    {popup.children}
                </Popup>
            )} 
        </div>
    )
}
export default Main