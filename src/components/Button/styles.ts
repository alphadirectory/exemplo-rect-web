import colors from '@/styles/colors';
import styled from 'styled-components';


const defineColor = (color?: string): string => {
    if (!color) return colors.primary;
    return (colors.hasOwnProperty('color')) ? colors[color] : color;
};

const baseButton = styled.button`
    padding:  5px 20px 5px 20px ;
    border-radius:4px;
    cursor: pointer;
`;

export const ButtonDefault = styled(baseButton)`
    color: ${colors.white};
    background-color: ${props => defineColor(props.color)};
`;

export const ButtonOutlined = styled(baseButton)`
    color:${props => defineColor(props.color)};
    border: 1px solid ${props => defineColor(props.color)};
    background-color: transparent;
`;

export const ButtonText = styled(baseButton)`
    color:${props => defineColor(props.color)};
    background-color: transparent;
    border:none
`;