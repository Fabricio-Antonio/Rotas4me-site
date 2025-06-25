import Image from 'next/image';

export default function Home() {
  return (
    <>
    <section
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-between px-12 pt-32"
      style={{ backgroundImage: "url('/background.png')" }}
      >
      <div className="flex flex-col items-start justify-center max-w-xl">
        <h1 className="text-white font-extrabold text-[120px] leading-tight ml-52 mb-20 font-poppins whitespace-nowrap">
          Rotas<br />For Me
        </h1>
        <div className="flex items-center gap-4 ml-52">
          <a
            href="https://github.com/Fabricio-Antonio/Rotas4me-mobile"
            className="bg-[#D65E75] hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors font-poppins text-lg"
            >
            Versão Demo
          </a>
          <a
            href="#"
            className="text-white font-medium underline-offset-2 hover:underline font-poppins text-lg"
            >
            Saber mais
          </a>
        </div>
      </div>
    </section>

    <section className="w-full py-20 bg-white flex justify-center">
      <div className="max-w-3xl px-4 flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-20 font-poppins">
          Nossa solução
        </h2>
          <Image
          src="/solution.png"
          alt="Solução Rotas For Me"
          width={800}
          height={400}
          className="w-full h-auto rounded-lg shadow mb-6"
        />
      </div>
    </section>

    <section className="w-full py-32 bg-white flex justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-16 px-4">
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-10 font-poppins">Principais<br />Funcionalidades</h2>
          <ul className="space-y-6 text-left">
            <li>
              <span className="text-[#2D3A4A] font-bold">Avalie e contribua:</span>
              <span className="text-gray-700"> Marque ruas com boa iluminação, policiamento ou pontos de risco.</span>
            </li>
            <li>
              <span className="text-[#D65E75] font-bold">Escolha sua rota segura:</span>
              <span className="text-gray-700"> Use o app para traçar o melhor caminho, com base em dados públicos e colaboração feminina.</span>
            </li>
            <li>
              <span className="text-[#2D3A4A] font-bold">Acesse ajuda em um clique:</span>
              <span className="text-gray-700"> Encontre delegacias, abrigos e canais de denúncia próximos a você.</span>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center items-center gap-6">
          <Image
            src="/mock.png"
            alt="Mockup do app"
            width={300}
            height={600}
            className="h-[600px] w-auto drop-shadow-xl"
          />
        </div>
      </div>
    </section>

    <section className="w-full py-24 bg-white flex flex-col items-center">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-16 font-poppins">Planos</h2>
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 justify-center items-stretch">
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-blue-100">
          <h3 className="text-2xl font-bold text-sky-500 mb-2 font-poppins uppercase">Gratuito</h3>
          <p className="text-gray-500 text-center mb-6 text-sm">
            Segurança acessível a qualquer hora, em qualquer lugar.<br /><br />
            Acesso ao mapeamento básico com informações públicas e colaboração da comunidade.<br />
            Alertas de locais sinalizados e rotas seguras.<br />
            Cadastro e uso gratuito para todos os usuários.
          </p>
          <div className="text-2xl font-bold text-sky-500 mb-4">R$0,00</div>
          <a href="#" className="mt-auto bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors font-poppins">Começar a usar</a>
        </div>
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-2 border-pink-400">
          <h3 className="text-2xl font-bold text-pink-500 mb-2 font-poppins uppercase">Premium</h3>
          <p className="text-gray-500 text-center mb-6 text-sm">
            Para quem quer ainda mais controle, exclusividade e proteção.<br /><br />
            Relatórios de avaliações e riscos personalizados.<br />
            Comparativo com estatísticas de segurança.<br />
            Suporte prioritário e funcionalidades exclusivas.
          </p>
          <div className="text-2xl font-bold text-pink-500 mb-4">R$9,90/mês</div>
          <a href="#" className="mt-auto bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors font-poppins">Adquirir plano</a>
        </div>
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-300">
          <h3 className="text-2xl font-bold text-gray-700 mb-2 font-poppins uppercase">Institucional</h3>
          <p className="text-gray-500 text-center mb-6 text-sm">
            Para empresas, órgãos públicos e ONGs que desejam soluções personalizadas.<br /><br />
            Relatórios detalhados, integração de dados e suporte dedicado.<br />
            Licenciamento especial para múltiplos usuários.<br />
            Entre em contato para uma proposta personalizada.
          </p>
          <div className="text-2xl font-bold text-gray-700 mb-4">-</div>
          <a href="#" className="mt-auto bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg transition-colors font-poppins">Entrar em contato</a>
        </div>
    </div>
    </section>

    <section className="w-full flex justify-center items-center py-24 bg-white">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 px-4">
        <div className="flex-1 flex flex-col items-start md:pr-8 mb-8 md:mb-0">
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight font-poppins text-left">
            Nossa<br />Iniciativa
          </h2>
        </div>
        <div className="flex-1">
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 text-base mb-2">
              <span className="font-bold">Rotas4Me</span> não é só um aplicativo. É uma comunidade que protege umas às outras. É sobre se sentir segura, ser ouvida, e saber que não está sozinha.
            </p>
            <p className="text-gray-700 text-base">
              Seja para ir pra casa, pro trabalho ou pra vida, <span className="font-bold">caminhe com a gente!</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="w-full py-16 bg-white flex justify-center items-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row justify-center items-start gap-8 md:gap-0">
          <div className="flex-1 flex flex-col items-center">
            <span className="text-black font-bold font-poppins text-base">Radymilla Camilo</span>
            <span className="text-black text-sm text-center">Product & Brand<br />Designer</span>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <span className="text-black font-bold font-poppins text-base">Kayus Gracco</span>
            <span className="text-black text-sm text-center">Business &<br />VideoMaker</span>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <span className="text-black font-bold font-poppins text-base">Luiza Juá</span>
            <span className="text-black text-sm text-center">Research & Data<br />Analysis</span>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <span className=" text-black font-bold font-poppins text-base">Fabrício Santos</span>
            <span className="text-black text-sm text-center">Web & Mobile<br />Developer</span>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <span className=" text-black font-bold font-poppins text-base">Thauan Rodrigues</span>
            <span className="text-black text-sm text-center">Back-end Developer<br />& DevOps</span>
          </div>
        </div>
      </div>
    </section>
      </>
  );
}
