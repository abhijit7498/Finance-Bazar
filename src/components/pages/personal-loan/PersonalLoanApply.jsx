import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TypographyH3, TypographySmall, TypographyMuted } from "@/custom/Typography"
import { IoCheckmark } from "react-icons/io5"
import { IoIosArrowBack } from "react-icons/io"
import { GiOpenTreasureChest } from "react-icons/gi"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const employmentOptions = [
    {
        label: "Salaried",
        description: "Received Fixed Amount of the income every month",
        value: "salaried"
    },
    {
        label: "Self-Employed Business",
        description: "Run a business",
        value: "business"
    },
    {
        label: "Self-Employed Professional",
        description: "Engage in a profession Eg. Doctor, CA, Lawyer, etc",
        value: "professional"
    }
];

const incomeOptions = [
    { label: "Upto ₹3 Lacs", value: "upto_3" },
    { label: "₹3 - ₹4 Lacs", value: "3_to_4" },
    { label: "₹4 - ₹5 Lacs", value: "4_to_5" },
    { label: "₹5 - ₹10 Lacs", value: "5_to_10" },
    { label: "₹10 Lacs +", value: "10_plus" },
];

const bankOptions = [
    { label: "State Bank of India", logo: "/assets/banks/sbi.png" },
    { label: "Punjab National Bank", logo: "/assets/banks/pnb.png" },
    { label: "Bank of Baroda", logo: "/assets/banks/bob.png" },
    { label: "Canara Bank", logo: "/assets/banks/canara.png" },
    { label: "Union Bank of India", logo: "/assets/banks/union.png" },
    { label: "Bank of India", logo: "/assets/banks/boi.png" },
    { label: "Indian Bank", logo: "/assets/banks/indian.png" },
    { label: "Central Bank of India", logo: "/assets/banks/central.png" },
    { label: "Indian Overseas Bank", logo: "/assets/banks/iob.png" },
    { label: "UCO Bank", logo: "/assets/banks/uco.png" },
    { label: "Bank of Maharashtra", logo: "/assets/banks/bom.png" },
    { label: "Punjab & Sind Bank", logo: "/assets/banks/psb.png" },
    { label: "HDFC Bank", logo: "/assets/banks/hdfc.png" },
    { label: "ICICI Bank", logo: "/assets/banks/icici.png" },
    { label: "Axis Bank", logo: "/assets/banks/axis.png" },
    { label: "Kotak Mahindra Bank", logo: "/assets/banks/kotak.png" },
    { label: "IndusInd Bank", logo: "/assets/banks/indusind.png" },
    { label: "Yes Bank", logo: "/assets/banks/yes.png" },
    { label: "IDFC First Bank", logo: "/assets/banks/idfc.png" },
    { label: "Federal Bank", logo: "/assets/banks/federal.png" },
    { label: "South Indian Bank", logo: "/assets/banks/southindian.png" },
    { label: "RBL Bank", logo: "/assets/banks/rbl.png" },
    { label: "Bandhan Bank", logo: "/assets/banks/bandhan.png" },
    { label: "DCB Bank", logo: "/assets/banks/dcb.png" },
    { label: "Karnataka Bank", logo: "/assets/banks/karnataka.png" },
    { label: "Karur Vysya Bank", logo: "/assets/banks/karurvysya.png" },
    { label: "City Union Bank", logo: "/assets/banks/cityunion.png" },
    { label: "CSB Bank", logo: "/assets/banks/csb.png" },
    { label: "Dhanlaxmi Bank", logo: "/assets/banks/dhanlaxmi.png" },
    { label: "Tamilnad Mercantile Bank", logo: "/assets/banks/tmb.png" },
    { label: "Jammu & Kashmir Bank", logo: "/assets/banks/jkbank.png" },
    { label: "Nainital Bank", logo: "/assets/banks/nainital.png" }
];

