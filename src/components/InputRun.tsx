import styled from '@emotion/styled';
import { useSocket } from '../useHooks/useSocket';

const InputContainer = styled.div`
	display: grid;
	place-content: center;
	width: 100%;
`;

const LabelInput = styled.h1`
	font-size: 40px;
	color: #fefefe;
	text-align: center;
`;

const InputType = styled.input`
	outline: none;
	height: 50px;
	width: 500px;
	font-size: 30px;
	text-align: center;
	font-weight: bold;
`;

const ButtonRace = styled.button`
	outline: none;
	height: 50px;
	width: 500px;
	font-size: 30px;
	text-align: center;
	font-weight: bold;
	background-color: #5cc641;
	color: #fefefe;
	border: none;
	border-radius: 10px;
	margin: 10px 0;
	cursor: pointer;
`;

type InputRunProps = {
	startRace: () => void;
};

export const InputRun: React.FC<InputRunProps> = ({startRace}) => {
	// const {startRaceAction} = useSocket();

	const onStartRace = () => {
		startRace();
	};

	return (
		<InputContainer>
			<LabelInput>34123</LabelInput>
			<ButtonRace onClick={onStartRace}>Start Race</ButtonRace>
			<InputType placeholder="Please type characters above..." />
		</InputContainer>
	);
};
