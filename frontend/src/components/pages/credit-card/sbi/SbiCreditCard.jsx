import PageLayout from '@/components/layout/PageLayout';
import { HeroLoginCard2 } from '../../HeroSectionPages';
import {
    TypographyH2BlueColor,
    TypographyPBlueColor,
} from '@/custom/Typography';
import { CreditCard } from '../CreditCards';
import SbiDescription from './SbiDescription';

export const listItems = [
    "50+ Credit Cards from Top Banks",
    "Compare Best Offers",
    "Completely Digital Process"
];

// data/cardData.ts
export const cardProps = [
    {
        title: "Cashback SBI Card",
        image: "/banks/credit-card/sbi/cashback-card.png",
        rating: 4,
        review: "4/5",
        joiningFee: "₹999",
        annualFee: "₹999",
        highlights: [
            "5% cashback on all online spends",
            "1% cashback across all offline spends"
        ],
        tags: ["Cashback", "Online Shopping"],
        benefits: [
            "5% cashback across all online spends with no merchant restriction",
            "1% cashback across all offline spends",
            "Earn cashback of up to Rs. 5,000 per month",
            "Renewal fee reversed on spending at least Rs. 2 lakh in a year",
            "1% fuel surcharge waiver of up to Rs. 100 per month"
        ]
    },
    {
        title: "SBI Card PRIME",
        image: "/banks/credit-card/sbi/sbi-prime.jpeg",
        rating: 3.5,
        review: "3.5/5",
        joiningFee: "₹2999",
        annualFee: "₹2999",
        highlights: [
            "5X reward points on dining, groceries, departmental stores, and movies",
            "8 international Priority Pass & 4 domestic airport lounge visits per year"
        ],
        tags: ["Travel", "Shopping", "Reward Points"],
        benefits: [
            "10X reward points on birthday spends; 2 reward points per Rs. 100 on other retail purchases",
            "E-gift vouchers worth Rs. 3,000 of popular brands, such as Yatra, Pantaloons, etc., as welcome benefits",
            "Pizza-hut gift voucher worth Rs. 1,000 on quarterly spend of Rs. 50,000",
            "Yatra/ Pantaloons gift voucher worth Rs. 7,000 on spending Rs. 5 lakh in a year"
        ]
    },
    {
        title: "SBI Card ELITE",
        image: "/banks/credit-card/sbi/sbi-elite.jpeg",
        rating: 3.5,
        review: "3.5/5",
        joiningFee: "₹4999",
        annualFee: "₹4999",
        highlights: [
            "5X reward points on dining, grocery and departmental store spends",
            "Complimentary Priority Pass membership"
        ],
        tags: ["Lounge Access", "Movies", "Reward Points"],
        benefits: [
            "5X reward points on dining, grocery and departmental store spends",
            "Complimentary Priority Pass membership",
            "2 reward points per Rs. 100 spent on other categories",
            "Up to 50,000 bonus reward points as milestone benefits",
            "6 complimentary international lounge access in a year; 1.99% forex mark-up fee",
            "Up to 8 complimentary domestic lounge access per year, 2 per quarter",
            "Free movie tickets worth Rs. 6,000 in a year",
            "Low forex mark-up fee of 1.99%"
        ]
    },
    {
        title: "BPCL SBI Card Octane",
        image: "/banks/credit-card/sbi/bpcl.jpeg",
        rating: 4,
        review: "4/5",
        joiningFee: "₹1499",
        annualFee: "₹1499",
        highlights: [
            "7.25% value back on BPCL fuel expenses",
            "10X rewards on dining, movies, groceries & departmental store spends"
        ],
        tags: ["Co-branded", "Fuel"],
        benefits: [
            "25 reward points per Rs. 100 spent on BPCL fuel, lubricants & Bharat Gas; 1 reward point on others",
            "1% fuel surcharge waiver, up to Rs. 100 per month, on BPCL fuel spends of up to Rs. 4,000",
            "6,000 reward points as welcome bonus on fee payment, 1 RP = Rs. 0.25",
            "4 complimentary visits per year to domestic Visa lounges in India",
            "Fee waived on Rs. 2 lakh annual spends & Rs. 2,000 e-gift voucher on Rs. 3 lakh annual spends"
        ]
    },
    {
        title: "Yatra SBI Card",
        image: "/banks/credit-card/sbi/yatra.jpeg",
        rating: 3.5,
        review: "3.5/5",
        joiningFee: "₹499",
        annualFee: "₹499",
        highlights: [
            "Yatra.com vouchers worth Rs. 8,250 as joining benefit",
            "Up to Rs. 4,000 off on flight bookings through Yatra.com"
        ],
        tags: ["Travel", "Co-branded", "Reward Points"],
        benefits: [
            "Rs. 1,000 off on domestic flight bookings on min. transaction of Rs. 5,000 at Yatra",
            "Rs. 4,000 off on international flight bookings on min. transaction of Rs. 40,000 at Yatra",
            "20% off on domestic hotel bookings with min. transaction value of Rs. 3,000 at Yatra",
            "6 reward points per Rs. 100 spent on select categories",
            "1 reward point per Rs. 100 spent on other categories"
        ]
    },
    {
        title: "SBI SimplyCLICK Credit Card",
        image: "/banks/credit-card/sbi/simplyClick.jpeg",
        rating: 3,
        review: "3/5",
        joiningFee: "₹499",
        annualFee: "₹499",
        highlights: [
            "10X reward points on top online brands - BookMyShow, Swiggy, Myntra, etc.",
            "5X reward points on other online spends"
        ],
        tags: ["Reward Points", "Online Shopping"],
        benefits: [
            "1 reward point for every Rs. 100 spent on other categories",
            "Amazon India gift card worth Rs. 500 on joining fee payment",
            "Cleartrip/Yatra e-voucher of Rs. 2,000 each on reaching spending milestones",
            "Annual fee waived on Rs. 1 lakh annual spends",
            "1% fuel surcharge waiver on spends between Rs. 500 to Rs. 3,000"
        ]
    },
    {
        title: "SBI SimplySAVE Credit Card",
        image: "/banks/credit-card/sbi/simplySave.jpeg",
        rating: 3,
        review: "3/5",
        joiningFee: "₹499",
        annualFee: "₹499",
        highlights: [
            "10x rewards on movies, dining and grocery shopping",
            "2,000 bonus reward points on card activation"
        ],
        tags: ["Dining", "Reward Points"],
        benefits: [
            "10x rewards on movies, dining, departmental stores and grocery spends",
            "2,000 bonus reward points on card activation",
            "Annual fee waiver on spending Rs. 1 lakh in a year",
            "1% fuel surcharge waiver on transactions between Rs. 500 to Rs. 3,000, up to Rs. 100 per statement cycle"
        ]
    },
    {
        title: "IRCTC SBI Platinum Credit Card",
        image: "/banks/credit-card/sbi/irctc.jpeg",
        rating: 3,
        review: "3/5",
        joiningFee: "₹500",
        annualFee: "₹300",
        highlights: [
            "10% value-back on railway ticket bookings",
            "350 bonus reward points on card activation"
        ],
        tags: ["Travel"],
        benefits: [
            "350 reward points worth Rs. 350 on card activation",
            "10% value-back on IRCTC bookings in AC classes",
            "1 reward point per Rs. 125 on non-fuel purchases",
            "4 complimentary railway lounge access/year",
            "1% transaction charge waiver on railway bookings"
        ]
    }
];

