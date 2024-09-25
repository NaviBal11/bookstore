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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
      <div>
        <UpdateUserInfo />
        <div>
          <ChangePassword />
        </div>
      </div>

      <div>
        <OrderHistory />
      </div>
    </div>
  );
}

export default AccountDetails;
