import { getHTML, getTwitterFollowers } from './lib/scraper';

console.log(getHTML());

async function go() {
  const html = await getHTML('https://twitter.com/rushtheband');
  const twCount = await getTwitterFollowers(html);
  console.log(`You have ${twCount} followers`);
}

go();
