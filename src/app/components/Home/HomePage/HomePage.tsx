import './HomePage.css';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography
} from '@mui/material';
import bgImage from '../../../../assets/images/pt.jpg';
import whoWeAreImage from '../../../../assets/images/who-we-are.png';
import ourMissionImage from '../../../../assets/images/our-mission.png';
import aiBg1Image from '../../../../assets/images/ai-bg1.png';
import { styles } from '../../../../assets/styles/styles';
// import { useNavigate } from 'react-router-dom';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import HelpIcon from '@mui/icons-material/Help';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ThreePIcon from '@mui/icons-material/ThreeP';
import DownloadFrom from '../../../c-components/Download/DownloadFrom';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

function HomePage() {
  // let navigate = useNavigate();

  // const handleNavigation = (path: string | null) => {
  //   if (path) {
  //     const isInternalNavigation = path[0] === '/';
  //     if (isInternalNavigation) {
  //       navigate(path);
  //     } else {
  //       window.location.assign(path);
  //     }
  //   }
  // };

  return (
    <>
      <Container
        disableGutters
        sx={{
          minWidth: '100%',
          minHeight: '90vh',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: {
              sm: '100%',
              md: '50%'
            },
            m: 'auto',
            p: 3,
            bgcolor: 'text.secondary',
            borderRadius: {
              sm: 0,
              md: 4
            },
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 5,
            textAlign: 'center'
          }}
        >
          <Typography
            sx={{
              maxWidth: 'sm',
              color: styles.white,
              textAlign: 'center',
              mx: 'auto',
              px: 2,
              fontWeight: 'bold'
            }}
            variant="h4"
          >
            Where AI Meets Your Fitness, Nutrition, and Mental Health Goals
          </Typography>
          <Typography
            sx={{
              maxWidth: 'sm',
              color: styles.white,
              textAlign: 'center',
              mx: 'auto',
              mt: 2,
              px: 2
            }}
            variant="h6"
          >
            We blend advanced artificial intelligence with personalised fitness,
            nutrition, and mental health insights to offer you a more accessible
            and tailored health journey.
          </Typography>
        </Box>
      </Container>
      <Container
        sx={{
          minWidth: '100%',
          my: 8
        }}
      >
        <DownloadFrom />
      </Container>

      {/* What we offer */}
      <Container
        sx={{
          mt: 6,
          p: 3,
          borderRadius: 3,
          boxShadow: 4
        }}
      >
        <Box>
          <Typography variant="h3">What We Offer</Typography>
        </Box>
        <Box
          sx={{
            mt: 4
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <RocketLaunchIcon fontSize="large" sx={{ mr: 2 }} /> AI-Crafted
            Training Routines
          </Typography>
          <Typography variant="body1">
            Experience workout plans designed by AI, based on scientific
            principles, tailored to your fitness level, goals, and personal
            preferences.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <RestaurantIcon fontSize="large" sx={{ mr: 2 }} /> Nutrition Plans
          </Typography>
          <Typography variant="body1">
            Enjoy meal plans crafted by AI, considering your dietary needs,
            allergies, taste preferences, and nutritional goals. From vegan to
            keto, we cater to all.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <SelfImprovementIcon fontSize="large" sx={{ mr: 2 }} /> Supporting
            Mental Well-being through Mindfulness
          </Typography>
          <Typography variant="body1">
            Foster a balanced mind with our mindfulness and meditation features,
            designed to support your mental health. The app offers a calm,
            focused approach, helping you reduce stress and enhance your overall
            well-being.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <EventAvailableIcon fontSize="large" sx={{ mr: 2 }} />
            AI Updates for Optimal Adaptation
          </Typography>
          <Typography variant="body1">
            Our AI system updates your fitness and diet plans monthly. This
            schedule allows your body sufficient time to adjust and respond
            effectively to the new routines, ensuring a balanced and sustainable
            approach to your health journey.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <SmartphoneIcon fontSize="large" sx={{ mr: 2 }} />
            Intuitive App for Exercise Guidance
          </Typography>
          <Typography variant="body1">
            A user-friendly app designed to help you learn exercises and stay on
            track with your fitness goals. It's simple, easy to use, and focused
            on providing clear, direct guidance.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <TrendingUpIcon fontSize="large" sx={{ mr: 2 }} />
            Track Your Progress with Insights and Analytics (Coming Soon!)
          </Typography>
          <Typography variant="body1">
            Stay motivated with detailed tracking and analytics, designed to
            give you a deeper understanding of your fitness journey. Monitor
            your improvements, set new goals, and make informed decisions to
            enhance your training experience."
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <HelpIcon fontSize="large" sx={{ mr: 2 }} />
            Questions? Chat with Our Experts! (Coming Soon!)
          </Typography>
          <Typography variant="body1">
            Our dedicated chat service lets you directly connect with our
            fitness and nutrition experts for personalised advice and support.
            Accessible via our app or website, ensuring you have the guidance
            you need for your AI-driven wellness path.
          </Typography>
        </Box>
      </Container>
      {/* Quote */}
      <Container
        sx={{
          minWidth: '100%',
          my: 8,
          bgcolor: styles.clomberBlue3,
          boxShadow: 10
        }}
      >
        <Typography
          variant="h5"
          mx={'auto'}
          sx={{ textAlign: 'center', fontStyle: 'italic', py: 5 }}
        >
          "At Fitfai, our vision is to harness the precision of artificial
          intelligence to craft personalised wellness journeys, making effective
          training, nutrition, and mental health support accessible to
          everyone."
        </Typography>
      </Container>
      <Container
        sx={{
          mt: 10,
          p: 3,
          borderRadius: 3,
          boxShadow: 4
        }}
      >
        <Box>
          <Typography variant="h3">How It Works</Typography>
        </Box>
        <Box
          sx={{
            mt: 4
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <AnalyticsIcon fontSize="large" sx={{ mr: 2 }} /> In-Depth Analysis
          </Typography>
          <Typography variant="body1">
            Begin with a comprehensive questionnaire covering your health
            history, lifestyle, fitness level, and nutritional needs.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <ImportantDevicesIcon fontSize="large" sx={{ mr: 2 }} /> AI-Powered
            Customisation
          </Typography>
          <Typography variant="body1">
            Our sophisticated AI algorithms process your data to generate a
            bespoke fitness and nutrition plan.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <EventAvailableIcon fontSize="large" sx={{ mr: 2 }} />
            Detailed Plan Delivery
          </Typography>
          <Typography variant="body1">
            Receive a plan in under 60 seconds, including workout routines and
            meal plans, all accessible via our user-friendly app.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <SmartphoneIcon fontSize="large" sx={{ mr: 2 }} />
            Progress Tracking & AI Adjustments
          </Typography>
          <Typography variant="body1">
            Track your workouts, meals, and progress; our AI adapts your plan
            based on performance and feedback.
          </Typography>
        </Box>
        <Box
          sx={{
            my: 4
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <ThreePIcon fontSize="large" sx={{ mr: 2 }} />
            Nutrition & Fitness Guidance
          </Typography>
          <Typography variant="body1">
            Reach out with questions anytime and our certified fitness experts
            will adjust your plan based on real-world feedback.
          </Typography>
        </Box>
      </Container>
      {/* image */}
      <Container
        disableGutters
        sx={{
          minWidth: '100%',
          minHeight: '700px',
          backgroundImage: `url(${aiBg1Image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxShadow: 5,
          mt: 10
        }}
      >
        <Box
          sx={{
            maxWidth: {
              sm: '100%',
              md: '50%'
            },
            m: 'auto',
            p: 3,
            bgcolor: 'text.secondary',
            borderRadius: {
              sm: 0,
              md: 4
            },
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 5,
            textAlign: 'center'
          }}
        >
          <Typography
            sx={{
              maxWidth: 'sm',
              color: styles.white,
              textAlign: 'center',
              mx: 'auto',
              px: 2,
              fontWeight: 'bold'
            }}
            variant="h3"
          >
            AI-Powered Health for a Better You
          </Typography>
          <Typography
            sx={{
              maxWidth: 'sm',
              color: styles.white,
              textAlign: 'center',
              mx: 'auto',
              mt: 2,
              px: 2,
              fontWeight: 'bold'
            }}
            variant="h6"
          >
            Shaping the Future of Fitness, Nutrition, and Mental Health
          </Typography>
        </Box>
      </Container>
      {/* About Us */}
      <Container
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          mt: 10
        }}
      >
        <Typography variant="h3">About Us</Typography>
        <Container
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            my: 6
          }}
        >
          <Card sx={{ maxWidth: 450, mx: { sm: 0, md: 2 }, my: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image={whoWeAreImage}
                alt="Who we are"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Who We Are
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  We are a group of passionate individuals, including fitness
                  enthusiasts, nutrition advocates, and mental health
                  supporters, dedicated to revolutionising the way people
                  approach health and wellness. Our journey began with a simple
                  yet powerful idea: to make these resources more accessible,
                  combining the precision of artificial intelligence with the
                  personal touch of human insight.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 450, mx: { sm: 0, md: 2 }, my: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image={ourMissionImage}
                alt="Our mission"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Our Mission
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Our mission is to redefine the approach to health, fitness,
                  and mental well-being, making it more personalised,
                  accessible, and effective for everyone. We leverage the power
                  of artificial intelligence to break down barriers in personal
                  wellness, providing tailored solutions that adapt to each
                  individual's unique needs and goals.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
      </Container>
    </>
  );
}
export default HomePage;
