import { Navigate } from "react-router-dom"


export const PublicRoutes = ({ isLoged, childrenComponent }) => {
    return (
        isLoged ? <Navigate to="/" /> : childrenComponent
    );
}
