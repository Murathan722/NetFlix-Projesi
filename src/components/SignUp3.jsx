// import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import styled from "styled-components";
// import { IoCheckmarkCircleOutline } from "react-icons/io5";
// import { BsCheck2 } from "react-icons/bs";
// import { ToastContainer, toast } from "react-toastify";

// const Container = styled.div`
//   background-color: white;
//   color: black;
//   margin: 0;
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-family: Arial, Helvetica, sans-serif;
// `;

// const Header = styled.header`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   padding: 20px;
//   height: 90px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   box-sizing: border-box;
//   border-bottom: 1px solid rgb(230, 230, 230);
// `;

// const Logo = styled.h1`
//   color: #e50914;
//   font-size: 2rem;
//   font-weight: bold;
//   margin-left: 6.7rem;
//   margin-top: 1.5rem;
//   cursor: pointer;
// `;

// const OturumAç = styled.h1`
//   font-size: 19px;
//   font-weight: 500;
//   color: black;
//   vertical-align: middle;
//   text-transform: capitalize;
//   margin-right: 2rem;
//   cursor: pointer;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const Section = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 20px;
// `;

// const IconWrapper = styled.div`
//   margin-bottom: 10px;
// `;

// const Paragraf = styled.p`
//   font-size: 13px;
//   font-weight: bold;
//   margin: 0;
// `;

// const Baslik = styled.h1`
//   margin: 10px 0;
//   font-size: 2rem;
// `;

// const Bolumler = styled.div`
//   width: 60%;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   margin-top: 20px;
//   font-size: 1.2rem;
// `;

// const Bolum1 = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const Bolum2 = styled(Bolum1)``;

// const Bolum3 = styled(Bolum1)``;

// const IconWrapper2 = styled.div`
//   margin-right: 10px;
//   color: red;
//   height: 1rem;
//   width: 1rem;
// `;

// const IconWrapper3 = styled(IconWrapper2)``;

// const Paragraf2 = styled.p`
//   margin: 0;
// `;

// const Paragraf3 = styled(Paragraf2)``;

// const Paragraf4 = styled(Paragraf2)``;

// const Button = styled.button`
//   width: 60%;
//   height: 3.5rem;
//   background-color: red;
//   color: white;
//   font-size: 1rem;
//   padding: 5px;
//   border: none;
//   border-radius: 5px;
//   margin-top: 20px;
// `;

// const Modal = styled.div`
//   display: ${(props) => (props.show ? "flex" : "none")};
//   justify-content: center;
//   align-items: center;
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0, 0, 0, 0.5);
// `;

// const ModalContent = styled.div`
//   background-color: white;
//   padding: 20px;
//   border-radius: 5px;
//   text-align: center;
// `;

// function SignUp3() {
//   const history = useHistory();

//   const handleHosgeldin = () => {
//     history.push("/");
//   };

//   const [isValid, setIsValid] = useState(false);

//   const handleTrue = () => {
//     setIsValid(true);
//   };

//   useEffect(() => {
//     if (isValid) {
//       toast.success("Tebrikler, kayıt işlemin başarıyla sonuçlanmıştır!");
//       const timer = setTimeout(() => {
//         history.push("/home");
//       }, 3000);

//       return () => clearTimeout(timer);
//     }
//   }, [isValid, history]);

