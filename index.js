import express from 'express';
import { getInstagramCount, getTwitterCount } from './lib/scraper';

const app = express();

app.get('/scrape', async (req, res, next) => {
  console.log('Scraping!');
  const [igCount, twCount] = await Promise.all([
    getInstagramCount(),
    getTwitterCount()
  ]);
  console.log(twCount, igCount);
  res.json({ igCount, twCount });
});

app.listen(3000, () => {
  console.log(`Example App Running on PORT 3000`);
});

// 1. Make an Express Server
// 2. Save data to db
// 3. Setup a cron job
