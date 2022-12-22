import myKey from "./khaltiKey";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";


const notify = (message) => toast.success(message);
let config = {
  // replace this key with yours
  publicKey: myKey.publicTestKey,
  productIdentity: "1234567890",
  productName: "Bags",
  productUrl: "http://localhost:3000",
  eventHandler: {
    onSuccess(payload) {
      // hit merchant api for initiating verfication
      
      console.log(payload);

      setTimeout(
        () => {
          
          notify("Payment Successful")
          window.location.replace("/displaybookings");
          
          
          
        }, 
        
        
        2000);
        notify("Payment Successful")
        let data = {
          token: payload.token,
          amount: payload.amount,
        };
        <ToastContainer />

      let config = {
        headers: {
          Authorization: myKey.secretKey,
        },
      };

      axios
        .post("https://khalti.com/api/v2/payment/verify/", data, config)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // onError handler is optional
    onError(error) {
      // handle errors
      console.log(error);
    },
    onClose() {
      console.log("widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
    "EBANKING",
    "MOBILE_BANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};

export default config;
