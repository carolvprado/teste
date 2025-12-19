import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import Home from "../pages/Home/Home";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Agendamento from "../pages/Home/Agendamento";
import Inbound from "../pages/Home/Inbound";
import Inventario from "../pages/Home/Inventario";
import Mobile from "../pages/Home/Mobile";
import Outbound from "../pages/Home/Outbound";
import Relatorio from "../pages/Home/Relatorio";
import Login from "../pages/Login";


export default function AppRoutes() {
return (
    <Routes>
    {/* ROTAS COM MENU */}
    <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/inbound" element={<Inbound />} />
        <Route path="/inventario" element={<Inventario/>} />
        <Route path="/mobile" element={<Mobile/>} />
        <Route path="/outbound" element={<Outbound/>} />
        <Route path="/relatorio" element={<Relatorio/>} />
    </Route>
    
    {/* ROTAS COM MENU */}
    <Route  element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
    </Route>
</Routes>
);
}