import React, { useState } from 'react';

function inscrip() {
    const [formData, setFormData] = useState({
        ndmpm: '',
        rdmpm: '',
        nmdr: '',
        cag: '',
        ndf: '',
        nd: '',
        vadrp: ''
    });

    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <form method="post" id="stepForm" className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
            <div className={`step flex flex-col mb-6 ${currentStep === 1 ? '' : 'hidden'}`}>
                <p className="py-2 text-gray-900 text-base font-semibold">NDMPM :</p>
                <input name="ndmpm" type="number" className="border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-none" value={formData.ndmpm} onChange={handleChange} required />
                <button type="button" onClick={nextStep} className="cursor-pointer w-full mt-5 rounded-lg bg-[#4991cc] hover:bg-[#2e2f68] px-4 py-2 text-center text-base font-semibold text-white">Next</button>
            </div>

            {/* Repeat similar divs for other steps */}
        </form>
    );
}

export default inscrip;
