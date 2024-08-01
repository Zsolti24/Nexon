import React, { useEffect, useState } from 'react';

import { PieChart, Pie, Tooltip, Cell } from 'recharts'; 

import { DataGrid } from '@mui/x-data-grid';

export default function DevPage() {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const spreadsheetId = '1pABahPAWuWWlwir4vABJ5oPXmmlgZfawpXx5m3_uOlc';
  const range = 'Sheet1!A1:G';
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&range=${range}`
        );
        const text = await response.text();
        const jsonData = JSON.parse(text.substr(47).slice(0, -2));
        const rows = jsonData.table.rows.map(row => row.c.map(cell => cell ? cell.v : ''));
        setData(rows);
      } catch (err) {
        setError('Error fetching data');
        console.error(err);
      }
    };
    
    fetchData();
  }, [spreadsheetId, range]);
  
  
  
  const columns = [
    { field: 'id', headerName: 'ID', type: 'number', width: 70 },
    { field: 'ip', headerName: 'Ip', width: 200 },
    { field: 'time', headerName: 'Time', width: 300 },
    { field: 'foundation1',headerName: 'Foundation1', type: 'number', width: 200,},
    { field: 'foundation2',headerName: 'Foundation2', type: 'number', width: 200,},
    { field: 'foundation3',headerName: 'Foundation3', type: 'number', width: 200,},
    { field: 'foundation4',headerName: 'Foundation4', type: 'number', width: 200,},
  ];
  
  const rows =  data.map(row => ({
    id: row[0],
    ip: row[1],
    time: row[2],
    foundation1: row[3],
    foundation2: row[4],
    foundation3: row[5],
    foundation4: row[6],
  }));
  

  const toltalSumFound1 = data.reduce((sum, row) => sum + (row[3] || 0), 0);
  const toltalSumFound2 = data.reduce((sum, row) => sum + (row[4] || 0), 0);
  const toltalSumFound3 = data.reduce((sum, row) => sum + (row[5] || 0), 0);
  const toltalSumFound4 = data.reduce((sum, row) => sum + (row[6] || 0), 0);

  const [tickPlacement, setTickPlacement] = useState('bottom'); 
  const [tickLabelPlacement, setTickLabelPlacement] = useState('inside'); 


  const pieData = [
    { id: 0, value: toltalSumFound1, label: 'Foundation1' },
    { id: 1, value: toltalSumFound2, label: 'Foundation2' },
    { id: 2, value: toltalSumFound3, label: 'Foundation3' },
    { id: 3, value: toltalSumFound4, label: 'Foundation4' },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#DDCC11'];

  const CustomPieChart = ({ series }) => {
    return (
      <PieChart width={400} height={200}>
        <Pie
          data={series[0].data}
          dataKey="value"
          nameKey="label"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
        >
          {series[0].data.map((entry, index) => (
            <Cell key={entry.id} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    );
  };

  const latestTime = data.reduce((latest, row) => {
    const currentTime = new Date(row[2]);
    return currentTime > latest ? currentTime : latest;
  }, new Date(0));

  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10]}
      />
      <div  style={{ fontSize: '40px',padding: '20px' }}>
        Total number of submitted requests: {data.length}
        </div>
      <div  style={{ fontSize: '40px',padding: '20px'  }}>
        Total number of donation to Foundation 1: {toltalSumFound1}
      </div>
      <div  style={{ fontSize: '40px',padding: '20px'  }}>
        Total number of donation to Foundation 2: {toltalSumFound2}
      </div>
      <div  style={{ fontSize: '40px',padding: '20px'  }}>
        Total number of donation to Foundation 3: {toltalSumFound3}
      </div>
      <div  style={{ fontSize: '40px',padding: '20px'  }}>
        Total number of donation to Foundation 4: {toltalSumFound4}
      </div>
      <div  style={{ fontSize: '40px',padding: '20px'  }}>
        Legfrisebb: {latestTime.toISOString()}
      </div>

      <CustomPieChart
        series={[
          {
            data: pieData,
          },
        ]}
      />

    </>
  )
}
