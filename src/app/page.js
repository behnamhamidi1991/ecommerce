import { data } from "@/utils/data";
import Image from "next/image";

export default function Home() {
  const { products } = data;

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
