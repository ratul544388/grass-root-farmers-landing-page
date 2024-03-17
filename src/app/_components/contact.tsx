"use client";

import { IoMailOutline } from "react-icons/io5";
import { Title } from "./title";
import { Container } from "@/components/container";

export const Contact = () => {
  return (
    <Container className="flex flex-col items-center mt-20">
      <IoMailOutline className="h-10 w-10" />
      <Title className="mt-1">A better table, where everyone is welcome.</Title>
      <label className="text-center mt-4 font-medium">
        Join this farm and food revolution to get 15% off your first order!
      </label>
      <div className="flex mt-5 w-full max-w-[400px]">
        <input
          placeholder="Enter your email"
          className="h-10 px-3 w-full border border-gray-300 focus:border-gray-500 outline-none"
        />
        <button className="h-10 whitespace-nowrap border border-gray-300 border-l-0 px-3">
          Sign up
        </button>
      </div>
    </Container>
  );
};
