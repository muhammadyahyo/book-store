import CryptoJs from 'crypto-js'
import React from 'react'
import { Box, BoxIcons, Container, Icons, Img, Pages, Publish, Text, TextBottom } from './style'


const Card = ({
    id,
    title,
    cover,
    author,
    published,
    pages,
    refetch,
    handleOpen
}) => {
  
  
  
  const Delete =(id)=>{
    const Crypto = CryptoJs.MD5(`DELETE/books/${id}MySecret`).toString()
    console.log('Delete',id, Crypto, `DELETE/books/${id}MySecret`); 
    fetch(`https://no23.lavina.tech/books/${id}`,{
      method: "DELETE",
      headers:{
        'Content-Type': 'application/json',
        'Key' : `${localStorage.getItem('key')}`,
        'Sign' : `${Crypto}`
      }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if(res?.isOk){
          // message.info("Successfully deleted")
        
          console.log("Successfully deleted");
          refetch()
        }
      });
  }
  const Edit = (id)=>{
    // handleOpen()
    const Crypto = CryptoJs.MD5(`PATCH/books/${id}{"status": 3}MySecret`).toString()

    console.log('Patch',id, Crypto, `PATCH/books/${id}{"status":3}MySecret`); 
    fetch(`https://no23.lavina.tech/books/${id}`,{
      method: "PATCH",
      headers:{
        'Content-Type': 'application/json',
        'Key' : `${localStorage.getItem('key')}`,
        'Sign' : `${Crypto}`
      },
      body: `{"status": 3}`
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res,'res');
        if(res?.isOk){
          alert('Successfully Edit!');
          
          console.log("Successfully Edit");
          refetch()
        }
      });
  }

  return (
    <Container className='card'>
        <Img src={cover}/>
        <Text>{title}</Text>
        <p className='text-card'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quidem temporibus cum quod, fugit sequi inventore ex iure, accusantium voluptatum molestias culpa impedit officia dolorum voluptatibus ad animi tempora ducimus?</p>
        <TextBottom>
            <Publish>{author}: {published}</Publish>
            <Pages>{pages} pages</Pages>
        </TextBottom>
            <BoxIcons>
              <Box className='icon'  onClick={ (e)=>{
              e.stopPropagation();
              Delete(id)} } >
              <Icons.Delete/>
              </Box>
              <Box className='icon' blue={'true'} onClick={ (e)=>{
              e.stopPropagation();
              Edit(id)} } >
                <Icons.Edit/>
              </Box>
            </BoxIcons>
            
            {/* <Icons.Delete onClick={ (e)=>{
              e.stopPropagation();
              Delete(id)} } 
              className={'icon'}/>
            <Icons.Edit onClick={(e)=>{
              e.stopPropagation();
              Edit(id)
              }} className={'icon'}/> */}
        
    </Container>
  )
}

export default Card