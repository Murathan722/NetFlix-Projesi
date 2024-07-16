import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
`;

const Logo = styled.h1`
  color: #e50914;
  font-size: 2rem;
  margin-left: 6.7rem;
  margin-top: 1.5rem;
  cursor: pointer;
`;

const Container = styled.div`
  font-family: Arial, sans-serif;
  background-image: url("/assets/WITFLİX.jpg");
  background-color: #062a35;
  background-size: cover;
  background-position: center;
  color: #fff;
  margin: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background-color: rgba(0, 0, 0, 0.75);
  padding: 20px 55px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 300px;
  text-align: center;
  margin-top: 5rem;
`;

const Baslik = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  padding-left: 0.5rem;
`;

const Input = styled.input`
  width: 93%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => (props.primary ? "#e50914" : "#6c757d")};
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: ${(props) => (props.primary ? "#f6121d" : "#5a6268")};
  }
`;

const Veya = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-top: 7px;
  margin-bottom: 12px;
  color: rgba(255, 255, 255, 0.7);
`;

const ForgotPassword = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 5px;
  cursor: pointer;
  padding: 13px;
`;

const LoginForm = () => {
  const history = useHistory();

  const handleHosgeldin = () => {
    history.push("/");
  };

  return (
    <Container>
      <Header>
        <Logo onClick={handleHosgeldin}>WITFLİX</Logo>
      </Header>
      <Form>
        <Baslik>Oturum Aç</Baslik>
        <FormGroup>
          <Label htmlFor="email">E-posta Adresi</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Şifre</Label>
          <Input type="password" id="password" name="password" required />
        </FormGroup>
        <Button type="submit" primary>
          Oturum Aç
        </Button>
        <Veya>VEYA</Veya>
        <Button type="button">Oturum Açma Kodu Kullan</Button>
        <ForgotPassword>Parolayı mı unuttunuz?</ForgotPassword>
        <CheckboxContainer>
          <Checkbox type="checkbox" id="rememberMe" name="rememberMe" />
          <Label htmlFor="rememberMe">Beni Hatırla</Label>
        </CheckboxContainer>
      </Form>
    </Container>
  );
};

export default LoginForm;
