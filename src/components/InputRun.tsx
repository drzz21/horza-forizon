import styled from '@emotion/styled';

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

export const InputRun = () => {
	return (
		<InputContainer>
			<LabelInput>34123</LabelInput>
			<InputType placeholder='Please type characters above...' />
		</InputContainer>
	);
};
