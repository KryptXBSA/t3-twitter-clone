import React from "react";

export function FilePreview({
    selectedFile, clearInputs,
}: {
    selectedFile: string;
    clearInputs: any;
}) {
    return (
        <>
            {selectedFile && (
                <div className="relative flex justify-center">
                    <div className="hover-main bg-main absolute left-1 z-20 flex h-8 w-8 items-center justify-center rounded-full">
                        <svg
                            onClick={clearInputs}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <img
                        className="fade-in z-10"
                        src={selectedFile}
                        alt="Selected file preview" />
                </div>
            )}
        </>
    );
}