export default function PersonalLoanApply() {
    const [formData, setFormData] = useState({
        employmentType: "",
        incomeRange: "",
        primaryBank: "",
        companySelect: "",
    });

    const [errors, setErrors] = useState({
        employmentType: "",
        incomeRange: "",
        primaryBank: "",
        companySelect: "",
    });

    const [step, setStep] = useState(1);

    const handleEmploymentSelect = (value) => {
        setFormData(prev => ({ ...prev, employmentType: value }));
        setErrors(prev => ({ ...prev, employmentType: "" }));
        setStep(2); // Move to the next step
    };

    const handleIncomeSelect = (value) => {
        setFormData(prev => ({ ...prev, incomeRange: value }));
        setErrors(prev => ({ ...prev, incomeRange: "" }));
        setStep(3);
    };

    const handleBankSelect = (value) => {
        setFormData(prev => ({ ...prev, primaryBank: value }));
        setErrors(prev => ({ ...prev, primaryBank: "" }));
        setStep(4);
    };

    const handleSubmit = () => {
        const newErrors = {
            employmentType: formData.employmentType ? "" : "Please select employment type",
            incomeRange: formData.incomeRange ? "" : "Please select your yearly income",
            primaryBank: formData.primaryBank ? "" : "Please select your primary bank",
            companySelect: formData.companySelect ? "" : "Please put your compny name"
        };

        setErrors(newErrors);

        const isValid = Object.values(newErrors).every(err => err === "");

        if (isValid) {
            console.log("Final Form Data:", formData);
        }
    };

    console.log("formData_Personal_loan", formData);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full sm:h-screen sm:overflow-y-hidden'>
            {/* Left Section (Logo + Info) */}
            <div className="bg-[#CAD7FE] sm:p-8 p-6 relative">
                <img src="/assets/logo-2.png" alt="logo" className="sm:w-64 w-56" />
                <div className="max-w-lg mx-auto sm:mt-10 mt-4 relative">
                    <TypographyH3 className="text-[#1b1dc7]">
                        Personal Loan
                    </TypographyH3>
                    <div className="grid sm:gap-6 gap-3 mt-8">
                        {["Compare & Choose the Best Offer", "Check Loan Amount Eligibility", "Know your Approval Chances"].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="sm:w-6 sm:h-6 w-5 h-5 rounded-full shadow bg-secondary flex justify-center items-center">
                                    <IoCheckmark />
                                </div>
                                <TypographySmall>{item}</TypographySmall>
                            </div>
                        ))}
                    </div>
                    <div className="absolute bottom-0 -right-4 sm:hidden flex">
                        <img src="/assets/personal-loan.svg" alt="personal-loan" className="w-28" />
                    </div>

                    <div className="hidden sm:block absolute">
                        <img src="/assets/personal-loan.svg" alt="personal-loan" className="w-full" />
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className='max-w-xl mx-auto w-full px-4 relative overflow-hidden'>
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ x: '100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '-100%', opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Employment Type Step */}
                            <Card className="shadow-none border-none sm:mt-24">
                                <CardHeader>
                                    <CardDescription className="text-xs flex items-center gap-4">
                                        <GiOpenTreasureChest size={32}/>
                                        PERSONAL LOAN
                                    </CardDescription>
                                    <CardTitle className='text-lg text-blue-800 mt-8'>Employment Type</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-4 sm:gap-6">
                                        {employmentOptions.map((option, idx) => (
                                            <div
                                                key={idx}
                                                className={`border rounded-md p-3 flex items-center justify-between gap-8 hover:bg-muted cursor-pointer ${formData.employmentType === option.value ? "border-blue-700 bg-blue-50" : ""}`}
                                                onClick={() => handleEmploymentSelect(option.value)}
                                            >
                                                <div className="grid gap-1">
                                                    <Label className='text-blue-800'>{option.label}</Label>
                                                    <TypographyMuted className="text-xs">{option.description}</TypographyMuted>
                                                </div>
                                                <div className={`w-5 h-5 rounded-full border ${formData.employmentType === option.value ? 'bg-blue-700 border-blue-700' : 'border-black'}`} />
                                            </div>
                                        ))}
                                        {errors.employmentType && <p className="text-red-500 text-sm">{errors.employmentType}</p>}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ x: '100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '-100%', opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Income Range Step */}
                            <Card className="shadow-none border-none sm:mt-24">
                                <CardHeader>
                                    <CardDescription
                                        className="rounded-md cursor-pointer flex justify-center items-center gap-4 w-8 h-8 bg-muted"
                                        onClick={() => setStep(1)}
                                    >
                                        <IoIosArrowBack />
                                    </CardDescription>
                                    <CardTitle className='text-lg text-blue-800 mt-8'>Income Range</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-6">
                                        {incomeOptions.map((option, idx) => (
                                            <div
                                                key={idx}
                                                className={`border rounded-md p-3 flex items-center justify-between gap-8 hover:bg-muted cursor-pointer ${formData.incomeRange === option.value ? "border-blue-700 bg-blue-50" : ""}`}
                                                onClick={() => handleIncomeSelect(option.value)}
                                            >
                                                <div className="grid gap-1">
                                                    <Label className='text-blue-800'>{option.label}</Label>
                                                </div>
                                                <div className={`w-5 h-5 rounded-full border ${formData.incomeRange === option.value ? 'bg-blue-700 border-blue-700' : 'border-black'}`} />
                                            </div>
                                        ))}
                                        {errors.incomeRange && <p className="text-red-500 text-sm">{errors.incomeRange}</p>}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ x: '100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '-100%', opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Bank Selection Step */}
                            <Card className="shadow-none border-none">
                                <CardHeader>
                                    <CardDescription
                                        className="rounded-md cursor-pointer flex justify-center items-center gap-4 w-8 h-8 bg-muted"
                                        onClick={() => setStep(2)}
                                    >
                                        <IoIosArrowBack />
                                    </CardDescription>
                                    <CardTitle className='text-lg text-blue-800 mt-8'>Select Your Primary Bank</CardTitle>
                                </CardHeader>
                                <CardContent className='overflow-y-auto max-h-[80vh] pb-12'>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                        {bankOptions.map((bank, idx) => (
                                            <div
                                                key={idx}
                                                className={`border rounded-md p-2 flex justify-between items-center hover:shadow hover:scale-105 gap-2 cursor-pointer ${formData.primaryBank === bank.label ? "border-blue-700 bg-blue-50" : ""}`}
                                                onClick={() => handleBankSelect(bank.label)}
                                            >
                                                <div className="flex items-center gap-1">
                                                    <img src={bank.logo} alt={bank.label} className="w-10 h-10 object-contain text-[10px]" />
                                                    <TypographySmall className="text-[10px]">{bank.label}</TypographySmall>
                                                </div>
                                                <div className={`w-5 h-5 rounded-full border ${formData.primaryBank === bank.label ? 'bg-blue-700 border-blue-700' : 'border-black'}`} />
                                            </div>
                                        ))}
                                    </div>
                                    {errors.primaryBank && <p className="text-red-500 text-sm mt-2">{errors.primaryBank}</p>}
                                </CardContent>
                            </Card>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            key="step3"
                            initial={{ x: '100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '-100%', opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Bank Selection Step */}
                            <Card className="shadow-none border-none">
                                <CardHeader>
                                    <CardDescription
                                        className="rounded-md cursor-pointer flex justify-center items-center gap-4 w-8 h-8 bg-muted"
                                        onClick={() => setStep(3)}
                                    >
                                        <IoIosArrowBack />
                                    </CardDescription>
                                    <CardTitle className='text-lg text-blue-800 mt-8'>Tell us your Current Company</CardTitle>
                                </CardHeader>
                                <CardContent className='overflow-y-auto max-h-[80vh] pb-12'>
                                    <div className="flex flex-col space-y-2">
                                        <Label htmlFor="name">Current Company</Label>
                                        <input
                                            type='text'
                                            value={formData?.companySelect}
                                            onChange={(e) => setFormData(prev => ({ ...prev, companySelect: e.target.value }))}
                                            className='outline-none focus:border-primary border-b-2 p-2 text-sm'
                                            placeholder="Enter Where You Are Currently Working"
                                        />
                                        <TypographySmall className="text-xs">
                                            Type slowly to select your company
                                        </TypographySmall>
                                    </div>
                                </CardContent>
                                <CardFooter className="mt-4">
                                    <Button className="w-full" onClick={handleSubmit}>Submit</Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
