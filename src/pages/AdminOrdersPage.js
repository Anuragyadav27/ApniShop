import NavBar from '../features/navbar/Navbar'
import AdminOrders from '../features/admin/components/AdminOrders'

export default function AdminOrdersPage() {
  return (
    <div>
      <NavBar>
        <AdminOrders></AdminOrders>
      </NavBar>
    </div>
  )
}
