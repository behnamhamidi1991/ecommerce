"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../../redux/slices/cartSlice";
import CheckoutWizard from "../../components/CheckoutWizard";

export default function ShippingAddressPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const router = useRouter();
  const dispatch = useDispatch();
  const { shippingAddress } = useSelector((state) => state.cart);

  useEffect(() => {
    setValue("fullName", shippingAddress.fullName);
    setValue("address", shippingAddress.address);
    setValue("city", shippingAddress.city);
    setValue("postalCode", shippingAddress.postalCode);
    setValue("country", shippingAddress.country);
  }, [setValue, shippingAddress]);

  const submitHandler = ({ fullName, address, city, postalCode, country }) => {
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );

    router.push("/payment");
  };
  return (
    <div>
      <CheckoutWizard activeStep={1} />
    </div>
  );
}
