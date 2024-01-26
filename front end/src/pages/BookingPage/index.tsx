import {useReducer, FC} from "react";
import Header from "../../components/Header";
import BookingForm from "../../components/BookingForm";
import Footer from "../../components/Footer";
import {updateTimes, initializeTimes} from "../../utils/temp";
import {Container} from "./styles";

const BookingPage: FC = (): JSX.Element => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <Container>
      <Header />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <Footer />
    </Container>
  );
};

export default BookingPage;
