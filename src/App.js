import React, { Component } from 'react';

class App extends Component {
  state = { 
      noticias: []
   }


  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=aeed65fd3ce9447cb791939989029810`

    const res = await fetch(url);
    const noticias = await res.json();

    console.log(noticias.articles);

    this.setState({
      noticias: noticias.articles
    })

  }

  render() { 
    return ( <h1>Noticias</h1> );
  }
}
 
export default App;
