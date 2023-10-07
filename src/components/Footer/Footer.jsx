const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content ">
        <nav>
          <header className="footer-title">Gaming Conventions</header>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">VIP Pass</a>
          <a className="link link-hover">Panel & Workshops</a>
          <a className="link link-hover">Cosplay Contest</a>
          <a className="link link-hover">Tournaments</a>
        </nav>
        <nav>
          <header className="footer-title">Connect</header>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">YouTube</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
