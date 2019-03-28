import {
  getHTML,
  getTwitterFollowers,
  getInstagramFollowers
} from './lib/scraper';

console.log(getHTML());

async function go() {
  // const igPromise = getHTML('https://instagram.com/instagram');
  const twPromise = getHTML('https://twitter.com/Twitter');
  const twHTML = await twPromise; // temporary
  // const [igHTML, twHTML] = await Promise.all([igPromise, twPromise]);
  // const igCount = await getInstagramFollowers(igHTML);
  const twCount = await getTwitterFollowers(twHTML);
  console.log(
    `You have ${twCount} twitter followers `
    // and ${igCount} instagram followers`
  );
}

go();
