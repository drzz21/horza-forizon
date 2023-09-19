import styled from '@emotion/styled';

const RiderImg = styled.img`
	width: 100%;
`;

type HorseRiderProps = {
	infoHorse: {
		id: string;
		name: string;
		position: number;
	};
};

export const HorseRider: React.FC<HorseRiderProps> = ({ infoHorse }) => {
	const Rider = styled.div`
		width: fit-content;
		margin-left: ${infoHorse?.position * 5}px;
		width: 100px;
		padding: 10px;
	`;

	return (
		<Rider>
			<RiderImg src="horse-rider.png" alt="" />
		</Rider>
	);
};
