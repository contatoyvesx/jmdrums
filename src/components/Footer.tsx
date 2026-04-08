const Footer = () => {
  return (
    <footer className="py-8 bg-secondary border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="font-heading text-lg font-bold tracking-wider text-foreground">
          JM DRUMS ABC
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          © {new Date().getFullYear()} JM Drums ABC. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
