
export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 py-6">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-xl mb-2">ResearchAI</h3>
            <p className="text-sm">
              Revolutionizing research paper generation with artificial intelligence. Empowering researchers to save time and improve quality.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-xl mb-2">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:aadarshraj4321@gmail.com"
                  className="hover:text-indigo-600 transition-colors"
                >
                  aadarshraj4321@gmail.com
                </a>
              </li>
              <li>
                <p className="text-sm">India, Asia, Earth</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 pt-4 border-t text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ResearchAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
