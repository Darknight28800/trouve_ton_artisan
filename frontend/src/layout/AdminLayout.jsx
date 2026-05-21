import AdminHeader from "../components/AdminHeader";

export default function AdminLayout({ children }) {
    return (
        <>
            <AdminHeader />
            <div className="admin-container">
                {children}
            </div>
        </>
    );
}
