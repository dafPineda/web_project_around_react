function EditAvatar(){
    return(
        <form className="popup form__confirmation" id="editPhotoProfile" name="editPhotoProfile">
            <button type="button" className="popup__close form__close">&times;</button>
            <div className="confirmation-block">
                <p className="form__title">Link de la nueva foto</p>
                <input 
                    id="photo-link"
                    className="form__input"
                    type="url"
                    name="link"
                    placeholder="http://...*"
                    required
                    />
                <button type="submit" className="form__button">Guardar</button>
            </div>  
        </form>
    )
}
export default EditAvatar