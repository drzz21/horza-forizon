import styled from '@emotion/styled';

const Rider = styled.div`
	// background-color: #fefefe;
	width: fit-content;
	// height: 100px;
	width: 100px;
	padding: 10px;
`;

const RiderImg = styled.img`
	width: 100%;
`;

export const HorseRider = () => {
	return <Rider>
		<RiderImg src="horse-rider.png" alt="" />
		
	</Rider>;
};
