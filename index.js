import express from 'express';
import { getInstagramCount, getTwitterCount } from './lib/scraper';
import './lib/cron';

const app = express();

app.get('/scrape', async (req, res, next) => {
  console.log('Scraping!');

  const [igCount, twCount] = await Promise.all([
    getInstagramCount(),
    getTwitterCount()
  ]);

  res.json({ igCount, twCount });
});

app.listen(3000, () => {
  console.log('App Running on PORT 3000');
});
