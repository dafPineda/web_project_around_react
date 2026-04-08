function EditProfile(){
    return(
        <form className="form" id="edit-profile__form" name="formEdit" noValidate>
            <fieldset className="form__fieldset">
                <input 
                id="profile-name"
                className="form__input"
                type="text"
                placeholder="name*"
                name="name"
                minLength="2"
                maxLength="40"
                required
                />
                <span className="form__input-error profile-name-error">El campo "Nombre" debe contener entre 2 y 40 caracteres.</span>
                <input 
                id="profile-work"
                type="text"
                className="form__input"
                placeholder="Acerca de mi*"
                name="work"
                minLength="2"
                maxLength="200"
                required
                />
                <span className="form__input-error profile-work-error">El campo "Acerca de" debe contener entre 2 y 200 caracteres.</span>
                <button type="submit" className="form__button form__button_disabled" id="edit-profile__button" name="saveEdit" disabled>
                Guardar
                </button>
            </fieldset>
        </form>  
    )
}

export default EditProfile