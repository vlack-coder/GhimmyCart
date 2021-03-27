import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import {
  FlutterwaveConfig,
  FlutterWaveResponse,
} from "flutterwave-react-v3/dist/types";
import { toast } from "react-toastify";
import { formatter } from "../utils/utils";
import { useDispatch } from "react-redux";
import { clearEntireCart } from "../redux/cart/cart.actions";

type UsePaymentProps = {
  amount: number;
};

const usePayment = ({ amount }: UsePaymentProps) => {
  const dispatch = useDispatch();
  // FLWPUBK_TEST-79b4152395ee53f09b7f5016b316a025-X
  const flutterwaveConfig: FlutterwaveConfig = {
    public_key: "FLWPUBK_TEST-79b4152395ee53f09b7f5016b316a025-X",
    tx_ref: `${Date.now()}`,
    amount,
    currency: "NGN",
    payment_options: "card, ussd, mobilemoney, paypal",
    customer: {
      email: "user@gmail.com",
      phonenumber: "07064586146",
      name: "Test Customer",
    },
    customizations: {
      title: "Ghimmy Stores",
      description: "Payment for items in cart",
      logo:
        "https://dewey.tailorbrands.com/production/brand_version_mockup_image/363/4946259363_1bc0e233-bb74-4dbd-977f-cb5d023f3692.png?cb=1616796116",
    },
  };

  const onPaymentSuccess = (response: FlutterWaveResponse) => {
    const { status } = response;

    if (status !== "successful") return;

    toast(`Your payment of ${formatter(amount)} was successful!`, {
      position: "bottom-center",
    });
    
    closePaymentModal();
    dispatch(clearEntireCart());
  };

  const handleFlutterPayment = useFlutterwave(flutterwaveConfig);

  const initializeFlutterwavePayment = () =>
    handleFlutterPayment({
      callback: onPaymentSuccess,
      onClose: () => console.log(`amount`, amount)
    });

  return {
    initializeFlutterwavePayment,
  };
};

export default usePayment;
