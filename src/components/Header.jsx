import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "@/styles/main.scss";
import ModalWrapper from "./ModalWrapper";
import InputPhone from "./InputPhone/InputPhone";
import { UseStateValue } from "@/context";

function Header({ setSearch, setModal, modal }) {

  const location = useLocation();
  const [icon, setIcon] = useState("/assets/icons/tracker.svg");
  const [language, setLanguage] = useState("ru");
  const { favorites } = UseStateValue();
  const [favoriteCount, setFavoriteCount] = useState(favorites.length);

  useEffect(() => {
    setFavoriteCount(favorites.length);
  }, [favorites]);

  useEffect(() => {
    setIcon(location.pathname === "/tracking" ? "/assets/icons/tracker2.svg" : "/assets/icons/tracker.svg");
  }, [location.pathname]);

  const toggleLanguage = () => setLanguage((prev) => (prev === "ru" ? "uz" : "ru"));
  return (
    <header>
      <div className="container">
        <NavLink to="/">
          <img
            className="logo"
            src="/assets/icons/Asaxiy_Logo.svg"
            alt="logo"
          />
        </NavLink>
        <div className="menu-search">
          <Link to={"/empty"}>
            <button className="menu-btn">
              <div className="menu">
                <span></span>
                <span></span>
                <span></span>
              </div>
              Bo'limlar
            </button>
          </Link>
          <div className="search">
            <input
              type="text"
              placeholder="Qidirish..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button>Qidirish</button>
          </div>
        </div>
        <NavLink to={"/comparison"} className="btn">
          <button>
            <svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.13152 1.30997C9.13152 1.89218 9.31813 2.28032 9.75356 2.60377L10.189 2.79784C8.50949 2.79784 7.0166 3.0566 5.71033 3.76819C3.96863 4.60916 3.96863 3.83288 2.91117 3.83288C2.35133 3.83288 1.7915 4.93261 2.72456 5.45013C2.97337 5.57951 3.471 5.77358 3.78202 5.77358C2.91117 7.52022 2.04032 9.33154 1.16947 11.0782C0.982856 11.0782 0.734042 11.0135 0.609635 11.1429C0.236413 11.4663 0.920652 12.372 1.10726 12.6307L1.7915 13.1482C3.34659 14.1186 6.20795 14.1833 7.57643 12.8248C7.94965 12.5013 8.44728 11.9191 8.44728 11.2722C8.44728 11.0135 7.94965 11.0782 7.82525 11.0782C7.76304 10.9488 7.57643 10.5606 7.51423 10.4313C6.76779 9.00809 5.83473 7.39084 5.2749 5.96765C5.15049 5.70889 5.2127 5.83827 5.71033 5.70889C6.82999 5.45013 8.07406 4.73854 9.13152 4.73854V15.2183C8.38508 15.2183 7.82525 15.8652 7.82525 16.6415H6.27016C5.77253 16.6415 5.15049 17.2237 5.15049 18H10.5H15.8495C15.8495 17.2237 15.2275 16.6415 14.7298 16.6415H13.1748C13.1748 15.8652 12.6149 15.2183 11.8685 15.2183V4.73854C12.9259 4.73854 14.17 5.45013 15.2897 5.70889C15.7873 5.83827 15.8495 5.70889 15.7251 5.96765C15.1031 7.39084 14.2322 9.00809 13.4858 10.4313C13.4236 10.5606 13.237 10.9488 13.1748 11.0782C13.0503 11.0782 12.4905 11.0135 12.4905 11.2722C12.4905 11.9191 13.0503 12.5013 13.4236 12.8248C14.7298 14.1833 17.6534 14.1186 19.2085 13.1482L19.8927 12.6307C20.0793 12.372 20.7636 11.4663 20.3904 11.1429C20.266 11.0135 20.0171 11.0782 19.8305 11.0782C18.9597 9.33154 18.0888 7.52022 17.218 5.77358C17.529 5.77358 18.0266 5.57951 18.2132 5.45013C19.2085 4.93261 18.5865 3.83288 18.0266 3.83288C17.0314 3.83288 17.0314 4.60916 15.2897 3.76819C13.9834 3.0566 12.4905 2.79784 10.811 2.79784L11.1842 2.60377C11.6819 2.28032 11.8685 1.89218 11.8685 1.30997C11.8685 -0.436658 9.13152 -0.436658 9.13152 1.30997Z"
              />
            </svg>
            Taqqoslash
          </button>
        </NavLink>
        <NavLink to={"/payment"} className="btn">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 195.38 146.54"
              fill="currentColor"
            >
              <path d="M154.68 0H40.7C18.23,0.02 0.02,18.24 0,40.7v65.13c0.02,22.47 18.23,40.68 40.7,40.71h113.97c22.47,-0.03 40.68,-18.24 40.7,-40.7V40.7C195.36,18.24 177.15,0.02 154.68,0ZM40.7 16.28h113.97c13.49,0 24.42,10.94 24.42,24.42H16.28c0,-13.49 10.94,-24.42 24.42,-24.42Zm113.97 113.97H40.7c-13.49,-0 -24.42,-10.94 -24.42,-24.42V56.98h162.82v48.85c0,13.49 -10.94,24.42 -24.42,24.42Z" />
              <circle cx="44.78" cy="101.76" r="12.21" />
              <circle cx="150.6" cy="101.76" r="12.21" />
            </svg>
            To'lov
          </button>
        </NavLink>
        <NavLink
          to="/tracking"
          className="btn"
          onMouseEnter={() => setIcon("./assets/icons/tracker2.svg")}
          onMouseLeave={() => {
            if (location.pathname !== "/tracking") {
              setIcon("./assets/icons/tracker.svg");
            }
          }}
        >
          <button>
            <img src={icon} alt="Tracking Icon" />
            Trek
          </button>
        </NavLink>
        <NavLink to={"/basket"} className="btn">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.36 197.2"
              fill="currentColor"
              width="50"
              height="50"
            >
              <path d="M186.62 33.5c-4.67,-5.61 -11.59,-8.85 -18.89,-8.85 -0.01,0 -0.02,0 -0.03,0l-132.85 -0 -0.35 -2.88c-1.46,-12.4 -11.98,-21.76 -24.47,-21.77l-1.83 -0c-4.54,0 -8.22,3.68 -8.22,8.22 0,4.54 3.68,8.22 8.22,8.22l1.82 0c4.17,0 7.67,3.12 8.16,7.26l11.31 96.13c2.43,20.69 19.97,36.29 40.8,36.29 0,0 0,0 0,0l85.81 0c4.54,-0 8.22,-3.68 8.22,-8.22 0,-4.54 -3.68,-8.22 -8.22,-8.22l-85.81 0c-10.42,-0.03 -19.7,-6.61 -23.17,-16.43l97.94 0c-0,-0 0,-0 0,-0 19.88,0 36.91,-14.23 40.43,-33.79l6.45 -35.78c0.26,-1.45 0.4,-2.92 0.4,-4.39 0,-5.77 -2.03,-11.36 -5.74,-15.79l0 -0zm-10.79 17.26l-6.46 35.78c-2.11,11.74 -12.33,20.28 -24.26,20.28 -0.01,0 -0.02,0 -0.04,0l-100.56 0 -7.73 -65.73 130.91 0c0.02,0 0.03,0 0.05,0 4.54,0 8.22,3.68 8.22,8.22 0,0.49 -0.05,0.98 -0.13,1.46l0 0z" />
              <circle cx="57.52" cy="180.76" r="16.43" />
              <circle cx="139.68" cy="180.76" r="16.43" />
            </svg>
            <span className="count">0</span>
            Savatcha
          </button>
        </NavLink>
        <NavLink to={"/favorite"} className="btn">
          <button>
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 189.37 166.49"
            >
              <path
                fill="currentColor"
                d="M138.33 15.92c10.6,0 22.64,7.49 28.41,15.97 5.34,7.85 6.72,14.17 6.72,23.98 0,16.69 -14.21,38.76 -24.7,50.76 -1.77,2.03 -3.28,4.03 -5.17,5.92l-7.57 8.33c-4.96,4.91 -12.87,12.87 -18.09,17.05 -0.65,0.52 -0.9,0.87 -1.51,1.44 -6.18,5.78 -12.54,11.19 -22.1,11.19 -7.91,0 -12.52,-3.71 -16.75,-7.29 -0.68,-0.58 -0.76,-0.52 -1.46,-1.13 -0.57,-0.51 -0.75,-0.77 -1.34,-1.25l-4.59 -3.91c-1.21,-1.17 -1.59,-1.58 -2.91,-2.63 -1.99,-1.59 -3.37,-3.44 -5.55,-5.18 -4.06,-3.24 -11.8,-12.19 -15.94,-16.61 -5.86,-6.27 -14.28,-17.23 -18.66,-24.62 -6.85,-11.56 -11.21,-20.18 -11.21,-35.76 0,-9.2 4.55,-18.82 10.63,-24.87 13.07,-13 30.03,-15.26 45.17,-3.93 7.78,5.83 13.73,15.52 14.8,25.52 0.44,4.17 -0.66,7.14 1.08,10.39 4.07,7.61 15.24,4.57 15.24,-4.15 0,-9.65 1.32,-16.21 7.6,-24.58l4.45 -4.8c3.4,-2.62 3.07,-3.16 8.54,-5.89 3.88,-1.93 9.33,-3.94 14.92,-3.94zm-138.33 34.4l0 7.4c0,13.4 7.53,28.93 12.73,37.58 1.63,2.72 3.23,5.04 4.95,7.62l12.19 15.92c6.73,7.55 9.58,10.71 17.01,18.13 5.54,5.54 21.01,19.81 26.79,23.51 13.87,8.89 32.6,7.83 45.48,-2.47l23.16 -20.86c14.82,-14.82 29.24,-30.79 38.69,-49.71l3.8 -8.77c4.36,-12.25 4.58,-14.81 4.58,-27.6 0,-12.91 -6.51,-26.3 -15.44,-35.23 -20.8,-20.8 -50.29,-21.4 -71.94,-0 -1.62,1.6 -6.43,7.54 -6.93,9.71l-0.74 0c-1.14,-4.9 -11.17,-14.09 -15.98,-17.31 -14.54,-9.73 -32.3,-10.91 -48.01,-3.03 -11.47,5.75 -19.26,13.47 -25.15,25.15 -2.33,4.61 -5.18,13.1 -5.18,19.97z"
              />
            </svg>
            <span className="count">{favoriteCount}</span>
            Sevimlilar
          </button>
        </NavLink>
        <Link className="btn">
          <button className="btn" onClick={toggleLanguage}>
            <img src={`/assets/icons/language-${language}.svg`} alt="language" />
            {language === "ru" ? "Русский" : "O'zbekcha"}
          </button>
        </Link>
        <div className="btn">
          <button onClick={() => setModal(true)}>
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 120.93 161.24"
            >
              <path
                fill="currentColor"
                d="M60.47 80.62c22.26,0 40.31,-18.05 40.31,-40.31 0,-22.26 -18.05,-40.31 -40.31,-40.31 -22.26,0 -40.31,18.05 -40.31,40.31 0.02,22.25 18.06,40.29 40.31,40.31l-0 0zm0 -67.18c14.84,0 26.87,12.03 26.87,26.87 0,14.84 -12.03,26.87 -26.87,26.87 -14.84,0 -26.87,-12.03 -26.87,-26.87 0,-14.84 12.03,-26.87 26.87,-26.87z"
              />
              <path
                fill="currentColor"
                d="M60.47 94.06c-33.37,0.03 -60.44,27.09 -60.47,60.47 0,3.71 3.01,6.72 6.72,6.72 3.71,0 6.72,-3.01 6.72,-6.72 0,-25.97 21.06,-47.03 47.03,-47.03 25.97,0 47.03,21.06 47.03,47.03 0,3.71 3.01,6.72 6.72,6.72 3.71,0 6.72,-3.01 6.72,-6.72 -0.03,-33.37 -27.09,-60.44 -60.47,-60.47l0 0z"
              />
            </svg>
            Kirish
          </button>
        </div>
        {modal && (
          <ModalWrapper onClose={() => setModal(false)} >
            <div className="login-modal">
              <div className="login-register">
                <h1>Kirish yoki shaxsiy kabinet yaratish</h1>
                <InputPhone />
                <button className="login-btn">Faollashtirish kodini oling</button>
                <div className="login-line">
                  <span></span>
                  <p>Yoki</p>
                  <span></span>
                </div>
                <div className="login-social">
                  <Link to={`https://www.facebook.com/uz/site/auth?authclient=facebook`} target="_blank"><img src="/assets/icons/search.png" alt="" /></Link>
                  <Link to={`https://www.facebook.com/uz/site/auth?authclient=facebook`} target="_blank"><img src="/assets/icons/facebook.png" alt="" /></Link>
                </div>
              </div>
              <div className="login-text">
                <div className="login-text-card">
                  <img src="/assets/icons/market.svg" alt="" />
                  <div className="login-text-card-text">
                    <h2>Endi bozorga borishga hojat yo'q</h2>
                    <p>Bizda qulay narxlar va uyga yetkazib berish mavjud</p>
                  </div>
                </div>
                <div className="login-text-card">
                  <img src="/assets/icons/fast-delivery.svg" alt="" />
                  <div className="login-text-card-text">
                    <h2>Tez yetkazib berish</h2>
                    <p>Bizning xizmatimiz sizni ajablantiradi</p>
                  </div>
                </div>
                <div className="login-text-card">
                  <img src="/assets/icons/return.svg" alt="" />
                  <div className="login-text-card-text">
                    <h2>Siz uchun qulayliklar</h2>
                    <p>Nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish kafolati</p>
                  </div>
                </div>
                <div className="login-text-card">
                  <img src="/assets/icons/card.svg" alt="" />
                  <div className="login-text-card-text">
                    <h2>Bo'lib to'lash</h2>
                    <p>Oldindan to'lov yo'q</p>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={() => setModal(false)} className="modal-close-btn"><img src="/assets/icons/close_icon.svg" alt="" /></button>
          </ModalWrapper>
        )}
      </div>
    </header>
  );
}

export default Header;
