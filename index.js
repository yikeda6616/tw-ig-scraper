import express from 'express';
import { getInstagramCount, getTwitterCount } from './lib/scraper';
import db from './lib/db';

const app = express();

app.get('/scrape', async (req, res, next) => {
  console.log('Scraping!');

  const [igCount, twCount] = await Promise.all([
    getInstagramCount(),
    getTwitterCount()
  ]);

  console.log(twCount, igCount);

  db.get('twitter')
    .push({
      date: Date.now(),
      count: twCount
    })
    .write();
  db.get('instagram')
    .push({
      date: Date.now(),
      count: igCount
    })
    .write();
  res.json({ igCount, twCount });
});

app.listen(3000, () => {
  console.log('Example App Running on PORT 3000');
});

// 1. Make an Express Server
// 2. Save data to db
// 3. Setup a cron job
