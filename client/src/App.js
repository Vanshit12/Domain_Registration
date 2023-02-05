import React, {useState, useEffect} from 'react';
import Router from './Router'
import Context from './Context'
import axios from 'axios';
import Header from './Header'
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import {gapi} from 'gapi-script';
import {Card, Col, Row, Table, Form, Button, ListGroup, Spinner} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Context>
        <Router />
      </Context>
    </div>
  );
//   var form
//   const [keyword, setKeyword] = useState('');
//   const [images, setImages] = useState([]);
//   const [domains, setDomains] = useState('');
//   const [loader , setLoader] = useState(false);
//   const [domainLoader , setDomainLoader] = useState(false);
//   const [radioWord, setRadioWord] = useState();
//   const [textWord, setTextWord] = useState();
//   const [active, setActive] = useState();
//   const [domainWord, setDomainWord] = useState('');
//   useEffect(() => {
//     var Id = "474219718041-s78lnljsije24b19fk8oafe9jvtg8s7m.apps.googleusercontent.com"

//     gapi.load('client:auth2',()=> {

//       gapi.auth2.init({clientId: Id})
//     })

//     form = document.querySelector('form')
//     console.log(domainWord)
//     // form.addEventListener('submit', handleSubmit)
//     console.log(radioWord, textWord)
//     },[]);

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const data = new FormData(form)
//   setImages([])
//   setKeyword()
//   setLoader(true)
  
//   // to clear the textarea input 
//   // form.reset()
//   const id = document.getElementById("prompt")
//   console.log(id.value)

//   var response
//   var string
//   axios.post('http://localhost:5000/',JSON.stringify({
//               prompt: 'Extract keywords from this text:\n\n' + id.value
//           }),
//          {
//           headers: {
//               'Content-Type': `application/json`,
//           }}
//       ).then( (res) => {
//         string = res.data.keyword.replace(/[^a-zA-Z]/g, ' ');
//         const newString = string.split(' ');
//         const filter = newString.filter((s) => s !== "")
//         setKeyword(filter);
//         response = filter;
//       }).then((res) =>{
//           axios.post('http://localhost:5000/logo', JSON.stringify({logo: string + " logo"}),
//           {
//            headers: {
//                'Content-Type': `application/json`,
//            }}
//           )
//           .then((res) => {
//             setImages(res.data.image.data);
//         })
//       })
//     //   .then((res) =>{
//     //     axios.post('http://localhost:5000/domains', JSON.stringify({keyword: response[0]}),
//     //     {
//     //      headers: {
//     //          'Content-Type': `application/json`,
//     //      },
//     //     }).then((res) => {
//     //       setDomains(res.data.data)
//     //     })
//     // })
//     id.value = "";
// }

// const validate = (e) => {
//   console.log(e.target.value);
//   var description = e.target.value;
//   var words = description.split(" ");
//     if (words.length> 10) {
//       alert('Please Describe your business in less than 10 words');
//     }
// }

// const handleDomain = async (e) => {
//   e.preventDefault();
//   setDomainLoader(true)
//   if(radioWord){
//     axios.post('http://localhost:5000/domains', JSON.stringify({keyword: radioWord}),
//     {
//       headers: {
//         'Content-Type': `application/json`,
//       },
//     }).then((res) => {
//       setDomains(res.data.data)  
//       window.scrollTo(0, 500);  
//       setDomainLoader(false)
//     })
//   }else if(textWord){
    
//     axios.post('http://localhost:5000/domains', JSON.stringify({keyword: textWord}),
//     {
//       headers: {
//         'Content-Type': `application/json`,
//       },
//     }).then((res) => {
//       setDomains(res.data.data)
//       window.scrollTo(0, 500);  
//      setDomainLoader(false)
//     })
//   }
// }

// const handleLogin = async (googleData) => {
//   console.log(googleData);
//   const res = await fetch("http://localhost:5000/auth/google", {
//     method: "POST",
//     body: JSON.stringify({
//       token: googleData.tokenId
//     }),
//   headers: {
//     "Content-Type": "application/json"
//     }
//   })
//   const data = await res.json()
// }

