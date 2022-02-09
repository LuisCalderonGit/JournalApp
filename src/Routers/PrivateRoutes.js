import { Navigate } from "react-router-dom"


export const PrivateRoutes = ({ isLoged, childrenComponent }) => {
    return (
        isLoged ? <Navigate to="/auth/login" /> : childrenComponent
    );
}
