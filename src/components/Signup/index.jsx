import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Box, Container, Icons, Social, Text } from "./style";
import { TextField } from "@mui/material";
import Button from "../Generic/Button";
import CryptoJs from 'crypto-js'

const Signup = () => {
  const [body, setBody] = useState({})
  const navigate = useNavigate()
  const Crypto = CryptoJs.MD5(`POST/signup${body}MySecret`).toString()
  console.log(Crypto,'cr');

  const onChange =({target: {value, name}})=>{
    setBody({
      ...body,
      [name]: value,
      secret: "MySecret"
    });
  };
  const onSubmit =async()=>{
    console.log(body);
    
     await fetch(`https://0001.uz/signup`,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then((res)=> res.json())
    .then((res) => {
      // alert(JSON.stringify(res, "email"))
      navigate('/signin')
      console.log(res);
    })
  }

  console.log(body);
  return (
    <Container>
      <Box>
        <Text>Sign Up</Text>
        <Social>
          <Icons.Google /> <p className="text-social">Continue with Google</p>
        </Social>
        <Social>
          <Icons.Facebook />{" "}
          <p className="text-social">Continue with Facebook</p>
        </Social>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "175px",
              backgroundColor: "#24272C",
              height: "1px",
            }}
          />
          <p className="or">OR</p>
          <div
            style={{
              width: "175px",
              backgroundColor: "#24272C",
              height: "1px",
            }}
          />
        </div>

        <TextField
          id="outlined-textarea"
          label="Your name"
          name="name"
          placeholder="Enter your name"
          multiline
          fullWidth
          onChange={onChange} 
          sx={{ mt: 3 }}
        />
        <TextField
          id="outlined-textarea"
          name="email"
          label="Your email"
          placeholder="Enter your email"
          multiline
          fullWidth
          onChange={onChange} 
          sx={{ mt: 3 }}
        />
        <TextField
          id="outlined-textarea"
          label="Your password key"
          name="key"
          placeholder="Enter your password kye"
          multiline
          fullWidth
          onChange={onChange} 
          sx={{ mt: 3, mb: 3 }}
        />

        <Button onClick={onSubmit} type={"primary"} width={"100%"}>
          Button
        </Button>

        <div
          style={{
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "15px",
          }}
        >
          Already signed up? <a href="/signin">Go to sign in</a>
        </div>
      </Box>
    </Container>
  );
};

export default Signup;
