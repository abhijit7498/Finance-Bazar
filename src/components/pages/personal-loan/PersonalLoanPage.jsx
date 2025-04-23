import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { FiArrowRight, FiStar } from 'react-icons/fi';
import { TypographyMuted, TypographySmall, TypographyH2, TypographyH3 } from '@/custom/Typography';
import { generateOTP } from '@/lib/utils'
import { useNavigate } from 'react-router-dom';
import OtpDialog from '@/custom/OtpDialog'

const loanOffers = [
    {
        id: 'hdfc-bank',
        name: 'HDFC Bank',
        highlights: ['10 Second Disbursal*', '100% Digital Process*', 'Quick Disbursal'],
        max_loan: 'Up to 40L',
        interest_rate: '10.9% - 24%',
        tenure: 'Upto 6 Years',
        processing_fee: '6500',
    },
    {
        id: 'axis-bank',
        name: 'Axis Bank',
        highlights: ['Low Processing fee'],
        max_loan: 'Up to 10L',
        interest_rate: '11.25% - 22%',
        tenure: 'Upto 5 Years',
        processing_fee: 'Upto 2%',
    },
    {
        id: 'kotak-mahindra-bank',
        name: 'Kotak Mahindra Bank',
        highlights: ['Lowest Income requirement', '100% Digital Process*'],
        max_loan: 'Up to 35L',
        interest_rate: '10.99% - 16.9%',
        tenure: 'Upto 6 Years',
        processing_fee: 'Upto 5%',
    },
];

const loanFeatures = [
    {
        title: "Best Loan Deals",
        description: "Hand picked offers from 30+ lenders",
    },
    {
        title: "Instant Loan",
        description: "Money in Mins via Pre-Approved Loans",
    },
    {
        title: "Digital Process",
        description: "Hassle free Contact-less processes",
    },
    {
        title: "Quick Approval",
        description: "Fast approval for your loan application",
    },
];

const whyChooseData = [
    {
        img: "/product/money-icon-2.svg",
        text: <>Compare & Choose the <strong>Best Offer</strong></>,
    },
    {
        img: "/product/pre-approved.svg",
        text: <>Pre-approved Offers with <strong>Instant Disbursals</strong></>,
    },
    {
        img: "/product/meter-icon.svg",
        text: <>Know Your <strong>Chances of Approval</strong></>,
    },
    {
        img: "/product/digital-process-icon.svg",
        text: <>End-to-End <strong>Digital Process</strong></>,
    },
];

