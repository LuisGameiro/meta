import {FC} from "react";
import {Container} from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomePage from "../../components/HomePage";
import Specials from "../../components/Specials";
import CustomersSay from "../../components/CustomersSay";
import About from "../../components/About";

const Home: FC = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <HomePage />
      <Specials />
      <CustomersSay />
      <About />
      <Footer />
    </Container>
  );
};

export default Home;
