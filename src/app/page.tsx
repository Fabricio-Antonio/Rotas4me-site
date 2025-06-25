import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        className="w-full min-h-screen bg-cover bg-center flex items-center justify-between px-12 pt-32"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <div className="flex flex-col items-start justify-center max-w-xl">
          <h1 className="text-white font-extrabold text-[120px] leading-tight ml-52 mb-20 font-poppins whitespace-nowrap">
            Rotas
            <br />
            For Me
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
          <h2 className="text-4xl font-bold text-[#33363F] mb-20 font-poppins">
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

      <section className="w-full py-32 bg-white flex justify-center items-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-16 px-4">
          <div className="flex-1 flex flex-col items-start">
            <h2 className="text-5xl font-extrabold text-[#33363F] mb-10 font-poppins">
              Principais
              <br />
              Funcionalidades
            </h2>
            <ul className="space-y-6 text-left">
              <li>
                <span className="text-[#D65E75] font-bold">
                  Avalie e contribua:
                </span>
                <span className="ttext-[#33363F]">
                  {" "}
                  Marque ruas com boa iluminação, policiamento ou pontos de
                  risco.
                </span>
              </li>
              <li>
                <span className="text-[#D65E75] font-bold">
                  Escolha sua rota segura:
                </span>
                <span className="text-[#33363F]">
                  {" "}
                  Use o app para traçar o melhor caminho, com base em dados
                  públicos e colaboração feminina.
                </span>
              </li>
              <li>
                <span className="text-[#D65E75] font-bold">
                  Acesse ajuda em um clique:
                </span>
                <span className="text-[#33363F]">
                  {" "}
                  Encontre delegacias, abrigos e canais de denúncia próximos a
                  você.
                </span>
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
        <h2 className="text-5xl font-extrabold text-[#33363F] mb-16 font-poppins">
          Planos
        </h2>
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <div className="flex-1 bg-[#FAFAFA] rounded-2xl p-8 flex flex-col items-center">
            <h3 className="text-[35px] font-bold text-[#69B7EE] mb-2 font-poppins uppercase">
              Gratuito
            </h3>
            <p className="text-[#33363F] text-center mb-6 text-[14px] w-[16rem]">
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
            <div className="text-[30px] font-semibold text-[#69B7EE] mb-4">
              R$0,00
            </div>
            <a
              href="#"
              className="mt-auto bg-[#69B7EE] hover:bg-sky-600 text-whit text-[20px] font-extrabold px-8 py-3 rounded-lg transition-colors font-poppins"
            >
              Começar a usar
            </a>
          </div>
          <div className="flex-1 bg-[#FAFAFA] rounded-2xl p-8 flex flex-col items-center h-[35rem]">
            <h3 className="text-[35px] font-bold text-[#D65E75] mb-2 font-poppins uppercase">
              Premium
            </h3>
            <p className="text-[#33363F] text-center mb-6 text-[14px] w-[16rem]">
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
            <div className="text-[30px] font-semibold text-[#D65E75] mb-4">
              R$9,90/mês
            </div>
            <a
              href="#"
              className="mt-auto bg-[#D65E75] hover:bg-pink-600 text-white text-[20px] font-extrabold px-8 py-3 rounded-lg transition-colors font-poppins"
            >
              Adquirir plano
            </a>
          </div>
          <div className="flex-1 bg-[#FAFAFA] rounded-2xl p-8 flex flex-col items-center">
            <h3 className="text-[30px] font-bold text-[#33363F] mb-2 font-poppins uppercase">
              Institucional
            </h3>
            <p className="text-[#33363F] text-center mb-6 text-[14px] w-[16rem]">
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
            <div className="text-2xl font-bold text-[#33363F] mb-4">-</div>
            <a
              href="#"
              className="mt-auto bg-[#33363F] hover:bg-gray-900 text-white text-[20px] font-extrabold px-8 py-3 rounded-lg transition-colors font-poppins"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center items-center py-24 bg-white">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 px-4">
          <div className="flex-1 flex flex-col items-start md:pr-8 mb-8 md:mb-0">
            <h2 className="text-5xl font-extrabold text-[#33363F] leading-tight font-poppins text-left">
              Nossa
              <br />
              Iniciativa
            </h2>
          </div>
          <div className="flex-1">
            <div className="bg-gray-50 rounded-xl p-6 w-[52rem] text-[1.25rem]">
              <p className="text-[#33363F] text-base mb-2">
                <span className="font-bold">Rotas4Me</span> não é só um
                aplicativo. É uma comunidade que protege umas às outras. É sobre
                se sentir segura, ser ouvida, e saber que não está sozinha.
              </p>
              <p className="text-[#33363F] text-base">
                Seja para ir pra casa, pro trabalho ou pra vida,{" "}
                <span className="font-bold">caminhe com a gente!</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-white flex justify-center items-center">
        <div className="max-w-6xl w-full flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row justify-center items-start gap-8 md:gap-0">
            <div className="flex-1 flex flex-col items-center">
              <span className="text-black font-bold font-poppins text-base">
                Radymilla Camilo
              </span>
              <span className="text-black text-sm text-center">
                Product & Brand
                <br />
                Designer
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <span className="text-black font-bold font-poppins text-base">
                Kayus Gracco
              </span>
              <span className="text-black text-sm text-center">
                Business &<br />
                VideoMaker
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <span className="text-black font-bold font-poppins text-base">
                Luiza Juá
              </span>
              <span className="text-black text-sm text-center">
                Research & Data
                <br />
                Analysis
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <span className=" text-black font-bold font-poppins text-base">
                Fabrício Santos
              </span>
              <span className="text-black text-sm text-center">
                Web & Mobile
                <br />
                Developer
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <span className=" text-black font-bold font-poppins text-base">
                Thauan Rodrigues
              </span>
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
