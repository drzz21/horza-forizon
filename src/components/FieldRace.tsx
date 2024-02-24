import styled from '@emotion/styled';
import { HorseRider } from './HorseRider';
import { InputRun, InputRunRef } from './InputRun';
import { useEffect, useState, useRef } from 'react';
import { useSocket } from '../useHooks/useSocket';

const MainContainer = styled.div`
	margin: 20px;
`;

const Title = styled.div`
	font-size: 60px;
	display: grid;
	place-content: center;
	color: #fefefe;
	font-weight: bold;
`;

const FieldContainer = styled.div`
	overflow-x: auto;
	scroll-behavior: smooth;
`;

const Field = styled.div`
	position: relative;
	margin: 0 auto;

	font-size: 30px;
	background-color: #5cc641;

	width: 1500px;
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
	const { lastJsonMessage, startRaceAction, validateSymbol } = useSocket();

	const inputRunRef = useRef<InputRunRef>(null);
	const scrollRef = useRef<HTMLDivElement>(null);

	const [horses, setHorses] = useState([]);
	// const [myHorse, setMyHorse] = useState({});

	const [symbol, setSymbol] = useState('');

	// console.log(lastJsonMessage?.allHorses);

	useEffect(() => {
		if (lastJsonMessage?.action === 'next-symbol') {
			setSymbol(lastJsonMessage?.symbol ?? '');
			inputRunRef.current?.cleanInput();
			if (symbol !== '') {
				scrollRef.current!.scrollLeft += 150;
			}
		}

		if (!lastJsonMessage?.allHorses) return;
		// setMyHorse(lastJsonMessage?.horse);
		setHorses(lastJsonMessage?.allHorses ?? []);
	}, [lastJsonMessage]);

	return (
		<MainContainer>
			<Title>Horza Forizon</Title>

			<FieldContainer ref={scrollRef}>
				<NumbersRow>
					{[...Array(10)].map((_, i) => (
						<div key={i}>{i + 1}</div>
					))}
				</NumbersRow>
				<Field>
					<FieldGridLines>
						{[...Array(10)].map((el) => (
							<div
								key={el}
								style={{ borderRight: '2px solid black' }}
							></div>
						))}
					</FieldGridLines>

					{horses?.map(
						(horse: {
							name: string;
							id: string;
							position: number;
						}) => (
							<FieldLine key={horse.id}>
								<HorseRider infoHorse={horse} />
								<Wave />
							</FieldLine>
						)
					)}
				</Field>
			</FieldContainer>

			<InputRun
				startRace={startRaceAction}
				validateSymbol={validateSymbol}
				symbol={symbol}
				ref={inputRunRef}
			/>
		</MainContainer>
	);
};
