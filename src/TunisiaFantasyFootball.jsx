import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Download, Star, Users, Trophy, Smartphone, Bell, BarChart3, Zap, Shield, Globe, Sun, Moon, Menu, X } from 'lucide-react';

// Import the logo image (adjust the path based on your project structure)
import Logo from './images/logo.png'; // Adjust path if necessary (e.g., '../assets/logo.png' or '/logo.png' for public folder)
import mockupImage from './images/mock.jpg'; // Adjust path if necessary
const TunisiaFantasyFootball = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stats, setStats] = useState({
    users: 0,
    leagues: 0,
    players: 0,
    points: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate stats
    const targetStats = { users: 50000, leagues: 2500, players: 850, points: 10000000 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStats({
        users: Math.floor(targetStats.users * progress),
        leagues: Math.floor(targetStats.leagues * progress),
        players: Math.floor(targetStats.players * progress),
        points: Math.floor(targetStats.points * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(targetStats);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Ligues Compétitives",
      description: "Créez des ligues privées avec vos amis ou rejoignez des compétitions nationales avec système de récompenses",
      gradient: "from-yellow-400 via-yellow-500 to-yellow-600",
      bgGradient: darkMode ? "from-yellow-900/20 to-yellow-800/20" : "from-yellow-50 to-yellow-100",
      iconBg: darkMode ? "from-yellow-600 to-yellow-700" : "from-yellow-400 to-yellow-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Avancées",
      description: "Statistiques détaillées et analyses prédictives basées sur l'IA pour optimiser vos stratégies",
      gradient: "from-blue-500 via-blue-600 to-blue-700",
      bgGradient: darkMode ? "from-blue-900/20 to-blue-800/20" : "from-blue-50 to-blue-100",
      iconBg: darkMode ? "from-blue-600 to-blue-700" : "from-blue-500 to-blue-700"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Temps Réel",
      description: "Mises à jour instantanées des scores et classements en direct avec notifications intelligentes",
      gradient: "from-emerald-400 via-emerald-500 to-emerald-600",
      bgGradient: darkMode ? "from-emerald-900/20 to-emerald-800/20" : "from-emerald-50 to-emerald-100",
      iconBg: darkMode ? "from-emerald-500 to-emerald-600" : "from-emerald-400 to-emerald-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurisé",
      description: "Plateforme sécurisée avec protection des données personnelles et transactions cryptées",
      gradient: "from-rose-500 via-rose-600 to-pink-600",
      bgGradient: darkMode ? "from-rose-900/20 to-pink-900/20" : "from-rose-50 to-pink-100",
      iconBg: darkMode ? "from-rose-600 to-pink-600" : "from-rose-500 to-pink-600"
    }
  ];

  const appFeatures = [
    "Interface optimisée pour mobile et tablette",
    "Notifications push intelligentes personnalisées", 
    "Mode hors ligne avec synchronisation automatique",
    "Chat en temps réel avec votre ligue",
    "Analyses statistiques avancées avec IA",
    "Système de transferts éclair et alertes"
  ];
const downloadApp = (key) => {
  const link = document.createElement('a');
  link.href = '/app-release.apk'; // Path in public folder
  link.href = '/apk-release.apk'; // path to your file
  link.download = 'apk-release.apk';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  if (key === 'ios') {
    // Redirect to App Store
    const link = document.createElement('a');
    link.href = '/app-release.apk'; // Path in public folder
    link.download = 'app-release.apk'; // File name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);  } 
  else if (key === 'android') {
    // Redirect to Google Play
    const link = document.createElement('a');
    link.href = '/app-release.apk'; // Path in public folder
    link.download = 'app-release.apk'; // File name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);  } 
  else if (key === 'apk') {
    // Direct APK download from public folder
    const link = document.createElement('a');
    link.href = '/app-release.apk'; // Path in public folder
    link.download = 'app-release.apk'; // File name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } 
  else if (key === 'web') {
    // Open web version
    window.open('https://yourwebsite.com', '_blank');
  } 
  else if (key === 'windows') {
    // Download Windows installer
    window.open('/my-windows-installer.exe', '_blank');
  }
};




  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const theme = {
    bg: darkMode ? 'bg-slate-950' : 'bg-gradient-to-br from-slate-50 via-white to-slate-100',
    cardBg: darkMode ? 'bg-slate-900/50 backdrop-blur-sm' : 'bg-white/70 backdrop-blur-sm',
    text: darkMode ? 'text-slate-100' : 'text-slate-900',
    textSecondary: darkMode ? 'text-slate-400' : 'text-slate-700',
    textMuted: darkMode ? 'text-slate-500' : 'text-slate-600',
    border: darkMode ? 'border-slate-800' : 'border-slate-200',
    borderHover: darkMode ? 'border-slate-700' : 'border-slate-300',
    navBg: darkMode ? 'bg-slate-950/95' : 'bg-white/95',
    heroBg: darkMode ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-white via-slate-50 to-blue-50',
    sectionBg: darkMode ? 'bg-slate-900/30' : 'bg-slate-50/50',
    footerBg: darkMode ? 'bg-slate-950' : 'bg-slate-900',
    gradient: darkMode ? 'from-red-600 to-rose-700' : 'from-red-500 to-rose-600',
    shadow: darkMode ? 'shadow-2xl shadow-black/20' : 'shadow-2xl shadow-slate-200/50'
  };

  return (
    <div className={`min-h-screen transition-all duration-700 ${theme.bg}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? `${theme.navBg} backdrop-blur-md ${theme.shadow} ${theme.border} border-b` 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 bg-gradient-to-br ${theme.gradient} rounded-xl flex items-center justify-center ${theme.shadow} transform hover:scale-110 transition-transform duration-300`}>
                <img src={Logo} alt="Fantasy Tunisia Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className={`text-2xl font-bold bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
                Fantasy Tunisia
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={toggleDarkMode}
                className={`p-3 rounded-xl ${theme.cardBg} ${theme.border} border hover:scale-110 transition-all duration-300 ${theme.shadow} group`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-180 transition-transform duration-500" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700 group-hover:-rotate-12 transition-transform duration-500" />
                )}
              </button>
              
   <button
  onClick={() => downloadApp('apk')}  // or 'android' / 'ios' depending on what you want
  className={`bg-gradient-to-r ${theme.gradient} hover:from-red-600 hover:to-rose-700 px-8 py-3 rounded-xl text-white font-semibold ${theme.shadow} hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105`}
>
  Télécharger l'Application
</button>

            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg ${theme.cardBg} ${theme.border} border hover:scale-105 transition-all duration-300`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700" />
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg ${theme.cardBg} ${theme.border} border hover:scale-105 transition-all duration-300`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`md:hidden ${theme.cardBg} backdrop-blur-md rounded-b-2xl border-t ${theme.border} mt-2 p-4 space-y-3`}>
             <button
  onClick={() => downloadApp('apk')}  // or 'android' / 'ios' depending on what you want
  className={`bg-gradient-to-r ${theme.gradient} hover:from-red-600 hover:to-rose-700 px-8 py-3 rounded-xl text-white font-semibold ${theme.shadow} hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105`}
>
  Télécharger l'Application
</button>

            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center justify-center ${theme.heroBg} overflow-hidden`}>
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-red-500/30 to-rose-600/30 rounded-full animate-pulse blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full animate-pulse delay-1000 blur-2xl"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-emerald-500/25 to-teal-600/25 rounded-full animate-pulse delay-500 blur-lg"></div>
          <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-gradient-to-br from-yellow-500/30 to-orange-600/30 rounded-full animate-pulse delay-2000 blur-lg"></div>
          
          {/* Floating Particles */}
          <div className="absolute top-32 right-32 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-32 w-3 h-3 bg-blue-500 rounded-full animate-ping delay-700"></div>
          <div className="absolute top-48 left-48 w-1 h-1 bg-emerald-500 rounded-full animate-ping delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
          
            
            <h1 className={`text-5xl md:text-7xl font-extrabold mb-8 ${theme.text} leading-tight`}>
              Fantasy Football
              <br />
              <span className={`bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent animate-pulse`}>
                Nouvelle Génération
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl ${theme.textSecondary} mb-10 leading-relaxed max-w-4xl mx-auto font-medium`}>
              Découvrez l'expérience fantasy football ultime avec l'intelligence artificielle, 
              les analyses en temps réel et une communauté passionnée de plus de 50,000 managers
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className={`group bg-gradient-to-r ${theme.gradient} hover:from-red-600 hover:to-rose-700 px-10 py-4 rounded-xl text-white font-bold text-lg ${theme.shadow} hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}>
                <span className="flex items-center space-x-3">
                  <Play className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
<button
  onClick={downloadApp}
>
  <span>Télécharger Maintenant </span>
</button>
                </span>
              </button>
              
              <button className={`group border-2 ${theme.borderHover} ${theme.text} hover:border-red-600 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105`}>
                <span className="flex items-center space-x-2">
                  <Play className="w-5 h-5 opacity-60 group-hover:opacity-100" />
                  <span>Regarder la Démo</span>
                </span>
              </button>
            </div>
            
            <div className="animate-bounce">
              <ChevronDown className={`w-10 h-10 ${theme.textMuted} mx-auto opacity-70 hover:opacity-100 transition-opacity cursor-pointer`} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-24 ${theme.sectionBg} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className={`inline-block px-6 py-2 ${theme.cardBg} rounded-full ${theme.border} border ${theme.shadow} mb-6`}>
              <span className={`text-sm font-semibold ${theme.textMuted} uppercase tracking-wide`}>
                ✨ Fonctionnalités Premium
              </span>
            </div>
            <h2 className={`text-4xl md:text-6xl font-bold ${theme.text} mb-8`}>
              Fonctionnalités <span className={`bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>Révolutionnaires</span>
            </h2>
            <p className={`text-xl ${theme.textSecondary} max-w-4xl mx-auto leading-relaxed`}>
              Une plateforme complète qui redéfinit l'expérience fantasy football avec des technologies de pointe 
              et une interface utilisateur exceptionnelle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative ${theme.cardBg} ${theme.border} border-2 hover:${theme.borderHover} rounded-3xl p-8 ${theme.shadow} hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden cursor-pointer`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.iconBg} text-white rounded-2xl flex items-center justify-center mb-6 ${theme.shadow} group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 relative z-10`}>
                  {feature.icon}
                </div>
                <h3 className={`text-2xl font-bold ${theme.text} mb-4 relative z-10 group-hover:text-red-600 transition-colors`}>
                  {feature.title}
                </h3>
                <p className={`${theme.textSecondary} leading-relaxed relative z-10 text-base`}>
                  {feature.description}
                </p>
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-br from-white/5 to-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section id="app" className={`py-24 ${theme.heroBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className={`inline-block px-6 py-2 ${theme.cardBg} rounded-full ${theme.border} border ${theme.shadow} mb-6`}>
                <span className={`text-sm font-semibold ${theme.textMuted} uppercase tracking-wide`}>
                  📱 Application Mobile
                </span>
              </div>
              
              <h2 className={`text-4xl md:text-6xl font-bold ${theme.text} mb-8 leading-tight`}>
                Application Mobile 
                <span className={`bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent block`}>
                  Nouvelle Génération
                </span>
              </h2>
              
              <p className={`text-xl ${theme.textSecondary} mb-10 leading-relaxed`}>
                Gérez votre équipe fantasy où que vous soyez avec une application mobile conçue pour l'excellence, 
                la performance et une expérience utilisateur exceptionnelle.
              </p>

              <div className="space-y-4 mb-12">
                {appFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 group cursor-pointer">
                    <div className={`w-4 h-4 bg-gradient-to-r ${theme.gradient} rounded-full group-hover:scale-125 transition-transform flex-shrink-0`}></div>
                    <span className={`${theme.textSecondary} group-hover:${theme.text} transition-colors font-medium text-lg`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {[
    { key: 'ios', imgSrc: 'https://upload.wikimedia.org/wikipedia/fr/0/09/Logo_App_Store_d%27Apple.png', alt: 'App Store', name: 'App Store', bg: 'from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800' },
    { key: 'android', imgSrc: 'https://freelogopng.com/images/all_img/1664285914google-play-logo-png.png', alt: 'Google Play', name: 'Google Play', bg: 'from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500' },
    { key: 'apk', icon: Download, name: 'APK Direct', bg: 'from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600' }
  ].map((platform) => (
    <button
      key={platform.key}
      onClick={() => downloadApp(platform.key)}
      className={`group bg-gradient-to-r ${platform.bg} text-white px-6 py-4 rounded-2xl flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 ${theme.shadow} hover:shadow-xl`}
    >
      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
        {platform.icon ? (
          <platform.icon className={`w-6 h-6 ${platform.key === 'web' ? 'text-blue-600' : 'text-orange-600'}`} />
        ) : (
          <img src={platform.imgSrc} alt={platform.alt} className="w-6 h-6 object-contain" />
        )}
      </div>
      <div className="text-left">
        <div className="text-xs opacity-75">
          {platform.key === 'apk' ? 'Téléchargement' : platform.key === 'web' ? 'Jouer sur' : platform.key === 'windows' ? 'Télécharger sur' : 'Disponible sur'}
        </div>
        <div className="font-bold text-sm">{platform.name}</div>
      </div>
    </button>
  ))}
</div>

            </div>

            <div className="relative">
              <div className="relative mx-auto w-80 h-160">
                {/* Enhanced Phone Frame */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-[3rem] p-4 shadow-2xl">
                  <div className={`w-full h-full ${theme.cardBg} rounded-[2.5rem] overflow-hidden relative border-4 ${theme.border}`}>
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl"></div>
                    
                    {/* Screen Content */}
              <div className="w-full h-full">
        <img
          src={mockupImage}
          alt="Fantasy Tunisia App Screenshot"
          className="w-full h-full object-cover"
        />
      </div>
                  </div>
                </div>

                {/* Enhanced Floating Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center animate-bounce shadow-2xl">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center animate-pulse shadow-xl">
                  <Bell className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-1/2 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center animate-ping shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section id="stats" className={`py-24 ${darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-2xl mb-6">
              <span className="text-sm font-semibold text-slate-300 uppercase tracking-wide">
                📊 Statistiques Live
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Notre <span className="bg-gradient-to-r from-red-400 via-rose-500 to-pink-500 bg-clip-text text-transparent">Communauté</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Des chiffres impressionnants qui témoignent de notre succès et de la confiance de notre communauté
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: stats.users, label: 'Managers Actifs', suffix: '+', gradient: 'from-red-500 to-rose-600', description: 'Joueurs engagés quotidiennement' },
              { icon: Trophy, value: stats.leagues, label: 'Ligues Créées', suffix: '+', gradient: 'from-blue-500 to-blue-700', description: 'Compétitions en cours' },
              { icon: Globe, value: stats.players, label: 'Joueurs Suivis', suffix: '+', gradient: 'from-emerald-400 to-emerald-600', description: 'Base de données complète' },
              { icon: Star, value: Math.floor(stats.points / 1000000), label: 'Points Marqués', suffix: 'M+', gradient: 'from-yellow-400 to-yellow-600', description: 'Performance collective' }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className={`bg-gradient-to-br ${stat.gradient} w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl group-hover:shadow-3xl`}>
                  <stat.icon className="w-12 h-12 text-white" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                  {stat.value >= 1000000 ? (stat.value / 1000000).toFixed(1) : stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-slate-200 font-bold text-lg mb-2">{stat.label}</div>
                <div className="text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Stats Row */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-slate-300 text-sm">Satisfaction</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm">Taux de satisfaction utilisateur exceptionnel</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">&lt;0.5s</div>
                  <div className="text-slate-300 text-sm">Temps de réponse</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm">Performance ultra-rapide garantie</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-slate-300 text-sm">Support</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm">Assistance disponible en permanence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className={`py-20 ${theme.footerBg} border-t ${darkMode ? 'border-slate-800' : 'border-slate-700'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-14 h-14 bg-gradient-to-br ${theme.gradient} rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300`}>
                  <img src={Logo} alt="Fantasy Tunisia Logo" className="w-10 h-10 object-contain" />
                </div>
                <span className="text-3xl font-bold text-white">Fantasy Tunisia</span>
              </div>
              <p className="text-slate-400 mb-8 max-w-lg text-lg leading-relaxed">
                La plateforme fantasy football nouvelle génération qui révolutionne votre expérience de jeu 
                avec l'IA, les analyses avancées et une communauté passionnée.
              </p>
            </div>
            

            <div>
              <h3 className="text-white font-bold text-xl mb-6">Liens Rapides</h3>
              <div className="space-y-4">
                {['Comment Jouer', 'Règles du Jeu', 'Support', 'FAQ', 'Blog', 'Tutoriels'].map((link, index) => (
                  <a key={index} href="#" className="block text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 text-lg">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold text-xl mb-6">Contact</h3>
              <div className="space-y-4 text-slate-400 text-lg">
                <div className="hover:text-white transition-colors cursor-pointer">
                  <div className="font-semibold">Email</div>
                  <div>support@fantasytunis.tn</div>
                </div>
                <div className="hover:text-white transition-colors cursor-pointer">
                  <div className="font-semibold">Téléphone</div>
                  <div>+216 56 225 115</div>
                </div>
                <div className="hover:text-white transition-colors cursor-pointer">
                  <div className="font-semibold">Adresse</div>
                  <div>Tunis, Tunisie</div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-slate-700 pt-12 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Restez Informé</h3>
              <p className="text-slate-400 text-lg">Recevez les dernières nouvelles et mises à jour</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className={`flex-1 px-6 py-3 rounded-xl ${theme.cardBg} ${theme.border} border ${theme.text} placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300`}
              />
              <button className={`bg-gradient-to-r ${theme.gradient} hover:from-red-600 hover:to-rose-700 px-8 py-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap`}>
                S'abonner
              </button>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-400 text-lg">
              © 2025 Fantasy Tunisia Football. Tous droits réservés. 
              <span className="text-red-500 mx-2">❤️</span> 
              Conçu avec passion en Tunisie.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-4 text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">Conditions d'Utilisation</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
              <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .h-160 {
          height: 40rem;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${darkMode ? '#1e293b' : '#f1f5f9'};
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${darkMode ? '#475569' : '#cbd5e1'};
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: ${darkMode ? '#64748b' : '#94a3b8'};
        }

        /* Enhanced focus states */
        button:focus,
        input:focus,
        a:focus {
          outline: 2px solid #d00404ff;
          outline-offset: 2px;
        }

        /* Improved mobile touch targets */
        @media (max-width: 768px) {
          button {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </div>
  );
};

export default TunisiaFantasyFootball;