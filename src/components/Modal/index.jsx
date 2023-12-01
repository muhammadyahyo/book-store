import React, { useContext, useState } from 'react'
import { Box, Modal, Typography } from '@mui/material';
import { TextField } from "@mui/material";
import Button from '../Generic/Button';
import CryptoJs from 'crypto-js'
import { PropertiesContext } from '../../context/properties';





const ModalCreate = ({handleClose,open, refetch}) => {
    const [{id}] = useContext(PropertiesContext)  
  console.log(id, 'id');
  const [body, setBody] = useState({})
  const Crypto = CryptoJs.MD5(`POST/books{"isbn":"${body.isbn}"}MySecret`).toString()
  console.log(JSON.stringify(body), 'body');
  const onChange =({target: {value, name}})=>{
    setBody({
      ...body,
      [name]: value,
    });
  };

  
  const onSubmit =()=>{
    console.log(body.isbn, 'submit');
    
      fetch(`https://0001.uz/books`,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
        'Key': `${localStorage.getItem('key')}`,
        'Sign': `${Crypto}`

      },
      body: `{"isbn":"${body.isbn}"}`
    })
    .then((res)=> res.json())
    .then((res) => {
      console.log(res, "res");
      handleClose()
      refetch()
    })
  }

  const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 430,
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    boxShadow: 24,
    borderRadius: 4,
    p: 4,
  };
 
  
  
  return (
    <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Create a book
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                         <TextField
                            id="outlined-textarea"
                            label="ISBN"
                            name={'isbn'}
                            placeholder="Enter your book ISBN (bar code)"
                            multiline
                            fullWidth
                            onChange={onChange} 
                            sx={{ mt: 3 }}
                            />
                    
                        <TextField
                            id="outlined-textarea"
                            label="Title"
                            name={'title'}
                            placeholder="Enter your title"
                            multiline
                            fullWidth
                            onChange={onChange} 
                            sx={{ mt: 3 }}
                            />

                        <TextField
                            id="outlined-textarea"
                            label="Cover"
                            name={'cover'}
                            placeholder="Enter your author"                       
                            multiline
                            fullWidth
                            onChange={onChange} 
                            sx={{ mt: 3 }}
                            />   
                         <TextField
                            id="outlined-textarea"
                            label="Author"
                            name={'author'}
                            placeholder="Enter your author"                       
                            multiline
                            fullWidth
                            onChange={onChange} 
                            sx={{ mt: 3 }}
                            />      
                        <TextField
                            id="outlined-textarea"
                            label="Published"
                            name={'published'}
                            placeholder="Enter your author"                       
                            multiline
                            fullWidth
                            onChange={onChange} 
                            sx={{ mt: 3 }}
                            /> 
                        <TextField
                            id="outlined-textarea"
                            label="Pages"
                            name={'pages'}
                            placeholder="Enter your author"                       
                            multiline
                            fullWidth
                            onChange={onChange} 
                            sx={{ mt: 3 }}
                            />      
                    
                        
                </Typography>
                <div className='modal-button'>
                    <Button width={'200'}  onClick={handleClose} type={'light'}>Close</Button>
                    <Button width={'200'} onClick={onSubmit} >Submit</Button>

                </div>
              </Box>
            </Modal>
  )
}

export default ModalCreate