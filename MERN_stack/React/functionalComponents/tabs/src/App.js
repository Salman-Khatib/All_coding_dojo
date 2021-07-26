import './App.css';
import Tabs from './Components/Tabs';
import Content from './Components/Content';
import React,{useState} from 'react'

function App() {

  const [currentContent,setCurrentContent] = useState("")

  const tabs = [
    {label:'tab1',content:'this is tab1',id:0},
    {label:'tab2',content:'this is tab2',id:1},
    {label:'tab3',content:'this is tab3',id:2},
  ]


  const changeCurrentContent = (cont) => {
    setCurrentContent(cont)

  }

  return (
    <div className="App">
     <Tabs  tabs={tabs} changeCurrentContent={changeCurrentContent} />
     <Content changed={currentContent}/>
    </div>
  );
}
export default App;
