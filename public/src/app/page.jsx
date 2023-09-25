"use client";
import AuthModal from "airbnb/components/auth/AuthModal";
import Footer from "airbnb/components/footer/Footer";
import Navbar from "airbnb/components/navbar/Navbar";
import ListView from "airbnb/components/views/ListView";
import { getAllListingsAPI } from "airbnb/lib/lisitng";
import { useAppStore } from "airbnb/store/store";
import React, { useEffect } from "react";

const page = () => {
  const { isAuthModalOpen, setListings } = useAppStore();

  useEffect(() => {
    const getData = async () => {
      const data = await getAllListingsAPI();
      setListings(data);
    };
    getData();
  }, []);
  return (
    <div className="max-h-[100vh] h-[100vh]">
      <Navbar />
      <ListView />
      <Footer />
      {isAuthModalOpen && <AuthModal />}
    </div>
  );
};

export default page;
