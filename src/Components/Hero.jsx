import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="hero relative w-full min-h-[85vh] flex items-center justify-center px-6 py-20 overflow-hidden bg-white">




      <div className="relative z-10 max-w-4xl text-center">


        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 border border-blue-100 rounded-full shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          Portfolio 2026
        </div>


        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-8 leading-[1] tracking-tighter">
          Full Stack <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Developer
          </span>
        </h1>


        <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Diseño y construyo experiencias digitales de alto impacto.
          Especializado en <span className="text-slate-900 font-semibold">PHP, React y ecosistemas modernos</span> para soluciones escalables.
        </p>




        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>

          {/* Botón 1: Hablemos (Redirige a Contacto) */}
          <Link to="/contacto" style={{ textDecoration: 'none' }}>
            <button style={{
              padding: '16px 40px',
              backgroundColor: '#020617',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: '16px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
            }}>
              Hablemos
            </button>
          </Link>

          {/* Botón 2: Ver Proyectos (Redirige a Proyectos) */}
          <Link to="/proyectos" style={{ textDecoration: 'none' }}>
            <button style={{
              padding: '16px 40px',
              backgroundColor: 'white',
              color: '#0f172a',
              border: '1px solid #e2e8f0',
              fontWeight: 'bold',
              borderRadius: '16px',
              cursor: 'pointer'
            }}>
              Ver Proyectos
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Hero;