import React from "react";

export function Spinner() {
    return (
        <div className="flex items-center justify-center border-b border-l border-r border-gray-200 p-4 dark:border-gray-700">
            <svg className="h-8 w-8 animate-spin-fast">
                <circle
                    cx={16}
                    cy={16}
                    fill="none"
                    r={14}
                    strokeWidth={4}
                    style={{ stroke: "rgb(29, 161, 242)", opacity: "0.2" }} />
                <circle
                    cx={16}
                    cy={16}
                    fill="none"
                    r={14}
                    strokeWidth={4}
                    style={{
                        stroke: "rgb(29, 161, 242)",
                        strokeDasharray: 80,
                        strokeDashoffset: 60,
                    }} />
            </svg>
        </div>
    );
}

