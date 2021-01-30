const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));
app.use(express.json());

// const ports = {
//   'item': 1000,
//   'ultbought': 2000,
//   'alsoliked': 2000,
//   'reviews': 3000,
//   'qna': 4000
// }

app.get('/api/products/:id/item', (req, res) => {
  const itemNum = parseInt(req.params.id, 10);
  axios.get(`http://34.210.9.47/api/products/${itemNum}/item`)
    .then((response) => res.send(response.data))
    .catch((err) => {
      console.log(err);
      res.send(500);
    });
});

app.get('/api/products/:id/ultbought', (req, res) => {
  const itemNum = parseInt(req.params.id, 10);
  axios.get(`http://3.23.104.186/api/products/${itemNum}/ultbought`)
    .then((response) => res.send(response.data))
    .catch((err) => {
      console.log(err);
      res.send(500);
    });
});

app.get('/api/products/:id/alsoliked', (req, res) => {
  const itemNum = parseInt(req.params.id, 10);
  axios.get(`http://3.23.104.186/api/products/${itemNum}/alsoliked`)
    .then((response) => res.send(response.data))
    .catch((err) => {
      console.log(err);
      res.send(500);
    });
});

app.get('/api/products/:id/reviews', (req, res) => {
  const itemNum = parseInt(req.params.id, 10);
  axios.get(`http://18.220.158.113/api/products/${itemNum}/reviews`)
    .then((response) => res.send(response.data))
    .catch((err) => {
      console.log(err);
      res.send(500);
    });
});

app.get('/api/products/:id/qna', (req, res) => {
  const itemNum = parseInt(req.params.id, 10);
  axios.get(`http://13.59.96.126/api/products/${itemNum}/qna`)
    .then((response) => res.send(response.data))
    .catch((err) => {
      console.log(err);
      res.send(500);
    });
});

app.post('/api/products/reviews', (req, res) => {
  axios.post(`http://18.220.158.113/api/products/reviews`, req.body)
    .then((response) => res.send(response.data))
    .catch((err) => {
      console.log(err);
      res.send(500);
    });
});

app.post('/api/products/:id/qna', (req, res) => {
  const { id } = req.params;
  axios.post(`http://13.59.96.126/api/products/${id}/qna`, req.body)
    .then((response) => res.send(response.data))
    .catch((err) => {
      console.log(err);
      res.send(500);
    });
});

app.post('/api/products/:id/qna/answer', (req, res) => {
  const { id } = req.params;
  axios.post(`http://13.59.96.126/api/products/${id}/qna/answer`, req.body)
    .then((response) => res.send(response.data))
    .catch((err) => {
      console.log(err);
      res.send(500);
    });
});

app.patch('/api/products/:id/reviews/:helpful', (req, res) => {
  const { id, helpful } = req.params;
  axios.patch(`http://18.220.158.113/api/products/${id}/reviews/${helpful}`, id)
    .then((response) => res.send(response.data))
    .catch((err) => {
      console.log(err);
      res.send(500);
    });
});

app.patch('/api/products/:id/qna/answer/:helpful', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const helpful = req.params.helpful
  axios.patch(`http://13.59.96.126/api/products/${id}/qna/answer/${helpful}`, req.body)
    .then(response => res.send(response.data))
    .catch((err) => {
      console.log(err);
      res.send(500);
    });
});

module.exports = app;