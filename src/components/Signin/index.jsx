import React, { useState } from 'react'
import { Box, Container, Icons, Social, Text } from "./style";
import { TextField } from "@mui/material";
import Button from "../Generic/Button";
import { useNavigate } from 'react-router-dom';
import CryptoJs from 'crypto-js'


const Signin = () => {
  const [body, setBody] = useState({})
 
  const navigate = useNavigate()
  const Crypto = CryptoJs.MD5(`GET/myselfMySecret`).toString()
  // console.log(Crypto,'cr');
    const onChange =({target: {value, name}})=>{
      setBody({
        ...body,
        [name]: value,
        secret: "MySecret"
      });
    };
    console.log(body);
    const onSubmit =async()=>{
      console.log(body);
      
     await fetch(`https://0001.uz/myself`,{
        method:"GET",
        headers: {
          'Content-Type': 'application/json',
          'Key' : `${body.key}`,
          'Sign' : `${Crypto}`
        },
        // body: JSON.stringify(body)
      })
      .then((res)=> res.json())
      .then((res) => {
        console.log(res);
        if(res?.isOk){
          navigate('/home')
          // alert('Successfully logged in')
          localStorage.setItem('key',body.key)
        } else{
          alert('Login yoki Email xato')
        }
      })
    }
    

  return (
    <Container>
      <Box>
        <Text>Sign In</Text>
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
          label="Your username"
          name={'name'}
          placeholder="Enter your username"
          multiline
          fullWidth
          onChange={onChange} 
          sx={{ mt: 3 }}
        />
        <TextField
          id="outlined-textarea"
          label="Your email"
          name={'email'}
          placeholder="Enter your email"
          multiline
          fullWidth
          onChange={onChange} 
          sx={{ mt: 3 }}
        />
        <TextField
          id="outlined-textarea"
          name={'key'}
          label="Your password"
          placeholder="Enter your password"
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
          Already signed up? <a href="/signup">Go to sign up</a>
        </div>
      </Box>
    </Container>
  );
}

export default Signin