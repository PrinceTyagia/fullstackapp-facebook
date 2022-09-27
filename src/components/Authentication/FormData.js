import React from "react";
import {
  Box,
  Typography,
  styled,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
const FormData = () => {
  return (
    <Container>
      <form action="">
        <FirstName>
          <FirstSurname>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="surname" />
          </FirstSurname>
          <EmailPssword>
            <input type="email" placeholder="Moble number or email address" />
            <input type="password" placeholder="New password" />
          </EmailPssword>
        </FirstName>
        <DateOfBirth>
          <Typography>Date of birth</Typography>
          <Select>
            <MenuItem value=""></MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={11}>11</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={13}>13</MenuItem>
            <MenuItem value={24}>14</MenuItem>
            <MenuItem value={35}>15</MenuItem>
            <MenuItem value={16}>16</MenuItem>
            <MenuItem value={17}>17</MenuItem>
            <MenuItem value={18}>18</MenuItem>
          </Select>
          <Select>
            <MenuItem value=""></MenuItem>
            <MenuItem value={1}>jan</MenuItem>
            <MenuItem value={2}>Feb</MenuItem>
            <MenuItem value={3}>March</MenuItem>
            <MenuItem value={4}>Apr</MenuItem>
            <MenuItem value={5}>May</MenuItem>
            <MenuItem value={6}>Jun</MenuItem>
            <MenuItem value={7}>Jul</MenuItem>
            <MenuItem value={8}>Aug</MenuItem>
            <MenuItem value={9}>Sep</MenuItem>
            <MenuItem value={10}>Oct</MenuItem>
            <MenuItem value={11}>Nov</MenuItem>
            <MenuItem value={12}>Dec</MenuItem>
            <MenuItem value={13}>13</MenuItem>
            <MenuItem value={24}>14</MenuItem>
            <MenuItem value={35}>15</MenuItem>
            <MenuItem value={16}>16</MenuItem>
            <MenuItem value={17}>17</MenuItem>
            <MenuItem value={18}>18</MenuItem>
          </Select>
          <Select>
            <MenuItem value=""></MenuItem>
            <MenuItem value={1}>2000</MenuItem>
            <MenuItem value={2}>2001</MenuItem>
            <MenuItem value={3}>2002</MenuItem>
            <MenuItem value={4}>2003</MenuItem>
            <MenuItem value={5}>2004</MenuItem>
            <MenuItem value={6}>2005</MenuItem>
            <MenuItem value={7}>2006</MenuItem>
            <MenuItem value={8}>2007</MenuItem>
            <MenuItem value={9}>2008</MenuItem>
            <MenuItem value={10}>2009</MenuItem>
            <MenuItem value={11}>2010</MenuItem>
            <MenuItem value={12}>2011</MenuItem>
            <MenuItem value={13}>2012</MenuItem>
            <MenuItem value={24}>2013</MenuItem>
            <MenuItem value={35}>2014</MenuItem>
            <MenuItem value={16}>2015</MenuItem>
            <MenuItem value={17}>2016</MenuItem>
            <MenuItem value={18}>2016</MenuItem>
            <MenuItem value={35}>2017</MenuItem>
            <MenuItem value={16}>2018</MenuItem>
            <MenuItem value={17}>2019</MenuItem>
            <MenuItem value={18}>2020</MenuItem>
            <MenuItem value={18}>2021</MenuItem>
            <MenuItem value={18}>2022</MenuItem>
          </Select>
        </DateOfBirth>
        <Gender>
          <Typography>Gender</Typography>
        </Gender>
        <Description>
          <Typography>
            People who use our service may have uploaded your contact
            information to Facebook. Learn more.
          </Typography>
          <Typography>
            By clicking Sign Up, you agree to our Terms, Privacy Policy and
            Cookies Policy. You may receive SMS notifications from us and can
            opt out at any time.
          </Typography>
        </Description>
        <SignUpButton>Sign Up</SignUpButton>
      </form>
    </Container>
  );
};

export default FormData;

const Container = styled(Box)`
  padding: 15px;
`;
const FirstName = styled(Box)`
  display: flex;
  flex-direction: column;
`;
const FirstSurname = styled(Box)`
  & > input {
    padding: 6px;
    font-size: 16px;
    width: 44%;
    height: 20px;
  }
  & > input:nth-last-child(1) {
    margin-left: 10px;
  }
`;
const EmailPssword = styled(Box)`
  display: flex;
  flex-direction: column;

  & > input {
    padding: 6px;
    font-size: 16px;
    width: 95%;
    height: 20px;
    margin-top: 10px;
  }
`;

const DateOfBirth = styled(Box)``;
const Gender = styled(Box)``;
const Description = styled(Box)``;
const SignUpButton = styled("button")``;
