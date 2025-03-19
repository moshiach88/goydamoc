import React from 'react';
import { Globe, Send, Instagram, Youtube, Rocket, Gift, CreditCard } from 'lucide-react';

function App() {
  return (
    <div 
      className="min-h-screen flex flex-col items-center p-6"
      style={{
        backgroundImage: 'url(https://i.imgur.com/b11OAzN.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-md w-full space-y-8 mt-10">
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <div className="w-64 h-48 overflow-hidden border-4 border-white/20 mb-4 rounded-lg shadow-lg">
            <img
              src="https://i.imgur.com/WrmMhnt.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold mb-2 text-white drop-shadow-lg">ТЕНЬ_KICK</h1>
          <p className="text-sm text-center text-white mb-8 drop-shadow">
            Найдите меня в социальных сетях<br />
            Find me on social media
          </p>
        </div>

        {/* Social Networks Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-white drop-shadow-lg">Социальные сети / Social Networks</h2>
          
          <a href="#" className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all shadow-lg text-white">
            <Send className="w-6 h-6 mr-3" />
            <span>Telegram</span>
          </a>

          <a href="#" className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all shadow-lg text-white">
            <Instagram className="w-6 h-6 mr-3" />
            <span>Instagram</span>
          </a>

          <a href="#" className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all shadow-lg text-white">
            <Youtube className="w-6 h-6 mr-3" />
            <span>YouTube</span>
          </a>

          <a href="#" className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all shadow-lg text-white">
            <Rocket className="w-6 h-6 mr-3" />
            <span>Boosty</span>
          </a>

          <a href="#" className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all shadow-lg text-white">
            <Globe className="w-6 h-6 mr-3" />
            <span>Kick</span>
          </a>
        </div>

        {/* Support Section */}
        <div className="space-y-4 mt-8">
          <h2 className="text-xl font-semibold mb-4 text-white drop-shadow-lg">Поддержать / Support</h2>

          <a href="#" className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all shadow-lg text-white">
            <Gift className="w-6 h-6 mr-3" />
            <span>DonationAlerts</span>
          </a>

          <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg text-white">
            <CreditCard className="w-6 h-6 mr-3" />
            <div className="flex flex-col">
              <span>Тинькофф</span>
              <span className="text-sm opacity-80">2200 7012 8114 6208</span>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg text-white">
            <CreditCard className="w-6 h-6 mr-3" />
            <div className="flex flex-col">
              <span>Сбербанк</span>
              <span className="text-sm opacity-80">2202 2063 4755 8749</span>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg text-white">
            <CreditCard className="w-6 h-6 mr-3" />
            <div className="flex flex-col">
              <span>USDT (TRC20)</span>
              <span className="text-sm opacity-80 break-all">TXFuncwgA27bdpxjAENxvgFz3lrgBqBY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;