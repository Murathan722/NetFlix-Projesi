import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  color: black;
  margin: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;

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

const Section = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin: auto;
  text-align: start;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 13px;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
  margin-top: 0;
  font-size: 1.6rem;
  max-width: 350px;
  font-weight: bold;
`;

const Paragraph2 = styled.p`
  margin-bottom: 5px;
`;
const Paragraph3 = styled.p`
  margin-bottom: 15px;
  margin-top: 5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0;
`;

const Input = styled.input`
  width: 94%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  text-align: left;
`;

const Checkbox = styled.input`
  margin-right: 10px;
  margin-left: 0;
  width: 20px;
  height: 20px;
`;

const Button = styled.button`
  width: 100%;
  height: 60px;
  padding: 10px;
  background-color: #e50914;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ErrorMessages = styled.p`
  color: red;
`;

function SignUp2() {
  const initialValues = {
    email: "",
    password: "",
  };

  const errorMessages = {
    email: "Lütfen geçerli bir e-posta giriniz.",
    password: "Lütfen geçerli bir şifre giriniz.",
  };

  const [kullanici, setKullanici] = useState(initialValues);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
  };

  const handleChange = (event) => {
    let { name, value, checked, type } = event.target;
    value = type === "checkbox" ? checked : value;
    setKullanici({ ...kullanici, [name]: value });

    if (name === "email") {
      setErrors({ ...errors, email: !validateEmail(value) });
    }

    if (name === "password") {
      setErrors({ ...errors, password: !validatePassword(value) });
    }
  };

  useEffect(() => {
    const { email, password } = kullanici;
    if (validateEmail(email) && validatePassword(password)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [kullanici]);

  const history = useHistory();

  const handleSignUp3 = () => {
    history.push("/signup3");
  };

  const handleOturumAç = () => {
    history.push("/login");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;

    const URL = "";

    axios
      .post(URL, kullanici)
      .then((res) => {
        setKullanici(initialValues);
        history.push("/signup3");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleHosgeldin = () => {
    history.push("/");
  };

  return (
    <>
      <Container>
        <Header>
          <Logo onClick={handleHosgeldin}>WITFLİX</Logo>
          <OturumAç onClick={handleOturumAç}>Oturum Aç</OturumAç>
        </Header>
        <Section>
          <Title>ADIM 2 / 3</Title>
          <Paragraph>Üyeliğinizi başlatmak için bir parola oluşturun</Paragraph>
          <Paragraph2>Sadece birkaç adım daha kaldı, sonra bitiyor!</Paragraph2>
          <Paragraph3>Biz de formaliteyi hiç sevmiyoruz.</Paragraph3>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="email">E-posta:</Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                onChange={handleChange}
              />
              {errors.email && (
                <ErrorMessages>{errorMessages.email}</ErrorMessages>
              )}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Parola:</Label>
              <Input
                type="password"
                id="password"
                name="password"
                required
                onChange={handleChange}
              />
              {errors.password && (
                <ErrorMessages>{errorMessages.password}</ErrorMessages>
              )}
            </FormGroup>
            <CheckboxGroup>
              <Checkbox type="checkbox" id="offers" name="offers" />
              <Label htmlFor="offers">
                Wıtflix özel teklifleri e-posta ile gönderilmesin.
              </Label>
            </CheckboxGroup>
            <FormGroup>
              <Button type="submit" disabled={!isValid} onClick={handleSignUp3}>
                İleri
              </Button>
            </FormGroup>
          </Form>
        </Section>
      </Container>
    </>
  );
}

export default SignUp2;
