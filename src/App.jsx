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
  Divider,
  Avatar
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Close as CloseIcon, 
  Code, 
  TrendingUp, 
  Article, 
  Speed, 
  Storage, 
  AutoGraph, 
  RocketLaunch,
  CheckCircle,
  Search,
  Web,
  DesignServices
} from '@mui/icons-material';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { label: 'Beranda', href: '#' },
    { label: 'Layanan', href: '#services' },
    { label: 'Produk', href: '#apps' },
    { label: 'Artikel', href: '#articles' }
  ];

  return (
    <>
      <AppBar position="fixed" elevation={0} component="nav" sx={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 80 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
              <Box sx={{ width: 40, height: 40, borderRadius: '12px', background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 900, fontSize: '1.2rem' }}>
                SF
              </Box>
              <Typography variant="h5" component="div" sx={{ fontWeight: 800, letterSpacing: 0.5, color: '#0f172a' }}>
                SijiFy
              </Typography>
            </Box>
            
            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Typography key={item.label} component="a" href={item.href} sx={{ fontWeight: 600, color: 'text.secondary', textDecoration: 'none', transition: '0.2s', '&:hover': { color: 'primary.main' } }}>
                  {item.label}
                </Typography>
              ))}
              <Button variant="contained" color="primary" sx={{ ml: 2, boxShadow: 'none' }}>Konsultasi Gratis</Button>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton color="inherit" aria-label="Buka menu" edge="end" onClick={handleDrawerToggle} sx={{ display: { md: 'none' }, color: '#0f172a' }}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ width: 280, p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>Menu SijiFy</Typography>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
                <ListItemButton component="a" href={item.href} onClick={handleDrawerToggle} sx={{ borderRadius: 2 }}>
                  <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600, fontSize: '1.1rem' }} />
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ my: 3 }} />
            <ListItem disablePadding>
              <Button variant="contained" color="primary" fullWidth size="large" sx={{ py: 1.5 }}>Hubungi Kami</Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