//   return (
//     <>
//       <Container>
//         <Header>
//           <Logo>WITFLİX</Logo>
//           <OturumAç onClick={handleHosgeldin}>Oturumu Kapat</OturumAç>
//         </Header>
//         <Section>
//           <IconWrapper>
//             <IoCheckmarkCircleOutline
//               style={{ height: "50px", width: "50px", color: "red" }}
//             />
//           </IconWrapper>
//           <Paragraf>ADIM 3 / 3</Paragraf>
//           <Baslik>Planınızı seçin.</Baslik>
//           <Bolumler>
//             <Bolum1>
//               <IconWrapper2>
//                 <BsCheck2 />
//               </IconWrapper2>
//               <Paragraf2>Taahhüt yok, istediğiniz zaman iptal edin.</Paragraf2>
//             </Bolum1>
//             <Bolum2>
//               <IconWrapper2>
//                 <BsCheck2 />
//               </IconWrapper2>
//               <Paragraf3>
//                 Tek ve düşük bir ücretle, Netflix'teki her şey önünüzde.
//               </Paragraf3>
//             </Bolum2>
//             <Bolum3>
//               <IconWrapper3>
//                 <BsCheck2 />
//               </IconWrapper3>
//               <Paragraf4>Tüm cihazlarınızda sınırsız izleme imkânı.</Paragraf4>
//             </Bolum3>
//           </Bolumler>
//           <Button onClick={handleTrue}>İleri</Button>
//         </Section>
//         <Modal show={isValid}>
//           <ModalContent>
//             <h2>Tebrikler</h2>
//             <p>Kayıt işlemin başarıyla sonuçlanmıştır.</p>
//           </ModalContent>
//         </Modal>
//         <ToastContainer />
//       </Container>
//     </>
//   );
// }

// export default SignUp3;

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { BsCheck2 } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";

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

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const IconWrapper = styled.div`
  margin-bottom: 10px;
`;

const Paragraf = styled.p`
  font-size: 13px;
  font-weight: bold;
  margin: 0;
`;

const Baslik = styled.h1`
  margin: 10px 0;
  font-size: 2rem;
`;

const Bolumler = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  font-size: 1.2rem;
`;

const Bolum1 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Bolum2 = styled(Bolum1)``;

const Bolum3 = styled(Bolum1)``;

const IconWrapper2 = styled.div`
  margin-right: 10px;
  color: red;
  height: 1rem;
  width: 1rem;
`;

const IconWrapper3 = styled(IconWrapper2)``;

const Paragraf2 = styled.p`
  margin: 0;
`;

const Paragraf3 = styled(Paragraf2)``;

const Paragraf4 = styled(Paragraf2)``;

const Button = styled.button`
  width: 60%;
  height: 3.5rem;
  background-color: red;
  color: white;
  font-size: 1rem;
  padding: 5px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
`;

function SignUp3() {
  const history = useHistory();

  const handleHosgeldin = () => {
    history.push("/");
  };

  const [isValid, setIsValid] = useState(false);

  const handleTrue = () => {
    setIsValid(true);
  };

  useEffect(() => {
    if (isValid) {
      toast.success(
        "Tebrikler, kayıt işlemin başarıyla sonuçlandı! Seni ana sayfaya yönlendiriyorum.",
        {
          onClose: () => history.push("/home"),
          autoClose: 3000,
        }
      );
    }
  }, [isValid, history]);

  return (
    <>
      <Container>
        <Header>
          <Logo onClick={handleHosgeldin}>WITFLİX</Logo>
          <OturumAç onClick={handleHosgeldin}>Oturumu Kapat</OturumAç>
        </Header>
        <Section>
          <IconWrapper>
            <IoCheckmarkCircleOutline
              style={{ height: "50px", width: "50px", color: "red" }}
            />
          </IconWrapper>
          <Paragraf>ADIM 3 / 3</Paragraf>
          <Baslik>Planınızı seçin.</Baslik>
          <Bolumler>
            <Bolum1>
              <IconWrapper2>
                <BsCheck2 />
              </IconWrapper2>
              <Paragraf2>Taahhüt yok, istediğiniz zaman iptal edin.</Paragraf2>
            </Bolum1>
            <Bolum2>
              <IconWrapper2>
                <BsCheck2 />
              </IconWrapper2>
              <Paragraf3>
                Tek ve düşük bir ücretle, Netflix'teki her şey önünüzde.
              </Paragraf3>
            </Bolum2>
            <Bolum3>
              <IconWrapper3>
                <BsCheck2 />
              </IconWrapper3>
              <Paragraf4>Tüm cihazlarınızda sınırsız izleme imkânı.</Paragraf4>
            </Bolum3>
          </Bolumler>
          <Button onClick={handleTrue}>İleri</Button>
        </Section>
      </Container>
      <ToastContainer />
    </>
  );
}

export default SignUp3;
