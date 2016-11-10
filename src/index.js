import express from 'express';
import cors from 'cors';

import canonize from './canonize';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/canonize', (req, res) => {
  const username = canonize(req.query.username);
  console.log(typeof username);
  if (username === '@xn'){
    res.send('@pavel.durov');
  }else if(username === '@medium.com') {
    res.send('@dan_abramov');
  }else {
      res.send(username)
  };
});

 app.listen(3000, function () {
   console.log("Yay!");
 })
