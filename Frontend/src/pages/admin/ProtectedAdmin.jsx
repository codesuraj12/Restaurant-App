import { Navigate } from 'react-router-dom'

const Adminroute =({children})=>{

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role")


    if(!token){
        return <Navigate to="/admin"/>
    }

    if(role !== "admin"){
return <Navigate to="/" />
    }

return children;

}
export default Adminroute