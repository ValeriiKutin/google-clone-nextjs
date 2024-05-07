"use client";

import { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("United States");
  useEffect(() => {
    const getContry = async () => {
      const response = fetch(
        `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => data.city);
      if (!response) return;

      setCountry(response);
    };
    getContry();
  }, []);
  console.log(country);
  return <div>{country}</div>;
}
