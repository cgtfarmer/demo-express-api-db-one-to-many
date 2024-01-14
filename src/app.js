const express = require('express');
const userRouter = require('./router/user-router');
const stateRouter = require('./router/state-router');

var app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/states', stateRouter);

app.get('/health', async function(request, response) {
  response.json({ status: 'healthy' });
})

app.listen(3000, function() {
  console.log('App listening on port 3000');
})

module.exports = app;
