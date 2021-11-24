import { Paper } from '@mui/material'
import CandleStick from './children/CandleStick/CandleStick'
import {useEffect, useRef, useState} from "react";

const Chart = (props) => {
  const chartParent = useRef(null);
  const [chartWidth, setChartWidth] = useState(0)
  const [renderChart, setRenderChart] = useState(true)

  useEffect(()=>{
    const handleResize = () => {
      setRenderChart(false)
      setChartWidth(chartParent.current.offsetWidth);
    }
    window.addEventListener('resize', handleResize)
    return ()=> {window.removeEventListener('resize', handleResize); setRenderChart(true)}
  }, [renderChart])


  const handleRef = (e) => {
    if (e){
      chartParent.current = e
      setChartWidth(e.offsetWidth)
    }
  }


  return(
    <Paper sx={{ backgroundColor: `#4c63a2`, borderRadius: 0 }}
           elevation={0} ref={e => handleRef(e)}>
      {
        renderChart && <CandleStick width={chartWidth}/>
      }
    </Paper>
  );
}

export default Chart;