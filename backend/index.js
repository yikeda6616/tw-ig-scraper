import express from 'express';
import { getInstagramCount, getTwitterCount } from './lib/scraper';
import './lib/cron';
import db from './lib/db';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/scrape', async (req, res, next) => {
  console.log('Scraping!');

  const [igCount, twCount] = await Promise.all([
    getInstagramCount(),
    getTwitterCount()
  ]);

  res.json({ igCount, twCount });
});

app.get('/data', async (req, res, next) => {
  // get the scrape data
  const data = db.value();
  // respond with json
  res.json(data);
});

app.listen(3001, () => {
  console.log('App Running on PORT http://localhost:3001');
});
