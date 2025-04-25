import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FiArrowRight, FiStar } from 'react-icons/fi';
import { TypographyMuted, HighLighter, TypographySmall, TypographyH2, TypographyH3 } from '@/custom/Typography';
import { generateOTP } from '@/lib/utils'
import { useNavigate } from 'react-router-dom';
import OtpDialog from '@/custom/OtpDialog'

export default function HeroLoginCard({
    headline,
    description,
    cards,
    navigateLink,
    highlighterHedline,
    loginSubHedline,
    ratingInfo,
    buttonName
}) {
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
        navigate(navigateLink);
    };

    return (
        <>
            <div className="overflow-hidden py-8 sm:py-12"
                style={{
                    background: "linear-gradient(to bottom, #ffffff, #f5f9ff, #f0fdfa)",
                }}>
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-12">
                        <div className="sm:col-span-7">
                            <TypographyH2 className="text-blue-950">
                                {headline}
                            </TypographyH2>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4"></h1>
                            <TypographyMuted className="sm:mb-8 mb-4">
                                {description}
                            </TypographyMuted>

                            {/* desktop view the card */}
                            <div className="lg:grid lg:grid-cols-4 lg:gap-3 pb-4 hidden">
                                {cards?.map((feature, i) => (
                                    <div
                                        key={i}
                                        className="bg-transparent border cursor-pointer shadow hover:translate-y-1/6 transition-all border-primary rounded-md p-3 flex flex-col gap-2"
                                    >
                                        <div className='flex items-center gap-1'>
                                            <span className='text-accent'>{feature?.icon}</span>
                                            <TypographySmall className="font-semibold mr-2 text-xs">
                                                {feature?.title}
                                            </TypographySmall>
                                        </div>
                                        <TypographyMuted className="text-xs line-clamp-3">
                                            {feature?.description}
                                        </TypographyMuted>
                                    </div>
                                ))}
                            </div>

                            {/* mobile view the card */}
                            <div className="flex lg:hidden overflow-x-auto gap-3 pb-4">
                                {cards?.map((feature, i) => (
                                    <div
                                        key={i}
                                        className="min-w-[150px] bg-transparent border cursor-pointer shadow hover:translate-y-1/6 transition-all border-primary rounded-md p-4 flex flex-col gap-2"
                                    >
                                        <div className='flex items-center gap-1'>
                                            <span className='text-accent'>{feature?.icon}</span>
                                            <TypographySmall className="font-semibold mr-2 text-xs">
                                                {feature?.title}
                                            </TypographySmall>
                                        </div>
                                        <TypographyMuted className="text-xs">
                                            {feature?.description}
                                        </TypographyMuted>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='rounded-lg bg-white shadow-sm sm:col-span-5 '>
                            <div className='h-1.5 bg-accent rounded-t-lg' />
                            <div className="p-6">
                                <HighLighter
                                    rightText={highlighterHedline?.rightText}
                                    highLighter={highlighterHedline?.highLighter}
                                    leftText={highlighterHedline?.leftText}
                                />
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
                                        {loginSubHedline}
                                    </TypographyMuted>
                                    <Button type="submit" className="w-full cursor-pointer" onClick={handleCheckOffers}>
                                        {buttonName ? buttonName : "Check Offers"}  <FiArrowRight className="ml-2" />
                                    </Button>
                                </div>
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

            {
                ratingInfo && <div className="py-6 px-4">
                    <div className="max-w-6xl mx-auto bg-primary/10 rounded-lg p-4">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            {ratingInfo?.map((stat, index) => (
                                <div key={index} className="grid gap-2 text-center">
                                    <TypographyH3 className="font-bold tracking-wider">
                                        {stat?.title}
                                    </TypographyH3>
                                    {stat.icon === "stars" ? (
                                        <div className="ml-2 text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <FiStar
                                                    key={i}
                                                    className={`inline-block h-4 w-4 ${i < 4 ? "fill-current" : "stroke-current"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <TypographyMuted className="font-medium italic">
                                            {stat?.subtitle}
                                        </TypographyMuted>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
