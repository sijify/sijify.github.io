import React, { useEffect } from 'react';
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
import { Menu as MenuIcon, Code, TrendingUp, Article, Speed, Storage, AutoGraph } from '@mui/icons-material';

const Navbar = () => (
  <AppBar position="fixed" elevation={0} component="nav">
    <Toolbar>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 800, letterSpacing: 1 }} className="text-gradient">
        SijiFy
      </Typography>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Button color="inherit" href="#apps">Apps</Button>
        <Button color="inherit" href="#services">Services</Button>
        <Button color="inherit" href="#articles">Articles</Button>
      </Box>
      <IconButton color="inherit" sx={{ display: { xs: 'block', sm: 'none' } }} aria-label="Menu">
        <MenuIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

const Hero = () => (
  <Box component="header" sx={{ pt: { xs: 15, md: 20 }, pb: { xs: 10, md: 15 }, textAlign: 'center', position: 'relative' }} className="animate-fade-in-up">
    {/* Decorative background blur elements */}
    <Box sx={{ position: 'absolute', top: '10%', left: '20%', width: '300px', height: '300px', background: 'rgba(187,134,252,0.15)', filter: 'blur(100px)', borderRadius: '50%', zIndex: -1 }} className="float-animation" />
    <Box sx={{ position: 'absolute', bottom: '10%', right: '20%', width: '250px', height: '250px', background: 'rgba(3,218,198,0.1)', filter: 'blur(80px)', borderRadius: '50%', zIndex: -1 }} className="float-animation delay-200" />
    
    <Container maxWidth="md">
      <Chip label="✨ New: SijiFy SEO Tools v2" color="secondary" variant="outlined" sx={{ mb: 4, px: 1, py: 2, fontSize: '0.9rem', borderColor: 'rgba(3,218,198,0.3)' }} />
      <Typography variant="h1" gutterBottom component="h1">
        Elevate Your <span className="text-gradient">Digital Presence</span>
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 6, maxWidth: '85%', mx: 'auto', lineHeight: 1.6 }}>
        Premium applications, expert SEO consulting, and data-driven strategies to help your business dominate the modern web era.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button variant="contained" color="primary" size="large" href="#services">
          Get a Consultation
        </Button>
        <Button variant="outlined" color="inherit" size="large" href="#apps">
          Explore Apps
        </Button>
      </Box>
    </Container>
  </Box>
);

const Products = () => {
  const apps = [
    { title: "SijiFy Analytics", icon: <AutoGraph sx={{ fontSize: 50 }} />, desc: "Real-time traffic insights and audience behavior tracking." },
    { title: "SijiFy SpeedBoost", icon: <Speed sx={{ fontSize: 50 }} />, desc: "Automated caching and image optimization for lightning fast sites." },
    { title: "SijiFy CMS", icon: <Storage sx={{ fontSize: 50 }} />, desc: "A headless CMS designed specifically for high-performance SEO." }
  ];

  return (
    <Box component="section" id="apps" sx={{ py: 10, position: 'relative' }}>
      <Container>
        <Typography variant="h2" gutterBottom textAlign="center" component="h2" sx={{ mb: 8 }}>
          Featured Applications
        </Typography>
        <Grid container spacing={4}>
          {apps.map((app, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className="glass-card animate-fade-in-up" sx={{ height: '100%', display: 'flex', flexDirection: 'column', animationDelay: `${index * 100}ms` }}>
                <Box sx={{ p: 4, pb: 0, display: 'flex', color: 'secondary.main' }} className="float-animation">
                  {app.icon}
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h4" component="h3" sx={{ mt: 2 }}>
                    {app.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mt: 2, lineHeight: 1.7 }}>
                    {app.desc}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button size="medium" color="primary" sx={{ fontWeight: 'bold' }}>Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const Services = () => (
  <Box component="section" id="services" sx={{ py: 12, bgcolor: 'rgba(0,0,0,0.3)', borderTop: '1px solid rgba(255,255,255,0.02)' }}>
    <Container>
      <Grid container spacing={8} alignItems="center">
        <Grid item xs={12} md={6} className="animate-fade-in-up">
          <Typography variant="h2" gutterBottom component="h2">
            Expert <span className="text-gradient">Consulting</span>
          </Typography>
          <Typography variant="h4" gutterBottom color="text.primary" sx={{ mt: 4, mb: 2 }}>
            SEO & Digital Strategy
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
            Dominate search engine rankings and drive highly targeted organic traffic to your business. Our team conducts deep technical audits, develops robust content strategies, and builds authoritative backlinks specifically tailored for your niche.
          </Typography>
          <Button variant="contained" color="secondary" size="large" sx={{ mt: 4, color: '#000' }}>
            Start Growing Today
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="glass-card float-animation delay-200" sx={{ p: { xs: 4, md: 8 }, borderRadius: 6, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
             <TrendingUp sx={{ fontSize: 120, color: 'primary.main', mb: 3 }} />
             <Typography variant="h3" component="p">Data-Driven</Typography>
             <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>Guaranteed Results</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const Articles = () => (
  <Box component="section" id="articles" sx={{ py: 12 }}>
    <Container>
      <Typography variant="h2" gutterBottom textAlign="center" component="h2" sx={{ mb: 8 }}>
        Latest Insights
      </Typography>
      <Grid container spacing={4}>
        {[1, 2].map((item, index) => (
          <Grid item key={item} xs={12} md={6}>
            <Box component="article" className="glass-card animate-fade-in-up" sx={{ display: 'flex', alignItems: 'center', p: 3, borderRadius: 4, animationDelay: `${index * 150}ms` }}>
              <Box sx={{ p: 3, color: 'primary.main', bgcolor: 'rgba(187,134,252,0.1)', borderRadius: 3, mr: 3 }}>
                <Article sx={{ fontSize: 40 }} />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography component="h3" variant="h5" sx={{ fontWeight: 600, mb: 1, '&:hover': { color: 'secondary.main', cursor: 'pointer' } }}>
                  Understanding Modern SEO Patterns in 2026
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" component="time" dateTime="2026-10-12">
                  Oct 12 • 5 min read
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 6 }}>
         <Button variant="outlined" color="primary" size="large">Read All Articles</Button>
      </Box>
    </Container>
  </Box>
);

const Footer = () => (
  <Box component="footer" sx={{ bgcolor: '#08080b', py: 8, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
    <Container>
      <Typography variant="h4" align="center" gutterBottom className="text-gradient" sx={{ fontWeight: 800 }}>
        SijiFy
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" component="p" sx={{ mb: 4 }}>
        Building the web of tomorrow, today.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 4 }}>
        <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'white' } }}>Privacy Policy</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'white' } }}>Terms of Service</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ cursor: 'pointer', '&:hover': { color: 'white' } }}>Contact</Typography>
      </Box>
      <Typography variant="body2" color="text.secondary" align="center">
        {'© '}
        {new Date().getFullYear()}
        {' SijiFy.com. All rights reserved.'}
      </Typography>
    </Container>
  </Box>
);

function App() {
  // Intersection Observer for scroll animations could be added here for production
  return (
    <Box component="main">
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <Articles />
      <Footer />
    </Box>
  );
}

export default App;
