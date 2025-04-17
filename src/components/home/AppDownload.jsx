import { TypographyMuted, TypographyH3, TypographyH4 } from '@/custom/Typography'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Button } from '@/components/ui/button'

const appCards = [
  "Track your credit score all the time and stay financially healthy",
  "Get exclusive Loans and Credit Card offers",
  "Enjoy a seamless experience"
]

export default function AppDownload() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto mt-12 px-6'>
      <div className='flex flex-col gap-6'>
        <TypographyH3 className="text-blue-800 font-bold tracking-normal mb-2">
          Download the Financesbazar Mobile App
        </TypographyH3>
        <div className='grid gap-3'>
          {
            appCards?.map((option) => (
              <TypographyMuted className='font-semibold flex items-center gap-2'>
                <IoCheckmarkCircleOutline size={22} className='text-accent' />{option}
              </TypographyMuted>
            ))
          }
        </div>
        <div className='gap-4 sm:grid hidden mt-6'>
          <TypographyH4 className="opacity-85 text-blue-950">
            Scan or click to Download App on your mobile
          </TypographyH4>
          <div className='flex items-center gap-6'>
            <div className='border w-[120px] h-[120px]'>

            </div>
            <TypographyMuted className="font-semibold text-xs">
              OR
            </TypographyMuted>
            <div className='grid gap-4'>
              <div className='border p-6 w-[150px]'>

              </div>
              <div className='border p-6 w-[150px]'>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img src="/assets/mobile.png" alt="mobile" className='h-96' />
        <Button className="block sm:hidden w-full font-semibold">
          Download the App now
        </Button>
      </div>
    </div>
  )
}


//   {renderPartnerLogos(category.id === 'all' ? 24 : 18)}
