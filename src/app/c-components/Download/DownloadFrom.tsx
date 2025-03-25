import { Box, Container, Typography } from '@mui/material';
import App_Store_Badge from '../../../assets/images/App_Store_Badge.png';
import Google_Play_Badge from '../../../assets/images/Google_Play_Badge.png';

function DownloadFrom({ title = 'Download the app today' }) {
  return (
    <Container
      sx={{
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" sx={{ mb: 4 }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <a
          href="https://play.google.com/store/apps/details?id=com.fitfai.fitfaiApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Google_Play_Badge}
            alt="Google Play"
            style={{ height: 50 }}
          />
        </a>
        <a
          href="https://apps.apple.com/gb/app/fitfai-ai-fitness-health/id6743005080"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={App_Store_Badge} alt="App Store" style={{ height: 50 }} />
        </a>
      </Box>
    </Container>
  );
}

export default DownloadFrom;
