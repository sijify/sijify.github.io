import React, { useEffect, useState, useRef } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyDgpi76NDcpAr6mZWL3c61eRJkU8tr8C1c",
  authDomain: "sijifymedia.firebaseapp.com",
  databaseURL: "https://sijifymedia-default-rtdb.firebaseio.com",
  projectId: "sijifymedia",
  storageBucket: "sijifymedia.firebasestorage.app",
  messagingSenderId: "136295398105",
  appId: "1:136295398105:web:998d66e00432fcefa89cc8",
  measurementId: "G-GH4PQ87FBM"
};

export default function Login() {
  const [status, setStatus] = useState({ show: false, success: false, html: '' });
  const [showLoginContainer, setShowLoginContainer] = useState(true);
  const authRef = useRef(null);

  function showStatus(htmlContent, isSuccess) {
    setStatus({
      show: true,
      success: isSuccess,
      html: htmlContent
    });
  }

  function startAutoRedirect(auth) {
    const hasTried = sessionStorage.getItem('sijify_auth_attempted');
    if (!hasTried) {
      sessionStorage.setItem('sijify_auth_attempted', 'true');
      showStatus('<div class="spinner" style="margin-bottom:8px;"></div><br>Mengalihkan ke halaman login Google...', true);
      const provider = new window.firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      auth.signInWithRedirect(provider);
    }
  }

  async function handleAuthSuccess(user, callbackUrl) {
    let idToken = "";
    try {
      idToken = await user.getIdToken();
    } catch (tokenErr) {
      console.warn("Failed to get idToken:", tokenErr);
    }

    const payload = {
      displayName: user.displayName || (user.email ? user.email.split('@')[0] : 'User'),
      email: user.email || '',
      photoURL: user.photoURL || '',
      uid: user.uid,
      idToken: idToken
    };

    if (callbackUrl) {
      try {
        await fetch(callbackUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.warn("Could not post to local callback directly:", err);
      }
    }

    showStatus(`
      <img class="avatar" src="${payload.photoURL}" alt="User Avatar" onerror="this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 24 24\\' fill=\\'%236366f1\\'><path d=\\'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z\\'/></svg>'"/>
      <div style="font-weight: 700; font-size: 16px; color: #ffffff; margin-bottom: 2px;">Halo, ${payload.displayName}!</div>
      <div style="color: #9ca3af; margin-bottom: 12px; font-size: 13px;">${payload.email}</div>
      <div style="color: #34d399; font-weight: 600; font-size: 15px;">🎉 Login Berhasil!</div>
      <div style="font-size: 12px; color: #6b7280; margin-top: 8px;">Akun telah terhubung dengan SijiFy Management Account.<br>Anda dapat menutup tab ini dan kembali ke aplikasi.</div>
    `, true);
    setShowLoginContainer(false);
  }

  function doGoogleLogin() {
    sessionStorage.removeItem('sijify_auth_attempted');
    const auth = authRef.current || (window.firebase && window.firebase.auth());
    if (auth) {
      const provider = new window.firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      showStatus('<div class="spinner" style="margin-bottom:8px;"></div><br>Mengalihkan ke halaman login Google...', true);
      auth.signInWithRedirect(provider);
    }
  }

  useEffect(() => {
    let isMounted = true;

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(script);
      });
    };

    const initFirebase = async () => {
      try {
        if (!window.firebase) {
          await loadScript("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
          await loadScript("https://www.gstatic.com/firebasejs/10.8.0/firebase-auth-compat.js");
          await loadScript("https://www.gstatic.com/firebasejs/10.8.0/firebase-database-compat.js");
        }

        if (!window.firebase.apps.length) {
          window.firebase.initializeApp(firebaseConfig);
        }

        const auth = window.firebase.auth();
        authRef.current = auth;

        const urlParams = new URLSearchParams(window.location.search);
        const callbackUrl = urlParams.get('callback');
        const autoRedirectParam = urlParams.get('auto') || urlParams.get('autologin');

        auth.getRedirectResult().then(async (result) => {
          if (!isMounted) return;
          if (result && result.user) {
            sessionStorage.removeItem('sijify_auth_attempted');
            await handleAuthSuccess(result.user, callbackUrl);
            return;
          }
          if (auth.currentUser) {
            sessionStorage.removeItem('sijify_auth_attempted');
            await handleAuthSuccess(auth.currentUser, callbackUrl);
            return;
          }

          if (autoRedirectParam === 'true') {
            startAutoRedirect(auth);
          }
        }).catch((err) => {
          if (!isMounted) return;
          console.error("Redirect result error:", err);
          sessionStorage.removeItem('sijify_auth_attempted');
          showStatus("⚠️ Gagal login: " + err.message, false);
        });
      } catch (err) {
        if (isMounted) {
          console.error("Initialization error:", err);
          showStatus("⚠️ Gagal inisialisasi Firebase: " + err.message, false);
        }
      }
    };

    initFirebase();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div style={styles.bodyWrapper}>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
      <div style={styles.card}>
        <div style={styles.logo}>S</div>
        <h1 style={styles.h1}>SijiFy Management</h1>
        <p style={styles.p}>Otentikasi Akun Google untuk Aplikasi SijiFy Desktop</p>
        
        {showLoginContainer && (
          <div id="login-container">
            <button style={styles.btnGoogle} id="btn-login" onClick={doGoogleLogin}>
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              Lanjutkan dengan Google
            </button>
          </div>
        )}

        {status.show && (
          <div
            className={`status-box ${status.success ? 'success' : 'error'}`}
            style={{
              ...styles.statusBox,
              ...(status.success ? styles.statusSuccess : styles.statusError)
            }}
            dangerouslySetInnerHTML={{ __html: status.html }}
          />
        )}
      </div>
    </div>
  );
}

const styles = {
  bodyWrapper: {
    backgroundColor: '#080c14',
    color: '#f3f4f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
  },
  card: {
    background: 'rgba(15, 23, 42, 0.95)',
    border: '1px solid rgba(99, 102, 241, 0.35)',
    borderRadius: '24px',
    padding: '44px 36px',
    maxWidth: '440px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(99, 102, 241, 0.15)',
    backdropFilter: 'blur(12px)'
  },
  logo: {
    width: '70px',
    height: '70px',
    margin: '0 auto 24px',
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Outfit', sans-serif",
    fontSize: '32px',
    fontWeight: 800,
    color: '#ffffff',
    boxShadow: '0 12px 24px -4px rgba(99, 102, 241, 0.5)'
  },
  h1: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '24px',
    fontWeight: 700,
    marginBottom: '8px',
    color: '#ffffff',
    letterSpacing: '-0.02em'
  },
  p: {
    fontSize: '14px',
    color: '#9ca3af',
    marginBottom: '32px',
    lineHeight: 1.6
  },
  btnGoogle: {
    background: '#ffffff',
    color: '#1f2937',
    border: 'none',
    padding: '14px 24px',
    borderRadius: '14px',
    fontSize: '15px',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    width: '100%',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
  },
  statusBox: {
    marginTop: '24px',
    padding: '24px',
    borderRadius: '18px',
    fontSize: '14px',
    textAlign: 'center'
  },
  statusSuccess: {
    background: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid rgba(16, 185, 129, 0.35)',
    color: '#34d399'
  },
  statusError: {
    background: 'rgba(239, 68, 68, 0.1)',
    border: '1px solid rgba(239, 68, 68, 0.35)',
    color: '#f87171'
  }
};
