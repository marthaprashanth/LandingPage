const Footer = () => {
  const quickLinks = [
    "Terms and Conditions",
    "About Paymorz",
    "F.A.Q.",
    "Support",
    "Refund Policy",
    "API",
  ];

  return (
    <footer className="bg-grey-900 text-shade-white py-8 px-12">
      <div className="flex flex-col gap-6">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          <div className="flex gap-10">
            <div>
              <h3 className="text-base font-semibold mb-4">Quick Links</h3>
              <div className="flex flex-wrap gap-8">
                {quickLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm text-grey-400 hover:text-shade-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center pt-6 border-t border-grey-700">
          <p className="text-xs text-grey-400">
            © 2024. Paymorz. All Rights Reserved.
          </p>
          <div className="flex gap-3">{/* Social Icons would go here */}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
