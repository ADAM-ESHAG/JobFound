import { useAppContext } from "../context/appContext"

const Alert = () => {

    const {alertType, AlertText} = useAppContext();
    return (
        <div className={`alert alert-${alertType}`}>
            {AlertText}
        </div>
    )
}

export default Alert