import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        className="w-full min-h-screen bg-cover bg-center flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-12 pt-32"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <div className="flex flex-col items-center md:items-start justify-center w-full md:max-w-xl">
          <h1 className="text-white font-extrabold text-[40px] sm:text-[64px] md:text-[90px] lg:text-[120px] leading-tight md:ml-52 mb-8 md:mb-20 font-poppins text-center md:text-left whitespace-nowrap">
            Rotas
            <br />
            For Me
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-4 md:ml-52 w-full sm:w-auto">
            <a
              href="https://github.com/Fabricio-Antonio/Rotas4me-mobile"
              className="bg-[#D65E75] hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors font-poppins text-lg w-full sm:w-auto text-center"
            >
              Versão Demo
            </a>
            <a
              href="https://youtu.be/TQDn3RTcNbs?si=Cg2VwGuB7ZEejFCf"
              className="text-white font-medium underline-offset-2 hover:underline font-poppins text-lg w-full sm:w-auto text-center"
            >
              Saber mais
            </a>
          </div>
        </div>
      </section>

      <section id="solution" className="w-full py-20 bg-white flex justify-center">
        <div className="max-w-3xl px-4 flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#33363F] mb-10 sm:mb-20 font-poppins">
            Nossa solução
          </h2>
          <Image
            src="/solution.png"
            alt="Solução Rotas For Me"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      <section className="w-full py-16 sm:py-32 bg-white flex justify-center items-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 px-2 sm:px-4">
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h2 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-[#33363F] mb-6 sm:mb-10 font-poppins text-center md:text-left">
              Principais 
              <br/>
              Funcionalidades
            </h2>
            <ul className="space-y-10 sm:space-y-8 text-center md:text-left text-base xs:text-lg sm:text-xl w-full px-2 sm:px-0">
              <li className="items-center md:items-start">
                <span className="text-[#D65E75] font-bold text-lg sm:text-xl mb-2">
                  Avalie e contribua:</span><span className="text-[#33363F] text-base sm:text-lg"> Marque ruas com boa iluminação, policiamento ou pontos de risco.</span>
              </li>
              <li className="items-center md:items-start">
                <span className="text-[#D65E75] font-bold text-lg sm:text-xl mb-2">
                  Escolha sua rota segura: </span><span className="text-[#33363F] text-base sm:text-lg">
                   Use o app para traçar o melhor caminho, com base em dados públicos e colaboração feminina.</span>
              </li>
              <li className="items-center md:items-start">
                <span className="text-[#D65E75] font-bold text-lg sm:text-xl mb-2">
                  Acesse ajuda em um clique:
                </span>
                <span className="text-[#33363F] text-base sm:text-lg"> Encontre delegacias, abrigos e canais de denúncia próximos a você.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center items-center gap-6 mt-10 md:mt-0">
            <Image
              src="/mock.png"
              alt="Mockup do app"
              width={200}
              height={400}
              className="h-[300px] sm:h-[400px] md:h-[600px] w-auto drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      <section id="price" className="w-full py-16 sm:py-24 bg-white flex flex-col items-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#33363F] mb-10 sm:mb-16 font-poppins text-center">
          Planos
        </h2>
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 justify-center items-stretch px-2">
          <div className="flex-1 bg-[#FAFAFA] rounded-2xl p-6 sm:p-8 flex flex-col items-center mb-8 md:mb-0">
            <h3 className="text-2xl sm:text-[35px] font-bold text-[#69B7EE] mb-2 font-poppins uppercase">
              Gratuito
            </h3>
            <p className="text-[#33363F] text-center mb-6 text-[13px] sm:text-[14px] w-full sm:w-[16rem]">
              <span className="text-[#69B7EE] font-bold">
                | Segurança acessível a qualquer hora, em qualquer lugar.
              </span>
              <br />
              <br />
              Acesso ao mapa em tempo real com rotas seguras e colaborativas
              <br />
              <br />
              Alertas automáticos em áreas de risco
              <br />
              <br />
              Contribuição com avaliações e fotos da comunidade
              <br />
              <br />
              Acesso direto à rede de apoio próxima e canais de denúncia
              <br />
              <br />
              Compartilhamento de localização com 1 contato de confiança
            </p>
            <div className="text-xl sm:text-[30px] font-semibold text-[#69B7EE] mb-4">
              R$0,00
            </div>
            <a
              href="#"
              className="mt-auto bg-[#69B7EE] hover:bg-sky-600 text-whit text-[16px] sm:text-[20px] font-extrabold px-6 sm:px-8 py-3 rounded-lg transition-colors font-poppins"
            >
              Começar a usar
            </a>
          </div>
          <div className="flex-1 bg-[#FAFAFA] rounded-2xl p-6 sm:p-8 flex flex-col items-center mb-8 md:mb-0 h-auto md:h-[35rem]">
            <h3 className="text-2xl sm:text-[35px] font-bold text-[#D65E75] mb-2 font-poppins uppercase">
              Premium
            </h3>
            <p className="text-[#33363F] text-center mb-6 text-[13px] sm:text-[14px] w-full sm:w-[16rem]">
              <span className="text-[#D65E75] font-bold">
                | Para quem quer ainda mais controle, autonomia e proteção
              </span>
              <br />
              <br />
              <span className="text-[#33363F] font-bold">
                *Benefícios do plano gratuito
              </span>
              <br />
              <br />
              Formulário de Avaliação de Risco com recomendações personalizadas
              <br />
              <br />
              Alertas inteligentes com base em histórico de movimentação e
              horário
              <br />
              <br />
              Compartilhamento automático de localização com vários contatos de
              confiança
              <br />
              <br />
              Acesso a estatísticas de segurança por região
              <br />
              <br />
            </p>
            <div className="text-xl sm:text-[30px] font-semibold text-[#D65E75] mb-4">
              R$9,90/mês
            </div>
            <a
              href="#"
              className="mt-auto bg-[#D65E75] hover:bg-pink-600 text-white text-[16px] sm:text-[20px] font-extrabold px-6 sm:px-8 py-3 rounded-lg transition-colors font-poppins"
            >
              Adquirir plano
            </a>
          </div>
          <div className="flex-1 bg-[#FAFAFA] rounded-2xl p-6 sm:p-8 flex flex-col items-center">
            <h3 className="text-xl sm:text-[30px] font-bold text-[#33363F] mb-2 font-poppins uppercase">
              Institucional
            </h3>
            <p className="text-[#33363F] text-center mb-6 text-[13px] sm:text-[14px] w-full sm:w-[16rem]">
              <span className="text-[#33363F] font-bold">
                | Para empresas, órgãos públicos e ONGs que querem proteger suas
                comunidades
              </span>
              <br />
              <br />
              Painel de gestão institucional com dados anonimizados de uso
              <br />
              <br />
              Relatórios periódicos sobre áreas críticas e demandas de segurança
              <br />
              <br />
              Visualização de rotas e alertas mais acionados pelas usuárias da
              instituição
              <br />
              <br />
              Suporte para campanhas de prevenção à violência com materiais
              educativos
              <br />
              <br />
              Integração com sistemas internos via API (ex: segurança
              patrimonial, CRM social)
            </p>
            <div className="text-xl sm:text-2xl font-bold text-[#33363F] mb-4">-</div>
            <a
              href="#"
              className="mt-auto bg-[#33363F] hover:bg-gray-900 text-white text-[16px] sm:text-[20px] font-extrabold px-6 sm:px-8 py-3 rounded-lg transition-colors font-poppins"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </section>

      <section id="initiative" className="w-full flex justify-center items-center py-16 sm:py-24 bg-white">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 px-4">
          <div className="flex-1 flex flex-col items-center md:items-start md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#33363F] leading-tight font-poppins text-center md:text-left">
              Nossa
              <br />
              Iniciativa
            </h2>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 w-full sm:w-[32rem] md:w-[52rem] text-base sm:text-[1.25rem] mx-auto">
              <p className="text-[#33363F] text-base mb-2">
                <span className="font-bold">Rotas4Me</span> não é só um
                aplicativo. É uma comunidade que protege umas às outras. É sobre
                se sentir segura, ser ouvida, e saber que não está sozinha.
              </p>
              <p className="text-[#33363F] text-base">
                Seja para ir pra casa, pro trabalho ou pra vida, {" "}
                <span className="font-bold">caminhe com a gente!</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-10 sm:py-16 bg-white flex justify-center items-center">
        <div className="max-w-6xl w-full flex flex-col items-center">
          <div className="w-full flex flex-col sm:flex-row justify-center items-center sm:items-start gap-8 sm:gap-0">
            <div className="flex-1 w-full flex flex-col items-center mb-8 sm:mb-0">
              <a href="https://www.linkedin.com/in/radymilla-cristiano/" target="_blank" className="text-black font-bold font-poppins text-base text-center">
                Radymilla Camilo
              </a>
              <span className="text-black text-sm text-center">
                Product & Brand
                <br />
                Designer
              </span>
            </div>
            <div className="flex-1 w-full flex flex-col items-center mb-8 sm:mb-0">
              <a href="https://www.linkedin.com/in/engkayusgracco/" target="_blank" className="text-black font-bold font-poppins text-base text-center">
                Kayus Gracco
              </a>
              <span className="text-black text-sm text-center">
                Business &<br />
                VideoMaker
              </span>
            </div>
            <div className="flex-1 w-full flex flex-col items-center mb-8 sm:mb-0">
              <a href="https://www.linkedin.com/in/luiza-ju%C3%A1-589b96311/" target="_blank" className="text-black font-bold font-poppins text-base text-center">
                Luiza Juá
              </a>
              <span className="text-black text-sm text-center">
                Research & Data
                <br />
                Analysis
              </span>
            </div>
            <div className="flex-1 w-full flex flex-col items-center mb-8 sm:mb-0">
              <a href="https://www.linkedin.com/in/fabricio-ss/" target="_blank" className=" text-black font-bold font-poppins text-base text-center">
                Fabrício Santos
              </a>
              <span className="text-black text-sm text-center">
                Web & Mobile
                <br />
                Developer
              </span>
            </div>
            <div className="flex-1 w-full flex flex-col items-center">
              <a href="https://www.linkedin.com/in/thauan-rodrigues-1744072a6/" target="_blank" className=" text-black font-bold font-poppins text-base text-center">
                Thauan Rodrigues
              </a>
              <span className="text-black text-sm text-center">
                Back-end Developer
                <br />& DevOps
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
