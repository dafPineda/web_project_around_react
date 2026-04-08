export default function NewCard() {
  return (
   <form className="forms " id="new-element__form" name="formAdd" noValidate>
            <fieldset className="form__fieldset">
                <input 
                id="new-element__input-name"
                className="form__input"
                type="text"
                placeholder="Title*"
                name="title"
                minLength="2"
                maxLength="30"
                required
                />
                <span className="form__input-error new-element__input-name-error">El campo "Título" debe contener entre 2 y 30 caracteres.</span>
                <input 
                id="new-element__input-link"
                className="form__input"
                placeholder="URL*"
                name="link"
                type="url"
                required
                />
                <span className="form__input-error new-element__input-link-error">El campo "URL de la imagen" debe contener una URL.</span>
                <button type="submit" className="form__button form__button_disabled" id="new-element__button" name="saveAdd" disabled>
                Guardar
                </button>
            </fieldset>
    </form>
  );
}