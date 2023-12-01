import React from "react";
import { Box, Container, Icons } from "./style";
import { useNavigate} from 'react-router-dom'
import Button from "../Generic/Button";


const NotFound = () => {
    const navigate = useNavigate()
  return <Container>
    <Icons.Notfound/>
    <Box>
        <Button onClick={()=>{navigate('/home')}} width={'300'}>Go Home Page</Button>
        <Button onClick={()=>{navigate(0)}} width={'300'} type={'light'}>Reload Page</Button>

    </Box>
  </Container>;
};

export default NotFound;
