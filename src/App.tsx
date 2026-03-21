/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

type Page = 'home' | 'backgrounds' | 'ryun' | 'muya' | 'ran' | 'soha';

type CharacterData = {
  name: string;
  familyBgName: string;
  familyBgUrl: string;
  images: string[];
};

const characters: Record<string, CharacterData> = {
  ryun: {
    name: "황보 륜 (皇甫 倫)",
    familyBgName: "비휴가 정원",
    familyBgUrl: "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/BG_11.webp",
    images: [
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/A_1.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/A_2.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/A_3.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/A_4.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/A_5.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/A_6.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/A_7.webp",
    ]
  },
  muya: {
    name: "백 무야 (白 無夜)",
    familyBgName: "은호가 연못",
    familyBgUrl: "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/BG_12.webp",
    images: [
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/B_1.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/B_2.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/B_3.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/B_4.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/B_5.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/B_6.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/B_7.webp",
    ]
  },
  ran: {
    name: "당 란 (唐 爛)",
    familyBgName: "청룡가 서재",
    familyBgUrl: "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/BG_13.webp",
    images: [
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/C_1.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/C_2.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/C_3.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/C_4.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/C_5.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/C_6.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/C_7.webp",
    ]
  },
  soha: {
    name: "연 소하 (燕 素河)",
    familyBgName: "주작가 연무장",
    familyBgUrl: "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/BG_14.webp",
    images: [
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/D_1.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/D_2.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/D_3.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/D_4.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/D_5.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/D_6.webp",
      "https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/D_7.webp",
    ]
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: Page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen w-full max-w-5xl mx-auto px-4 py-8 md:py-12">
      <AnimatePresence mode="wait">
        {currentPage === 'home' && <HomePage key="home" onNavigate={navigate} />}
        {currentPage === 'backgrounds' && <BackgroundsPage key="backgrounds" onNavigate={navigate} />}
        {currentPage === 'ryun' && <CharacterPage key="ryun" data={characters.ryun} onNavigate={navigate} />}
        {currentPage === 'muya' && <CharacterPage key="muya" data={characters.muya} onNavigate={navigate} />}
        {currentPage === 'ran' && <CharacterPage key="ran" data={characters.ran} onNavigate={navigate} />}
        {currentPage === 'soha' && <CharacterPage key="soha" data={characters.soha} onNavigate={navigate} />}
      </AnimatePresence>
    </div>
  );
}

