// components/Footer.jsx
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-gray-700 pb-10">
        {/* Logo and Branding */}
        <div className="md:col-span-1 flex flex-col  items-center">
          <img src="/ZenoTrip/logo/logo3.png" alt="Tours to Tuscany" className="w-24 " />
          <p>ZenoTrip</p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-lg mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Bike and Rickshaw rental</li>
            <li>Guided Tours of Lucca</li>
            <li>Guided Bike Tour of Lucca</li>
            <li>Trip In The Tuscan Hills</li>
            <li>Transportation With Luxury Cars</li>
            <li>Wine Tours By Bus With Guide</li>
          </ul>
        </div>

        {/* Home */}
        <div>
          <h4 className="font-bold text-lg mb-4">Home</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Home</li>
            <li>About Us</li>
            <li>Tour Packages</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-bold text-lg mb-4">Help</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="font-bold text-lg mb-4">Contacts</h4>
          <div className="flex items-start space-x-2 mb-2 text-sm text-gray-300">
            <MapPin size={18} className="text-orange-500" />
            <span>Piazza Napoleone, Lucca, Tuscany</span>
          </div>
          <div className="flex items-center space-x-2 mb-2 text-sm text-gray-300">
            <Phone size={18} className="text-orange-500" />
            <span>+39 346 368 5708</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-300">
            <Mail size={18} className="text-orange-500" />
            <span>italiainlimo@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 px-2">
        <p>Copyright © 2022. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Twitter className="text-orange-500 hover:text-orange-400" />
          <Facebook className="text-orange-500 hover:text-orange-400" />
          <Instagram className="text-orange-500 hover:text-orange-400" />
        </div>
      </div>
    </footer>
  );
}
