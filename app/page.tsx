import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Section supérieure - Fond blanc */}
      <div className="flex-1 bg-white flex flex-col items-center justify-center px-6 py-12">
        {/* Logo VILIGA */}
        <div className="mb-8">
          <Image
            src="/SVG/VILIGA - LOGO.svg"
            alt="VILIGA Logo"
            width={200}
            height={100}
            priority
            className="h-auto"
          />
        </div>

        {/* Titre principal */}
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center mb-6">
          SITE WEB EN CONSTRUCTION
        </h1>

        {/* Sous-titre */}
        <p className="text-base md:text-lg text-black text-center max-w-2xl mb-8">
          En attendant le lancement officiel du site web, vous pouvez nous contacter via les coordonnées suivantes
        </p>

        {/* Icônes de contact */}
        <div className="flex gap-4 mb-6">
          <a
            href="tel:+224"
            className="w-16 h-16 border-2 border-black flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Téléphone"
          >
            <Image
              src="/SVG/VILIGA - RS - TEL.svg"
              alt="Téléphone"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 border-2 border-black flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="WhatsApp"
          >
            <Image
              src="/SVG/VILIGA - RS - WH.svg"
              alt="WhatsApp"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 border-2 border-black flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Facebook"
          >
            <Image
              src="/SVG/VILIGA - RS - FB.svg"
              alt="Facebook"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 border-2 border-black flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Behance"
          >
            <Image
              src="/SVG/VILIGA - RS - BE.svg"
              alt="Behance"
              width={40}
              height={40}
            />
          </a>
        </div>

        {/* Pierres colorées */}
        <div className="w-full max-w-md px-6">
          <Image
            src="/SVG/VILIGA - PIERRES.svg"
            alt="Pierres colorées"
            width={400}
            height={80}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Section inférieure - Vidéo en boucle */}
      <div className="h-48 md:h-64 relative overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/VIDEO.MP4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    </div>
  );
}
