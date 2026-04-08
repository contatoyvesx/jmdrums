import productsNewImg from "@/assets/products-new.jpg";
import productsUsedImg from "@/assets/products-used.jpg";
import repairImg from "@/assets/repair-drums.jpg";

const services = [
  {
    title: "Baterias Novas",
    description: "As melhores marcas do mercado com garantia e procedência. Baterias completas, caixas, tons, surdos, pratos e acessórios.",
    image: productsNewImg,
    alt: "Equipamentos de bateria novos em showroom",
  },
  {
    title: "Seminovos",
    description: "Instrumentos seminovos revisados e com qualidade garantida. Ótimas opções com o melhor custo-benefício para você.",
    image: productsUsedImg,
    alt: "Equipamentos de bateria seminovos",
  },
  {
    title: "Consertos",
    description: "Manutenção e reparo profissional de baterias e percussão. Troca de peles, afinação, restauração e muito mais.",
    image: repairImg,
    alt: "Conserto profissional de bateria",
  },
];

const ServicesSection = () => {
  return (
    <section id="produtos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground uppercase tracking-wider">
            Nossos Serviços
          </h2>
          <div className="mt-4 w-20 h-0.5 bg-foreground mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-sm overflow-hidden border border-border hover:border-foreground/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-semibold text-foreground uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
