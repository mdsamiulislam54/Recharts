
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from 'recharts';
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

function App() {


  return (
    <>
    {/* line chart */}
      <div>
        <LineChart width={900} height={500} data={students}>
          <YAxis dataKey='id'/>
          <XAxis dataKey='name'/>
           <Line dataKey='math' stroke='red'></Line>
         
        
        </LineChart>
      </div>
      {/* bar chart  */}
      <div>
        <BarChart width={900} height={500} data={students} >
        <YAxis dataKey='id'/>
          <XAxis dataKey='name'/>
          <Bar dataKey='math' label={{ position: 'top' }} fill='red'/>
        </BarChart>
      </div>
    </>
  )
}

export default App
