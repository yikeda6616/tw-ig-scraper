import axios from 'axios';
import cheerio from 'cheerio';

export async function getHTML(url) {
  const { data: html } = await axios.get(url);
  return html;
}

export async function getTwitterFollowers(html) {
  // load up cheerio
  const $ = cheerio.load(html);
  const span = $('[data-nav="followers"] .ProfileNav-value');
  return span.data('count');
}

export async function getInstagramFollowers(html) {
  // load up cheerio
  const $ = cheerio.load(html);
  const dataInString = $('script[type="application/ld+json"]').html();
  const pageObject = JSON.parse(dataInString);
  return parseInt(
    pageObject.mainEntityofPage.interactionStatistic.userInteractionCount
  );
}

export async function getInstagramCount() {
  const html = await getHTML('https://instagram.com/wesbos');
  const igCount = await getInstagramFollowers(html);
  return igCount;
}

export async function getTwitterCount() {
  const html = await getHTML('https://twitter.com/wesbos');
  const twCount = await getTwitterFollowers(html);
  return twCount;
}
