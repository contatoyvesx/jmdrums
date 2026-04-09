import heroImage from "@/assets/hero-drums.jpg";
import logoImage from "@/assets/Logo fundo transparente.png";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-start justify-center overflow-hidden pt-20 sm:pt-24 md:pt-16"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Bateria profissional em estúdio"
          className="w-full h-full object-cover object-center md:object-center"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <img
          src={logoImage}
          alt="Logo JM Drums ABC"
          className="mx-auto mb-4 w-[240px] sm:w-[320px] md:w-[460px] lg:w-[620px] h-auto object-contain"
        />

        <p className="mt-2 text-sm sm:text-base md:text-xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
          Sua loja especializada em baterias. Produtos novos e seminovos,
          consertos e acessórios na região do ABC.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#produtos"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-heading uppercase tracking-widest text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-colors rounded-sm"
          >
            Ver Produtos
          </a>

          <a
            href="https://wa.me/5511947483998?text=Olá! Gostaria de saber mais sobre os produtos da JM Drums ABC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-whatsapp text-white font-heading uppercase tracking-widest text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity rounded-sm"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
