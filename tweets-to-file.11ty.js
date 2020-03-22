// From https://youtu.be/X3SrZuH00GQ?t=1386
// tweets-to-file.11ty.js
// run with:
//   npx @11ty/eleventy --quiet
class TweetsToFile {
  data() {
    return {
      tweets: stubbedRequire('./tweets.js'),
      pagination: {
        data: 'tweets',
        size: 1,
        alias: 'tweet',
      },
      permalink: data => `/${data.tweet.id_str}/`,
    }
  }

  async render(data) {
    return `<!doctype html>
      <title>@zachleat's Tweet: ${data.tweet.full_text}</title>
      ${data.tweet.full_text}`
  }
}

module.exports = TweetsToFile

function stubbedRequire() {
  return [
    {
      id_str: '20',
      full_text: 'First tweet ever!',
    },
    {
      id_str: '666',
      full_text: 'Roses are red...',
    },
  ]
}
