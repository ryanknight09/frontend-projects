import { FC } from 'react';

import IconButton from '@mui/material/IconButton';

import { ReactComponent as DiceIcon } from '../../assets/icon-dice.svg';

interface NewQuoteButtonProps {
  onClick: () => void;
}

const NewQuoteButton: FC<NewQuoteButtonProps> = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <DiceIcon />
    </StyledButton>
  );
};

export default NewQuoteButton;

const StyledButton: FC<NewQuoteButtonProps> = ({ children, onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        backgroundColor: 'primary.light',
        ':hover': {
          backgroundColor: 'primary.light',
          boxShadow: '0px 0px 40px #53FFAA'
        },
        width: 64,
        height: 64,
        left: {
          xs: 139,
          sm: 238
        },
        top: {
          xs: 283,
          sm: 300
        }
      }}
    >
      {children}
    </IconButton>
  );
};
