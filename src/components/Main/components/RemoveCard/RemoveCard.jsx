export default function RemoveCard(){
    return(
        <form className="popup" id="confirmation__form" name="formConfirmation" noValidate>
            <button type="button" className="popup__close form__close">&times;</button>
            <div className="popup__block">
                <p className="popup__title">¿Deseas eliminar este elemento? Esta acción no se puede deshacer.</p>
                <button type="submit" className="form__button">Confirmar</button>
            </div>
        </form>
    )
}