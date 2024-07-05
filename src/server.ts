import Bluebird from 'bluebird';
import { NODE_ENV, PORT } from '@helpers/env.js';
import express from 'express';
import init from './initialize/index.js'
// import bodyParser from 'body-parser';

Bluebird.config({ longStackTraces: true });

const app = express();
// app.use(bodyParser.json())
// app.use(express.json())
init(app)

app.get('/api/get/getUsers', (req,res)=> {
  res.send({
    user: {
      name: "mofed", 
      age: 26, 
      contact: "01140839985",
    }
  })
})

process.on('unhandledRejection', (err)=> {
  console.log(err);
})

const port = Number.parseInt(PORT, 10)
const server = app.listen(port, () => {
  console.log(` running ${NODE_ENV?.toUpperCase()} on port ${port}!`);
  process.send?.('ready');
});

process.on('SIGINT', async () => {
  console.log(`Killing app on port ${port}`);

  // await CRON_STATE.close();

  server.close(async () => {
    await Bluebird.delay(5000);
    console.log(`Killed app on port ${port} successfully. Bye!`);
    process.exit(0);
  });
});
