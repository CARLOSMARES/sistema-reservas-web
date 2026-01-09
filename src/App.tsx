import { GlassWater, ArrowRight, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-slate-950 overflow-hidden">
      
      {/* Esferas de luz de fondo (Efecto Líquido) */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Tarjeta Liquid Glass */}
      <div className="relative group">
        {/* Resplandor exterior */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        
        <div className="relative px-8 py-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl w-[380px] text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-cyan-500/20 rounded-lg">
              <GlassWater className="text-cyan-300" size={28} />
            </div>
            <h1 className="text-xl font-bold tracking-tight">Reservas App</h1>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-8">
            Interfaz de alta fidelidad con refracción dinámica. Conecta con tu backend de Spring Boot.
          </p>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-between px-5 py-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl transition-all group/btn">
              <span className="text-sm font-medium">Nueva Cita</span>
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
            
            <button className="w-full flex items-center justify-between px-5 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/20 rounded-xl transition-all">
              <span className="text-sm font-medium">Ver Servicios</span>
              <Sparkles size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
