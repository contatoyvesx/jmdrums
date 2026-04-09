const Footer = () => {
  return (
    <footer className="py-8 bg-secondary border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="font-heading text-lg font-bold tracking-wider text-foreground">
          JM DRUMS ABC
        </p>
        <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
          R. Biguá, 130 - Santa Maria, São Caetano do Sul - SP
        </p>
        <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
          (11) 94748-3998
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          © {new Date().getFullYear()} JM Drums ABC. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
