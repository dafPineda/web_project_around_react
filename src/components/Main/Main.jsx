import { useState } from "react";
import EditProfile from "./Forms/EditProfile/EditProfile";
import NewCard from "./Forms/NewCard/NewCard";
import EditAvatar from "./Forms/EditAvatar/EditAvatar";
import Popup from "./Popup/Popup";
import Card from "./components/Card/Card";

const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

function Main(){
    const [popup, setPopup] = useState(null)
    const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
    const editProfilePopup = {title: "Editar perfil", children: <EditProfile/>}
    const EditAvatarPopup = {title:"Editar foto de peril", children:<EditAvatar/>}

    function handleOpenPopup(popup){
        setPopup(popup)
    }
    function handleClosePopup() {
        setPopup(null);
    }
    return(
        <div className="main">
          <section className="forms">              
              <form className="popup form__confirmation" id="confirmation__form" name="formConfirmation" noValidate>
                  <button type="button" className="popup__close form__close">&times;</button>
                  <div className="confirmation-block">
                      <p className="form__title">¿Deseas eliminar este elemento? Esta acción no se puede deshacer.</p>
                      <button type="submit" className="form__button">Confirmar</button>
                  </div>
              </form>
          </section>
          <section className="profile">
              <div className="profile__image"><div className="edit-icon">&#9998</div></div>
              <h2 className="profile__name"></h2>
              <button type="button" className="profile__button-edit">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
                      <rect x="2" y="2" width="20" height="20" rx="3" stroke="black" strokeWidth="2" fill="none"/>
                      <path d="M3 17.25V21h3.75L17.8 9.94l-3.75-3.75L3 17.25zM20.7 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 
                              3.75 3.75 1.83-1.83z"/>
                  </svg>
              </button>
              <h3 className="profile__ocupation"></h3>
              <button type="button" className="profile__button-add" onClick={()=> handleOpenPopup(newCardPopup)}>+</button>
          </section>
          <section className="element" id="element">
              <div className="popup image-window">
                  <button className="image-window__button-close popup__close">&times;</button>
                  <img className="image-window__image" src="#" alt="#"/>
              </div>
              <template className="template-element">
                  <div className="element__card">
                      <button className="element__card-trash" type="button"></button>
                      <img className="element__card-image" src="#" alt="#"/>                  
                      <div className="element__card-info">
                          <p className="element__card-text"></p>
                          <button className="element__card-heart" type="button"></button>
                      </div>
                  </div>
              </template>
               <ul className="cards__list">
                    {cards.map((card) => (
                    <Card key={card._id} card={card} />
                    ))}
                </ul>
          </section>
          {popup && (
                <Popup onClose={handleClosePopup} title={popup.title}>
                {popup.children}
                </Popup>
            )} 
        </div>
    )
}
export default Main