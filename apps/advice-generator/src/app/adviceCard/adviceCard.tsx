import { FC } from 'react';

import Box from '@mui/material/Box';

import { useFetchAdvice } from '../api';
import AdviceContent from './adviceContent';
import NewQuoteButton from './newQuoteButton';

const AdviceCard: FC = () => {
  const { data, isFetching, refetch } = useFetchAdvice();

  const { id, advice } = data.slip;

  return (
    <StyledAdviceCard>
      <AdviceContent adviceId={id} adviceText={advice} loading={isFetching} />
      <NewQuoteButton onClick={refetch} />
    </StyledAdviceCard>
  );
};

export default AdviceCard;

const StyledAdviceCard: FC = ({ children }) => {
  return (
    <Box
      sx={{
        width: {
          xs: 343,
          sm: 540
        },
        height: {
          xs: 347,
          sm: 364
        }
      }}
    >
      {children}
    </Box>
  );
};
