import React, { useState } from "react";
import '/index.css';

export default function Home() {
  const [lang, setLang] = useState("en");
  const isCN = lang === "cn";
  const isKR = lang === "kr";
  const isTH = lang === "th";

  return (
    <main className="min-h-screen bg-cover bg-center text-white font-sans" style={{ backgroundImage: 'url("/bg_soisix_updated_thai.png")' }}>
      <div className="absolute top-4 right-4 space-x-2">
        <button onClick={() => setLang("en")} className="px-3 py-1 bg-yellow-300 text-black rounded font-bold">🇬🇧</button>
        <button onClick={() => setLang("cn")} className="px-3 py-1 bg-yellow-300 text-black rounded font-bold">🇨🇳</button>
        <button onClick={() => setLang("kr")} className="px-3 py-1 bg-yellow-300 text-black rounded font-bold">🇰🇷</button>
        <button onClick={() => setLang("th")} className="px-3 py-1 bg-yellow-300 text-black rounded font-bold">🇹🇭</button>
      </div>

      <section className="py-20 text-center px-4">
        <img src="/logo_soisix.png" alt="SoiSix" className="mx-auto mb-6 w-40 h-40 object-contain rounded-full shadow-lg" />
        <h1 className="text-5xl font-extrabold mb-2">SoiSix</h1>
        {isCN ? (
          <>
            <p className="text-lg italic mb-4">跳舞、征税、制造噪音的代币。</p>
            <p className="text-md italic mb-6">芭提雅. Meme. 1.5% 卖出税进入流动池</p>
          </>
        ) : isKR ? (
          <>
            <p className="text-lg italic mb-4">춤추고, 세금 내고, 소리치는 토큰</p>
            <p className="text-md italic mb-6">파타야. 밈. 판매세 1.5%는 유동성 풀로</p>
          </>
        ) : isTH ? (
          <>
            <p className="text-lg italic mb-4">เหรียญที่เกิดมาเพื่อเต้น ยิ้ม และเสียงดัง</p>
            <p className="text-md italic mb-6">พัทยา. มีม. 1.5% ภาษีการขายเข้าพูล</p>
          </>
        ) : (
          <>
            <p className="text-lg italic mb-4">The token made to dance, smile and talk shit.</p>
            <p className="text-md italic mb-6">Pattaya. Meme. 1.5% Sell Tax to Pool</p>
          </>
        )}

        <div className="space-x-4">
          <a href="#" className="bg-yellow-300 text-black px-6 py-3 rounded-2xl shadow font-bold">Buy on Uniswap</a>
          <a href="#" className="bg-yellow-300 text-black px-6 py-3 rounded-2xl shadow font-bold">Chart on DexTools</a>
          <a href="https://x.com/Burnitomeme" className="bg-yellow-300 text-black px-6 py-3 rounded-2xl shadow font-bold">X</a>
        </div>
        <div className="mt-6 text-sm">
          <p>75% LP, 15% Marketing, 10% Dev</p>
          <p>CA: 0xf5c5e298481a0267ba5dd746bcc0c52ac37b0dd</p>
          <p>Pair: 0xe6eca6d82f6b2c70c13639d399878b1734b8cf42</p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto">
        {/* FAQ content here, omitted for brevity */}
      </section>
    </main>
  );
// forza redeploy
}
