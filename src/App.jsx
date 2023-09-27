import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import ToDoItem from './ToDoItem'
import todosData from './toDoData'

function App() {
  const [todos, setTodos] = useState(todosData)
  return (
    <>
      <Header />
      <div className='todo-list'>
          {todos.map(item => <ToDoItem key={item.id} item={item}/>)}
      </div>
      <Footer />
    </>
  )
}

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       todos: todosData
//     }

//   }
//   render() {

//     const toDoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item}/>)
    
//     return (
//     // <>
//     //   <Header />
//     //   <div className='todo-list'>
//     //       {toDoItems}
//     //   </div>
//     //   <Footer />
//     // </>
//     )
//   }
  
// }

export default App
