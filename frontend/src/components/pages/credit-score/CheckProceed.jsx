import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    TypographyH2,
    TypographyLarge,
    TypographyMuted,
    TypographyP,
    TypographySmall,
    TypographyH4,
    TypographyList
} from '@/custom/Typography'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'
import { FaWhatsapp } from "react-icons/fa"
import { MdSecurity } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";
import { motion } from 'framer-motion'
import OtpCollection from '@/custom/OtpCollection'
import { AddLoacalStorage } from '@/lib/utils'
import { AddSessionStorage } from '@/lib/utils'
import { userData } from '../../../machine/userData'

const MobileHeader = ({ showRightPanel2, onLogout }) => {
    return (
        <div className='sm:hidden flex flex-col w-full'>
            <div className='h-14 px-6 bg-white flex justify-between items-center w-full border-b shadow'>
                <img src="/logo.png" alt="" className='w-32' />
                {
                    !showRightPanel2 ? <Link to='/sign-in'>
                        <Button
                            variant="outline"
                            size="sm"
                            className="border-primary text-primary hover:bg-primary hover:text-white"
                        >
                            <FiUser className="mr-2 h-4 w-4" />
                            Sign In
                        </Button>
                    </Link> :
                        <Button
                            onClick={onLogout}
                            variant="outline"
                            size="sm"
                            className="border-primary text-primary hover:bg-primary hover:text-white"
                        >
                            Logout
                        </Button>
                }
            </div>
            <div className='bg-primary/10 p-2 w-full flex justify-between py-8'>
                <div className='pl-4'>
                    <TypographyH4 className="text-lg text-blue-800">
                        Lifetime Free Credit Score
                    </TypographyH4>
                    <TypographyList items={creditScoreFeatures} className="text-muted-foreground mt-2" />
                </div>
                <div className='flex justify-end items-end'>
                    <img src="/assets/credit-score-hero.svg" alt="credit-score" className='w-56' />
                </div>
            </div>
        </div>
    )
}

const LeftGradiantPannel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="bg-gradient-to-br from-[#95ace0d9] to-[#260a81] text-white w-full h-screen sm:flex flex-col hidden overflow-hidden">
            <div className='max-w-md mt-26 ml-20'>
                <Link
                    to="/"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <img src="/logo.png" alt="logo" className='w-56 h-fit' />
                </Link>
                <TypographyH2 className="font-base text-white mt-2">
                    Your credit health matters…
                </TypographyH2>
                <TypographyP className="font-light mt-6 text-white/90 leading-7">
                    Your credit score is more than just a number. A better score can help unlock the things you want most — like a new credit card or the best loan rates in the market.
                </TypographyP>
                <TypographyLarge className='mt-6'>
                    Already downloaded a report?
                    <Link to='/sign-in'>
                        <span className='text-white underline'> Click Here</span>
                    </Link>
                </TypographyLarge>

                {/* Animation Carousel */}
                <div className='mt-16 overflow-hidden'>
                    <motion.div
                        key={data[currentIndex].id}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6 }}
                        className='flex items-start gap-4'
                    >
                        <div className='w-[40px] h-[40px] flex justify-center items-center border border-dashed border-white p-3 rounded-full'>
                            <span className='text-white font-semibold'>
                                {data[currentIndex].id}
                            </span>
                        </div>
                        <div>
                            <TypographySmall className="font-bold text-white">
                                {data[currentIndex].title}
                            </TypographySmall>
                            <TypographyP className='mt-4 text-white/80'>
                                {data[currentIndex].description}
                            </TypographyP>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

