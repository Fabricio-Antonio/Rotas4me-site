"use client"
import React, { useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleGooglePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAlert(true);
  };

  return (
    <>
      <nav className="w-full bg-transparent px-4 py-2 flex items-center justify-between absolute top-0 left-0 z-50">
        <Image src="/logo.png" alt="Rotas For Me" width={140} height={80} className="h-20 w-35" />

        <div className="flex space-x-8">
          <a href="#" className="text-white font-bold">Início</a>
          <a href="#solution" className="text-white">Solução</a>
          <a href="#price" className="text-white">Planos</a>
          <a href="#initiative" className="text-white">Iniciativa</a>
        </div>

        <button
          onClick={handleGooglePlayClick}
          className="flex items-center bg-white rounded px-2 py-1 shadow focus:outline-none"
        >
          <Image
            src="/googlePlay.png"
            alt="Disponível no Google Play"
            width={120}
            height={32}
            className="h-8"
          />
        </button>
      </nav>
      {showAlert && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full flex flex-col items-center">
            <span className="text-[#D65E75] text-4xl mb-4">🗺️</span>
            <p className="text-gray-800 text-center mb-6 font-poppins">
              Estamos trabalhando para colocarmos o <b>Rotas4me</b> disponível para download
            </p>
            <button
              onClick={() => setShowAlert(false)}
              className="bg-[#D65E75] hover:bg-pink-700 text-white font-bold px-6 py-2 rounded-lg transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar; 