import React from "react";
import MiniAvatar from "./MiniAvatar";

export default function MiniAvatarsSection() {

    const avatarUrls = Array(4).fill("https://wallpapershome.com/images/pages/pic_h/857.jpg");

    return (
        <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
                {avatarUrls.map((url, i) => (
                    <MiniAvatar
                        key={i}
                        image={url}
                        zIndex={4 - i}
                        margin={i === 0 ? 0 : -17}
                    />
                ))}
            </div>
            <div className="text-lg font-semibold">Shifoxonalar</div>
        </div>
    );
}