import React, { Component } from 'react'

export default class Todo extends Component {

    constructor()
    {
        super();
        this.state={
             tasks:[{
                id:1,
                txt:"First Task"
            },
            {
                id:2,
                txt:"Second Task"
        
            },
            {
                id:3,
                txt:"Third Task"
        
            }],
            currTask:''

        }
    }
     handleChange=(e)=>{
         let val=e.target.value;
         console.log(val);
         this.setState(
             {
                 currTask:val
             }
         )

    }
    onSubmit=()=>{
        if(this.state.currTask!='')
        {
            let nta=[...this.state.tasks,{
                id:this.state.tasks.length+1,
                txt:this.state.currTask
            }];
            this.setState(
                {
                    currTask:'',
                    tasks:nta
                }
            )
        }
    }

    onDelete=(id)=>{
        let nfa=this.state.tasks.filter((tobj)=>{
            return tobj.id!=id
        })
        this.setState({
            tasks:nfa
        })

    }
  render() {

   
    return (
        <div>
      <div className='input-container'>
          <input value={this.state.currTask} type='text' onChange={this.handleChange}></input>
          <button onClick={this.onSubmit}>Add</button>
      </div>

      <div className='class-list'>
          <ul>
              {
                  this.state.tasks.map((tobj)=>{
                      return(
                          <div>
                          <li key={tobj.txt}>
                         <h1>{tobj.txt}</h1>
                          <button onClick={()=>{this.onDelete(tobj.id)}}>Delete</button>
                          </li>
                          </div>
                      )
                  })
              }
          </ul>

      </div>
      </div>
    )
  }
}
