import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { colorTextSecondary } from './constants';

const theme = {
  // background: "#222222",
  axis: {
    fontSize: "14px",
    tickColor: "#eee",
    ticks: {
      line: {
        stroke: "#555555"
      },
      text: {
        fill: "#ffffff"
      }
    },
    legend: {
      text: {
        fill: "#aaaaaa"
      }
    }
  },
  grid: {
    line: {
      stroke: "#777"
    }
  },
  tooltip: {
    container: {
      background: colorTextSecondary,
      borderRadius: '10px',
    },
  },
};

const NivoBarChart = ({ data, maxValue }) => (
  <ResponsiveBar
      data={data}
      indexBy='player'
      keys={['p1', 'p2', 'ties']}
      maxValue={maxValue}
      colorBy="id"
      colors={({ id, data }) => data[`${id}Color`]}
      margin={{ 'top': 30, 'right': 10, 'bottom': 70, 'left': 20 }}
      padding={0.35}
      borderColor={{ 'from': 'color', 'modifiers': [['darker', 0.2]] }}
      enableLabel={false}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      axisTop={null}
      axisRight={null}
      axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
      }}
      axisLeft={{
          tickSize: 1,
          tickPadding: 5,
          tickRotation: 0,
      }}
      tooltip={({ id, value, color }) => (
        <strong style={{ color }}>
          {id}{id === 'ties' ? '' : ' wins'}: {value}
        </strong>
      )}
      theme={theme}
  />
);

export default NivoBarChart;