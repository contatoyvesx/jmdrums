import { Drum, Wrench, ShieldCheck, MapPin } from "lucide-react";

const features = [
  { icon: Drum, title: "Especialistas", text: "Focados 100% em bateria e percussão" },
  { icon: ShieldCheck, title: "Qualidade", text: "Produtos com garantia e procedência" },
  { icon: Wrench, title: "Assistência", text: "Conserto e manutenção profissional" },
  { icon: MapPin, title: "Região ABC", text: "Atendimento próximo e personalizado" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground uppercase tracking-wider">
            Por que a JM Drums?
          </h2>
          <div className="mt-4 w-20 h-0.5 bg-foreground mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                <f.icon className="w-7 h-7 text-foreground group-hover:text-background transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground uppercase tracking-wide">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