const Hero = () => (
  <Box component="header" sx={{ pt: { xs: 18, md: 24 }, pb: { xs: 12, md: 18 }, textAlign: 'center', position: 'relative', overflow: 'hidden' }} className="animate-fade-in-up">
    {/* Decorative background blur elements */}
    <Box sx={{ position: 'absolute', top: '5%', left: '15%', width: { xs: '250px', md: '500px' }, height: { xs: '250px', md: '500px' }, background: 'rgba(37,99,235,0.05)', filter: 'blur(80px)', borderRadius: '50%', zIndex: -1 }} className="float-animation" />
    <Box sx={{ position: 'absolute', bottom: '5%', right: '15%', width: { xs: '200px', md: '400px' }, height: { xs: '200px', md: '400px' }, background: 'rgba(8,145,178,0.05)', filter: 'blur(80px)', borderRadius: '50%', zIndex: -1 }} className="float-animation delay-200" />
    
    <Container maxWidth="lg">
      <Chip icon={<RocketLaunch fontSize="small" style={{ color: '#2563eb' }}/>} label="Agensi Teknologi & SEO Terpercaya" variant="outlined" sx={{ mb: 4, px: 2, py: 2.5, fontSize: { xs: '0.85rem', sm: '1rem' }, borderColor: 'rgba(37,99,235,0.2)', bgcolor: 'rgba(255,255,255,0.8)', fontWeight: 700, color: '#1e40af' }} />
      
      <Typography variant="h1" gutterBottom component="h1" sx={{ fontSize: { xs: '2.5rem', sm: '3.8rem', md: '4.8rem' }, lineHeight: 1.15, maxWidth: '900px', mx: 'auto' }}>
        Solusi Cerdas untuk <br />
        <span className="text-gradient">Pertumbuhan Digital</span> Anda
      </Typography>
      
      <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 6, maxWidth: '750px', mx: 'auto', lineHeight: 1.8, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
        SijiFy adalah mitra strategis Anda dalam pengembangan aplikasi web berkinerja tinggi dan optimasi mesin pencari (SEO). Kami memastikan bisnis Anda ditemukan oleh audiens yang tepat.
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' }, px: { xs: 2, sm: 0 } }}>
        <Button variant="contained" color="primary" size="large" href="#services" sx={{ py: 1.8, px: 5, fontSize: '1.1rem', borderRadius: 2 }}>
          Mulai Konsultasi
        </Button>
        <Button variant="outlined" color="primary" size="large" href="#apps" sx={{ py: 1.8, px: 5, fontSize: '1.1rem', borderRadius: 2, bgcolor: 'rgba(255,255,255,0.8)' }}>
          Lihat Portofolio
        </Button>
      </Box>

      <Box sx={{ mt: 8, pt: 6, borderTop: '1px solid rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 3, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>Fokus Keahlian Kami</Typography>
        <Box sx={{ display: 'flex', gap: { xs: 2, md: 5 }, flexWrap: 'wrap', justifyContent: 'center' }}>
          {['Technical SEO', 'React & Web Apps', 'Page Speed', 'UI/UX Design'].map((skill) => (
            <Box key={skill} sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#0f172a', fontWeight: 600 }}>
              <CheckCircle color="secondary" fontSize="small" />
              <Typography variant="body1" fontWeight={600}>{skill}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  </Box>
);

const Services = () => {
  const servicesList = [
    { title: 'Konsultasi & Audit SEO', icon: <Search sx={{ fontSize: 40 }}/>, desc: 'Analisis mendalam terhadap struktur website Anda untuk menemukan celah teknis dan merumuskan strategi peringkat nomor satu di Google.' },
    { title: 'Pengembangan Web', icon: <Web sx={{ fontSize: 40 }}/>, desc: 'Pembuatan website profil perusahaan hingga aplikasi web kompleks dengan React yang sangat cepat, aman, dan mudah diskalakan.' },
    { title: 'Optimasi Kecepatan', icon: <Speed sx={{ fontSize: 40 }}/>, desc: 'Perbaikan skor Core Web Vitals. Kami membuat website Anda memuat dalam hitungan milidetik untuk menekan bounce rate.' },
    { title: 'Desain UI / UX', icon: <DesignServices sx={{ fontSize: 40 }}/>, desc: 'Perancangan antarmuka yang tidak hanya indah secara visual, tetapi juga memberikan kenyamanan maksimal bagi pengguna akhir.' },
  ];

  return (
    <Box component="section" id="services" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'white', position: 'relative' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8, maxWidth: '700px', mx: 'auto' }} className="animate-fade-in-up">
          <Typography variant="subtitle2" color="primary.main" sx={{ fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', mb: 1 }}>
            Layanan Kami
          </Typography>
          <Typography variant="h2" gutterBottom component="h2" sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, color: '#0f172a' }}>
            Solusi Menyeluruh untuk <span className="text-gradient">Bisnis Anda</span>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
            Dari perencanaan strategi hingga eksekusi kode, kami menyediakan layanan terpadu untuk memastikan kehadiran digital Anda mendominasi kompetisi.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {servicesList.map((srv, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box className="glass-card animate-fade-in-up" sx={{ p: 5, borderRadius: 4, height: '100%', animationDelay: `${index * 150}ms`, transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: '0 12px 30px rgba(37,99,235,0.08)' } }}>
                <Box sx={{ width: 70, height: 70, borderRadius: 3, bgcolor: 'rgba(37,99,235,0.08)', color: 'primary.main', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
                  {srv.icon}
                </Box>
                <Typography variant="h4" component="h3" sx={{ fontSize: '1.4rem', mb: 2, color: '#0f172a' }}>
                  {srv.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {srv.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const Products = () => {
  const apps = [
    { title: "SijiFy Analytics Core", label: "Software", icon: <AutoGraph sx={{ fontSize: 45 }} />, desc: "Aplikasi pantauan trafik cerdas. Dapatkan insight pengunjung secara real-time tanpa mengorbankan privasi data klien Anda." },
    { title: "SijiFy SEO Optimizer", label: "Plugin", icon: <TrendingUp sx={{ fontSize: 45 }} />, desc: "Alat bantu optimasi meta tag, pembuatan sitemap otomatis, dan analisis konten on-page berbasis kecerdasan buatan (AI)." },
    { title: "SijiFy Headless CMS", label: "Platform", icon: <Storage sx={{ fontSize: 45 }} />, desc: "Sistem manajemen konten masa depan. Kelola artikel dan halaman Anda dari satu dashboard terpusat yang super cepat." }
  ];

  return (
    <Box component="section" id="apps" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#f8fafc', borderTop: '1px solid rgba(0,0,0,0.03)', borderBottom: '1px solid rgba(0,0,0,0.03)' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'flex-end' }, mb: 8 }} className="animate-fade-in-up">
          <Box sx={{ maxWidth: '600px' }}>
            <Typography variant="subtitle2" color="secondary.main" sx={{ fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', mb: 1 }}>
              Produk Digital
            </Typography>
            <Typography variant="h2" gutterBottom component="h2" sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, mb: 2, color: '#0f172a' }}>
              Ekosistem <span className="text-gradient">Aplikasi</span> SijiFy
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              Selain jasa konsultasi, kami juga mengembangkan *tools* internal berlisensi yang siap pakai untuk menunjang performa infrastruktur web Anda.
            </Typography>
          </Box>
          <Button variant="outlined" color="primary" sx={{ mt: { xs: 3, md: 0 }, py: 1.5, px: 3 }}>Lihat Semua Produk</Button>
        </Box>

        <Grid container spacing={4}>
          {apps.map((app, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card className="glass-card animate-fade-in-up" sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 4, animationDelay: `${index * 150}ms` }}>
                <Box sx={{ p: 4, pb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ width: 64, height: 64, borderRadius: 3, bgcolor: 'white', color: 'secondary.main', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    {app.icon}
                  </Box>
                  <Chip label={app.label} size="small" sx={{ bgcolor: 'rgba(37,99,235,0.1)', color: 'primary.dark', fontWeight: 700 }} />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 4, pt: 2 }}>
                  <Typography gutterBottom variant="h4" component="h3" sx={{ fontSize: '1.3rem', mb: 2, color: '#0f172a' }}>
                    {app.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {app.desc}
                  </Typography>
                </CardContent>
                <Divider />
                <CardActions sx={{ p: 3 }}>
                  <Button size="medium" color="primary" sx={{ fontWeight: 700 }}>Pelajari Lebih Lanjut &rarr;</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const Articles = () => {
  const posts = [
    { title: "Panduan Lengkap Core Web Vitals untuk SEO 2026", desc: "Pelajari cara mengoptimalkan LCP, FID, dan CLS untuk mendapatkan peringkat halaman pertama di Google.", cat: "SEO", read: "8 Min", author: "Budi Santoso", date: "15 Okt 2026", img: "linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(37,99,235,0.02) 100%)" },
    { title: "Mengapa React Adalah Pilihan Tepat untuk Web Skala Besar", desc: "Arsitektur komponen dan ekosistem React membuatnya ideal untuk membangun web aplikasi tingkat enterprise.", cat: "Development", read: "5 Min", author: "SijiFy Team", date: "10 Okt 2026", img: "linear-gradient(135deg, rgba(8,145,178,0.1) 0%, rgba(8,145,178,0.02) 100%)" },
    { title: "Studi Kasus: Meningkatkan Trafik Organik 300% dalam 3 Bulan", desc: "Bagaimana tim kami membantu perusahaan finansial melipatgandakan pengunjung lewat optimasi on-page.", cat: "Case Study", read: "12 Min", author: "Andi Wijaya", date: "02 Okt 2026", img: "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(8,145,178,0.02) 100%)" },
  ];

  return (
    <Box component="section" id="articles" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Typography variant="subtitle2" textAlign="center" color="primary.main" sx={{ fontWeight: 800, letterSpacing: 1, textTransform: 'uppercase', mb: 1 }}>
          Blog & Wawasan
        </Typography>
        <Typography variant="h2" gutterBottom textAlign="center" component="h2" sx={{ mb: 2, fontSize: { xs: '2.2rem', md: '3rem' }, color: '#0f172a' }}>
          Pelajari <span className="text-gradient">Tren Teknologi</span> Terkini
        </Typography>
        <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 8, maxWidth: '600px', mx: 'auto', fontSize: '1.1rem' }}>
          Artikel, panduan, dan studi kasus terbaru dari pakar industri untuk membantu Anda tetap berada di depan kompetitor.
        </Typography>

        <Grid container spacing={4}>
          {posts.map((post, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Box component="article" className="glass-card animate-fade-in-up" sx={{ display: 'flex', flexDirection: 'column', borderRadius: 4, overflow: 'hidden', height: '100%', animationDelay: `${index * 150}ms`, border: '1px solid rgba(0,0,0,0.06)', transition: '0.3s', '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 12px 30px rgba(37,99,235,0.1)' } }}>
                {/* Image Placeholder */}
                <Box sx={{ height: 160, background: post.img, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                  <Article sx={{ fontSize: 50, color: 'primary.main', opacity: 0.4 }} />
                  <Chip label={post.cat} size="small" sx={{ position: 'absolute', top: 12, left: 12, bgcolor: 'white', color: 'primary.main', fontWeight: 700, fontSize: '0.75rem', height: 24, boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }} />
                </Box>
                
                <Box sx={{ p: 3, pt: 2.5, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', gap: 2, mb: 1.5 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      ⏱ {post.read} Baca
                    </Typography>
                  </Box>
                  <Typography component="h3" variant="h6" sx={{ fontWeight: 700, mb: 1.5, fontSize: '1.1rem', lineHeight: 1.4, color: '#0f172a', '&:hover': { color: 'primary.main', cursor: 'pointer' } }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6, flexGrow: 1, fontSize: '0.9rem' }}>
                    {post.desc}
                  </Typography>
                  
                  <Divider sx={{ mb: 2.5 }} />
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.light', fontSize: '0.9rem', fontWeight: 600 }}>{post.author[0]}</Avatar>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#0f172a', fontSize: '0.85rem' }}>{post.author}</Typography>
                        <Typography variant="caption" color="text.secondary">{post.date}</Typography>
                      </Box>
                    </Box>
                    <Typography variant="button" sx={{ color: 'primary.main', fontWeight: 700, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>
                      Baca &rarr;
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 8 }}>
           <Button variant="outlined" color="primary" size="large" sx={{ py: 1.5, px: 5, borderRadius: 2, fontWeight: 700 }}>Lihat Semua Artikel</Button>
        </Box>
      </Container>
    </Box>
  );
};

const Footer = () => (
  <Box component="footer" sx={{ bgcolor: '#0f172a', pt: 10, pb: 4, color: 'white' }}>
    <Container maxWidth="lg">
      <Grid container spacing={6} sx={{ mb: 8 }}>
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' }, mb: 3 }}>
            <Box sx={{ width: 35, height: 35, borderRadius: '8px', background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 900 }}>
              SF
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: 0.5 }}>
              SijiFy
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3, lineHeight: 1.8 }}>
            SijiFy adalah agensi digital terdepan yang berfokus pada pengembangan website modern dan optimasi mesin pencari organik.
          </Typography>
          <Button variant="contained" color="primary" size="small" sx={{ borderRadius: 2 }}>Mulai Proyek Anda</Button>
        </Grid>
        <Grid item xs={12} sm={4} md={2} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: 'white' }}>Layanan</Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.6)', cursor: 'pointer', '&:hover': { color: 'primary.light' } }}>Audit & Konsultasi SEO</Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.6)', cursor: 'pointer', '&:hover': { color: 'primary.light' } }}>Pengembangan Web</Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.6)', cursor: 'pointer', '&:hover': { color: 'primary.light' } }}>Optimasi Kecepatan</Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.6)', cursor: 'pointer', '&:hover': { color: 'primary.light' } }}>Desain UI/UX</Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: 'white' }}>Produk</Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.6)', cursor: 'pointer', '&:hover': { color: 'primary.light' } }}>SijiFy Analytics Core</Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.6)', cursor: 'pointer', '&:hover': { color: 'primary.light' } }}>SijiFy SEO Optimizer</Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.6)', cursor: 'pointer', '&:hover': { color: 'primary.light' } }}>SijiFy Headless CMS</Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: 'white' }}>Perusahaan</Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.6)', cursor: 'pointer', '&:hover': { color: 'primary.light' } }}>Tentang SijiFy</Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.6)', cursor: 'pointer', '&:hover': { color: 'primary.light' } }}>Blog & Artikel Baru</Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.6)', cursor: 'pointer', '&:hover': { color: 'primary.light' } }}>Hubungi Tim Kami</Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.6)', cursor: 'pointer', '&:hover': { color: 'primary.light' } }}>Karir</Typography>
        </Grid>
      </Grid>
      
      <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', pt: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', mb: { xs: 2, md: 0 } }}>
          {'© '}
          {new Date().getFullYear()}
          {' SijiFy.com. All rights reserved.'}
        </Typography>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', cursor: 'pointer', '&:hover': { color: 'white' } }}>Kebijakan Privasi</Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', cursor: 'pointer', '&:hover': { color: 'white' } }}>Syarat & Ketentuan</Typography>
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
