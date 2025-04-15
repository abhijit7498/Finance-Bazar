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
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    TypographyH2,
    TypographyLarge,
    TypographyMuted,
    TypographyP,
    TypographySmall,
    TypographyH4,
    TypographyList
} from '@/custom/Typography'
import { Link } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'
import { FaWhatsapp } from "react-icons/fa"
import { IoCheckmark } from "react-icons/io5";
import { motion } from 'framer-motion'

const MobileHeader = () => {
    return (
        <div className='sm:hidden flex flex-col w-full'>
            <div className='h-14 px-6 bg-white flex justify-between items-center w-full border-b shadow'>
                <img src="/assets/logo-2.png" alt="" className='w-48' />
                <Link to='/sign-in'>
                    <Button
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-white"
                    >
                        <FiUser className="mr-2 h-4 w-4" />
                        Sign In
                    </Button>
                </Link>
            </div>
            <div className='bg-primary/10 p-2 w-full flex justify-between py-8'>
                <div className='pl-4'>
                    <TypographyH4 className="text-lg text-blue-800">
                        Lifetime Free Credit Score
                    </TypographyH4>
                    <TypographyList items={creditScoreFeatures} className="text-muted-foreground mt-2" />
                </div>
                <div className='flex justify-end items-end'>
                    <img src="/assets/credit-score.png" alt="credit-score" className='w-56' />
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
        <div className="bg-gradient-to-br from-[#4D22E0] to-[#356EF5] text-white w-full h-screen sm:flex flex-col hidden overflow-hidden">
            <div className='max-w-md ml-20'>
                <img src="/logo.png" alt="logo" className='w-56 h-fit' />
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

const RightPannel1 = ({ formData, setFormData, otpCode, setOtpCode }) => {
    const [errors, setErrors] = useState({});
    const [openDialog, setOpenDialog] = useState(false);

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => ({ ...prev, [field]: '' }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.name) newErrors.name = 'Full name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone is required';
        if (!formData.checked) newErrors.checked = 'You must accept the terms';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form Data:', formData);
            setOpenDialog(true);
        } else {
            setOpenDialog(false);
        }
    };

    const handleOTPSubmit = () => {

    }

    return (
        <div className='max-w-md mx-auto flex sm:justify-center gap-3 flex-col px-4 sm:py-8'>
            <div className='sm:flex hidden justify-end'>
                <Link to='/sign-in'>
                    <Button
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-white"
                    >
                        <FiUser className="mr-2 h-4 w-4" />
                        Sign In
                    </Button>
                </Link>
            </div>
            <Card className="shadow-none border-none">
                <CardHeader>
                    <CardTitle className='text-3xl text-blue-800'>Lifetime Free Credit Score</CardTitle>
                    <CardDescription>Get your credit report for free, with monthly updates</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="grid w-full items-center gap-4">
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

                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <input
                                    value={formData.name}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                    className='outline-none focus:border-primary border-b-2 p-2 text-sm'
                                    placeholder="As per your bank record"
                                />
                                {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                            </div>

                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <input
                                    value={formData.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    className='outline-none focus:border-primary border-b-2 p-2 text-sm'
                                    placeholder="example@mail.com"
                                />
                                {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                            </div>

                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="mobile">Mobile Number</Label>
                                <input
                                    value={formData.phone}
                                    onChange={(e) => handleChange('phone', e.target.value)}
                                    className='outline-none focus:border-primary border-b-2 p-2 text-sm'
                                    placeholder="10-digit mobile number"
                                />
                                {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
                                <span className='text-[10px] text-muted-foreground'>
                                    Note: Please Use the Mobile Number Registered with your Credit Card/Loan account
                                </span>
                            </div>

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
                            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                                <DialogTrigger asChild>
                                    <Button type='submit' className="w-full cursor-pointer">
                                        Get Free Credit Report
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle className="text-center">Verify Mobile Number</DialogTitle>
                                        <DialogDescription className="bg-gray-200 rounded-md py-2 mt-2 text-center">
                                            OTP sent on Mobile Number +91-xxx0701
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 mt-6">
                                        <input
                                            id="otp"
                                            placeholder='Put Your otp received in your phone'
                                            className="border-b pb-3 border-primary focus:outline-none"
                                            maxLength={4}
                                            value={otpCode}
                                            onChange={(e) => setOtpCode(e.target.value)}
                                        />
                                        <p className='text-red-800 text-xs text-center'>Invalid OTP</p>
                                    </div>
                                    <DialogFooter>
                                        <Button disabled={otpCode.length < 4} type="button" className="w-full">Verify & Login</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>

                            <div className='flex items-center gap-2 mt-2'>
                                <FaWhatsapp className='text-green-600' />
                                <TypographyMuted className="text-xs">
                                    Get updates on Whatsapp
                                </TypographyMuted>
                                <Switch
                                    id="whatsapp-mode"
                                    checked={formData.whatAppNotification}
                                    onCheckedChange={(value) => handleChange('whatAppNotification', value)}
                                />
                            </div>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card >
        </div >
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

export default function CreditCardsReportApply() {

    const [otpCode, setOtpCode] = useState("");
    const [formData, setFormData] = useState(
        {
            name: "",
            gender: "",
            email: "",
            phone: "",
            checked: "",
            whatAppNotification: false,
        }
    )

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full h-screen'>
            {/* Mobile Header */}
            <MobileHeader />

            {/* Left Gradient Panel */}
            <LeftGradiantPannel />

            {/* Right Form Panel */}
            <RightPannel1 formData={formData} setFormData={setFormData} setOtpCode={setOtpCode} otpCode={otpCode} />

            {/* Right Form Panel-2 */}
            <div className='max-w-md mx-auto flex sm:justify-center gap-3 flex-col px-4 sm:py-8'>

            </div>
        </div>
    )
}
