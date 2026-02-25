import {
  FaThLarge,
  FaPalette,
  FaLeaf,
  FaTruckMoving,
  FaCheckCircle,
  FaRecycle,
} from "react-icons/fa";

export const servicesData = [
  {
    title: "Paver Blocks",
    slug: "paver-blocks",
    desc: "High-strength interlocking paver blocks ideal for driveways and outdoor flooring.",
    color: "bg-[#B74722]",
    icon: <FaThLarge />,
    image: "/services/paver-blocks.png",
    details:
      "Our paver blocks are manufactured using advanced machinery ensuring durability, strength, and long-lasting performance.",
  },
  {
    title: "Designer Tiles",
    slug: "designer-tiles",
    desc: "Premium wall and floor tiles designed for modern interiors.",
    color: "bg-[#DD615F]",
    icon: <FaPalette />,
    image: "/services/designer-tiles.png",
    details:
      "Designer tiles crafted to enhance aesthetics while maintaining strength and easy maintenance.",
  },
  {
    title: "Outdoor Flooring",
    slug: "outdoor-flooring",
    desc: "Weather-resistant tiles suitable for patios and outdoor areas.",
    color: "bg-[#427A43]",
    icon: <FaLeaf />,
    image: "/services/outdoor-flooring.png",
    details:
      "Outdoor flooring tiles designed to withstand weather, moisture, and heavy usage.",
  },
  {
    title: "Bulk Supply",
    slug: "bulk-supply",
    desc: "Large-scale production capacity for commercial projects.",
    color: "bg-sky-500",
    icon: <FaTruckMoving />,
    image: "/services/bulk-supply.png",
    details:
      "We ensure timely bulk supply for residential and commercial construction projects.",
  },
  {
    title: "Quality Assurance",
    slug: "quality-assurance",
    desc: "Strict quality checks for strength, durability and finish.",
    color: "bg-red-500",
    icon: <FaCheckCircle />,
    image: "/services/quality-assurance.png",
    details:
      "Every product undergoes rigorous quality testing before delivery.",
  },
  {
    title: "Eco-Friendly Tiles",
    slug: "eco-friendly-tiles",
    desc: "Sustainable manufacturing with minimal environmental impact.",
    color: "bg-green-500",
    icon: <FaRecycle />,
    image: "/services/eco-friendly.png",
    details:
      "Eco-friendly tiles produced with sustainable materials and processes.",
  },
];
