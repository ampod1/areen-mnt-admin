import { Button } from "@material-ui/core";
import React from "react";
import { useLocale, useSetLocale } from "react-admin";

const LocaleSwitcher = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  const locale = useLocale();
  const setLocale = useSetLocale();

  const changeLocaleHandler = (lang: "ar" | "en") => {
    setLocale(lang);
    localStorage.setItem("current_locale", lang);
  };
  return (
    <div>
      <div
        style={{
          display: isSidebarOpen ? "flex" : "block",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginInline: "5px",
            background: locale === "ar" ? "#cccc" : "auto",
          }}
          disabled={locale === "ar"}
          onClick={() => changeLocaleHandler("ar")}
        >
          <img
            style={{ width: "30px", height: "30px" }}
            src="/ksa.svg"
            alt="Arabic language"
          />
          <span style={{ marginInline: "5px" }}>
            {isSidebarOpen ? "AR" : ""}
          </span>
        </Button>
        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginInline: "5px",
            background: locale === "en" ? "#cccc" : "auto",
          }}
          disabled={locale === "en"}
          onClick={() => changeLocaleHandler("en")}
        >
          <img
            style={{ width: "30px", height: "30px" }}
            src="/usa.svg"
            alt="English language"
          />
          <span style={{ marginInline: "5px" }}>
            {isSidebarOpen ? "EN" : ""}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default LocaleSwitcher;
