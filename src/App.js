import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';


class App extends Component {
  state = { 
      noticias: []
   }

   componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async () => {
   const url = `https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=aeed65fd3ce9447cb791939989029810`

   const res = await fetch(url);
   const noticias = await res.json();

   console.log(noticias.articles);

   this.setState({
     noticias: noticias.articles
   })
  }

  render() { 
    return ( 
      <Fragment>
        <Header 
          titulo = 'Noticias React API'
        />
        <div className="container white contenedor-noticias">
            <ListaNoticias 
              noticias = { this.state.noticias }
            />
        </div>
      </Fragment>
    );
  }
}

export default App;
