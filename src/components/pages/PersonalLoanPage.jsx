import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { FiArrowRight, FiCheck, FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { TypographyMuted } from '@/custom/Typography';

export const metadata = {
    title: 'Personal Loan - Apply Online up to Rs. 40 Lakh | Financesbazar',
    description: 'Apply for personal loan online at Financesbazar. Get an instant loan of up to ₹40 lakh without collateral at low interest rates & flexible tenures.',
};

// Loan offers data
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

export default function PersonalLoanPage() {
    return (
        <PageLayout>
            <div className="bg-gradient-to-r from-[#f5f9ff] to-[#f0fdfa] py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl font-bold  mb-4">Personal Loan</h1>
                        <TypographyMuted className="mb-8">
                            Get a personal loan of up to Rs 40 lakh with interest rates starting at 10.5% p.a. Explore pre-approved offers from our partner lenders, featuring end-to-end digital processing and instant disbursals.
                        </TypographyMuted>

                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="bg-white rounded-md px-4 py-3 flex items-center">
                                <span className="text-primary font-semibold mr-2">Best Loan Deals</span>
                                <span className="text-sm text-gray-600">Hand picked offers from 30+ lenders</span>
                            </div>
                            <div className="bg-white rounded-md px-4 py-3 flex items-center">
                                <span className="text-primary font-semibold mr-2">Instant Loan</span>
                                <span className="text-sm text-gray-600">Money in Mins via Pre-Approved Loans</span>
                            </div>
                            <div className="bg-white rounded-md px-4 py-3 flex items-center">
                                <span className="text-primary font-semibold mr-2">Digital Process</span>
                                <span className="text-sm text-gray-600">Hassle free Contact-less processes</span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm max-w-md mx-auto">
                            <h3 className="text-lg font-bold mb-4">Check Personal Loan Offers Online</h3>
                            <div className="space-y-4">
                                <Input
                                    type="tel"
                                    placeholder="Mobile Number"
                                    className="h-12 text-sm"
                                />
                                <TypographyMuted className="text-xs">Don't worry, this will not affect your credit score.</TypographyMuted>
                                <Button className="w-full cursor-pointer">
                                    Check Offers <FiArrowRight className="ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust indicators */}
            <div className="py-6 border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex items-center">
                            <div className="text-lg font-bold ">4.2/5</div>
                            <div className="ml-2 text-yellow-400">
                                <FiStar className="inline-block h-4 w-4 fill-current" />
                                <FiStar className="inline-block h-4 w-4 fill-current" />
                                <FiStar className="inline-block h-4 w-4 fill-current" />
                                <FiStar className="inline-block h-4 w-4 fill-current" />
                                <FiStar className="inline-block h-4 w-4 stroke-current" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="text-lg font-bold ">45M+</div>
                            <TypographyMuted>Satisfied Customers</TypographyMuted>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="text-lg font-bold ">65+</div>
                            <TypographyMuted>Lending Partners</TypographyMuted>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="text-lg font-bold ">800+</div>
                            <TypographyMuted>Cities across India</TypographyMuted>
                        </div>
                    </div>
                </div>
            </div>

            {/* EMI Calculator */}
            <div className="py-12 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl font-bold  mb-8 text-center">Personal Loan EMI Calculator</h2>
                    <div className="max-w-4xl mx-auto bg-gray-50 p-6 rounded-lg">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Amount</label>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm">50K</span>
                                        <span className="text-sm">50L</span>
                                    </div>
                                    <Slider defaultValue={[500000]} max={5000000} step={10000} />
                                    <Input type="number" value="500000" className="mt-2" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Rate of Interest (Per Annum)</label>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm">8%</span>
                                        <span className="text-sm">30%</span>
                                    </div>
                                    <Slider defaultValue={[12]} max={30} step={0.5} />
                                    <Input type="number" value="12" className="mt-2" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Tenure</label>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm">1</span>
                                        <span className="text-sm">10</span>
                                    </div>
                                    <Slider defaultValue={[3]} max={10} step={1} />
                                    <Input type="number" value="3" className="mt-2" />
                                </div>
                            </div>

                            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold mb-4">Your Monthly EMI Payment</h3>
                                <div className="text-3xl font-bold text-primary mb-6">₹16,251</div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <TypographyMuted>Principal Amount</TypographyMuted>
                                        <div className="font-bold">₹5,00,000</div>
                                    </div>
                                    <div>
                                        <TypographyMuted>Interest Amount</TypographyMuted>
                                        <div className="font-bold">₹85,044</div>
                                    </div>
                                    <div>
                                        <TypographyMuted>Total Amount</TypographyMuted>
                                        <div className="font-bold">₹5,85,044</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Loan Offers */}
            <div className="py-12 bg-white border-t border-gray-100">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl font-bold  mb-8">Find Best Personal Loan Offers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {loanOffers.map((offer) => (
                            <Card key={offer.id} className="shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg">{offer.name}</CardTitle>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {offer.highlights.map((highlight, index) => (
                                            <span key={`${offer.id}-highlight-${index}`} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <div className="text-xs text-gray-500">Max. Loan Amt.</div>
                                            <div className="font-bold text-sm">{offer.max_loan}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500">Rate of Interest</div>
                                            <div className="font-bold text-sm">{offer.interest_rate}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500">Tenure upto</div>
                                            <div className="font-bold text-sm">{offer.tenure}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500">Processing Fee</div>
                                            <div className="font-bold text-sm">{offer.processing_fee}</div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <Link to={`/personal-loan/${offer.id}`}>
                                            <Button className="w-full">
                                                Check Eligibility
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-4">Why Choose financesbazar?</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="flex items-start text-sm">
                                <FiCheck className="h-5 w-5 text-primary mt-0.5 mr-2" />
                                <span>Compare & Choose the <strong>Best Offer</strong></span>
                            </div>
                            <div className="flex items-start text-sm">
                                <FiCheck className="h-5 w-5 text-primary mt-0.5 mr-2" />
                                <span>Pre-approved Offers with <strong>Instant Disbursals</strong></span>
                            </div>
                            <div className="flex items-start text-sm">
                                <FiCheck className="h-5 w-5 text-primary mt-0.5 mr-2" />
                                <span>Know Your <strong>Chances of Approval</strong></span>
                            </div>
                            <div className="flex items-start text-sm">
                                <FiCheck className="h-5 w-5 text-primary mt-0.5 mr-2" />
                                <span>End-to-End <strong>Digital Process</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* What is a Personal Loan */}
            <div className="py-12 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold  mb-6">What is a Personal Loan?</h2>
                        <TypographyMuted className="mb-8">
                            Personal loan is a short to medium term loan, which consumers can avail to meet both personal and business needs other than speculative purposes.
                            They are usually unsecured in nature as consumers do not need to pledge any collateral or security to avail them.
                        </TypographyMuted>

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
        </PageLayout>
    );
}
