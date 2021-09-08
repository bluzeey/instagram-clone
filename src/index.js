import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css'
function Booklist(){
  return(
    <section className="Booklist">
    <Book/>
   </section>);
}
const Author='Oswal Publications';
const title='ICSE CLASS Xth Sample Papers';
const img='https://m.media-amazon.com/images/I/71UIGuDTWKL._AC_SX360_SY240_QL70_.jpg';
const Book =(props) =>{
  return (
  <article className='book'>
    <img src={img} alt=''/>
    <h1>{title}</h1>
    <h4>{Author}</h4>
  </article>
  );
};


ReactDom.render(<Booklist/>,
  document.getElementById('root'));