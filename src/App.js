import React, {useState} from 'react';
import './App.css';
import data from './data.json'
import jeremy from './image-jeremy.png'

console.log(data);

function Bro({updateTemplate, screenon})
{
  const myFun = (status) => {
    if(screenon !== status)
    {
      return {
        color: "hsl(236, 100%, 87%)"
      }
    }
    else
    {
      return {
        color: "white"
      }
    }
  }
  return (
    <div style={{backgroundColor: "hsl(235, 46%, 20%)"}} className='bro-template'>
      <div style={{backgroundColor: "hsl(246, 80%, 60%)"}} className='bro-info'>
        <div className='jerry-img'><img src={jeremy}></img></div>
        <div className='jerry-info'>
          <p className='report-for'>Report for</p>
          <p className='name'>Jeremy Robson</p>
        </div>
      </div>
      <div>
        <ul className='calender-info'>
          <li style={myFun('daily')} onClick={() => updateTemplate('daily')}>Daily</li>
          <li style={myFun('weekly')} onClick={() => updateTemplate('weekly')}>Weekly</li>
          <li style={myFun('monthly')} onClick={() => updateTemplate('monthly')}>Monthly</li>
        </ul>
      </div>
    </div>
  )
}

function Template_Info({todo, current, previous, color, svgData})
{
  return (
  <div style={{backgroundColor: color}} className='template-info'>
      <div className='mysvg'>
        <svg xmlns={svgData.xmlns} width={svgData.width} height={svgData.height}>
          <path d={svgData.pathd} fill={svgData.pathfill} fillRule={svgData.fillrule}></path>
        </svg>
      </div>
      <div style={{backgroundColor: "hsl(235, 46%, 20%)"}} className='info-in-template'>
        <div className='header'>
          <p className='todo'>{todo}</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="5"><path xmlns="http://www.w3.org/2000/svg" d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
        </div>
        <div className='current'>{current}hrs</div>
        <div className='previous'>Last Week - {previous}hrs</div>
      </div>
    </div>
  )
}

function App() {
  const [screenon, setScreenon] = useState('daily');
  const updateTemplate = (newScreenon) => {
    setScreenon(newScreenon);
  }
  return (
    <div style={{backgroundColor: "hsl(226, 43%, 10%)"}} className='main-window'>
      <Bro updateTemplate={updateTemplate} screenon={screenon}/>
      <div className='templates-collection'>
      {data.map((item) => (
          <Template_Info
            todo = {item.title}
            current = {item.timeframes[screenon].current}
            previous = {item.timeframes[screenon].previous}
            color={item.color}
            svgData={
              {
                xmlns: item.xmlns,
                width: item.width,
                height: item.height,
                pathd: item.pathd,
                pathfill: item.pathfill,
                fillrule: item.fillrule
              }
            }
          />
        ))}
      </div>
    </div>
  );
}

export default App;
