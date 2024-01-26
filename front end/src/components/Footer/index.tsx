import {FC, HTMLAttributes} from "react";
import {HashLink} from "react-router-hash-link";
import {Container, Content, Copyright, Column, Image} from "./styles";
import restaurant from "../../assets/restaurant.jpg";

const Footer: FC<HTMLAttributes<HTMLElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Content>
        <Column>
          <Image
            src={restaurant}
            alt="Restaurant Food"
            style={{height: "100%"}}
          />
        </Column>
        <Column>
          <h4>Little Lemon</h4>
          <ul>
            <li>
              <HashLink to="/">Home</HashLink>
            </li>
            <li>
              <HashLink to="/#">Menu</HashLink>
            </li>
            <li>
              <HashLink to="/bookings">Reservations</HashLink>
            </li>
            <li>
              <HashLink to="/#">Order Online</HashLink>
            </li>
            <li>
              <HashLink to="/#">Login</HashLink>
            </li>
          </ul>
        </Column>
        <Column>
          <h4>Contact</h4>
          <ul>
            <li>
              <a
                href="https://www.google.com/maps/place/About,+IL,+USA/"
                target="_blank"
              >
                <address>
                  Little Lemon 331 E About LaSalle Street About, Illinois 60602
                  USA
                </address>
              </a>
            </li>
            <li>
              <a href="tel:+551199999999" target="_blank" rel="external">
                +55 11 9999-9999
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@littlelemon.com"
                target="_blank"
                rel="external"
              >
                contact@littlelemon.com
              </a>
            </li>
          </ul>
        </Column>
        <Column>
          <h4>Social Media</h4>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/littlelemon"
                target="_blank"
                rel="external"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/littlelemon"
                target="_blank"
                rel="external"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/littlelemon"
                target="_blank"
                rel="external"
              >
                Twitter
              </a>
            </li>
          </ul>
        </Column>
      </Content>
      <Copyright>
        <span>Developed by Luis Gameiro</span>
        <p>© 20234Little Lemon. All rights reserved.</p>
      </Copyright>
    </Container>
  );
};

export default Footer;
