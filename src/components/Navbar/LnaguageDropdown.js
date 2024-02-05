import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };
  return (
    <Dropdown >
      <Dropdown.Toggle variant="white" className="white-button bg-white" size="sm">
        {selectedLanguage}
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ width: "100%" }} className="dropdown-menu">
        <Dropdown.Item onClick={() => handleLanguageChange("English")} className="input-text">
          English
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange("Arabic")} className="input-text">
          Arabic
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageDropdown;
