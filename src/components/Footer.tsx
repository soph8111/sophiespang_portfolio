function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 flex items-end justify-between py-4 px-6">
      <div className="flex flex-col gap-1 font-medium text-sm">
        <a href="https://www.linkedin.com/in/sophie-feline-spang-kjeldsen/" target="_blank" rel="noreferrer" className="text-foreground">
          LinkedIn
        </a>

        <a href="https://github.com/soph8111" target="_blank" rel="noreferrer" className="text-foreground">
          GitHub
        </a>
      </div>

      <div className="text-foreground text-8xl font-bold cursor-default uppercase">Spang</div>
    </footer>
  );
}

export default Footer;
