import {
    RadialBarChart,
    RadialBar,
    PolarRadiusAxis,
} from "recharts";
import { TypographyH3, TypographyH4, TypographyMuted, TypographySmall } from "../../custom/Typography";

const chartData = [
    { name: "Poor", value: 300, fill: "#FF4D4F" },
    { name: "Fair", value: 500, fill: "#FFA940" },
    { name: "Good", value: 700, fill: "#FADB14" },
    { name: "Very Good", value: 800, fill: "#36CFC9" },
    { name: "Excellent", value: 900, fill: "#73D13D" },
];

const creditScore = 758;

const getScoreLabel = (score) => {
    if (score < 500) return { label: "Poor", color: "#FF4D4F" };
    if (score < 650) return { label: "Fair", color: "#FFA940" };
    if (score < 750) return { label: "Good", color: "#FADB14" };
    if (score < 850) return { label: "Very Good", color: "#36CFC9" };
    return { label: "Excellent", color: "#73D13D" };
};

export default function CreditScore() {
    const { label, color } = getScoreLabel(creditScore);

    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mx-auto">
            <div className="flex justify-between items-center">
                <TypographyMuted className="tracking-normal">
                    <span className="font-semibold text-blue-900">Hey Amol!</span> Here's your Credit Score for Apr' 25
                </TypographyMuted>
                <TypographyMuted className="tracking-normal">
                    Next report on: <span className="font-semibold text-blue-900">16 May' 25</span>
                </TypographyMuted>
            </div>

            <div className="flex justify-between sm:gap-12">
                <div className="relative flex justify-center w-[280px] h-[200px]">
                    <RadialBarChart
                        width={280}
                        height={200}
                        cx="50%"
                        cy="100%"
                        innerRadius="80%"
                        outerRadius="100%"
                        barSize={15}
                        data={chartData}
                        startAngle={180}
                        endAngle={0}
                    >
                        <PolarRadiusAxis type="number" domain={[300, 900]} tick={false} />
                        <RadialBar
                            background
                            clockWise
                            dataKey="value"
                            cornerRadius={10}
                            minAngle={15}
                        />
                    </RadialBarChart>

                    {/* Score Number */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
                        <TypographyH3 className="font-bold text-blue-900">{creditScore}</TypographyH3>
                        <div className="text-xs font-semibold" style={{ color }}>
                            {label} <span title="Your credit rating based on your score">ℹ️</span>
                        </div>
                    </div>

                    {/* Min/Max Labels */}
                    <TypographySmall className="absolute left-4 bottom-0 text-red-500  text-xs">300</TypographySmall>
                    <TypographySmall className="absolute right-4 bottom-0 text-green-600  text-xs">900</TypographySmall>
                </div>

                <div className="flex flex-col gap-2 mt-10">
                    <TypographyH4 className="font-semibold tracking-normal text-blue-950">You are doing Great!</TypographyH4>
                    <TypographyMuted className="tracking-wide leading-6 text-blue-800">
                        A Credit Score is a 3-digit number ranging between{" "}
                        <span className="font-bold text-blue-950">300-900</span>. Maintaining a good or better score helps you get the best offers on loans or credit cards.
                    </TypographyMuted>
                </div>
            </div>
        </div>
    );
}
