import {
    TypographyH2BlueColor,
    TypographyPBlueColor,
    TypographyList2,
    TypographySmall,
    BoldList
} from '@/custom/Typography';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import PageLayout from '@/components/layout/PageLayout';
import EMICalculatorDefault from "@/components/EMI/EMICalculatorDefault"

export default function FDCalculator() {
    return (
        <PageLayout>
            <div className="max-w-5xl mx-auto sm:py-8 px-6">
                <>
                    <EMICalculatorDefault
                        headline="Fixed Deposit Calculator"
                        paragraph="A Fixed Deposit (FD) Calculator calculates the FD maturity value and interest income based on principal amount, FD interest rates and tenure. Online FD calculators of some banks additionally allow users to calculate their FD interest income based on the interest payout options (monthly, quarterly, half-yearly, yearly and reinvestment). Some online FD calculators also allow users to calculate their FD interest income on simple interest basis for short-term FDs."
                        inputHeading="FD Calculator"
                        outputHeading='FD Calculator'
                    />
                </>

            </div>
        </PageLayout>
    )
}
