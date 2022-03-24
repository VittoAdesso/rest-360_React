import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AuthRoute from 'src/routes/AuthRoute/AuthRoute';
import { UserContext } from 'src/context/UserContext'

const Home = React.lazy(() => import("../../pages/clientes/Home/Home"));
const Reservas = React.lazy(() => import("../../pages/clientes/Reservas/Reservas"));
const Restaurante = React.lazy(() => import("../../pages/clientes/Restaurante/Restaurante"));
const CartaPedidos = React.lazy(() => import("../../pages/clientes/CartaPedidos/CartaPedidos"));
const Pedido = React.lazy(() => import("../../pages/clientes/Pedido/Pedido"));
const PedidoMesa = React.lazy(() => import("../../pages/clientes/Pedido/PedidoMesa"));
const CompraRegistro = React.lazy(() => import("../../pages/clientes/CompraRegistro/CompraRegistro"));
const Regalar = React.lazy(() => import("../../pages/clientes/Regalar/Regalar"));
const Contacto = React.lazy(() => import("../../pages/clientes/Contacto/Contacto"));
const Socios = React.lazy(() => import("../../pages/clientes/Socios/Socios"));
const AvisoLegal = React.lazy(() => import("../../pages/clientes/AvisoLegal/AvisoLegal"));
const DondeEstamos = React.lazy(() => import("../../pages/clientes/DondeEstamos/DondeEstamos"));
const Horarios = React.lazy(() => import("../../pages/clientes/Horarios/Horarios"));
const PoliticaCookies = React.lazy(() => import("../../pages/clientes/PoliticaCookies/PoliticaCookies"));
const PoliticaPrivacidad = React.lazy(() => import("../../pages/clientes/PoliticaPrivacidad/PoliticaPrivacidad"));
const RegistroUsuarios = React.lazy(() => import("../../pages/clientes/RegistroUsuarios/RegistroUsuarios"));
const IniciarSesion = React.lazy(() => import("../../pages/clientes/IniciarSesion/IniciarSesion"));

// Admin routes.
const AdmMain = React.lazy(() => import("../../pages/admin/AdmMain/AdmMain"));
const DetallePedidos = React.lazy(() => import("../../pages/admin/DetallePedidos/DetallePedidos"));
const DetallePlatos = React.lazy(() => import("../../pages/admin/DetallePlatos/DetallePlatos"));
const DetalleTickets = React.lazy(() => import("../../pages/admin/DetalleTickets/DetalleTickets"));
const ListadoPedidos = React.lazy(() => import("../../pages/admin/ListadoPedidos/ListadoPedidos"));
const ListadoPlatos = React.lazy(() => import("../../pages/admin/ListadoPlatos/ListadoPlatos"));
const ListadoRegalos = React.lazy(() => import("../../pages/admin/ListadoRegalos/ListadoRegalos"));
const ListadoReservas = React.lazy(() => import("../../pages/admin/ListadoReservas/ListadoReservas"));
const ListadoTickets = React.lazy(() => import("../../pages/admin/ListadoTickets/ListadoTickets"));
const ListadoUsuarios = React.lazy(() => import("../../pages/admin/ListadoUsuarios/ListadoUsuarios"));
const PedidosEnCurso = React.lazy(() => import("../../pages/admin/PedidosEnCurso/PedidosEnCurso"));
const Cocina = React.lazy(() => import("../../pages/admin/Cocina/Cocina"));

// Si la ruta o pagina no existe.
const NotFound = React.lazy(() => import("../../pages/clientes/NotFound/NotFound"));


const Main = () => {

  let {usuario, setUsuario} = useContext(UserContext);
 
  console.log("Usuario--->", usuario)
  const userString = localStorage.getItem("user")

  if(userString && !usuario){
    const ususaurio = JSON.parse(userString)
    usuario = ususaurio
    setUsuario(ususaurio)
    console.log(usuario)
  }

  return (
    <div className="mainDiv">
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <Home />
              </React.Suspense>
            }
          />

          <Route
            path="/restaurante"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <Restaurante />
              </React.Suspense>
            }
          />

          <Route
            path="/reservas"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <Reservas />
              </React.Suspense>
            }
          />

          <Route
            path="/carta-pedidos"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <CartaPedidos />
              </React.Suspense>
            }
          />

          <Route
            path="/contacto"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <Contacto />
              </React.Suspense>
            }
          />

          <Route
            path="/regalar"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <Regalar />
              </React.Suspense>
            }
          />

          {/*************************
            Paginas sin link en el menú  
            ***************************/}
          <Route
            path="/su-pedido"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <Pedido />
              </React.Suspense>
            }
          />

          <Route
            path="/su-pedido/en-mesa"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <PedidoMesa />
              </React.Suspense>
            }
          />

          <Route
            path="/compraregistro"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <CompraRegistro />
              </React.Suspense>
            }
          />

          <Route
            path="/dondeestamos"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <DondeEstamos />
              </React.Suspense>
            }
          />

          <Route
            path="/horarios"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <Horarios />
              </React.Suspense>
            }
          />

          <Route
            path="/avisolegal"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <AvisoLegal />
              </React.Suspense>
            }
          />

          <Route
            path="/politicacookies"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <PoliticaCookies />
              </React.Suspense>
            }
          />

          <Route
            path="/politicaprivacidad"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <PoliticaPrivacidad />
              </React.Suspense>
            }
          />

          <Route
            path="/registro"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <RegistroUsuarios />
              </React.Suspense>
            }
          />

          <Route
            path="/login"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <IniciarSesion />
              </React.Suspense>
            }
          />

          <Route
            path="/socios"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <AuthRoute user={usuario} component={<Socios user={usuario} />} />
              </React.Suspense>
            }
          />

          {/*************************
            Paginas Admin con botones  
            ***************************/}

          <Route
            path="/admmain"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <AdmMain />
              </React.Suspense>
            }
          />

          <Route
            path="/detallepedidos/:id"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <DetallePedidos />
              </React.Suspense>
            }
          />

          <Route
            path="/detalleplatos/:id"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <DetallePlatos />
              </React.Suspense>
            }
          />

          <Route
            path="/detalletickets/:id"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <DetalleTickets />
              </React.Suspense>
            }
          />

          <Route
            path="/listadopedidos"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <ListadoPedidos />
              </React.Suspense>
            }
          />

          <Route
            path="/listadoplatos"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <ListadoPlatos />
              </React.Suspense>
            }
          />

          <Route
            path="/listadoregalos"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <ListadoRegalos />
              </React.Suspense>
            }
          />

          <Route
            path="/listadoreservas"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <ListadoReservas />
              </React.Suspense>
            }
          />

          <Route
            path="/listadotickets"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <ListadoTickets />
              </React.Suspense>
            }
          />

          <Route
            path="/listadousuarios"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <ListadoUsuarios />
              </React.Suspense>
            }
          />

          <Route
            path="/pedidosencurso"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <PedidosEnCurso />
              </React.Suspense>
            }
          />

          <Route
            path="/cocina"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
               <Cocina />
              </React.Suspense>
            }
          />

          {/*******************************************************
            Paginas Not Foun para rutas diferentes a las informadas
            ******************************************************/}

          <Route
            path="/*"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <NotFound />
              </React.Suspense>
            }
          />


        </Routes>
      </main>
    </div>
  );
};

export default Main;