export default function PersonalLoanPage() {
    const [loanAmount, setLoanAmount] = useState(500000);
    const [tenure, setTenure] = useState(3);
    const [interestRate, setInterestRate] = useState(12);

    const [openDialog, setOpenDialog] = useState(false);
    const [mobileNumber, setMobileNumber] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateMobileNumber = (number) => {
        const indianPhoneRegex = /^[6-9]\d{9}$/;
        return indianPhoneRegex.test(number);
    };

    const handleCheckOffers = () => {
        if (!validateMobileNumber(mobileNumber)) {
            setError('Please enter a valid 10-digit Indian mobile number.');
            return;
        } else {
            setOpenDialog(true);
            generateOTP();
        }
    };

    const handleOtpVerified = () => {
        setOpenDialog(false);
        navigate('/personal-loan/apply');
    };

    const calculateEMI = () => {
        const principal = loanAmount;
        const annualRate = interestRate;
        const months = tenure * 12;
        const monthlyRate = annualRate / 12 / 100;
        const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
        return emi ? emi.toFixed(2) : 0;
    };

    const emiValue = calculateEMI();
    const totalAmount = (emiValue * tenure * 12).toFixed(2);
    const interestAmount = (totalAmount - loanAmount).toFixed(2);

    return (
        <PageLayout>
            <div className="overflow-hidden py-12"
                style={{
                    background: "linear-gradient(to bottom, #ffffff, #f5f9ff, #f0fdfa)", // Top white, bottom gradient
                }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-12">
                        <div className="sm:col-span-7">
                            <TypographyH2 className="text-blue-950">
                                Personal Loan
                            </TypographyH2>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4"></h1>
                            <TypographyMuted className="sm:mb-8 mb-4">
                                Get a personal loan of up to Rs 40 lakh with interest rates starting at 10.5% p.a. Explore pre-approved offers from our partner lenders, featuring end-to-end digital processing and instant disbursals.
                            </TypographyMuted>

                            <div className="lg:grid lg:grid-cols-4 lg:gap-3 pb-4 hidden">
                                {loanFeatures.map((feature, i) => (
                                    <div
                                        key={i}
                                        className="bg-transparent border cursor-pointer shadow shadow-primary hover:translate-y-1/6 transition-all border-primary rounded-md p-4 flex flex-col gap-2"
                                    >
                                        <TypographySmall className="font-semibold mr-2 text-xs">
                                            {feature.title}
                                        </TypographySmall>
                                        <TypographyMuted className="text-xs">
                                            {feature.description}
                                        </TypographyMuted>
                                    </div>
                                ))}
                            </div>

                            <div className="flex lg:hidden overflow-x-auto gap-3 pb-4">
                                {loanFeatures.map((feature, i) => (
                                    <div
                                        key={i}
                                        className="min-w-[200px] bg-transparent border cursor-pointer shadow shadow-primary hover:translate-y-1/6 transition-all border-primary rounded-md p-4 flex flex-col gap-2"
                                    >
                                        <TypographySmall className="font-semibold mr-2 text-xs">
                                            {feature.title}
                                        </TypographySmall>
                                        <TypographyMuted className="text-xs">
                                            {feature.description}
                                        </TypographyMuted>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white sm:col-span-5 p-6 rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold tracking-normal mb-4">Check Personal Loan Offers Online</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 border-2 border-gray-300 focus-within:border-blue-500 p-3 rounded-md">
                                    <TypographySmall className="font-semibold text-sm">+91</TypographySmall>
                                    <input
                                        type="tel"
                                        placeholder="Mobile Number"
                                        className="text-sm focus:outline-none font-semibold w-full"
                                        value={mobileNumber}
                                        maxLength={10}
                                        onChange={(e) => {
                                            setMobileNumber(e.target.value.replace(/\D/g, ''));
                                            setError('');
                                        }}
                                        onKeyPress={(e) => {
                                            if (!/[0-9]/.test(e.key)) {
                                                e.preventDefault();
                                            }
                                        }}
                                    />
                                </div>
                                {error && <div className="text-red-500 text-xs">{error}</div>}
                                <TypographyMuted className="text-xs">
                                    Don't worry, this will not affect your credit score.
                                </TypographyMuted>
                                <Button type="submit" className="w-full cursor-pointer" onClick={handleCheckOffers}>
                                    Check Offers <FiArrowRight className="ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* OTP Dialog */}
            <OtpDialog
                open={openDialog}
                setOpen={setOpenDialog}
                mobile={mobileNumber}
                sessionStorage={{
                    key: "OTP_Verify",
                    value: { OTP_Verify: true, phoneNumber: mobileNumber },
                }}
                onVerified={handleOtpVerified}
            />

            <div className="py-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        <div className="grid gap-2 text-center">
                            <TypographyH3 className="font-bold tracking-wider">
                                4.2/5
                            </TypographyH3>
                            <div className="ml-2 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <FiStar key={i} className={`inline-block h-4 w-4 ${i < 4 ? 'fill-current' : 'stroke-current'}`} />
                                ))}
                            </div>
                        </div>
                        <div className="grid gap-2 text-center">
                            <TypographyH3 className="font-bold tracking-wider">
                                45M+
                            </TypographyH3>
                            <TypographyMuted className="font-medium italic">
                                Satisfied Customers
                            </TypographyMuted>
                        </div>
                        <div className="grid gap-2 text-center">
                            <TypographyH3 className="font-bold tracking-wider">
                                65M+
                            </TypographyH3>
                            <TypographyMuted className="font-medium italic">
                                Lending Partners
                            </TypographyMuted>
                        </div>
                        <div className="grid gap-2 text-center">
                            <TypographyH3 className="font-bold tracking-wider">
                                800M+
                            </TypographyH3>
                            <TypographyMuted className="font-medium italic">
                                Cities across India
                            </TypographyMuted>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mt-12 border border-primary p-4 sm:p-6 rounded-md mx-6 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                    <TypographyH3 className="font-semibold mb-4">Personal Loan EMI Calculator</TypographyH3>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className='flex justify-between items-center'>
                                <label className="text-xs font-medium text-muted-foreground">Loan Amount (₹)</label>
                                <Input type="number" value={loanAmount} onChange={(e) => setLoanAmount(+e.target.value)} className="mt-2 w-[100px] border rounded-none shadow-none text-sm font-semibold opacity-90" />
                            </div>
                            <Slider defaultValue={[loanAmount]} max={5000000} step={10000} onValueChange={([val]) => setLoanAmount(val)} />
                        </div>

                        <div className='grid gap-4 sm:grid-cols-2 grid-cols-1'>
                            <div className="space-y-2">
                                <div className='flex justify-between items-center'>
                                    <label className="text-xs font-medium text-muted-foreground">Rate of Interest (Per Annum)</label>
                                    <Input type="number" value={interestRate} onChange={(e) => setInterestRate(+e.target.value)} className="mt-2 w-[100px] border rounded-none shadow-none text-sm font-semibold opacity-90" />
                                </div>
                                <Slider defaultValue={[interestRate]} max={30} step={0.5} onValueChange={([val]) => setInterestRate(val)} />
                            </div>

                            <div className="space-y-2">
                                <div className='flex justify-between items-center'>
                                    <label className="text-xs font-medium text-muted-foreground">Tenure (Years)</label>
                                    <Input type="number" value={tenure} onChange={(e) => setTenure(+e.target.value)} className="mt-2 w-[100px] border rounded-none shadow-none text-sm font-semibold opacity-90" />
                                </div>
                                <Slider defaultValue={[tenure]} max={10} step={1} onValueChange={([val]) => setTenure(val)} />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="bg-primary/10 p-4 grid gap-2 rounded-lg text-center">
                        <TypographyMuted className="text-md font-semibold">
                            Your Monthly EMI Payment
                        </TypographyMuted>
                        <TypographyH2 className="text-green-600">
                            ₹{emiValue}
                        </TypographyH2>
                    </div>
                    <div className="grid gap-3 ml-3 mt-4">
                        <div className='flex justify-between items-center'>
                            <TypographyMuted className="font-semibold tracking-normal">Principal Amount</TypographyMuted>
                            <TypographySmall className="font-semibold">₹{loanAmount.toLocaleString()}</TypographySmall>
                        </div>
                        <div className='flex justify-between items-center'>
                            <TypographyMuted className="font-semibold tracking-normal">Interest Amount</TypographyMuted>
                            <div className="font-bold"></div>
                            <TypographySmall className="font-semibold">₹{(+interestAmount).toLocaleString()}</TypographySmall>
                        </div>
                        <div className='flex justify-between items-center border-t pt-3'>
                            <TypographySmall className="font-semibold">Total Amount</TypographySmall>
                            <TypographySmall className="font-semibold">₹{(+totalAmount).toLocaleString()}</TypographySmall>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-10">
                <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-6">
                    <div className='lg:col-span-8'>
                        <h2 className="sm:text-2xl text-lg font-bold text-blue-950 mb-3 px-3">Find Best Personal Loan Offers</h2>
                        <div className="grid grid-cols-1 gap-6">
                            {loanOffers.map((offer) => (
                                <div key={offer.id} className="border p-6 rounded-md">
                                    <div className='flex sm:flex-row flex-col justify-between sm:items-center mb-4'>
                                        <h3 className="font-bold opacity-75 text-lg">{offer?.name}</h3>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {offer.highlights.map((highlight, index) => (
                                                <span key={`${offer.id}-highlight-${index}`} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex gap-4 mt-4 items-center justify-between flex-wrap">
                                        <div>
                                            <div className="text-xs text-gray-500">Max. Loan Amt.</div>
                                            <TypographySmall className="font-semibold">
                                                {offer?.max_loan}
                                            </TypographySmall>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500">Rate of Interest</div>
                                            <TypographySmall className="font-semibold">
                                                {offer?.interest_rate}
                                            </TypographySmall>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500">Tenure</div>
                                            <TypographySmall className="font-semibold">
                                                {offer?.tenure}
                                            </TypographySmall>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500">Processing Fee</div>
                                            <TypographySmall className="font-semibold">
                                                {offer?.processing_fee}
                                            </TypographySmall>
                                        </div>
                                        <Button className="text-xs">
                                            Apply Now
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='lg:col-span-4 bg-primary/10 sm:p-10 p-6 rounded-md'>
                        <h2 className="sm:text-xl text-sm font-bold mb-6 text-center">Why Choose Financesbazar?</h2>
                        <div className="flex items-center flex-wrap gap-4 sm:gap-8">
                            {whyChooseData.map((item, index) => (
                                <div key={index} className="flex gap-3 sm:gap-6 justify-between text-wrap">
                                    <img src={item.img} alt="icon" className="w-10 h-10 mb-4" />
                                    <TypographyMuted className="text-sm text-gray-700">{item.text}</TypographyMuted>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* What is a Personal Loan */}
            <div className="py-12 bg-primary/10">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                        <div>
                            <TypographyH3 className="font-bold tracking-normal mb-4">What is a Personal Loan?</TypographyH3>
                            <TypographyMuted className="leading-6 tracking-normal font-medium">
                                Personal loan is a short to medium term loan, which consumers can avail to meet both personal and business needs other than speculative purposes.
                                They are usually unsecured in nature as consumers do not need to pledge any collateral or security to avail them.
                            </TypographyMuted>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                                        <FiStar className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-medium">Personal loan - 5 Points</div>
                                        <div className="text-sm text-gray-500">financesbazar</div>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-500">5:56</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout >
    );
}

