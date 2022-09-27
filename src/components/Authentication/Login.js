import React, { useEffect,useState } from "react";
import { Box, styled, Typography, Button, } from "@mui/material";
import Modal from '@mui/material/Modal'
import CloseIcon from "@mui/icons-material/Close";
import FormData from "./FormData";
const Login = () => {
   const [open, setOpen] = useState(false);
  const documentTitle = () => {
    return (document.title = "Facebook -log in or sign up");
  };
 
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    documentTitle();
  }, []);
  return (
    <Container>
      <Box>
        <LoginContant>
          <Typography variant="h2">facebook</Typography>
          <Typography>
            Facebook helps you connect and share <br /> with the people in your
            life.
          </Typography>
        </LoginContant>
        <LoginFormContant>
          <LoginForm>
            <input type="email" placeholder="Email address or phone number" />
            <input type="password" placeholder="Password" />
            <Button
              style={{
                background: "#1877F2",
                color: "#fff",
                width: "96%",
                marginLeft: "10px",
                fontSize: "19px",
                fontWeight: "600",
                marginTop: "10px",
              }}
            >
              Log in
            </Button>
            <Typography
              style={{
                fontSize: "14px",
                paddingTop: "10px",
                color: "#1877F2",
                cursor: "pointer",
              }}
            >
              Forgotten password?
            </Typography>
            <Box
              style={{ borderBottom: "1px solid #dadde1", margin: "20px 16px" }}
            />
            <Button
              onClick={handleOpen}
              style={{
                background: "#42b72a",
                color: "#fff",
                width: "50%",
                marginLeft: "100px",
                fontSize: "18px",
                fontWeight: "500",
                marginTop: "10px",
                textAlign: "center",
                textTransform: "capitalize",
              }}
            >
              Create new Acount
            </Button>
            <Modal open={open} >
              <CreateContant sx={style}>
                <Box
                  style={{ padding: "15px", borderBottom: "1px solid #ccc" }}
                >
                  <CeateHeader>
                    <Typography
                      style={{ fontSize: "14px", lineHeight: "10px" }}
                    >
                      <strong
                        style={{
                          fontSize: "30px",
                          lineHeight: "30px",
                          paddingBottom: "20px",
                        }}
                      >
                        Sign Up
                      </strong>{" "}
                      <br /> <br /> It's quick and easy.
                    </Typography>
                    <CloseIcon onClick={() => handleClose(false)} />
                  </CeateHeader>
                </Box>
                <FormData />
              </CreateContant>
            </Modal>
          </LoginForm>
          <Typography style={{ fontSize: "14px" }}>
            <strong style={{ textDecoration: "underline", cursor: "pointer" }}>
              Create a Page
            </strong>
            for a celebrity, brand or business.
          </Typography>
        </LoginFormContant>
      </Box>
    </Container>
  );
};

export default Login;
//  <button onClick={() => handleClose(false)}>X</button>;

const Container = styled(Box)`
  background: #f0f2f5;
  height: 100vh;
  display: flex;
  & > div {
    display: flex; 
    padding: 6rem 7rem;
    flex: 1 1 auto;
`;

const LoginContant = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 55px 10px;
  width: 50%;
  & > h2 {
    color: #1877f2;
    font-weight: 600;
    font-size: 4rem;
  }
  & > p {
    color: #000;
    font-size: 1.8rem;
    font-weight: 500;
  }
`;
const LoginFormContant = styled(Box)`
  background: #f0f2f5;
  width: 40%;
  flex: 1;
  text-align: center;
`;
const LoginForm = styled(Box)`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  width: 80%;
  height: 95%;
  margin-bottom: 30px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  & > input {
    margin: 10px;
    height: 30px;
    border: 1px solid #dddfe2;
    color: #1d2129;
    border-radius: 6px;
    line-height: 16px;
    outline: none;
    padding: 15px;
    font-size: 16px;
  }
  & > input:focus {
    border: 1px solid #1877f2;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  }
`;
const CreateContant = styled(Box)`
  
`;
const CeateHeader = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  /* height:450, */
  bgcolor: "background.paper",
  borderRadius:'5px'  ,
  boxShadow: 24,
  
 
};