import {
    TypographyH2,
    TypographyLarge,
    TypographyP,
    TypographySmall,
    TypographyH4,
    TypographyList
} from '@/custom/Typography'
import { Link, useNavigate } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { IoCheckmark } from "react-icons/io5";
import { useEffect, useState } from 'react'

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

export const MobileHeader = ({ showRightPanel2, onLogout }) => {
    const Navigate = useNavigate()
    return (
        <div className='sm:hidden flex flex-col w-full'>
            <div className='h-14 px-6 bg-white flex justify-between items-center w-full border-b shadow'>
                <img src="/logo.png" alt="" onClick={() => Navigate('/')} className='w-32' />
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

export const LeftGradiantPannel = () => {
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