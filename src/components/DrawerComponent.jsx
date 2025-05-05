import React from "react";
import { Drawer } from "antd";

export default function DrawerComponent({
                                            open,
                                            onClose,
                                            children,
                                            placement = "right",
                                            width = "100vw",
                                            height = "100vh",
                                            closable = false,
                                            bodyStyle = { padding: 0 }
                                        }) {
    return (
        <Drawer
            open={open}
            onClose={onClose}
            placement={placement}
            width={width}
            height={height}
            closable={closable}
            bodyStyle={bodyStyle}
        >
            <div className="w-full h-full bg-white flex flex-col items-start justify-start">
                {children}
            </div>
        </Drawer>
    );
}
