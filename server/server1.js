import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { Configuration, OpenAIApi } from 'openai';
import { OAuth2Client } from 'google-auth-library';
import axios from 'axios';

dotenv.config()
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
var client = new OAuth2Client("705312850932-flpf5bhoj8gaads1u6squftulqp43m68.apps.googleusercontent.com")

const openai = new OpenAIApi(configuration);

const app = express()
app.use(cors())
app.use(express.json())

app.use('/images', express.static('images'))

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello from CodeX!'
  })
})

app.post('/', async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const response = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: `${prompt}`,
    //   temperature: 1, // Higher values means the model will take more risks.
    //   max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
    //   top_p: 1, // alternative to sampling with temperature, called nucleus sampling
    //   frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
    //   presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
    // });

      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0.5,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.8,
      presence_penalty: 0.0,
    });

    res.status(200).send({
      keyword: response.data.choices[0].text
    });

      // res.status(200).send({
      //   keyword: 'Baby Toys'
      // });

  } catch (error) {
    console.error(error)
    res.status(500).send(error || 'Something went wrong');
  }
})

app.post('/auth/google', async (req, res) => {
  const { token }  = req.body
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID
});
const { name, email, picture } = ticket.getPayload();
res.status(200).send({name: name, email: email, dp: picture});
})
app.post('/logo', async (req, res) => {
  try {
    const response = await openai.createImage({
      prompt: req.body.logo,
      n: 1,
      size: "256x256",
    });
      res.status(200).send({image: response.data})
    // const logo = req.body;
    // res.status(200).send({
    //   images: path.join("images" +"/baby_care.jpg")
    // })
  }
  catch (err) {
    res.status(500).send(err || 'Something went wrong');
  }
})

// app.post('/domains', async (req, res) => {
//     axios({
//       url: "https://api.ote-godaddy.com/v1/domains?statusGroups=INACTIVE&marker=baby",
//       method: "GET",
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'sso-key UzQxLikm_46KxDFnbjN7cQjmw6wocia:46L26ydpkwMaKZV6uVdDWe'
//       }
//     }).then(response => {
//         // res.status(200).json(response.data);
//         // var res = response.data;
//         var domainResponse = response.data;
//       }).then((res) =>{
//         domainResponse.map((domain) => {
//         axios.get('https://api.ote-godaddy.com/v1/domains/available?domain=facebookei.com&checkType=FULL&forTransfer=false',
//         {
//          headers: {
//              'Content-Type': `application/json`,
//              'Authorization': 'sso-key UzQxLikm_46KxDFnbjN7cQjmw6wocia:46L26ydpkwMaKZV6uVdDWe'
//          },
//         }).then((res) => {
//           console.log(res.data)
//         })

//         })
//     }).catch((err) => {
//         console.log(err)
//         res.status(500).json({ message: err });
//       });
// })

app.post('/domains', async (req, res) => {
  const { keyword }  = req.body
const response =  await  axios({
    url: `https://api.ote-godaddy.com/v1/domains?statusGroups=INACTIVE&&limit=20&marker=${keyword}`,
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'sso-key 3mM44UcgmcnFZ6_YSazq1Fdvnrmvc8bAX6Pzs:MvnzULubQPYE5TftGSgkxy'
    }
  })
  var sendResponse = [];
  var mapResponse = response.data;
  // console.log(mapResponse[0],'mapResponsemapResponsemapResponsemapResponse');
  // const realResponse =  mapResponse.map( async(resp) => {
  //    const r = await axios.get(`https://api.ote-godaddy.com/v1/domains/available?domain=${resp.domain}&checkType=FULL&forTransfer=false`,
  //     {
  //      headers: {
  //          'Content-Type': `application/json`,
  //          'Authorization': 'sso-key UzQxLikm_46KxDFnbjN7cQjmw6wocia:46L26ydpkwMaKZV6uVdDWe'
  //      },
  //     })
      // sendResponse = {...resp, ...r.data};
      // return {...resp, ...r.data};
  // })
  // const realResponse1 = await axios.get('https://api.ote-godaddy.com/v1/domains/available?domain=facebookei.com&checkType=FULL&forTransfer=false',
  //     {
  //      headers: {
  //          'Content-Type': `application/json`,
  //          'Authorization': 'sso-key UzQxLikm_46KxDFnbjN7cQjmw6wocia:46L26ydpkwMaKZV6uVdDWe'
  //      },
  //     })

      const promises = mapResponse.map(resp => axios.get(`https://api.ote-godaddy.com/v1/domains/available?domain=${resp.domain}&checkType=FULL&forTransfer=false`,
      {
             headers: {
                 'Content-Type': `application/json`,
                 'Authorization': 'sso-key 3mM44UcgmcnFZ6_YSazq1Fdvnrmvc8bAX6Pzs:MvnzULubQPYE5TftGSgkxy'
             },
            }
        ));

        Promise.all(promises)
        .then(function(values) {
            var mainData =[];
            // console.log(values[0].data,'valuesvaluesvaluesvaluesvalues');
            const data = values.map((v) => v.data)
            // console.log(data,'datadatadatadatadatadatadata')
            mainData = data;
            var sendData = mainData.filter((main) => main .available != false);
            res.status(200).json({data: sendData});
        })
        .catch(err => {
            console.error(err);
        }); 
      // console.log(realResponse, 'trdkogkrogkor')
      // const results = await realResponse;
      // console.log(results,'resultsresultsresultsresults')
      })


app.get('/domains', async (req, res) => {
    axios({
      url: "https://api.ote-godaddy.com/v1/domains?statusGroups=INACTIVE&limit=5&marker=baby",
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'sso-key 3mM44UcgmcnFZ6_QAXGWihisWtsH3ihrMm71v:2CGjnCYAESzpUcEfWgFcVQ'
      }
    })
      .then(response => {
        res.status(200).json(response.data);
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json({ message: err });
      });
    
    })
app.listen(5000, () => console.log('AI server started on http://localhost:5000'))
