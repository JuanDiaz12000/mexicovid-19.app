import { ResponsiveLine } from '@nivo/line'
import React from 'react';
import { STATE_COLORS } from '../../constants/states';

const MyResponsiveLine = ({ data, isSmall=false }) => {
	let marginConstrains = { top: 50, right: 110, bottom: 165, left: 60 }
	let legendsConstrains = [{
		anchor: 'top-right',
		direction: 'column',
		justify: false,
		translateX: 88,
		translateY: 0,
		itemsSpacing: 0,
		itemDirection: 'left-to-right',
		itemWidth: 80,
		itemHeight: 20,
		itemOpacity: 0.75,
		symbolSize: 12,
		symbolShape: 'circle',
		symbolBorderColor: 'rgba(0, 0, 0, .5)'
	}]
	let tickRotation = -45;

	if( !isSmall ) {
		marginConstrains = { top: 50, right: 10, bottom: 105, left: 50 };
		legendsConstrains = [];
		tickRotation = -60;
	}
	const styleById = {
		"NACIONAL": {
			strokeDasharray: '6, 6',
        	strokeWidth: 8,
		},
		default: {
			strokeWidth: 2,
		},
	}

	const DashedLine = ({ series, lineGenerator, xScale, yScale }) => {
		console.log(series)
		return series.map(({ id, data, color }) => (
			<path
				key={id}
				d={lineGenerator(
					data.map(d => ({
						x: xScale(d.data.x),
						y: yScale(d.data.y),
					}))
				)}
				fill="none"
				stroke={STATE_COLORS[id].color}
				style={styleById[id] || styleById.default}
			/>
		))
	}
	
	return(
	<ResponsiveLine
		data={data}
		
		lineWidth={2}
		margin={marginConstrains}
		yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
		curve="natural" 
		axisTop={null}
		axisRight={null}
		axisBottom={{
				orient: 'bottom',
				tickSize: 5,
				tickPadding: 5,
				tickRotation: tickRotation,
				legend: 'Fecha',
				legendOffset: 80,
				legendPosition: 'middle',
				tickValues: 4
		}}
		theme={{
			crosshair: {
				line: {
					strokeWidth: 2,
					stroke: "#000",
					strokeOpacity: 1,
				},
			},
		}}
		axisLeft={{
				orient: 'left',
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: 'Tasa de confirmados por 100 mil habitantes',
				legendOffset: -40,
				legendPosition: 'middle'
		}}
		enableGridX={false}
		enableGridY={false}
		enablePoints={false}
		pointSize={5}
		pointColor={{ theme: 'background' }}
		pointBorderWidth={2}
		pointBorderColor={{ from: 'serieColor' }}
		pointLabel="y"
		pointLabelYOffset={-12}
		enableSlices={false}
		useMesh={true}
		legends={legendsConstrains}
		motionStiffness={160}
		motionDamping={20}
		layers={['grid', 'markers', 'axes', 'areas', DashedLine, 'crosshair', 'lines', 'points', 'slices', 'mesh', 'legends']}
		tooltip={({ point }) => {
            return (
                <div
                    style={{
                        background: 'white',
                        padding: '9px 12px',
                        border: '1px solid #ccc',
                    }}
                >
				<div
					key={point.id}
					style={{
						color: point.serieColor,
						padding: '3px 0',
					}}
				>
				<strong>{point.serieId}</strong> {point.data.yFormatted}
			</div>
			</div>
            )
        }}
	/>
	)
}

export default MyResponsiveLine;