function NavigationButton({ onClick, className = "" }: { onClick: () => void, className?: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 text-accent-pink hover:text-title-pink transition-colors duration-300 group cursor-pointer ${className}`}
    >
      <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
      <span className="font-serif text-lg">홈으로 가기</span>
    </button>
  );
}

function HomePage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-16"
    >
      <header className="text-center space-y-4 mt-8 mb-4">
        <h1 className="text-5xl md:text-6xl font-serif text-title-gold tracking-widest drop-shadow-lg">입술 도둑</h1>
        <p className="text-xl text-title-pink font-serif tracking-widest opacity-90">이미지 모음</p>
        <p className="text-sm text-text-soft/70 font-sans mt-2 animate-pulse">이미지를 클릭 해주세요!</p>
      </header>

      {/* Background Banner */}
      <section>
        <h2 className="text-2xl font-serif text-title-pink mb-6 border-b border-white/10 pb-3 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent-pink"></span>
          배경 갤러리
        </h2>
        <div 
          className="relative w-full aspect-[7/1] cursor-pointer overflow-hidden rounded-2xl group shadow-2xl shadow-black/50 bg-black/40 flex items-center justify-center border border-white/5"
          onClick={() => onNavigate('backgrounds')}
        >
          <img 
            src="https://raw.githubusercontent.com/goombenge443-svg/sk/refs/heads/main/ba.webp" 
            alt="배경 이미지 배너" 
            className="w-full h-full transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-colors duration-500 group-hover:bg-black/30">
            <span className="text-2xl md:text-4xl font-serif text-white tracking-[0.2em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">배경 이미지 모음</span>
          </div>
        </div>
      </section>

      {/* Character Grid */}
      <section>
        <h2 className="text-2xl font-serif text-title-pink mb-6 border-b border-white/10 pb-3 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent-pink"></span>
          인물 갤러리
        </h2>
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {[
            { id: 'ryun', name: '륜', imgUrl: 'https://raw.githubusercontent.com/goombenge443-svg/sk/refs/heads/main/G1_lapsrn_x2.webp' },
            { id: 'muya', name: '무야', imgUrl: 'https://raw.githubusercontent.com/goombenge443-svg/sk/refs/heads/main/G2_lapsrn_x2.webp' },
            { id: 'ran', name: '란', imgUrl: 'https://raw.githubusercontent.com/goombenge443-svg/sk/refs/heads/main/G3_lapsrn_x2.webp' },
            { id: 'soha', name: '소하', imgUrl: 'https://raw.githubusercontent.com/goombenge443-svg/sk/refs/heads/main/G4_lapsrn_x2.webp' },
          ].map((char) => (
            <div 
              key={char.id}
              className="relative w-full aspect-[2/3] cursor-pointer overflow-hidden rounded-2xl group shadow-2xl shadow-black/50 bg-black/40 flex items-center justify-center border border-white/5"
              onClick={() => onNavigate(char.id as Page)}
            >
              <img 
                src={char.imgUrl} 
                alt={`${char.name} 배너`} 
                className="w-full h-full transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end justify-center pb-8 md:pb-12 transition-opacity duration-500">
                <span className="text-3xl md:text-5xl font-serif text-title-gold tracking-[0.3em] drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] ml-2">{char.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

function BackgroundsPage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const backgrounds = [
    { id: 1, name: '창활원', imgUrl: 'https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/BG_8.webp' },
    { id: 2, name: '저잣거리', imgUrl: 'https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/BG_9.webp' },
    { id: 3, name: '수련의 숲', imgUrl: 'https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/BG_10.webp' },
    { id: 4, name: '천목영 세가', imgUrl: 'https://raw.githubusercontent.com/gbe-gif/s/refs/heads/main/BG_15.webp' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-title-gold mb-6 tracking-widest">배경 이미지 모음</h1>
        <p className="text-text-soft/80 text-lg">이야기가 펼쳐지는 주요 무대들</p>
      </header>

      <div className="flex flex-col gap-20 md:gap-32">
        {backgrounds.map((bg) => (
          <section key={bg.id} className="flex flex-col items-center gap-6">
            <h3 className="text-3xl font-serif text-title-pink tracking-wider flex items-center gap-4">
              <span className="w-12 h-[1px] bg-title-pink/50"></span>
              {bg.name}
              <span className="w-12 h-[1px] bg-title-pink/50"></span>
            </h3>
            <div className="w-full bg-black/30 rounded-2xl p-4 md:p-6 shadow-2xl border border-white/5">
              <img 
                src={bg.imgUrl} 
                alt={bg.name}
                className="w-full rounded-xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </section>
        ))}
      </div>

      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50">
        <NavigationButton onClick={() => onNavigate('home')} className="bg-black/80 backdrop-blur-md px-5 py-3 md:px-6 md:py-3 rounded-full border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:bg-black hover:scale-105 transition-all" />
      </div>
    </motion.div>
  );
}

function CharacterPage({ data, onNavigate }: { data: CharacterData, onNavigate: (page: Page) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <header className="mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-serif text-title-gold mb-6 tracking-widest">{data.name}</h1>
      </header>

      <div className="flex flex-col gap-24">
        {/* Family Background */}
        <section className="flex flex-col items-center gap-6">
          <h2 className="text-2xl text-text-soft/90 border-b border-white/10 pb-4 w-full text-center font-serif tracking-widest">가문 배경</h2>
          <div className="w-full bg-black/30 rounded-2xl p-4 md:p-6 shadow-2xl border border-white/5">
            <img 
              src={data.familyBgUrl} 
              alt={`${data.familyBgName} 배경`}
              className="w-full rounded-xl shadow-lg"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Standing Images */}
        <section className="flex flex-col items-center gap-16">
          {data.images.map((imgUrl, idx) => (
            <div key={idx} className="w-full max-w-3xl bg-black/30 rounded-2xl p-4 md:p-8 shadow-2xl border border-white/5 flex flex-col items-center">
              <img 
                src={imgUrl} 
                alt={`${data.name} 이미지 ${idx + 1}`}
                className="w-full rounded-xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </section>
      </div>

      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50">
        <NavigationButton onClick={() => onNavigate('home')} className="bg-black/80 backdrop-blur-md px-5 py-3 md:px-6 md:py-3 rounded-full border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:bg-black hover:scale-105 transition-all" />
      </div>
    </motion.div>
  );
}
