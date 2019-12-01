import React from 'react'
import Container from '../container'
import Footer from '../footer'
import Header from '../header'
import './style.scss'

export default () => {
  return (
    <div className="App">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}