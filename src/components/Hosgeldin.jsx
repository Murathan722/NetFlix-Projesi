import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoLanguage } from "react-icons/io5";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  margin: 0;
  padding: 0;
  background-image: url("../assets/WITFLİX.jpg");
  background-color: #062a35;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 2rem;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  margin-left: 95px;
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.8rem;
  margin-right: 150px;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: inherit;
  padding: 0 0.5rem;
  border-radius: 5px;
  border: 1px solid white;
`;

const Select = styled.select`
  background-color: inherit;
  color: white;
  border: none;
  outline: none;
  font-size: 1rem;
  appearance: none;
  padding: 0.5rem;
  border-radius: 5px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0.5rem;
  color: white;
`;

const Button = styled.div`
  padding: 9px;
  background-color: #e50914;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin: 0 0.5rem 0 1rem;
  width: 100%;
`;

const Section = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  margin-top: 175px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

const Baslik = styled.h1`
  font-size: 3rem;
  margin-bottom: 0;
`;

const AltBaslik = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0;
`;

const Detay = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
  max-width: 950px;
`;

const Save = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 1rem;
  flex: 2;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

const SaveButton = styled.button`
  font-size: 1.2rem;
  padding: 1rem;
  flex: 1;
  border-radius: 0.5rem;
  color: white;
  background-color: red;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

function Hosgeldin() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (email.trim() !== "") {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [email]);

  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };

  const handleSignUp = () => {
    history.push("/signup");
  };
  return (
    <>
      <Container>
        <Header>
          <Logo>WITFLİX</Logo>
          <HeaderRight>
            <SelectContainer>
              <IconWrapper>
                <IoLanguage />
              </IconWrapper>
              <Select>
                <option>Türkçe</option>
                <option>English</option>
              </Select>
            </SelectContainer>
            <Button onClick={handleLogin}>Oturum Aç</Button>
          </HeaderRight>
        </Header>
        <Section>
          <SectionContent>
            <Baslik>Sınırsız film, dizi ve çok daha fazlası</Baslik>
            <AltBaslik>
              İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin.
            </AltBaslik>
            <Detay>
              İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak
              için tek yapmanız gereken e-posta adresinizi girmek.
            </Detay>
            <Save>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="E-posta adresi"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <SaveButton onClick={handleSignUp} disabled={isValid}>
                Kayıt ol
              </SaveButton>
            </Save>
          </SectionContent>
        </Section>
      </Container>
    </>
  );
}

export default Hosgeldin;
