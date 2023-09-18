import styled from '@emotion/styled';
import { HorseRider } from './HorseRider';
import { InputRun } from './InputRun';

const Title = styled.div`
	font-size: 60px;
	display: grid;
	place-content: center;
	color: #fefefe;
	font-weight: bold;
`;

const Field = styled.div`
	position: relative;
	margin: 0 auto;

	font-size: 30px;
	background-color: #5cc641;
	width: 1500px;

	overflow: hidden;
`;

const Wave = styled.div`
	z-index: 1;
	background-image: url('ground_wave.png');
	background-repeat: repeat-x;
	background-position: bottom;
	background-size: 150px;

	height: 100px;
	width: 100%;

	position: absolute;
	bottom: 0;
	left: 0;
`;

const FieldLine = styled.div`
	position: relative;
`;

const NumbersRow = styled.div`
	display: flex;
	justify-content: space-around;
	font-size: 40px;
	color: #fefefe;
	font-weight: bold;
	width: 1500px;
	margin: 0 auto;
`;

const FieldGridLines = styled.div`
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	z-index: 2;
	height: 100%;
	width: 100%;
	position: absolute;
`;

export const FieldRace: React.FC = () => {
	// console.log(styled);

	return (
		<>
			<Title>Horza Forizon</Title>

			<NumbersRow>
				{[...Array(10)].map((_, i) => (
					<div>{i + 1}</div>
				))}
			</NumbersRow>

			<Field>
				<FieldGridLines>
					{[...Array(10)].map(() => (
						<div style={{ borderLeft: '2px solid black' }}></div>
					))}
				</FieldGridLines>

				<FieldLine>
					<HorseRider />
					<Wave />
				</FieldLine>
				<FieldLine>
					<HorseRider />
					<Wave />
				</FieldLine>
				<FieldLine>
					<HorseRider />
					<Wave />
				</FieldLine>
				
			</Field>

			<InputRun />
		</>
	);
};
