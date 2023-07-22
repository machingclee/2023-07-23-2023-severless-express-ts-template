import express from 'express';

const app = express();

app.get('/articles', (req, res) => {
  res.send('Hello World!!');
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

export default app