// From https://youtu.be/X3SrZuH00GQ?t=1386
// tweets-to-file.11ty.js
// run with:
//   npx @11ty/eleventy --quiet
class TweetsToFile {
  data() {
    return {
      tweets: require('./tweets.js'),
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