// const checkTextWord = (e)  => {
//   console.log(e.target.value.length);
//   if(e.target.value.length !== 0){
//     var ele = document.getElementsByName("radioword");
//     for(var i=0;i<ele.length;i++)
//       ele[i].checked = false;
//     setDomainWord('text');
//     setRadioWord('')
//     setTextWord(e.target.value)
//   }else {
//     setDomainWord('')
//   }
// }
// const handleError = async (err) => {
//   console.log(err);
// }
// const getId = (e,i) => {
//   document.getElementById(i).classList.add('selected')
// }
// const logout = () => {
//   console.log('logout successfull');
// }
//   return (
//     <div className="App" id="app">
//     {/* <form>
//       <input type="text" id="text" name="prompt" onChange={(e) => validate(e)} placeholder="Please Describe your business in less than 10 words"></input>
//       <button type="submit"><img src="./assets/send.svg" alt="send"></img></button>
//     </form> */}
//     {/* <div id="chat_container"></div>
//      */}
//      <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3" controlId="prompt" style={{ margin: '15px', display: 'flex', justifyContent: 'center' }}>
//           <Form.Control type="text" id="prompt" name="prompt" style={{margin : '15px', width: '50%'}} onChange={(e) => validate(e)} placeholder="Please Describe your business in less than 10 words" />
//         <Button onClick={handleSubmit} variant="primary" style={{marginTop: '15px', height: '40px'}} type="submit">
//           Submit
//         </Button>
//         </Form.Group>       
//       </Form>
//     { (keyword  && images &&  images.length > 0 ) &&
//       ( keyword  && images.length > 0 ) ?      
//     <>
//      {
//      (images && images.length > 0 && images !== null && images != '') &&
//         <Row lg={5} style={{margin : '15px'}}>
//       {
//       images.map((img,i) => {
//         return(
//             <Col>
//               <Card id={i} className={`${active == i && 'selected'}`} onClick={() => setActive(i)}>
//                 <Card.Img variant="top" src={img.url}/>
//               </Card>
//             </Col>
//         )
//       })
//     }
//       </Row> 
//     }
//     {
//       keyword && 
//       <Form onSubmit={handleDomain} style={{marginBottom: '15px', justifyContent: 'center'}}>
//     {
//       keyword &&
//       <div style={{display: 'flex', justifyContent: 'center', width: 'auto' }}> 
//       { 
//       keyword.map((word) => {
//         return (
//             <Form.Check
//             type="radio"
//             id={word}
//             label={word}
//             name="radioword"
//             value={word}
//             onChange={(e) => setRadioWord(e.target.value)}
//             />
//           )
//         })
//         }
//         </div>
//      }
//       <div htmlFor="keyword" style={{margin: '15px', display: 'flex', justifyContent: 'center'}}>Or</div>

//       {/* <Row lg={10}> */}
//         {/* <Form.Label htmlFor="keyword" style={{display: 'flex', justifyContent: 'center'}}>Please choose any One for which you want to create domain</Form.Label> */}
//       {/* </Row> */}
      
//       {/* <Row lg={10}>
//       <Col lg={6}> */}
//       {/* <Form.Group style={{display: 'flex', justifyContent: 'center', margin: '15px', whiteSpace: 'noWrap' }}>
//       <Form.Check
//             inline
//             label="By Keyword"
//             name="word"
//             type="radio"
//             value="word"
//             onClick={(e) => {setDomainWord(e.target.value); setTextWord('')}}
//             selected={domainWord == 'word'  ? true : false}
//             />
            
