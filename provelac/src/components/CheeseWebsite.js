import React from "react";
import FloatingNavigation from "./FloatingNavigation";
import HeroSection from "./HeroSection";
import CategoryFilter from "./CategoryFilter";
import ProductGrid from "./ProductGrid";
import ProductModal from "./ProductModal";
import Footer from "./Footer";
import "./CheeseWebsite.css";

const CheeseWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const products = [
    {
      id_producto: "1",
      categoria: "Materia Prima",
      nombre: "Peróxido de hidrógeno al 50%",
      descripcion: "Descripción del producto 1",
      fotografia: "",
    },
    {
      id_producto: "4",
      categoria: "Materia Prima",
      nombre: "Caseina Renina",
      descripcion:
        "Caseina renina es una proteina lactea en polvo (granular) que nos ayuda a extender los quesos o a elaborar quesos analogos. Costal de 25 kg.",
      fotografia: "4_producto_p19ic.JPG",
    },
    {
      id_producto: "5",
      categoria: "Materia Prima",
      nombre: "Base para queso análogo tipo asadero para pizzas",
      descripcion:
        "La base para queso analogo tipo asadero para pizzas, es una mezcla de proteinas con almidones para elaborar quesos economicos para pizzas. Presentacion en costal de 25 kg.",
      fotografia: "5_producto_vugmm.JPG",
    },
    {
      id_producto: "6",
      categoria: "Materia Prima",
      nombre: "Cloruro de calcio grado alimenticio",
      descripcion:
        "El cloruro de calcio grado alimenticio es un producto quimico que se utiliza en la leche como aditivo para tener un mejor cuajado y asi mejorar el rendimieto en nuestros quesos. Presentacion costal de 25 kg.",
      fotografia: "6_producto_hcqfh.JPG",
    },
    {
      id_producto: "7",
      categoria: "Materia Prima",
      nombre: "Cuajo microbiano fuerza 1:20000",
      descripcion:
        "El cuajo microbiano es un aditivo que se utiliza para coagular (cuajar) la leche para la elaboracion de quesos. Presentacio en Garrafon de 20 lts.",
      fotografia: "7_producto_kcfo3.JPG",
    },
    {
      id_producto: "8",
      categoria: "Materia Prima",
      nombre: "Cuajo natural fuerza 1:10000",
      descripcion:
        "El cuajo natural se utiliza para coagular (cuajar) la leche para la elaboracion de quesos. Presentacion en garrafon de 20 lts.",
      fotografia: "8_producto_7qv5e.JPG",
    },
    {
      id_producto: "9",
      categoria: "Materia Prima",
      nombre: "Mermelada para yogurt",
      descripcion:
        "La mermelada para yogurt se utiliza para darle sabor y presentacion al yogurt.",
      fotografia: "9_producto_f47am.JPG",
    },
    {
      id_producto: "10",
      categoria: "Materia Prima",
      nombre: "Sabores líquidos para quesos",
      descripcion:
        "El sabor liquido funciona para darle un mejor sabor a los quesos.",
      fotografia: "10_producto_gvu6k.JPG",
    },
    {
      id_producto: "11",
      categoria: "Materia Prima",
      nombre: "Caseina ácida",
      descripcion:
        "La casina acida funciona para elaborar quesos extendidos o analogos.",
      fotografia: "11_producto_od49d.JPG",
    },
    {
      id_producto: "13",
      categoria: "Materia Prima",
      nombre: "Leche en polvo descremada",
      descripcion:
        "La leche en polvo descremada al 34% nos ayuda a elaborar muchos produtos lacteos de muy buena calidad.",
      fotografia: "13_producto_rxgce.JPG",
    },
    {
      id_producto: "15",
      categoria: "Materia Prima",
      nombre: "Acido citrico",
      descripcion:
        "El acido citrico nos ayuda a acidicar artificialmente la leche o cualquier producto en el proceso de elaboracion.",
      fotografia: "15_producto_281tb.JPG",
    },
    {
      id_producto: "16",
      categoria: "Materia Prima",
      nombre: "Fécula de papa",
      descripcion:
        "La fecula de papa es una materia prima que nos ayuda a elaborar los quesos analogos. Y ademas de otros productos.",
      fotografia: "16_producto_phb3s.JPG",
    },
    {
      id_producto: "17",
      categoria: "Maquinaria",
      nombre: "Bote lechero",
      descripcion: "Bote lechero de estaño capacidad 40 lts",
      fotografia: "17_producto_rnmet.JPG",
    },
    {
      id_producto: "19",
      categoria: "Materia Prima",
      nombre: "Cuajo microbiano y natural",
      descripcion:
        "Cuajo natural fuerza 1:10000 Cuajo microbiano fuerza 1:20000",
      fotografia: "19_producto_ykjrp.JPG",
    },
    {
      id_producto: "20",
      categoria: "Equipo Especializado",
      nombre: "Mandil de vinil",
      descripcion: "Mandil de vinil",
      fotografia: "20_producto_n6q5i.JPG",
    },
    {
      id_producto: "21",
      categoria: "Materia Prima",
      nombre: "Cultivo lactico",
      descripcion:
        "Cultivo lactico para elaborar, yogurt, jocoque, kefir, queso chihuahua, cheddar, manchego, gouda, edam, asadero, mozarela, oaxca",
      fotografia: "21_producto_4bfc0.png",
    },
    {
      id_producto: "22",
      categoria: "Equipo Especializado",
      nombre: "Tambo de plástico",
      descripcion: "Tambo de plastico con tapa y cincho. Capacidad 200 lts.",
      fotografia: "22_producto_b2pov.JPG",
    },
    {
      id_producto: "24",
      categoria: "Maquinaria",
      nombre: "Agitador eléctrico",
      descripcion:
        "Agitador electrico de acero inoxidable para mezclar grasa vegetal, leche en polvo para elaborar quesos, crema vegetale.",
      fotografia: "24_producto_h8blr.JPG",
    },
    {
      id_producto: "25",
      categoria: "Maquinaria",
      nombre: "Bomba sumergible",
      descripcion: "Bomba sumergible de acero inoxidable",
      fotografia: "25_producto_zkulo.JPG",
    },
    {
      id_producto: "26",
      categoria: "Maquinaria",
      nombre: "Bomba de acero inoxidable",
      descripcion: "Bomba de acero inoxidable.",
      fotografia: "26_producto_6ki8u.JPG",
    },
    {
      id_producto: "27",
      categoria: "Equipo Especializado",
      nombre: "Bote lechero",
      descripcion: "Bote lechero de plastico. Presentacion de 40 y 20 lts.",
      fotografia: "27_producto_dz08k.JPG",
    },
    {
      id_producto: "28",
      categoria: "Maquinaria",
      nombre: "Caldera",
      descripcion:
        "Caldera verticales y horizontales para producir vapor. Diferentes capacidades.",
      fotografia: "28_producto_tkw36.JPG",
    },
    {
      id_producto: "29",
      categoria: "Maquinaria",
      nombre: "Cazo de acero inoxidable",
      descripcion:
        "Cazo de acero inoxidable doble fondo grado alimenticio. Diferentes capacidades.",
      fotografia: "29_producto_x2fpd.JPG",
    },
    {
      id_producto: "30",
      categoria: "Maquinaria",
      nombre: "Descremadora",
      descripcion: "Descremadora electrica nueva diferentes capacidades",
      fotografia: "30_producto_fof94.JPG",
    },
    {
      id_producto: "31",
      categoria: "Maquinaria",
      nombre: "Dosificador",
      descripcion: "Dosificador de yogurt y cremas",
      fotografia: "31_producto_mmjmr.JPG",
    },
    {
      id_producto: "32",
      categoria: "Maquinaria",
      nombre: "Dosificador de polvos",
      descripcion:
        "Dosificador de polvos funciona para mezclar leche en polvo con agua o leche, para elaborar quesos o productos lacteos.",
      fotografia: "32_producto_byy76.JPG",
    },
    {
      id_producto: "33",
      categoria: "Maquinaria",
      nombre: "Empacadora al vacío",
      descripcion: "Empacadora al vacio, diferentes capacidades.",
      fotografia: "33_producto_rh674.JPG",
    },
    {
      id_producto: "34",
      categoria: "Equipo Especializado",
      nombre: "Analizador de leche",
      descripcion:
        "Analizador de leche para medir diferentes parametros en la leche: grasa, agua, proteina, solidos, lactosa,",
      fotografia: "34_producto_1orkt.JPG",
    },
    {
      id_producto: "35",
      categoria: "Equipo Especializado",
      nombre: "Lactometro",
      descripcion:
        "Lactometro para medir el porcentaje de agua añadida en la leche.",
      fotografia: "35_producto_ocr0z.JPG",
    },
    {
      id_producto: "36",
      categoria: "Equipo Especializado",
      nombre: "Potenciometros",
      descripcion:
        "Potenciometro portatil o peachimetro funciona para medir el pH (potencial de hidrogeno) en la leche.",
      fotografia: "36_producto_hcncs.JPG",
    },
    {
      id_producto: "37",
      categoria: "Equipo Especializado",
      nombre: "Potenciometro",
      descripcion:
        "Potenciomtero portatil para medir el pH (potencial de hidrogeno) en la leche.",
      fotografia: "37_producto_yg673.JPG",
    },
    {
      id_producto: "41",
      categoria: "Equipo Especializado",
      nombre: "Hidróxido de sodio",
      descripcion:
        "Hidroxido de sodio al .1 N. Reactivo para medir la acidez en la leche.",
      fotografia: "41_producto_cpnly.JPG",
    },
    {
      id_producto: "42",
      categoria: "Maquinaria",
      nombre: "Descremadoras usadas",
      descripcion: "Descremadoras usadas de diferentes maecas y capacidades.",
      fotografia: "42_producto_fmgql.JPG",
    },
    {
      id_producto: "44",
      categoria: "Maquinaria",
      nombre: "Descremados nuevas",
      descripcion: "Descremadoras nuevas capacidad 100 lts por hora",
      fotografia: "44_producto_z1j3i.JPG",
    },
    {
      id_producto: "45",
      categoria: "Maquinaria",
      nombre: "Maquina Cooker",
      descripcion:
        "Maquina Cooker de diferentes capacidades, para elaborar quesos de pasta hilada como; asadero, oaxaca y mozarela. Tambien funciona perfectamente para elaborar quesos extendidos y analogos.",
      fotografia: "45_producto_7rkrm.jpg",
    },
    {
      id_producto: "46",
      categoria: "Maquinaria",
      nombre: "Maquina Melaxadora",
      descripcion:
        "Maquina Melaxadora de acero inoxidable grado alimenticio, con doble fondo, con doble aspa, tapa abatible, triple capa de teflon, variador de velocidades y paro de emergencia. Funciona para elaborar quesos fundidos de pasta hilada como; asadero, oaxaca y mozarela. Tambien funciona para elaborar quesos extendidos y analogos.",
      fotografia: "46_producto_4tprh.jpg",
    },
    {
      id_producto: "47",
      categoria: "Maquinaria",
      nombre: "Maquina Malaxadora",
      descripcion: "Maquina Malaxadora de diferentes capacidades",
      fotografia: "47_producto_urpeu.jpg",
    },
    {
      id_producto: "48",
      categoria: "Maquinaria",
      nombre: "Maquina Malaxadora",
      descripcion: "Maquina malaxadora difentes capacidades",
      fotografia: "48_producto_ans7t.JPG",
    },
    {
      id_producto: "49",
      categoria: "Maquinaria",
      nombre: "Maquina Malaxadora",
      descripcion: "Maquina Malaxadora diferentes capacidades",
      fotografia: "49_producto_a4z3s.JPG",
    },
    {
      id_producto: "50",
      categoria: "Maquinaria",
      nombre: "Extrusor",
      descripcion:
        "Extrusor de acero inoxidable grado alimenticio, doble fondo, con boquillas intercambiables, con triple capa de teflon. Diferentes capacidades. Funciona para hacer las correas de los quesos de pasta hilada como: asadero, oaxaca y mozarela.",
      fotografia: "50_producto_3uixt.jpg",
    },
    {
      id_producto: "52",
      categoria: "Maquinaria",
      nombre: "Molino para queso fresco",
      descripcion:
        "Molino electrico de acero inoxidable grado alimenticio, con motor electrico de 1 hp, con mesa de trabajo. Para elaborar queso fresco, molido o renchero.",
      fotografia: "52_producto_8u47x.JPG",
    },
  ];

  const categories = [
    {
      title: "Materia Prima",
      items: products.filter(
        (product) => product.categoria === "Materia Prima"
      ),
    },
    {
      title: "Maquinaria",
      items: products.filter((product) => product.categoria === "Maquinaria"),
    },
    {
      title: "Equipo Especializado",
      items: products.filter(
        (product) => product.categoria === "Equipo Especializado"
      ),
    },
  ];

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(product => product.categoria.toLowerCase() === selectedCategory);

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900" : "bg-gradient-to-br from-blue-50 to-white"
      } transition-colors duration-300`}
    >
      <FloatingNavigation
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <HeroSection isDarkMode={isDarkMode} />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isDarkMode={isDarkMode}
      />
      <ProductGrid
        categories={[{ title: selectedCategory, items: filteredProducts }]}
        setSelectedProduct={setSelectedProduct}
        isDarkMode={isDarkMode}
      />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          isDarkMode={isDarkMode}
        />
      )}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default CheeseWebsite;
