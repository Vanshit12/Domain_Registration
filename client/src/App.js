import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import {gapi} from 'gapi-script';
import {Card, Col, Row, Table} from 'react-bootstrap';

function App() {

  var form
  var chatContainer
  let loadInterval  
  const [images, setImages] = useState([]);
  const [domains, setDomains] = useState('');
  useEffect(() => {
    var Id = "474219718041-s78lnljsije24b19fk8oafe9jvtg8s7m.apps.googleusercontent.com"

    gapi.load('client:auth2',()=> {

      gapi.auth2.init({clientId: Id})
    })

    form = document.querySelector('form')
    chatContainer = document.querySelector('#chat_container')
    
    form.addEventListener('submit', handleSubmit)
    // form.addEventListener('keyup', (e) => {
    //   e.preventDefault();
    //   if (e.keyCode === 13) {
    //       handleSubmit()
    //   }
    // })

    },[]);

  const bot = './assets/bot.svg'
  const user = './assets/user.svg'

  // function loader(element) {
  //   element.textContent = ''

  //   loadInterval = setInterval(() => {
  //       // Update the text content of the loading indicator
  //       element.textContent += '.';

  //       // If the loading indicator has reached three dots, reset it
  //       if (element.textContent === '....') {
  //           element.textContent = '';
  //       }
  //   }, 300);
  // }

//   function typeText(element, text) {
//     let index = 0

//     let interval = setInterval(() => {
//         if (index < text.length) {
//             element.innerHTML += text.charAt(index)
//             index++
//         } else {
//             clearInterval(interval)
//         }
//     }, 20)
// }
// function generateUniqueId() {
//   const timestamp = Date.now();
//   const randomNumber = Math.random();
//   const hexadecimalString = randomNumber.toString(16);

//   return `id-${timestamp}-${hexadecimalString}`;
// }
function chatStripe(isAi, value) {
  return (
      `
      <div class="wrapper ai">
          <div class="chat">
              <div class="message">Your Business Keyword is like "${value}".</div>
          </div>
      </div>
  `
  )
}

function showLogo(value) {
  return (
      `
      <div class="wrappe a">
          <div class="cha">
              <img src="${value}" />
          </div>
      </div>
  `
  )
}
const handleSubmit = async (e) => {
  e.preventDefault();
  const data = new FormData(form)
  // user's chatstripe
  // chatContainer.innerHTML += chatStripe(false, data.get('prompt'))

  // to clear the textarea input 
  form.reset()


  // bot's chatstripe
  // const uniqueId = generateUniqueId()
  // chatContainer.innerHTML += chatStripe(true, " ", uniqueId)

  // to focus scroll to the bottom 
  // chatContainer.scrollTop = chatContainer.scrollHeight;

  // specific message div 
  // const messageDiv = document.getElementById(uniqueId)

  // messageDiv.innerHTML = "..."
  // loader(messageDiv)

  // const response = await fetch('http://localhost:5000/', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //         prompt: data.get('prompt')
  //     })
  // })

  // axios.post('http://localhost:5000/',JSON.stringify({
  //             prompt: 'Extract keywords from this text:' + data.get('prompt')
  //         }),
  //        {
  //         headers: {
  //             'Content-Type': `application/json`,
  //         }}
  //     ).then( (res) => {
  //       chatContainer.innerHTML = chatStripe(false, res.data.keyword)
  //       console.log(res)
  //     }).then((res) =>{
  //         axios.post('http://localhost:5000/logo', JSON.stringify({'logo': res.data.keyword}),

  //         )
  //         .then((res) => {
  //           chatContainer.innerHTML += showLogo(res.data.images)
  //           console.log(res.data)
  //       })
  //     })

  var response
  axios.post('http://localhost:5000/',JSON.stringify({
              prompt: 'Extract keywords from this text:\n\n' + data.get('prompt')
          }),
         {
          headers: {
              'Content-Type': `application/json`,
          }}
      ).then( (res) => {
        const string = res.data.keyword.replace(/[^a-zA-Z]/g, ' ');
        const newString = string.split(' ');
        const filter = newString.filter((s) => s != "")
        console.log(filter);
        // console.log(string, 'sttttttttttttt')
        chatContainer.innerHTML = chatStripe(false, res.data.keyword)
        console.log("respose from /keywords", res)
        response = res.data.keyword;
      }).then((res) =>{
          axios.post('http://localhost:5000/logo', JSON.stringify({logo: response}),
          {
           headers: {
               'Content-Type': `application/json`,
           }}
          )
          
          .then((res) => {
            console.log("respose from logo", res)
            setImages(res.data.image.data);
            // chatContainer.innerHTML += showLogo(res.data.image.data[0].url)
            console.log(res.data)
        })
      }).then((res) =>{
        axios.post('http://localhost:5000/domains', JSON.stringify({logo: 'response'}),
        {
         headers: {
             'Content-Type': `application/json`,
         },
        }).then((res) => {
          setDomains(res.data)
          console.log(res.data)
          // chatContainer.innerHTML += showLogo(res.data.image.data[0].url)
        })
    })


  // clearInterval(loadInterval)
  // messageDiv.innerHTML = " "

  // if (response.ok) {
  //     const data = await response.json();
  //     const parsedData = data.bot.trim() // trims any trailing spaces/'\n' 

  //     typeText(messageDiv, parsedData)
  // } else {
  //     const err = await response.text()

  //     messageDiv.innerHTML = "Something went wrong"
  //     alert(err)
  // }
}

const validate = (e) => {
  console.log(e.target.value);
  var description = e.target.value;
  var words = description.split(" ");
    if (words.length> 10) {
      alert('Please Describe your business in less than 10 words');
    }
}

const handleLogin = async (googleData) => {
  console.log(googleData);
  const res = await fetch("http://localhost:5000/auth/google", {
    method: "POST",
    body: JSON.stringify({
      token: googleData.tokenId
    }),
  headers: {
    "Content-Type": "application/json"
    }
  })
  const data = await res.json()
}

const handleError = async (err) => {
  console.log(err);
}

const logout = () => {
  console.log('logout successfull');
}
  return (
    <div className="App" id="app">
    <form>
      <input type="text" id="text" name="prompt" onChange={(e) => validate(e)} placeholder="Please Describe your business in less than 10 words"></input>
      <button type="submit"><img src="./assets/send.svg" alt="send"></img></button>
    </form>
    <div id="chat_container"></div>
    { console.log(images)}
    { (images && images.length > 0) &&
      images.map((img,i) => {
        return(
          <Row lg={5} className="g-4">
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img.url}/>
              </Card>
            </Col>
          </Row>
        )
    })
    }
    {
      (domains && domains.length > 0) && 
        
      <Table striped bordered hover size="lg">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Availablity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {
        domains.map((domain,i) => {
          return (
            <tr>
            <td>{i+1}</td>
            <td>{domain.domain}</td>
            <td>{domain.domainId}</td>
            <td>{domain.status}</td>
            </tr>
          )
        })
        }
      </tbody>
          </Table>
    }
    {/* <GoogleLogin
      clientId={"474219718041-s78lnljsije24b19fk8oafe9jvtg8s7m.apps.googleusercontent.com"}
      buttonText="Log in with Google"
      onSuccess={handleLogin}
      onFailure={handleError}
      cookiePolicy={'single_host_origin'}
      prompt={'select_account'}
    />
    <GoogleLogout
      clientId="474219718041-s78lnljsije24b19fk8oafe9jvtg8s7m.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
      isSignedIn={false}
    /> */}
    </div>
  );
}

export default App;
