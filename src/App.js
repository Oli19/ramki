import React from 'react'
import ToDo from './ToDo'

const texty = [
  {
    id:0,
    text:"wqe"
  },
  {
    id:1,
    text:"wse"
  },
  {
    id:2,
    text:"sae"
  },
  {
    id:3,
    text:"wad"
  },
]



function App() {
  const owca = texty.map( el => <ToDo key={el.id} text={el.text} /> )
  return (
    <div className="App">
      {owca}
    </div>

  )
}

export default  App
