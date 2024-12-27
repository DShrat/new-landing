import React, { useState } from "react";
import { Mail } from "lucide-react";

export default function Contact() {
  const [vis, setVis] = useState<boolean>(false);
  const handleShow = () => {
    setVis(!vis);
  }

    return (
      <section id="contact" className="py-20 mx-auto grid place-content-center">
        <a
          onMouseEnter={handleShow}
          onMouseLeave={handleShow}
          href="mailto:dshrat29@gmail.com"
          target="_blank"
          className="group relative flex gap-3 p-3 rounded-full backdrop-blur-md bg-gradient-to-r from-transparent to-transparent bg-[length:200%] bg-left hover:bg-right transition-all duration-300 transform hover:scale-110"
          style={{
            backgroundImage: "linear-gradient(to right, #1e3a8a, #3b82f6)",
          }}
        >
          <Mail className="w-6 h-6 text-white group-hover:text-white transition-all duration-300" />
          {vis && (
            <p className="text-white transition-all duration-300">Donni Suharyanto</p>  
          )}
        </a>
      </section>
    );
}