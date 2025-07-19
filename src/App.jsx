import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layout"
import Homepage from "./pages/Homepage"
import Product from "./pages/Product"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import ForgotPassword from "./pages/ForgotPassword"
import MembershipInfos from "./pages/MembershipInfos"
import Orders from "./pages/Orders"
import Payments from "./pages/Payments"
import Bills from "./pages/Bills"
import SupportRequests from "./pages/SupportRequests"
import SecuritySettings from "./pages/SecuritySettings"
import AddBalance from "./pages/AddBalance"
import NewRequest from "./pages/NewRequest"
import ChangePassword from "./pages/ChangePassword"
import Blog from "./pages/Blog"
import AllProducts from "./pages/AllProducts"
import CartPage from "./pages/Cart"
import Favorites from "./pages/Favorites"
import SSS from "./pages/Favorites copy"
function App() {

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/product/valorant" element={<Product />} />
          <Route path="/membership-information" element={<MembershipInfos />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/support-requests" element={<SupportRequests />} />
          <Route path="/new-request" element={<NewRequest />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/sss" element={<SSS />} />
          <Route path="/security-settings" element={<SecuritySettings />} />
          <Route path="/add-balance" element={<AddBalance />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
