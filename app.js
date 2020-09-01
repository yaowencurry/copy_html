const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const http = require('http');

const url = 'https://www.jianshu.com/p/6583b7258e78';

request(url, (err, res) => {
  if (err) {
    console.log(err.code);
  } else {
    let $ = cheerio.load(res.body);
    const html = $('html').html();
    creatHtml(html);
  }
})

function creatHtml (html) {
  const typeHtml = `<!DOCTYPE html>${html}</html>`

  fs.writeFile('text.html', typeHtml, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file is saved');
  })
}
