import { Outlet } from "react-router-dom"
import Footer from "../component/footer"
import Navbar from "../component/header"
const Layout=()=>{
    return(
        <>
        <Navbar />
            <Outlet />
        <Footer />
        </>
    )
}
export default Layout;