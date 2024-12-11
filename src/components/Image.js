import React, { useState } from "react";

export default function ImageComponent() {
    const [isVisible, setIsVisible] = useState(true);

    const [scale, setScale] = useState(1);

    const addImage = () => {
        setIsVisible(true);
    };

    const deleteImage = () => {
        setIsVisible(false);
    };

    const scaleUpImage = () => {
        setScale((prevScale) => prevScale * 1.5);
    };

    const scaleDownImage = () => {
        setScale((prevScale) => prevScale / 1.5);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <a href="https://city-adm.lviv.ua/" target="_blank" rel="noopener noreferrer">
                {isVisible && (
                    <img
                        id="image"
                        src="https://ukr-prokat.com/wp-content/uploads/2020/07/lviv.jpg"
                        alt="Львів"
                        style={{
                            width: `${200 * scale}px`,
                            height: "auto",
                            transition: "width 0.3s ease, height 0.3s ease",
                            display: "block",
                            margin: "0 auto"
                        }}
                    />
                )}
            </a>
            <div style={{ marginTop: "20px" }}>
                <button onClick={addImage} style={buttonStyle}>
                    Додати
                </button>
                <button onClick={scaleUpImage} style={buttonStyle}>
                    Збільшити
                </button>
                <button onClick={scaleDownImage} style={buttonStyle}>
                    Зменшити
                </button>
                <button onClick={deleteImage} style={buttonStyle}>
                    Видалити
                </button>
            </div>
        </div>
    );
}

const buttonStyle = {
    margin: "0 10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer"
};
