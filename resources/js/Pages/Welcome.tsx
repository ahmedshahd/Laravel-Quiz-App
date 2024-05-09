import Layout from "@/Templates/Layout";

const Welcome = ({auth,csrf}: {csrf: string, auth: any }) => {
    return (
        <Layout isLoggedIn={auth.user} csrf={csrf}>
            <h1>hello world</h1>
        </Layout>
    )
}


export default Welcome
