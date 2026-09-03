import React, { useState } from 'react';
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
  Chip,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, Code, TrendingUp, Article, Speed, Storage, AutoGraph, RocketLaunch } from '@mui/icons-material';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { label: 'Layanan', href: '#services' },
    { label: 'Produk', href: '#apps' },
    { label: 'Artikel', href: '#articles' }
  ];

  return (
    <>
      <AppBar position="fixed" elevation={0} component="nav">
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h5" component="div" sx={{ fontWeight: 800, letterSpacing: 1, cursor: 'pointer' }} className="text-gradient">
              SijiFy
            </Typography>
            
            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              {navItems.map((item) => (
                <Button key={item.label} color="inherit" href={item.href} sx={{ fontWeight: 600 }}>
                  {item.label}
                </Button>
              ))}
              <Button variant="contained" color="primary" sx={{ ml: 1 }}>Hubungi Kami</Button>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton color="inherit" aria-label="Buka menu" edge="end" onClick={handleDrawerToggle} sx={{ display: { md: 'none' } }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ width: 250, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton component="a" href={item.href} onClick={handleDrawerToggle}>
                  <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600 }} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding sx={{ mt: 2 }}>
              <Button variant="contained" color="primary" fullWidth>Hubungi Kami</Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

const Hero = () => (
  <Box component="header" sx={{ pt: { xs: 15, md: 22 }, pb: { xs: 10, md: 15 }, textAlign: 'center', position: 'relative', overflow: 'hidden' }} className="animate-fade-in-up">
    {/* Decorative background blur elements */}
    <Box sx={{ position: 'absolute', top: '10%', left: '10%', width: { xs: '200px', md: '400px' }, height: { xs: '200px', md: '400px' }, background: 'rgba(37,99,235,0.06)', filter: 'blur(100px)', borderRadius: '50%', zIndex: -1 }} className="float-animation" />
    <Box sx={{ position: 'absolute', bottom: '10%', right: '10%', width: { xs: '150px', md: '300px' }, height: { xs: '150px', md: '300px' }, background: 'rgba(8,145,178,0.06)', filter: 'blur(80px)', borderRadius: '50%', zIndex: -1 }} className="float-animation delay-200" />
    
    <Container maxWidth="md">
      <Chip icon={<RocketLaunch fontSize="small" color="primary"/>} label="Konsultasi SEO & Web Development" variant="outlined" sx={{ mb: 4, px: 2, py: 2.5, fontSize: { xs: '0.8rem', sm: '0.9rem' }, borderColor: 'rgba(37,99,235,0.3)', bgcolor: 'rgba(255,255,255,0.5)', fontWeight: 600 }} />
      <Typography variant="h1" gutterBottom component="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' }, lineHeight: 1.1 }}>
        Tingkatkan <span className="text-gradient">Visibilitas Digital</span> Bisnis Anda
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 6, maxWidth: '90%', mx: 'auto', lineHeight: 1.7, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
        Kami menyediakan aplikasi web premium dan strategi SEO berbasis data untuk membantu bisnis Anda mendominasi pencarian dan menjangkau lebih banyak klien.
      </Typography>
      <Box sx={{ display: 'flex', gap: { xs: 2, sm: 3 }, justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
        <Button variant="contained" color="primary" size="large" href="#services" sx={{ py: 1.5, px: 4, fontSize: '1.1rem' }}>
          Konsultasi Sekarang
        </Button>
        <Button variant="outlined" color="primary" size="large" href="#apps" sx={{ py: 1.5, px: 4, fontSize: '1.1rem' }}>
          Lihat Produk Kami
        </Button>
      </Box>
    </Container>
  </Box>
);

const Services = () => (
  <Box component="section" id="services" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'rgba(241,245,249,0.8)', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
    <Container>
      <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
        <Grid item xs={12} md={6} className="animate-fade-in-up">
          <Typography variant="h2" gutterBottom component="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
            Layanan <span className="text-gradient">Konsultasi Ahli</span>
          </Typography>
          <Typography variant="h4" gutterBottom color="text.primary" sx={{ mt: 2, mb: 2, fontSize: { xs: '1.5rem', md: '1.75rem' } }}>
            SEO & Strategi Digital
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary" sx={{ fontSize: { xs: '1rem', md: '1.15rem' }, lineHeight: 1.8 }}>
            Dominasi peringkat mesin pencari dan dapatkan trafik organik berkualitas tinggi. Tim SijiFy melakukan audit teknis mendalam, perbaikan struktur kode, serta optimasi konten yang secara khusus disesuaikan dengan niche bisnis Anda.
          </Typography>
          <Button variant="contained" color="secondary" size="large" sx={{ mt: 3 }}>
            Tingkatkan Trafik Anda
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="glass-card float-animation delay-200" sx={{ p: { xs: 4, md: 8 }, borderRadius: 6, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
             <TrendingUp sx={{ fontSize: { xs: 80, md: 120 }, color: 'primary.main', mb: 3 }} />
             <Typography variant="h3" component="p" sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}>Berbasis Data</Typography>
             <Typography variant="h6" color="text.secondary" sx={{ mt: 1, fontWeight: 400 }}>Fokus pada Hasil yang Terukur</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

const Products = () => {
  const apps = [
    { title: "SijiFy Analytics", icon: <AutoGraph sx={{ fontSize: 45 }} />, desc: "Pantau trafik website Anda secara real-time dengan wawasan dan analitik mendalam." },
    { title: "SijiFy SpeedBoost", icon: <Speed sx={{ fontSize: 45 }} />, desc: "Optimasi otomatis untuk gambar dan caching yang membuat website Anda memuat dalam hitungan milidetik." },
    { title: "SijiFy CMS", icon: <Storage sx={{ fontSize: 45 }} />, desc: "Sistem manajemen konten cerdas yang dibangun khusus dengan standar SEO tertinggi." }
  ];

  return (
    <Box component="section" id="apps" sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
      <Container>
        <Typography variant="h2" gutterBottom textAlign="center" component="h2" sx={{ mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
          Produk <span className="text-gradient">Unggulan</span>
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 8, fontWeight: 400, maxWidth: '600px', mx: 'auto' }}>
          Kami mengembangkan teknologi modern untuk membantu infrastruktur bisnis Anda.
        </Typography>
        <Grid container spacing={4}>
          {apps.map((app, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className="glass-card animate-fade-in-up" sx={{ height: '100%', display: 'flex', flexDirection: 'column', animationDelay: `${index * 100}ms` }}>
                <Box sx={{ p: 4, pb: 2, display: 'flex', color: 'secondary.main' }} className="float-animation">
                  {app.icon}
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h4" component="h3" sx={{ fontSize: '1.5rem' }}>
                    {app.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mt: 2, lineHeight: 1.6 }}>
                    {app.desc}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button size="medium" color="primary" sx={{ fontWeight: 'bold' }}>Pelajari Lebih Lanjut</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const Articles = () => (
  <Box component="section" id="articles" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'rgba(241,245,249,0.8)' }}>
    <Container>
      <Typography variant="h2" gutterBottom textAlign="center" component="h2" sx={{ mb: 8, fontSize: { xs: '2rem', md: '3rem' } }}>
        Wawasan & <span className="text-gradient">Artikel Terbaru</span>
      </Typography>
      <Grid container spacing={4}>
        {[1, 2, 3, 4].map((item, index) => (
          <Grid item key={item} xs={12} md={6}>
            <Box component="article" className="glass-card animate-fade-in-up" sx={{ display: 'flex', alignItems: 'center', p: 3, borderRadius: 4, animationDelay: `${index * 150}ms` }}>
              <Box sx={{ p: 2.5, color: 'primary.main', bgcolor: 'rgba(37,99,235,0.08)', borderRadius: 3, mr: { xs: 2, sm: 3 } }}>
                <Article sx={{ fontSize: { xs: 30, sm: 40 } }} />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography component="h3" variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: { xs: '1.1rem', sm: '1.25rem' }, lineHeight: 1.4, '&:hover': { color: 'secondary.main', cursor: 'pointer' } }}>
                  {index % 2 === 0 ? "Strategi Modern SEO Pattern Tahun 2026" : "Pentingnya Web Core Vitals untuk Ranking Google"}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" component="time" dateTime="2026-10-12">
                  12 Okt 2026 • 5 menit baca
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 8 }}>
         <Button variant="outlined" color="primary" size="large">Baca Semua Artikel</Button>
      </Box>
    </Container>
  </Box>
);

const Footer = () => (
  <Box component="footer" sx={{ bgcolor: '#0f172a', py: 8, borderTop: '1px solid rgba(0,0,0,0.05)', color: 'white' }}>
    <Container>
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 800, color: 'primary.light' }}>
            SijiFy
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', mb: 2 }}>
            Membangun masa depan digital yang responsif, cepat, dan terindeks dengan sempurna di mesin pencari.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Layanan</Typography>
          <Typography variant="body2" sx={{ mb: 1, color: 'rgba(255,255,255,0.6)', cursor: 'pointer', '&:hover': { color: 'white' } }}>Konsultasi SEO</Typography>
          <Typography variant="body2" sx={{ mb: 1, color: 'rgba(255,255,255,0.6)', cursor: 'pointer', '&:hover': { color: 'white' } }}>Web Development</Typography>
          <Typography variant="body2" sx={{ mb: 1, color: 'rgba(255,255,255,0.6)', cursor: 'pointer', '&:hover': { color: 'white' } }}>UI/UX Design</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Perusahaan</Typography>
          <Typography variant="body2" sx={{ mb: 1, color: 'rgba(255,255,255,0.6)', cursor: 'pointer', '&:hover': { color: 'white' } }}>Tentang Kami</Typography>
          <Typography variant="body2" sx={{ mb: 1, color: 'rgba(255,255,255,0.6)', cursor: 'pointer', '&:hover': { color: 'white' } }}>Hubungi Kami</Typography>
          <Typography variant="body2" sx={{ mb: 1, color: 'rgba(255,255,255,0.6)', cursor: 'pointer', '&:hover': { color: 'white' } }}>Blog & Artikel</Typography>
        </Grid>
      </Grid>
      
      <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', pt: 4, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mb: { xs: 2, sm: 0 } }}>
          {'© '}
          {new Date().getFullYear()}
          {' SijiFy.com. All rights reserved.'}
        </Typography>
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', cursor: 'pointer', '&:hover': { color: 'white' } }}>Privacy Policy</Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', cursor: 'pointer', '&:hover': { color: 'white' } }}>Terms of Service</Typography>
        </Box>
      </Box>
    </Container>
  </Box>
);

function App() {
  return (
    <Box component="main">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Articles />
      <Footer />
    </Box>
  );
}

export default App;
