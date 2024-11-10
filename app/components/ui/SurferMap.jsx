import React, { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import { Map, View, Overlay } from "ol";
import { Tile as TileLayer } from "ol/layer";
import { XYZ } from "ol/source";
import { fromLonLat } from "ol/proj";
import { Container, CircularProgress, Box } from "@mui/material";

export function SurferMap() {
  const mapContainerRef = useRef(null);
  const overlayContainerRef1 = useRef(null);
  const overlayContainerRef2 = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mapTilerToken = "qpPSO5Z9J9rlnbJrdmUW"; // Remplacez par votre token d'accès MapTiler

    // Création de la carte OpenLayers avec MapTiler
    const map = new Map({
      target: mapContainerRef.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: `https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=${mapTilerToken}`,
            attributions: "© MapTiler © OpenStreetMap contributors",
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([-9.7194, 30.545]), // Coordonnées de Taghazout
        zoom: 12, // Zoom initial
        maxZoom: 18,
      }),
    });

    // Masquer le loader une fois que la carte est chargée
    map.once("rendercomplete", () => {
      setLoading(false);
    });

    // Ajout de l'overlay pour le premier point avec un logo personnalisé
    const overlay1 = new Overlay({
      position: fromLonLat([-9.697106565689976, 30.560257368637743]),
      element: overlayContainerRef1.current,
      positioning: "center-center",
    });
    map.addOverlay(overlay1);

    // Ajout de l'overlay pour le second point avec un logo personnalisé
    const overlay2 = new Overlay({
      position: fromLonLat([-9.703459169928832, 30.562353134887324]),
      element: overlayContainerRef2.current,
      positioning: "center-center",
    });
    map.addOverlay(overlay2);

    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <Container maxWidth={"md"} sx={{
        py: 2,
    }}>
     
      <Box
      className="max-w-5xl  mx-auto  w-full border-4 border-[#A3D6B7] p-2 md:p-6 bg-[#B2D9B2] rounded-[30px] shadow-2xl h-80"
      >
        {loading && (
          <CircularProgress
            size={60}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          />
        )}
        <div
          ref={mapContainerRef}
          style={{
            width: "100%",
            height: "100%",
            opacity: loading ? 0 : 1,
            transition: "opacity 0.3s ease-in-out",
          }}
        ></div>
      </Box>

      {/* Logo pour le premier point */}
      <div
        ref={overlayContainerRef1}
        style={{
          width: "65px",
          height: "65px",
          backgroundImage: "url(/logoIguan.png)",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Logo pour le second point */}
      <div
        ref={overlayContainerRef2}
        style={{
          width: "65px",
          height: "65px",
          backgroundImage: "url(/logoIguan.png)",
          backgroundSize: "cover",
        }}
      ></div>
    </Container>
  );
}
