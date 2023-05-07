/*
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

import { useState, useEffect } from "react"

export default function Settings(){
    const [settings, setSettings] = useState({
        "--background-color": "#fff",
        "--background-light": "#fff",
        "--primary-color": "rgb(255, 145, 100)",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--text-color": "#0A0A0A",
        "--text-light": "#575757",
        "--font-size": "16px",
        "--animation-speed": 1
    })

      const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

      useEffect(() => {
        const savedSettings = localStorage.getItem("settings");
        if (savedSettings) {
          setSettings(JSON.parse(savedSettings));
        }
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
          setTheme(savedTheme);
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem("settings", JSON.stringify(settings));
        const root = document.documentElement;
        for (let key in settings) {
          root.style.setProperty(key, settings[key]);
        }
      }, [settings]);

      const themes = [
        {
          "--background-color": "#fff",
          "--background-light": "#fff",
          "--primary-color": "rgb(255, 145, 100)",
          "--shadow-color": "rgba(0,0,0,0.2)",
          "--text-color": "#0A0A0A",
          "--text-light": "#575757"
        },
        {
          "--background-color": "rgb(29, 29, 29)",
          "--background-light": "rgb(77, 77, 77)",
          "--primary-color": "rgb(255, 145, 100)",
          "--shadow-color": "rgba(0,0,0,0.2)",
          "--text-color": "#ffffff",
          "--text-light": "#eceaea",
        }
      ];
      
      function changeTheme(i) {
        const _theme = { ...themes[i] };
        const newTheme = i === 0 ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        let _settings = { ...settings };
        for (let key in _theme) {
          _settings[key] = _theme[key];
        }
        setSettings(_settings);
      }
    
      return (
        <div>
          <div className="section d-block">
            <h2>Theme</h2>
            <div className="options-container">
              <div className="option light" onClick={() => changeTheme(0)}>
                {theme === "light" && (
                  <div className="check">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                )}
              </div>
              <div className="option dark" onClick={() => changeTheme(1)}>
                {theme === "dark" && (
                  <div className="check">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
*/