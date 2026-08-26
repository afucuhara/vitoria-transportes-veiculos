"use client";

import { useEffect, useState } from "react";

const photos = [
  { src: "/vitoria-gallery-1.webp", alt: "Caminhão Vitória transportando um veículo leve" },
  { src: "/vitoria-gallery-2.webp", alt: "Cegonha Vitória carregada com veículos na estrada" },
  { src: "/vitoria-gallery-3.webp", alt: "Caminhão-cegonha Vitória em operação noturna" },
];

export default function GalleryCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % photos.length), 3000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="gallery-carousel" aria-label="Galeria de operações da Vitória Transportes">
      <div className="gallery-slides">
        {photos.map((photo, index) => <img key={photo.src} className={index === active ? "gallery-slide is-active" : "gallery-slide"} src={photo.src} alt={photo.alt} width="1600" height="900" loading={index === 0 ? "eager" : "lazy"} decoding="async" />)}
      </div>
      <button className="gallery-control gallery-prev" type="button" aria-label="Foto anterior" onClick={() => setActive((active - 1 + photos.length) % photos.length)}>‹</button>
      <button className="gallery-control gallery-next" type="button" aria-label="Próxima foto" onClick={() => setActive((active + 1) % photos.length)}>›</button>
      <div className="gallery-dots" aria-label="Selecionar foto">
        {photos.map((photo, index) => <button key={photo.src} type="button" className={index === active ? "gallery-dot is-active" : "gallery-dot"} aria-label={`Mostrar foto ${index + 1}`} aria-current={index === active ? "true" : undefined} onClick={() => setActive(index)} />)}
      </div>
    </div>
  );
}
