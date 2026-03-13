import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';

const ContactWidget = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      <a href="https://wa.me/YOUR_NUMBER" target="_blank" className="p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition">
        <MessageCircle size={24} />
      </a>
      <a href="mailto:solutions@ovincode.com" className="p-4 bg-cyan-400 text-black rounded-full shadow-lg hover:scale-110 transition">
        <Mail size={24} />
      </a>
    </div>
  );
};

export default ContactWidget;