import appleicon from './img/applestore.png';
import playstoreicon from './img/playstore.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-300 pb-6 mb-6">
          <h2 className="text-lg font-semibold text-center md:text-left mb-4 md:mb-0">
            For a better experience, download the YumBites app now
          </h2>
          <div className="flex justify-center md:justify-end gap-4">
            <a href="#" className="w-32">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-full"
              />
            </a>
            <a href="#" className="w-32">
              <img src={appleicon} alt="App Store" className="w-full" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-gray-600">
          {/* Logo and Info */}
          <div>
            <h3 className="text-orange-600 font-bold text-xl mb-4">QuickBites</h3>
            <p>© 2024 QuickBites Food</p>
            <p>All rights reserved</p>
          </div>

          {/* Links: Company */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-800">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  YumBites Pro
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Contact Us */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Help & Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Partner with us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Ride with us
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Available Cities */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Available in:</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Bangalore
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Mumbai
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Delhi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                 Greater Noida
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-gray-800">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="#" className="hover:text-gray-800">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="#" className="hover:text-gray-800">
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a href="#" className="hover:text-gray-800">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
