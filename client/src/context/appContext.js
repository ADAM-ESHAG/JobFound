import {useState} from 'react-dom'

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
}

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [state, setState] = useState(initialState)

    return (
        <AppContext.Provider value={{...state,}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider