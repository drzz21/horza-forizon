import useWebSocket from 'react-use-websocket';

const socketUrl = 'ws://horza-back.fly.dev/race';

type HorseMessage = {
	lastJsonMessage: {
		action?: string;
		allHorses?: [];
		symbol?: string;
		horse?: {
			id: string;
			name: string;
			position: number;
		};
	};
	// sendMessage: unknown;
	sendJsonMessage: (message: { action: string,'steps-amount'?:number,'data'?:string }, keep?: boolean) => void;
};

export const useSocket = () => {
	const { lastJsonMessage, sendJsonMessage }: HorseMessage = useWebSocket(
		socketUrl,
		{
			onOpen: () => console.log('opened'),
		}
	);

	const startRaceAction = () => {
		sendJsonMessage({ 'action': 'start-race', 'steps-amount': 10 });
	};

	const validateSymbol = (symbol: string) => {
		sendJsonMessage({ 'action': 'submit-letter', 'data': symbol });
	};

	return { lastJsonMessage, startRaceAction, validateSymbol };
};
