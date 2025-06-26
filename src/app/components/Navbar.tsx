import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-transparent px-4 py-2 flex items-center justify-between absolute top-0 left-0 z-50">
        <Image src="/logo.png" alt="Rotas For Me" width={140} height={80} className="h-20 w-35" />

      <div className="flex space-x-8">
        <a href="#" className="text-white font-bold">Início</a>
        <a href="#solution" className="text-white">Solução</a>
        <a href="#price" className="text-white">Planos</a>
        <a href="#initiative" className="text-white">Iniciativa</a>
      </div>

      <a
        href="https://play.google.com/store"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-white rounded px-2 py-1 shadow"
      >
        <Image
          src="/googlePlay.png"
          alt="Disponível no Google Play"
          width={120}
          height={32}
          className="h-8"
        />
      </a>
    </nav>
  );
};

export default Navbar; 