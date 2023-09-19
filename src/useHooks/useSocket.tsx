import useWebSocket from 'react-use-websocket';

const socketUrl = 'ws://localhost:3000/race';

type HorseMessage = {
	lastJsonMessage: {
		allHorses: [];
		horse: {
			id: string;
			name: string;
			position: number;
		};
	};
	sendMessage: unknown;
	sendJsonMessage: (
		message: {action: string},
		keep?: boolean
	) => void;
};

export const useSocket = () => {
	const { lastJsonMessage, sendJsonMessage,sendMessage }: HorseMessage = useWebSocket(
		socketUrl,
		{
			onOpen: () => console.log('opened'),
		}
	);

	const startRaceAction = () => {
		console.log('sent start race');
		sendJsonMessage({ "action": 'start-race' });
	};

	return { lastJsonMessage, startRaceAction };
};
