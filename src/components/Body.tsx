
import styled from '@emotion/styled'
import Weather from "./Weather";
import Header from "./Header";
import Footer from "./Footer";



const Body = () => {
    return (
        <Container>
            <Header/>
            <section className="wrapper" >
                <Weather/>
            </section>
            <Footer/>
        </Container>
    );
};

export default Body;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    .wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 6em 0 0 ;
        color: #ffffff;
        background: linear-gradient(180deg,#535250,#8a9888,#9a9999);
        width: 470px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

        opacity: 0.95;
        padding: 4em 0em 10em;

    }
    `