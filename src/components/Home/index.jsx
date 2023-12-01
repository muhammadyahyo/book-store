import React, { useEffect, useState } from 'react'
import { BoxNav, Container, Icons, Inbox, Input, InputBox, BoxHome, TextBox, InputHome, CardHome } from './style'
import Button from '../Generic/Button'
import Card from '../Generic/Card';
import CryptoJs from 'crypto-js'
import ModalCreate from '../Modal';
import { useQuery } from "react-query";
import uzeReplace from '../../hooks/useReplace';
import { useNavigate, useLocation } from "react-router-dom";
import useSearch from '../../hooks/useSearch';
// import { useParams } from 'react-router-dom'




const Home = () => {
  const [data, setData] = useState([])
  const [searchData, setSearchData] = useState([])
  const [tit, setTitle] = useState('')
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate()
  const location = useLocation()
  const query = useSearch()
  // const params = useParams()


  const Crypto = CryptoJs.MD5(`GET/booksMySecret`).toString()
  const Crypto1 = CryptoJs.MD5(`GET/books/:${tit}MySecret`).toString()
  
  const onChange = ({target: {name, value}}) => {
    navigate(`${location?.pathname}${uzeReplace(name,value)}`)
    setTitle(value.toLowerCase())
  }
  // useEffect(()=>{
  //   fetch(`https://0001.uz/books/:${tit}`,{
  //         method:"GET",
  //           headers: {
  //             'Content-Type': 'application/json',
  //             'Key' : `${localStorage.getItem('key')}`,
  //             'Sign' : `${Crypto1}`
  //           },
  //       }).then((res)=> res.json())
  //       .then((res) => {
  //         setSearchData(res?.data)
  //         console.log(res, "res searchData");
  //         console.log(searchData, 'seacrchData');
  //       })

  // },[location])



  const {refetch} = useQuery([], ()=>{
    if(localStorage.getItem('key')=== null){
          navigate('/signin')
        } else{
          navigate('/home')
        }

     fetch(`https://0001.uz/books`,{
            method:"GET",
              headers: {
                'Content-Type': 'application/json',
                'Key' : `${localStorage.getItem('key')}`,
                'Sign' : `${Crypto}`
              },
          }).then((res)=> res.json())
          .then((res) => {
            setData(res?.data)
            console.log(res, "books");
          })


  })

  useEffect(()=>{
    let d = data?.filter(({book})=> book.title.toLowerCase().includes(tit) )
    setSearchData(d)
  },[location?.search])
  


  
  console.log(data);
  return (
    <Container>
      <BoxNav>
        <Inbox>
          <Icons
            onClick={() => {
              navigate("/");
            }}
          >
            <Icons.Logo />
            <Icons.Name />
          </Icons>
          <InputBox>
            <Icons.Search />
            <Input defaultValue={query.get(':')} onChange={onChange} name="title" placeholder="Search for any training you want" />
          </InputBox>
        </Inbox>
        <Inbox>
          <Icons>
            <Icons.Bell />
            <Icons.Avatar />
          </Icons>
        </Inbox>
      </BoxNav>

      <BoxHome>
        <TextBox>
          <div>
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="text-big"
            >
              You’ve got
              <h3 className="text-big-color text-big">{data?.length} book</h3>{" "}
            </div>
            <p className="text-small">Your task today</p>
          </div>

          <TextBox>
            <InputHome placeholder="Enter your name" />
            <Button onClick={handleOpen}>+ Create a book</Button>
                <ModalCreate open={open} handleClose={handleClose} refetch={refetch}/>
          </TextBox>
        </TextBox>

        <CardHome>
          {
          searchData?.length === (null || 0) ? (data?.map(({ book }) => (
            <Card
              key={book?.id}
              id={book?.id}
              title={book?.title}
              cover={book?.cover}
              author={book?.author}
              published={book?.published}
              pages={book?.pages}
              refetch = {refetch}
              handleOpen={handleOpen}
            />
          ))) :
          (searchData?.map(({ book }) => (
            <Card
              key={book?.id}
              id={book?.id}
              title={book?.title}
              cover={book?.cover}
              author={book?.author}
              published={book?.published}
              pages={book?.pages}
              refetch = {refetch}
              handleOpen={handleOpen}

            />
          )))
          
          }
          {/* <Card/>
        <Card/>
        <Card/>
        <Card/> */}
        </CardHome>

       
      </BoxHome>
    </Container>
  );
}

export default Home