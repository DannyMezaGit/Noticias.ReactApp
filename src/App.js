import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';


class App extends Component {
  state = { 
      noticias: []
   }

   componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general') => {
   const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=aeed65fd3ce9447cb791939989029810`

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
            <Formulario 
              consultarNoticias = { this.consultarNoticias }
            />
            <ListaNoticias 
              noticias = { this.state.noticias }
            />
        </div>
      </Fragment>
    );
  }
}

export default App;
