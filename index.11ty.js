class TweetsToIndex {
  data() {
    return {
      tweets: require('./tweets.js'),
      pagination: {
        data: 'tweets',
        size: 10,
      },
      layout: 'the-layout',
    }
  }

  async render(data) {
    debugger // FIXME
    const result = `<h1>Tweets</h1>`
    return data.tweets.reduce((accum, curr) => {
      accum += `\n<div><a href="/${curr.id_str}/">${curr.full_text}</a></div>`
      return accum
    }, result)
  }
}

module.exports = TweetsToIndex
