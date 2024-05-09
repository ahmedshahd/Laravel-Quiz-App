import Navbar from "@/Components/Navbar";

const Layout = ({isLoggedIn = false, children,csrf}: {csrf:string, children: JSX.Element, isLoggedIn: boolean }) => {

    return (
        <>
            <Navbar csrf={csrf} isLoggedIn={isLoggedIn}/>
            {children}
        </>
    )
}

export default Layout;
