import { MapPin, Phone, Clock, Instagram } from "lucide-react";

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <MapPin className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
            <h3 className="font-heading text-lg font-semibold text-foreground uppercase">Endereço</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              R. Biguá, 130 - Santa Maria
              <br />
              São Caetano do Sul - SP, 09560-300
            </p>
            <a
              href="https://maps.google.com/?q=R.+Biguá,+130+-+Santa+Maria,+São+Caetano+do+Sul+-+SP,+09560-300"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-xs text-foreground hover:underline"
            >
              Ver no mapa
            </a>
          </div>
          <div className="text-center">
            <Phone className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
            <h3 className="font-heading text-lg font-semibold text-foreground uppercase">Telefone</h3>
            <a href="tel:+5511947483998" className="mt-2 inline-block text-sm text-muted-foreground hover:text-foreground">
              (11) 94748-3998
            </a>
          </div>
          <div className="text-center">
            <Instagram className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
            <h3 className="font-heading text-lg font-semibold text-foreground uppercase">Instagram</h3>
            <a
              href="https://instagram.com/jmdrumsabc"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-muted-foreground hover:text-foreground"
            >
              @jmdrumsabc
            </a>
          </div>
          <div className="text-center">
            <Clock className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
            <h3 className="font-heading text-lg font-semibold text-foreground uppercase">Horário</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Seg a Sáb: 10h às 18h
              <br />
              Domingo: Fechado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
