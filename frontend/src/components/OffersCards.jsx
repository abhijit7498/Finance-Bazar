import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TypographySmall } from '@/custom/Typography';

export const OffersCards = ({ headline, offers }) => {

    const [showAllOffers, setShowAllOffers] = useState(false);
    const visibleOffers = showAllOffers ? offers : offers.slice(0, 3);

    return (
        <>
            <h2 className="sm:text-2xl text-lg font-bold text-blue-950 mb-3 px-3">{headline}</h2>
            <div className="grid grid-cols-1 gap-6">
                {visibleOffers.map((offer) => (
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
            <div className="text-center mt-6">
                <Button
                    onClick={() => setShowAllOffers(!showAllOffers)}
                    className="text-sm font-semibold"
                >
                    {showAllOffers ? "Show Less Offers" : "Show More Offers"}
                </Button>
            </div>
        </>
    )
}