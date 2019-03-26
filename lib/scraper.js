import axios from 'axios';
import cheerio from 'cheerio';

async function getHTML(url) {
  const { data: html } = await axios.get('https://twitter.com/rushtheband');
  return html;
}

async function getTwitterFollowers(html) {
  // load up cheerio
  const $ = cheerio.load(html);
  const span = $('[data-nav="followers"] .ProfileNav-value');
  return span.data('count');
}

export { getHTML };
export { getTwitterFollowers };
