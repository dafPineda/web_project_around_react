function EditAvatar(){
    return(
        <form className="popup" id="editPhotoProfile" name="editPhotoProfile">
            <button type="button" className="popup__close">&times;</button>
            <div className="popup__block">
                <p className="popup__title">Link de la nueva foto</p>
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