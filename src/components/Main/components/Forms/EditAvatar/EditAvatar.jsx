function EditAvatar(){
    return(
        <form className="form" id="editPhotoProfile" name="editPhotoProfile">
            <fieldset className="form__fieldset">
                <input 
                    id="photo-link"
                    className="form__input"
                    type="url"
                    name="link"
                    placeholder="http://...*"
                    required
                    />
                <button type="submit" className="form__button">Guardar</button>
            </fieldset>  
        </form>
    )
}
export default EditAvatar