
import { Bar, BarChart,  Line, LineChart, Tooltip, XAxis, YAxis ,CartesianGrid, Area, AreaChart, ComposedChart, Scatter, PieChart, Pie} from 'recharts';
import './App.css'
const students = [
  { id: 101, name: "Samiul Islam", math: 85, physics: 78, chemistry: 92 },
  { id: 102, name: "Ayesha Akter", math: 90, physics: 88, chemistry: 84 },
  { id: 103, name: "Rakib Hossain", math: 76, physics: 69, chemistry: 80 },
  { id: 104, name: "Nusrat Jahan", math: 95, physics: 91, chemistry: 89 },
  { id: 105, name: "Fahim Rahman", math: 66, physics: 72, chemistry: 60 },
  { id: 106, name: "Shorna Sultana", math: 88, physics: 85, chemistry: 90 },
  { id: 107, name: "Hasibul Hasan", math: 79, physics: 75, chemistry: 82 },
];
const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];


function App() {


  return (
    <>
    <div className='w-7/12 mx-auto'>
    {/* line chart */}
      <div className='mb-10'>
        <LineChart width={900} height={500} data={students}>
          <YAxis dataKey='id'/>
          <XAxis dataKey='name'/>
          <Tooltip/>
          <CanvasGradient stroke="#ccc" strokeDasharray="5 5" />
           <Line dataKey='math' stroke='red'></Line>
         
        
        </LineChart>
      </div>
      {/* bar chart  */}
      <div className='mb-10'>
        <BarChart width={900} height={500} data={students} >
        <YAxis dataKey='id'/>
          <XAxis dataKey='name'/>
          <Tooltip wrapperStyle={{width:100, backgroundColor:"red"}} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey='math' label={{ position: 'top' }} fill='red' barSize={30}/>
        </BarChart>
      </div>
      {/* Area Chart  */}
      <div className='mb-10'>
      <AreaChart width={900} height={500} data={students} >
        <YAxis dataKey='id'/>
          <XAxis dataKey='name'/>
          <Tooltip wrapperStyle={{width:100, backgroundColor:"blue"}} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        
          <Area dataKey='math' label={{ position: 'top' }} fill='green' barSize={30}/>
          <Area dataKey='physics' label={{ position: 'top' }} fill='red' barSize={30}/>
          <Area dataKey='chemistry' label={{ position: 'top' }} fill='pink' barSize={30}  stroke="#8884d8"/>
        </AreaChart>
      </div>
      {/* composedChart  */}
      <ComposedChart width={900} height={500} data={students} >
      <YAxis dataKey='id'/>
          <XAxis dataKey='name'/>
          <Tooltip wrapperStyle={{width:100, backgroundColor:"blue"}} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Area dataKey='math'  fill="#8884d8" barSize={30} />
          <Bar dataKey='math'  fill="#413ea0" barSize={30} />
          <Line dataKey='math'  fill='red'  />
          <Scatter dataKey='id' fill="red"/>
         
         

      </ComposedChart>
      {/* pie Chart  */}
      <div>
        <PieChart width={900} height={500} >
          <Pie data={data01} dataKey='value' cx='50%' cy='50%' outerRadius={60} fill='#8884d8' label/>
          <Pie data={data02} dataKey='value' cx='50%' cy='50%' outerRadius={90} innerRadius={70} fill='#82ca9d' label/>
        </PieChart>
      </div>
      </div>
    </>
  )
}

export default App
