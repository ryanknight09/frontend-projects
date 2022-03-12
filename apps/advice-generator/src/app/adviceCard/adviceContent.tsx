import { FC } from 'react';

import { CircularProgress, useMediaQuery, useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';

import { ReactComponent as DividerDesktop } from '../../assets/divider-desktop.svg';
import { ReactComponent as DividerMobile } from '../../assets/divider-mobile.svg';

interface AdviceContentProps {
  adviceId: string;
  adviceText: string;
  loading?: boolean;
}

const AdviceContent: FC<AdviceContentProps> = ({ adviceId, adviceText, loading }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const Divider: FC = () =>
    isMobile ? (
      <Box>
        <DividerMobile />
      </Box>
    ) : (
      <CardContent>
        <DividerDesktop />
      </CardContent>
    );

  return (
    <StyledCard>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {loading ? (
          <CircularProgress sx={{ color: 'primary.light' }} />
        ) : (
          <AdviceNumber>{`ADVICE #${adviceId}`}</AdviceNumber>
        )}
        <AdviceText>{adviceText}</AdviceText>
        <Divider />
      </CardContent>
    </StyledCard>
  );
};

export default AdviceContent;

const StyledCard: FC = ({ children }) => {
  return (
    <Card
      sx={{
        textAlign: 'center',
        position: 'absolute',
        boxShadow: '30px 50px 80px rgba(0, 0, 0, 0.100202)',
        borderRadius: 4,
        backgroundColor: 'neutral.main',
        width: 'inherit',
        height: {
          xs: 315,
          sm: 332
        }
      }}
    >
      {children}
    </Card>
  );
};

const AdviceNumber: FC = ({ children }) => (
  <Typography
    fontWeight="fontWeightRegular"
    sx={{
      margin: '24px 0',
      color: 'primary.light',
      fontSize: 13,
      lineHeight: '13px',
      letterSpacing: '4px'
    }}
  >
    {children}
  </Typography>
);

const AdviceText: FC = ({ children }) => (
  <Typography
    fontWeight="fontWeightMedium"
    sx={{
      color: '#CEE3E9',
      fontSize: 28,
      lineHeight: '38px',
      letterSpacing: '-0.3px'
    }}
  >
    {children}
  </Typography>
);
