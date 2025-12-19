import { Routes, Route } from "react-router-dom";

import MainLayout from "./MainLayout";
import AuthLayout from "./AuthLayout";

import Home from "./Home";
import Sobre from "./Sobre";
import Contato from "./Contato";
import Agendamento from "./Agendamento";
import Inbound from "./Inbound";
import Inventario from "./Inventario";
import Mobile from "./Mobile";
import Outbound from "./Outbound";
import Relatorio from "./Relatorio";
import Login from "./Login";


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