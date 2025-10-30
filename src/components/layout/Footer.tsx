const Footer = () => {
  const quickLinks = [
    { label: "Terms and Conditions", href: "/terms" },
    { label: "About Paymorz", href: "/about" },
    { label: "F.A.Q.", href: "/faq" },
    { label: "Support", href: "/support" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "API", href: "/api" },
  ];

  return (
    <footer className="bg-grey-900 text-shade-white py-10 px-6 md:px-12 w-full">
      <div className="flex flex-col gap-8">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-start gap-8">
          {/* Quick Links */}
          <div className="min-w-[200px] flex-1">
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {quickLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-grey-400 hover:text-shade-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-grey-700 gap-4">
          <p className="text-xs text-grey-400 text-center sm:text-left">
            © 2024. Paymorz. All Rights Reserved.
          </p>

          <div className="flex gap-4 justify-center sm:justify-end">
            {/* Example Social Icons */}
            <a
              href="/facebook"
              className="text-grey-400 hover:text-shade-white transition-colors"
            >
              <i className="ri-facebook-fill text-lg"></i>
            </a>
            <a
              href="/twitter"
              className="text-grey-400 hover:text-shade-white transition-colors"
            >
              <i className="ri-twitter-fill text-lg"></i>
            </a>
            <a
              href="/linkedin"
              className="text-grey-400 hover:text-shade-white transition-colors"
            >
              <i className="ri-linkedin-fill text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