//           <Form.Label htmlFor="keyword" style={{marginRight: '15px'}}>Or</Form.Label>
//           <Form.Check
//           label="By Text"
//           name="word"
//           type="radio"
//           value="text"
//           onClick={(e) => {setDomainWord(e.target.value); setRadioWord('')}}
//           />      
//           <Form.Check 
//             type="radio"
//             name="word"
//             id={`default-radio`}
//             label={`default radio`}
//             value="text"
//             onClick={(e) => {setDomainWord(e.target.value); setRadioWord('')}}
//           />
//       </Form.Group> */}
//           {/* </Col> */}
//       {/* </Row> */}
//       <div style={{display: 'flex', justifyContent: 'center'}}>
//       {/* <Row >   */}
//       {/* <Form.Group className="mb-3" style={{display: 'flex', marginRight: '10px'}} >  
//        { 
//       keyword.map((word,i) => {
//         return (
//           <Form.Check
//             label={word}
//             name="radioword"
//             type="radio"
//             value={word}
//             disabled={domainWord == 'text' ? true : false}
//             onChange={(e) => setRadioWord(e.target.value)}
//             />
//             )
//           })
//         } */}
//         {/* <Form.Label htmlFor="keyword">Password</Form.Label> */}
//         {/* </Form.Group> */}
//         {/* </Row> */}
//         {/* <Row > */}
//         <Form.Group className="mb-3" lg="6" style={{display: 'flex', margin: '10px'}}>
//         <Form.Control
//           type="text"
//           name="textword"
//           id="textword"
//           placeholder="Please Enter the word for domain name"
//           onKeyUp={(e) => checkTextWord(e)}
//           style={{width: '400px'}}
//           />
//         </Form.Group>
//         </div>
//           {/* </Row> */}
//           {/* <Row> */}
//           <div style={{display: 'flex', justifyContent: 'center'}}>
//         <Button onClick={handleDomain} variant="primary" style={{marginTop: '15px', height: '40px', display: 'flex', justifyContent: 'center'}}>
//           Submit
//         </Button>
//           </div>
//             {/* </Row>   */}
//         </Form>
//      }
//     </> : 
        
//         (loader !== false) && 
//             <>
//               <div style={{display: 'flex', justifyContent: 'center'}}>Great! We are finding the best logos for your website</div>
//             <div style={{display: 'flex', justifyContent: 'center'}}>
//               <Spinner animation="border" />
//             </div>
//             </>  
//     }
//     {
//       (domains && domains.length > 0) && 
//       (domains && domains.length > 0) ?
//       <>
//       <Table striped bordered hover style={{marginLeft : '115px', width: '80%'}}>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Domain Name</th>
//           <th>Availablity</th>
//           <th>Price</th>
//           <th>Select</th>
//         </tr>
//       </thead>
//       <tbody>
//         {
//         domains.map((domain,i) => {
//           return (
//             <tr>
//             <td><Form.Check
//               name="radiword"
//               type="radio"
//               value={domain.domain}
//               />
//             </td>
//             <td>{domain.domain}</td>
//             <td>{domain.available == true ? 'Yes' : 'No'}</td>
//             <td>${domain.price/1000000}</td>
//             <td><Button variant="primary" style={{height: '40px', display: 'flex', justifyContent: 'center'}}>
//                 Select
//             </Button></td>
//             </tr>
//           )
//         })
//         }
//       </tbody>
//           </Table>
//           </> :
          
//         (domainLoader !== false) && 
//         <>
//           <div style={{display: 'flex', justifyContent: 'center'}}>Great! We are finding the best domain name for your website</div>
//         <div style={{display: 'flex', justifyContent: 'center'}}>
//           <Spinner animation="border" />
//         </div>
//         </>  
//     } 
    
//     {/* <GoogleLogin
//       clientId={"474219718041-s78lnljsije24b19fk8oafe9jvtg8s7m.apps.googleusercontent.com"}
//       buttonText="Log in with Google"
//       onSuccess={handleLogin}
//       onFailure={handleError}
//       cookiePolicy={'single_host_origin'}
//       prompt={'select_account'}
//     />
//     <GoogleLogout
//       clientId="474219718041-s78lnljsije24b19fk8oafe9jvtg8s7m.apps.googleusercontent.com"
//       buttonText="Logout"
//       onLogoutSuccess={logout}
//       isSignedIn={false}
//     /> */}
//     </div>
//   );
}

export default App;
