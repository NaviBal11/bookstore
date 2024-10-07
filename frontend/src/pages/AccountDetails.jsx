import { useSelector } from "react-redux";
import OrderHistory from "../components/OrderHistory";
import UpdateUserInfo from "../components/UpdateUserInfo";
import ChangePassword from "../components/ChangePassword";

function AccountDetails() {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <div>Loading...</div>; // or any other loading indicator
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <UpdateUserInfo />
            <ChangePassword />
          </div>
          <div className="space-y-6">
            <OrderHistory />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;
