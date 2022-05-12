import styled from 'styled-components';
import { CardButton } from '../../IndustrialCard/styles';
import ShareIconSvg from '../../../images/industrial/share-icon.svg';

const StyledShareIcon = styled(CardButton)`
  position: absolute;
  top: 0;
  left: -36px;
  width: 24px;
  height: 23px;
  transition: all 0.3s ease;
  background-image: url(${ShareIconSvg});
  background-repeat: no-repeat;
  background-size: contain;
  border: 0;
  background-color: var(--color-light-blue);
  margin: 0;
  padding: 0;
  outline: none;
  border-radius: 0;
  &:hover {
    cursor: pointer;
  }
`;

export default StyledShareIcon;