export default function SbiCreditCard() {
    return (
        <PageLayout>
            <HeroLoginCard2
                headline="SBI Credit Card"
                description="SBI Card is a leading credit card issuer in India offering credit cards with benefits across multiple categories. SBI SimplySave, SBI SimplyClick, Cashback SBI Card, SBI Card ELITE and BPCL SBI Card are some of the most popular SBI credit cards. Since each card is focused on unique individual needs, such as shopping, travel, fuel, groceries, and other such categories, choosing the right card can be confusing. To help you make an informed decision, we have listed the top SBI credit cards."
                navigateLink="/myaccount/dashboard"
                loginSubHedline="Check credit Score with Your PAN Number"
                listHeadline={{
                    rightText: "Check",
                    highLighter: "Pre-Approved Credit Cards ",
                    leftText: "for you in Just One Click"
                }}
                list={listItems}
                buttonName="Check Offers"
            />

            <div className='max-w-6xl p-6 mx-auto'>
                <div className='max-w-3xl'>
                    <>
                        <TypographyH2BlueColor>
                            Best SBI Credit Cards in May 2025
                        </TypographyH2BlueColor>
                        <TypographyPBlueColor>
                            With SBI credit cards, you can earn reward points and cashback and avail other benefits, such as complimentary lounge access and memberships, discounted movie tickets, co-branded privileges, and many more. You can apply for SBI Credit Cards online based on the below-mentioned list of cards according to your requirements.
                        </TypographyPBlueColor>
                    </>
                    <div className="grid gap-4 mt-8">
                        {cardProps.map((card, idx) => (
                            <CreditCard key={idx} {...card} />
                        ))}
                    </div>

                </div>

                <div className='max-w-3xl mt-6'>
                    <SbiDescription />
                </div>
            </div>

        </PageLayout>
    )
}


