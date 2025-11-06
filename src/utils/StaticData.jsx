import { v } from "../styles/Variables";
import {
  AiOutlineHome,
  AiOutlineApartment,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
import { TbPig } from "react-icons/tb";

export const DropdownUser = [
  {
    text: "Mi perfil",
    icono: <v.iconoUser />,
    tipo: "miperfil",
  },
  {
    text: "Configuracion",
    icono: <v.iconoSettings />,
    tipo: "configuracion",
  },
  {
    text: "Cerrar sesión",
    icono: <v.iconoCerrarSesion />,
    tipo: "cerrarsesion",
  },
];

export const DataDisplayType = [
  {
    text: "Categorias gastos",
    color: v.colorGastos,
    tipo: "g",
    bgcolor: v.colorbgGastos,
  },
  {
    text: "Categorias ingresos",
    color: v.colorIngresos,
    tipo: "i",
    bgcolor: v.colorbgingresos,
  },
];
export const DropdownDataMovements = [
  {
    text: "Gastos",
    color: v.colorGastos,
    tipo: "g",
    bgcolor: v.colorbgGastos,
  },
  {
    text: "Ingresos",
    color: v.colorIngresos,
    tipo: "i",
    bgcolor: v.colorbgingresos,
  },
];

//data SIDEBAR
export const LinksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Categorias",
    icon: <MdOutlineAnalytics />,
    to: "/categorias",
  },
  {
    label: "Movimientos",
    icon: <AiOutlineApartment />,
    to: "/movimientos",
  },
  {
    label: "Informes",
    icon: <MdOutlineAnalytics />,
    to: "/informes",
  },
  // {
  //   label: "Dashboard",
  //   icon: <RiDashboard3Line />,
  //   to: "/dashboard",
  // },
];
export const SecondarylinksArray = [
  {
    label: "Configuración",
    icon: <AiOutlineSetting />,
    to: "/configurar",
  },
  {
    label: "Acerca de",
    icon: <TbPig />,
    to: "/acercade",
  },
];
//temas
export const ThemesData = [
  {
    icono: "🌞",
    descripcion: "light",
  },
  {
    icono: "🌚",
    descripcion: "dark",
  },
];
