const express = require('express');
// const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/events', async (req, res) => {
  const { type, data } = req.body;

  // if (type === 'CommentCreated') {
    if( type === 'AnswerCreated'){
    const status = data.content.includes('orange') ? 'rejected' : 'approved';

    await axios.post('http://localhost:4005/events', {
      type: 'AnswerModerated',
      data: {
        id: data.id,
        // postId: data.postId,
        quesId: data.quesId,
        status,
        content: data.content
      }
    });
  }

  res.send({});
});

app.listen(4003, () => {
  console.log('Listening on 4003');
});
