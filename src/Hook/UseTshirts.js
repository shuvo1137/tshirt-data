import { useEffect, useState } from "react";

function useTshirts() {
  const [tshirts, setTshirts] = useState([]);
  useEffect(() => {
    fetch("tshirts.json")
      .then((res) => res.json())
      .then((data) => setTshirts(data));
  }, []);
  return [tshirts, useTshirts];
}
export default useTshirts;
