import styled from '@emotion/styled';
import { useRef, forwardRef, Ref, useImperativeHandle } from 'react';

const InputContainer = styled.div`
	display: grid;
	place-items: center;
	width: 100%;
`;

const LabelInput = styled.h1`
	font-size: 40px;
	color: #fefefe;
	text-align: center;
	user-select: none;
`;

const InputType = styled.input`
	outline: none;
	height: 50px;
	width: 400px;
	font-size: 25px;
	text-align: center;
	font-weight: bold;
	border-radius: 10px;
`;

const ButtonRace = styled.button`
	outline: none;
	height: 50px;
	width: 400px;
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
	validateSymbol: (symbol: string) => void;
	symbol: string;
	ref: Ref<InputRunRef>;
};

export type InputRunRef = {
	cleanInput: () => void;
};

export const InputRun: React.FC<InputRunProps> = forwardRef(
	({ startRace, symbol, validateSymbol }, ref) => {
		// const {startRaceAction} = useSocket();

		const inputRef = useRef<HTMLInputElement>(null);

		useImperativeHandle(ref, () => ({
			cleanInput
		}));

		const onStartRace = () => {
			startRace();
		};

		const cleanInput = () => {
			if (inputRef.current) {
				inputRef.current.value = '';
			}
		};

		const onType = (e: React.ChangeEvent<HTMLInputElement>) => {
			const { value } = e.target;
			if (value.length === symbol.length) {
				validateSymbol(value);
			}
		};

		return (
			<InputContainer>
				{symbol.length > 0 ? (
					<LabelInput style={{ pointerEvents: 'none' }}>
						{symbol}
					</LabelInput>
				) : (
					<ButtonRace onClick={onStartRace}>Start Race</ButtonRace>
				)}

				<InputType
					ref={inputRef}
					onChange={onType}
					placeholder="Please type characters above..."
				/>
			</InputContainer>
		);
	}
);
