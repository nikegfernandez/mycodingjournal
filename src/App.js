import React,{useState, useEffect} from 'react'
import { View } from './components/View';
import { View2 } from './components/View2';


// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}
const getDatafromLS2=()=>{
  const data = localStorage.getItem('books2');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  // main array of objects state || books state || books array of objects
  const [books, setbooks]=useState(getDatafromLS());
  const [books2, setbooks2]=useState(getDatafromLS2());

  // input field states
  const [totd, setTotd]=useState('');
  const [ifft, setIfft]=useState('');
  const [date, setDate]=useState('');
  const [task, setTask]=useState('');
  const [ifft2, setIfft2]=useState('');
  const [date2, setDate2]=useState('');

  // form submit event
  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let book={
      totd,
      ifft,
      date
    }
    setbooks([...books,book]);
    setTotd('');
    setIfft('');
    setDate('');
  }
  const handleAddBookSubmit2=(e)=>{
    e.preventDefault();
    // creating an object
    let book2={
      task,
      date2,
      ifft2
    }
    setbooks2([...books2,book2]);
    setTask('');
    setIfft2('');
    setDate2('');
  }

  // delete book from LS

  
  const deleteBook=(ifft)=>{
    const filteredBooks=books.filter((element,index)=>{
      return element.ifft !== ifft
    })
    setbooks(filteredBooks)
  }

  const deleteBook2=(ifft2)=>{
    const filteredBooks2=books2.filter((element,index)=>{
      return element.ifft2 !== ifft2
    })
    
    setbooks2(filteredBooks2);
    
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books));
  },[books])
  useEffect(()=>{
    localStorage.setItem('books2',JSON.stringify(books2));
  },[books2])

  return (
    <div className='container'>
    <div className='wrapper'>
      <h1>Thoughts for the day</h1>
      {/* <p>Add and view your thoughts using local storage</p> */}
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>
            <label>Date</label>
            <input type="date" className='form-control' required
            onChange={(e)=>setDate(e.target.value)} value={date}></input>
            <br></br>
            <label>Thoughts of the day</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setTotd(e.target.value)} value={totd}></input>
            <br></br>
            <label></label>
            <input type="text" className='form-control' required
            onChange={(e)=>setIfft(e.target.value)} value={ifft} placeholder='Input your thoughts'></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>

          <div className='view-container'>
          {books.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Thoughts of the day</th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <View books={books} deleteBook={deleteBook}/>
                </tbody>
              </table>
            </div>
            
          </>}
          
          {books.length < 1 && <div>No thoughts are added yet</div>}
        </div>
        <button className='btn btn-danger btn-md'
            onClick={()=>setbooks([])}>Remove All</button>
        </div>

        

      </div>
    </div>

    <div className='wrapper'>
      <h1>Task for the day</h1>
      {/* <p>Add and view your task using local storage</p> */}
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit2}>
            <label>Date</label>
            <input type="date" className='form-control' required
            onChange={(e)=>setDate2(e.target.value)} value={date2}></input>
            <br></br>
            <label>Task</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setTask(e.target.value)} value={task}></input>
            <br></br>
            <label></label>
            <input type="text" className='form-control' required
            onChange={(e)=>setIfft2(e.target.value)} value={ifft2} placeholder='Input task'></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>

          <div className='view-container'>
          {books2.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Task of the day</th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <View2 books2={books2} deleteBook2={deleteBook2}/>
                </tbody>
              </table>
            </div>
            
          </>}
          
          {books2.length < 1 && <div>No task are added yet</div>}
        </div>
        <button className='btn btn-danger btn-md'
            onClick={()=>setbooks2([])}>Remove All</button>
        </div>

        

      </div>
    </div>

    </div>

    
  )
}

export default App
