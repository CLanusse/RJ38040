import { BrowserRouter } from "react-router-dom"
import { useLoginContext } from "../context/LoginContext"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"




const AppRouter = () => {

    const {user} = useLoginContext()

    return (
        <BrowserRouter>
            {
            user.logged
                ? <PrivateRoutes/>
                : <PublicRoutes/>
            }
        </BrowserRouter>
    )
}

export default AppRouter