import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import Footer from "./Footer";
import Header from "./Header";
import Category from "./Category";

const QrMenu = () => {
  return (
    <div className="max-w-md min-h-auto mx-auto mt-3 p-9 pb-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>SweetBite | Menü</title>
      </Helmet>
      <Header />
      <Category />
      <Footer />
    </div>
  );
};

export default QrMenu;
