import React from "react";

export default function MiniAvatar({ margin, zIndex, image }) {
    return (
        <div
            style={{
                zIndex: zIndex, // Control stack order
                marginLeft: `${margin}px`, // Apply negative margin to control spacing
            }}
            className="relative"
        >
            <div className="w-10 h-10 rounded-full border-4 border-white overflow-hidden flex items-center justify-center">
                <img
                    className="w-full h-full"
                    src={image}
                    alt="avatar"
                />
            </div>
        </div>
    );
}