const RightPannel1 = ({ formData, setFormData }) => {
    const [errors, setErrors] = useState({});
    const [isPhoneDisabled, setIsPhoneDisabled] = useState(false);

    // Load OTP verification state from sessionStorage on mount
    useEffect(() => {
        const storedData = localStorage.getItem("otp_verified");
        if (storedData) {
            try {
                const parsed = JSON.parse(storedData);
                if (parsed.otp_verified && parsed.phoneNumber) {
                    setFormData((prev) => ({ ...prev, phone: parsed.phoneNumber }));
                    setIsPhoneDisabled(true);
                }
            } catch (e) {
                console.error("Failed to parse OTP localStorage:", e);
            }
        }
    }, [setFormData]);

    const handleChange = (field, value) => {
        if (field === 'phone') value = value.replace(/\D/g, '');
        setFormData((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => ({ ...prev, [field]: '' }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.name) newErrors.name = 'Full name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.phone) {
            newErrors.phone = 'Phone is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Enter a valid 10-digit number';
        }
        if (!formData.checked) newErrors.checked = 'You must accept the terms';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            // AddSessionStorage("pannel1", {
            //     key: "pannel1",
            //     value: {
            //         pannel1: true,
            //         formData: formData,
            //     },
            // });
            await userData(formData)
        }
    };

    return (
        <div className='max-w-md sm:mx-auto flex sm:justify-center gap-3 flex-col px-4 sm:py-8'>
            {/* Top Sign In Button */}
            <div className='sm:flex hidden justify-end'>
                <Link to='/sign-in'>
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
                        <FiUser className="mr-2 h-4 w-4" />
                        Sign In
                    </Button>
                </Link>
            </div>

            {/* Form Card */}
            <Card className="shadow-none border-none">
                <CardHeader>
                    <CardTitle className='text-xl text-blue-800'>Lifetime Free Credit Score</CardTitle>
                    <CardDescription>Get your credit report for free, with monthly updates</CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid w-full items-center gap-4">
                            {/* Gender */}
                            <div className="flex flex-col space-y-3 mb-4">
                                <Label htmlFor="gender">Gender</Label>
                                <RadioGroup
                                    className="flex gap-6 items-center"
                                    value={formData.gender}
                                    onValueChange={(value) => handleChange('gender', value)}
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="male" id="r1" />
                                        <Label htmlFor="r1">Male</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="female" id="r2" />
                                        <Label htmlFor="r2">Female</Label>
                                    </div>
                                </RadioGroup>
                                {errors.gender && <span className="text-red-500 text-xs">{errors.gender}</span>}
                            </div>

                            {/* Full Name */}
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <input
                                    type='text'
                                    value={formData.name}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                    className='outline-none focus:border-primary border-b-2 p-2 text-sm'
                                    placeholder="As per your bank record"
                                />
                                {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                            </div>

                            {/* Email */}
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <input
                                    type='email'
                                    value={formData.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    className='outline-none focus:border-primary border-b-2 p-2 text-sm'
                                    placeholder="example@mail.com"
                                />
                                {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                            </div>

                            {/* Phone Number */}
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="mobile">Mobile Number</Label>
                                <input
                                    type='text'
                                    maxLength={10}
                                    value={formData.phone}
                                    onChange={(e) => handleChange('phone', e.target.value)}
                                    className='outline-none focus:border-primary border-b-2 p-2 text-sm opacity-65 font-semibold'
                                    placeholder="10-digit mobile number"
                                    disabled={isPhoneDisabled}
                                />
                                {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
                                <span className='text-[10px] text-muted-foreground'>
                                    Note: Use mobile number linked with your Credit Card/Loan account.
                                </span>
                            </div>

                            {/* Terms Checkbox */}
                            <div className="items-top flex space-x-2 mt-3">
                                <Checkbox
                                    id="terms1"
                                    checked={formData.checked}
                                    onCheckedChange={(value) => handleChange('checked', value)}
                                />
                                <div className="grid gap-1.5 leading-none">
                                    <label htmlFor="terms1" className="text-sm font-medium leading-none">
                                        Accept terms and conditions
                                    </label>
                                    <p className="text-xs text-muted-foreground">
                                        You agree to our Terms of Service and Privacy Policy.
                                    </p>
                                    {errors.checked && <span className="text-red-500 text-xs">{errors.checked}</span>}
                                </div>
                            </div>
                        </div>

                        <CardFooter className="flex flex-col gap-2 mt-6 px-0">
                            <Button type='submit' className="w-full cursor-pointer">
                                Get Free Credit Report
                            </Button>

                            {/* WhatsApp toggle */}
                            <div className='flex items-center gap-2 mt-2'>
                                <FaWhatsapp className='text-green-600' />
                                <TypographyMuted className="text-xs">Get updates on WhatsApp</TypographyMuted>
                                <Switch
                                    id="whatsapp-mode"
                                    checked={formData.whatAppNotification}
                                    onCheckedChange={(value) => handleChange('whatAppNotification', value)}
                                />
                            </div>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

const RightPannel2 = ({ proccedDetails, setProccedDetails, onLogout }) => {
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "dob") {
            let cleaned = value.replace(/\D/g, '');
            if (cleaned.length > 8) cleaned = cleaned.slice(0, 8);

            let formatted = cleaned;
            if (cleaned.length > 4) {
                formatted = `${cleaned.slice(0, 2)}-${cleaned.slice(2, 4)}-${cleaned.slice(4)}`;
            } else if (cleaned.length > 2) {
                formatted = `${cleaned.slice(0, 2)}-${cleaned.slice(2)}`;
            }

            setProccedDetails((prev) => ({
                ...prev,
                dob: formatted,
            }));
        } else if (name === "pinCode") {
            const numericPin = value.replace(/\D/g, '').slice(0, 6);
            setProccedDetails((prev) => ({
                ...prev,
                pinCode: numericPin,
            }));
        } else if (name === "pan") {
            const pan = value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 10);
            setProccedDetails((prev) => ({
                ...prev,
                pan,
            }));
        } else {
            setProccedDetails((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const validate = () => {
        let tempErrors = {};

        if (!proccedDetails.dob.trim()) {
            tempErrors.dob = "Date of Birth is required";
        } else if (!/^\d{2}-\d{2}-\d{4}$/.test(proccedDetails.dob)) {
            tempErrors.dob = "DOB must be in DD-MM-YYYY format";
        }

        if (!proccedDetails.pinCode.trim()) {
            tempErrors.pinCode = "Pin Code is required";
        } else if (!/^\d{6}$/.test(proccedDetails.pinCode)) {
            tempErrors.pinCode = "Pin Code must be 6 digits";
        }

        if (!proccedDetails.pan.trim()) {
            tempErrors.pan = "PAN is required";
        } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(proccedDetails.pan)) {
            tempErrors.pan = "PAN must be like ABCDE1234F";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Submitted Data:", proccedDetails);
            AddLoacalStorage("token", {
                pannel2: true,
                proccedDetails: { proccedDetails }
            });
            navigate('/myaccount/dashboard')
        }
    };

    return (
        <div className='max-w-md mx-auto flex sm:justify-center gap-3 flex-col px-4'>
            <div className='sm:flex hidden justify-end'>
                <Button
                    onClick={onLogout}
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                    Logout
                </Button>
            </div>
            <Card className="shadow-none border-none">
                <CardHeader className="flex items-center gap-4">
                    <CardTitle className='text-xl text-blue-800'>
                        We need a few more details to access your Credit Report
                    </CardTitle>
                    <CardDescription>
                        <img src="/assets/score.svg" alt="score" className='w-24' />
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid w-full items-center gap-4">

                            {/* Date of Birth */}
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="dob">Date of Birth</Label>
                                <input
                                    name="dob"
                                    type="text"
                                    maxLength={10}
                                    className="outline-none focus:border-primary border-b-2 p-2 text-sm"
                                    placeholder="DD-MM-YYYY"
                                    value={proccedDetails.dob}
                                    onChange={handleChange}
                                    onBlur={() => {
                                        const cleaned = proccedDetails.dob.replace(/\D/g, '');
                                        if (cleaned.length === 8) {
                                            const formatted = `${cleaned.slice(0, 2)}-${cleaned.slice(2, 4)}-${cleaned.slice(4)}`;
                                            setProccedDetails((prev) => ({ ...prev, dob: formatted }));
                                        }
                                    }}
                                />
                                {errors.dob && <span className="text-red-600 text-xs">{errors.dob}</span>}
                            </div>

                            {/* Pin Code */}
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="pinCode">Pin Code</Label>
                                <input
                                    name="pinCode"
                                    type='text'
                                    inputMode="numeric"
                                    maxLength={6}
                                    className='outline-none focus:border-primary border-b-2 p-2 text-sm'
                                    placeholder="Your current residence area code"
                                    value={proccedDetails.pinCode}
                                    onChange={handleChange}
                                />
                                {errors.pinCode && <span className="text-red-600 text-xs">{errors.pinCode}</span>}
                            </div>

                            {/* PAN */}
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="pan">PAN</Label>
                                <input
                                    name="pan"
                                    type='text'
                                    maxLength={10}
                                    className='outline-none focus:border-primary border-b-2 p-2 text-sm uppercase'
                                    placeholder="Permanent Account Number"
                                    value={proccedDetails.pan}
                                    onChange={handleChange}
                                />
                                {errors.pan && <span className="text-red-600 text-xs">{errors.pan}</span>}
                            </div>

                        </div>

                        <CardFooter className="flex flex-col gap-4 mt-6">
                            <Button type='submit' className="w-full cursor-pointer">
                                Proceed
                            </Button>
                            <div className='flex items-center gap-2 mt-2'>
                                <MdSecurity className='text-green-600' />
                                <TypographySmall className="text-xs">
                                    Your data is 100% secure with us
                                </TypographySmall>
                            </div>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

const data = [
    {
        id: 1,
        title: "Track your Credit Health",
        description: "Fill the form just once & monitor your credit score for free without any hassles."
    },
    {
        id: 2,
        title: "Get Deep Insights",
        description: "See what makes your score change & ways to improve your credit health."
    },
    {
        id: 3,
        title: "Make Better Decisions",
        description: "Personalised recommendations based on your credit history to help you save money and spend wisely."
    },
]

const creditScoreFeatures = [
    {
        icon: <IoCheckmark size={18} className="text-green-600" />,
        features: [
            "Get personalised Loan & Card Offers",
            "Detailed Credit Report Insights",
            "Free monthly Updates"
        ]
    }
];

const featureList = [
    "Hand-picked offers from 30+ lenders",
    "Money in mins via Pre-Approved loans",
    "Instant sanction and disbursal",
    "Contact-less processes"
];

export default function CheckProceed() {
    const [veryfiedOTP, setVeryfiedOTP] = useState(true);
    const [showRightPanel1, setShowRightPanel1] = useState(false);
    const [showRightPanel2, setShowRightPanel2] = useState(false);
    const [dashboard, setDashboard] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        email: "",
        phone: "",
        checked: "",
        whatAppNotification: false,
    });

    const [proccedDetails, setProccedDetails] = useState({
        dob: '',
        pinCode: '',
        pan: ''
    });

    // Logout handler
    const handleLogout = () => {
        localStorage.removeItem("otp_verified");
        sessionStorage.removeItem("pannel1");
        localStorage.removeItem("token");
        setVeryfiedOTP(true);
        setShowRightPanel1(false);
        setShowRightPanel2(false);
        setDashboard(false);
    };

    // Sync from Storage on load
    useEffect(() => {
        const verifiedOTP = localStorage.getItem("otp_verified");
        const panel1 = sessionStorage.getItem("pannel1");
        const panel2 = localStorage.getItem("token");

        setVeryfiedOTP(!verifiedOTP);
        setShowRightPanel1(!!verifiedOTP);
        setShowRightPanel2(!!panel1);
        setDashboard(!!panel2);
    }, []);

    // Manual polling for changes in Storage
    useEffect(() => {
        const interval = setInterval(() => {
            const verifiedOTP = localStorage.getItem("otp_verified");
            const panel1 = sessionStorage.getItem("pannel1");
            const panel2 = localStorage.getItem("token");

            setVeryfiedOTP(!verifiedOTP);
            setShowRightPanel1(!!verifiedOTP);
            setShowRightPanel2(!!panel1);
            setDashboard(!!panel2);
        }, 300);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full h-screen sm:overflow-y-hidden'>
            {/* Mobile Header */}
            <MobileHeader showRightPanel2={showRightPanel2} onLogout={handleLogout} />

            {/* Left Gradient Panel */}
            <LeftGradiantPannel />

            {/* OTP Collection Panel */}
            {veryfiedOTP && !showRightPanel1 && (
                <OtpCollection
                    heading="Unlock Best Offers suitable"
                    lendersHighlight="for your needs from 30+ Lenders"
                    features={featureList}
                    termsUrl="/terms"

                />
            )}

            {/* Right Panel 1 */}
            {showRightPanel1 && !showRightPanel2 && !dashboard && (
                <RightPannel1
                    formData={formData}
                    setFormData={setFormData}
                />
            )}

            {/* Right Panel 2 */}
            {showRightPanel2 && !dashboard && (
                <RightPannel2
                    proccedDetails={proccedDetails}
                    setProccedDetails={setProccedDetails}
                    onLogout={handleLogout}
                />
            )}

            {/* Dashboard Panel */}
            {dashboard && <Navigate to="/myaccount" />}
        </div>
    );
}
