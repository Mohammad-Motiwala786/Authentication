import Header from "../../components/header";

const Layout = (props) => {
    return (
        <>
            <div className="container">
                <Header />
                {props.children}
            </div>
        </>
    )
}
export default Layout;