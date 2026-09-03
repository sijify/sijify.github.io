import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Chip
} from '@mui/material';
import { Menu as MenuIcon, Code, TrendingUp, Article } from '@mui/icons-material';

const Navbar = () => (
  <AppBar position="fixed" elevation={0} sx={{ background: 'rgba(18, 18, 18, 0.8)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: 1, color: 'primary.main' }}>
        SijiFy
      </Typography>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Button color="inherit" href="#apps">Apps</Button>
        <Button color="inherit" href="#services">Services</Button>
        <Button color="inherit" href="#articles">Articles</Button>
      </Box>
      <IconButton color="inherit" sx={{ display: { xs: 'block', sm: 'none' } }}>
        <MenuIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

const Hero = () => (
  <Box sx={{ pt: 15, pb: 10, textAlign: 'center', background: 'linear-gradient(180deg, rgba(187,134,252,0.1) 0%, rgba(18,18,18,1) 100%)' }}>
    <Container maxWidth="md">
      <Chip label="New: SijiFy SEO Tools v2" color="secondary" variant="outlined" sx={{ mb: 3 }} />
      <Typography variant="h1" gutterBottom>
        Elevate Your Digital Presence
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 5, maxWidth: '80%', mx: 'auto' }}>
        Premium applications, expert SEO consulting, and insightful articles to help your business grow in the modern web era.
      </Typography>
      <Button variant="contained" color="primary" size="large" sx={{ mr: 2 }} href="#services">
        Get a Consultation
      </Button>
      <Button variant="outlined" color="inherit" size="large" href="#apps">
        Explore Apps
      </Button>
    </Container>
  </Box>
);

const Products = () => (
  <Container id="apps" sx={{ py: 8 }}>
    <Typography variant="h3" gutterBottom textAlign="center" sx={{ mb: 6 }}>
      Featured Applications
    </Typography>
    <Grid container spacing={4}>
      {[1, 2, 3].map((item) => (
        <Grid item key={item} xs={12} sm={6} md={4}>
          <Card>
            <Box sx={{ p: 3, display: 'flex', justifyContent: 'center', color: 'primary.main' }}>
              <Code sx={{ fontSize: 60 }} />
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                App Name {item}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A powerful tool designed to streamline your workflow and enhance productivity. Built with modern tech.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">Learn More</Button>
              <Button size="small" color="secondary">Buy Now</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

const Services = () => (
  <Box id="services" sx={{ py: 8, bgcolor: 'background.paper' }}>
    <Container>
      <Typography variant="h3" gutterBottom textAlign="center" sx={{ mb: 6 }}>
        Expert Consulting
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom color="secondary.main">
            SEO & Digital Strategy
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.1rem' }}>
            Dominate search rankings and drive organic traffic. We offer deep technical audits, content strategy, and backlink building tailored for your niche.
          </Typography>
          <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }}>
            Start Growing
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 5, borderRadius: 4, bgcolor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
             <TrendingUp sx={{ fontSize: 100, color: 'secondary.main', mb: 2 }} />
             <Typography variant="h6">Data-Driven Results</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const Articles = () => (
  <Container id="articles" sx={{ py: 8 }}>
    <Typography variant="h3" gutterBottom textAlign="center" sx={{ mb: 6 }}>
      Latest Insights
    </Typography>
    <Grid container spacing={4}>
      {[1, 2].map((item) => (
        <Grid item key={item} xs={12} md={6}>
          <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
            <Box sx={{ p: 2, color: 'text.secondary' }}>
              <Article sx={{ fontSize: 40 }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h6">
                  Understanding Modern SEO Patterns
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Oct 12 • 5 min read
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

const Footer = () => (
  <Box sx={{ bgcolor: 'background.paper', py: 6, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
    <Container>
      <Typography variant="h6" align="center" gutterBottom color="primary.main">
        SijiFy
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
        Building the web of tomorrow, today.
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
        {'© '}
        {new Date().getFullYear()}
        {' SijiFy.com. All rights reserved.'}
      </Typography>
    </Container>
  </Box>
);

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <Articles />
      <Footer />
    </>
  );
}

export default App;
