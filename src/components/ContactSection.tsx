import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground uppercase tracking-wider">
            Contato
          </h2>
          <div className="mt-4 w-20 h-0.5 bg-foreground mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <MapPin className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
            <h3 className="font-heading text-lg font-semibold text-foreground uppercase">Endereço</h3>
            <p className="mt-2 text-sm text-muted-foreground">Região do ABC Paulista<br />São Paulo - SP</p>
          </div>
          <div className="text-center">
            <Phone className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
            <h3 className="font-heading text-lg font-semibold text-foreground uppercase">Telefone</h3>
            <p className="mt-2 text-sm text-muted-foreground">(11) 99999-9999</p>
          </div>
          <div className="text-center">
            <Clock className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
            <h3 className="font-heading text-lg font-semibold text-foreground uppercase">Horário</h3>
            <p className="mt-2 text-sm text-muted-foreground">Seg a Sex: 9h - 18h<br />Sáb: 9h - 14h</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
