import './App.css';
import React,{useState} from "react";
function App() {
  const[value,setValue]=useState("");
  const[cur , setCur] = useState(0);
  return (
    <div className="App"  >
      <div className='container'>
        <div className='calculator'>
           <form action=''>
            <div className='nk'>
              <h2>NKasio</h2>
            </div>
            <div  className='display'>
            <input type='text' value={value}/>
            </div>
            <div>
              <input type='button' value='AC' className='ac' onClick={e=>{
                setValue("");
                setCur(0);
              }}/>
              <input type='button'className='bc' value='DE'onClick={e=>{
                if(cur==0)setValue(value.slice(0,-1));
              }}/>
              <input type='button' className='bc' value='%'onClick={e =>setValue(value+e.target.value)}/>
              <input type='button' className='bc'value='/'onClick={e =>setValue(value+e.target.value)}/>
            </div>
            <div>
              <input type='button' className='cc'value='7' onClick={e =>setValue(value+e.target.value)}/>
              <input type='button' className='cc'value='8'onClick={e =>setValue(value+e.target.value)}/>
              <input type='button' className='cc' value='9'onClick={e =>setValue(value+e.target.value)}/>
              <input type='button' className='bc' value='*'onClick={e =>setValue(value+e.target.value)}/>
            </div>
            <div>
              <input type='button' className='cc'value='4'onClick={e =>setValue(value+e.target.value)}/>
              <input type='button' className='cc'value='5'onClick={e =>setValue(value+e.target.value)}/>
              <input type='button' className='cc'value='6'onClick={e =>setValue(value+e.target.value)}/>
              <input type='button'  className='bc'value='+'onClick={e =>setValue(value+e.target.value)}/>
            </div>
            <div>
              <input type='button' className='cc'value='3'onClick={e =>setValue(value+e.target.value)}/>
              <input type='button'className='cc' value='2'onClick={e =>setValue(value+e.target.value)}x/>
              <input type='button'className='cc' value='1'onClick={e =>setValue(value+e.target.value)}/>
              <input type='button' className='bc'value='-'onClick={e =>setValue(value+e.target.value)}/>
            </div>
            <div>
            <input type='button' className='cc'value='0'onClick={e =>setValue(value+e.target.value)}/>
              <input type='button'className='cc' value='00'onClick={e =>setValue(value+e.target.value)}/>
              <input type='button'className='cc' value='.'onClick={e =>setValue(value+e.target.value)}/>
              <input type='button' className='bc'value='='  onClick={e=>{
                if(value!==""){
                  setValue(eval(value));
                  setCur(-1);
                }
              }}/>
             </div>

           </form>
        </div>
      </div>

    </div>
  );
}

export default App;
