import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(230, 230, 230);
`;

const Logo = styled.h1`
  color: #e50914;
  font-size: 2rem;
  font-weight: bold;
  margin-left: 6.7rem;
  margin-top: 1.5rem;
  cursor: pointer;
`;
const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: white;
  color: #fff;
  margin: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OturumAç = styled.h1`
  font-size: 19px;
  font-weight: 500;
  color: black;
  vertical-align: middle;
  text-transform: capitalize;
  margin-right: 2rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
const Section = styled.section`
  display: flex;
  margin: 0 auto;
  padding: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const ImageLogo = styled.img`
  width: 270px;
  height: 60px;
  background-size: 260px;
  margin-top: 0;
  margin: 100px 0 20px;
`;

const Adim = styled.p`
  font-size: 13px;
  color: black;
  margin-bottom: 3px;
`;

const HesapOlustur = styled.p`
  font-size: 32px;
  color: black;
  font-weight: 600;
  margin: 5px;
`;

const Detay = styled.p`
  font-size: 18px;
  color: black;
  max-width: 300px;
  margin-top: 8px;
  text-align: center;
  line-height: 1.7rem;
`;

const Button = styled.button`
  border-radius: 4px;
  font-size: 24px;
  font-weight: 400;
  min-height: 64px;
  background-color: #e50914;
  color: white;
  width: 100%;
  min-width: 110px;
  padding: 20.5px 2em;
  border: none;
  cursor: pointer;
`;

export default function () {
  const history = useHistory();

  const handleHosgeldin = () => {
    history.push("/");
  };

  const handleLogin = () => {
    history.push("/login");
  };

  const handleSignUp2 = () => {
    history.push("/signup2");
  };

  return (
    <>
      <Container>
        <Header>
          <Logo onClick={handleHosgeldin}>WITFLİX</Logo>
          <OturumAç onClick={handleLogin}>Oturum Aç</OturumAç>
        </Header>
        <Section>
          <Content>
            <ImageLogo src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png" />
            <Adim>ADIM 1 / 3</Adim>
            <HesapOlustur>Hesabınızı oluşturalım</HesapOlustur>
            <Detay>
              Wıtflix sizin için kişiselleştirilir. İstediğiniz zaman,
              istediğiniz cihazda izlemek için bir parola oluşturun.
            </Detay>

            <Button onClick={handleSignUp2}>İleri</Button>
          </Content>
        </Section>
      </Container>
    </>
  );
}
