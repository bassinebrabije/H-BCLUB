import React, { useEffect } from 'react';
import logo2 from '../image/logo.png';

const MessageContainer = () => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const messageContainer = document.getElementById("messageContainer");
            if (messageContainer) {
                messageContainer.style.display = "block";
            }
        }, 3000);
        return () => clearTimeout(timeoutId);
    }, []);

    const hideMessage = () => {
        const messageContainer = document.getElementById("messageContainer");
        if (messageContainer) {
            messageContainer.style.display = "none";
        }
    };

    return (
        <>
            <div id="messageContainer" className="fixed z-40 bottom-4 left-7 mb-4 mr-4" style={{ display: 'none' }}>
                <div className="rounded-lg shadow-lg p-4 bg-[#FF0000]">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                            <img src={logo2} className="w-12 mr-8 rounded-full" alt="Logo" />
                        </div>
                        <button className="text-white hover:text-white focus:outline-none" onClick={hideMessage}>
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <span className="text-white text-base font-light">
                        Are you ready to start the process ?{' '}
                        <a href="#Contact" className="tracking-wider" style={{ textDecoration: 'underline' }}>
                            Started now !
                        </a>
                    </span>
                </div>
            </div>
            <div className="fixed bottom-4 right-4 z-40  sm:right-4">
                <a href="https://wa.me/+212688771323" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center   bg-green-500  rounded-full p-4 shadow-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-800">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16" id="IconChangeColor">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" id="mainIconPathAttribute" fill="#ffffff"></path>
                    </svg>
                </a>
            </div>
        </>
    );
};

export default MessageContainer;