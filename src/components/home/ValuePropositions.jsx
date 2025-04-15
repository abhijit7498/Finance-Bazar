import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FiPieChart, FiUserCheck, FiShield, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { TypographyMuted } from '../../custom/Typography';

// Value proposition data
const valueProps = [
  {
    icon: FiPieChart,
    title: 'Wide Choice',
    description: 'We have partnerships with large banks, NBFCs and fintech lenders who offer a wide choice of products on our platform',
  },
  {
    icon: FiUserCheck,
    title: 'Easy Access to Credit',
    description: 'Our algorithm-based technology provides access to multiple credit offers, ease of comparison and unbiased advice',
  },
  {
    icon: FiShield,
    title: 'Safe & Secure',
    description: 'Your data is completely safe with us. We are ISO(27001: 2013) certified & have built industry-best controls to keep your information secure.',
  },
  {
    icon: FiUsers,
    title: 'Customer First',
    description: 'We have a dedicated and highly trained team of experts who work hard every day to help you take the best financial decisions',
  },
];

export default function ValuePropositions() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-financesbazar-dark mb-4">
            Compare, Choose and Apply for personal credit products on financesbazar
          </h2>
          <Link to="/about-us">
            <Button variant="link" className="">
              Read More
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop) => (
            <ValuePropCard
              key={prop.title}
              Icon={prop.icon}
              title={prop.title}
              description={prop.description}
            />
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          <AboutSection
            title="About Us"
            description="How we are building a strong Financesbazar Brand"
            linkText="Know More"
            linkHref="/about-us"
            bgColor="bg-[#f5f9ff]"
          />
          <AboutSection
            title="Work with Us"
            description="Want to Join Team Financesbazar?"
            linkText="Join Us"
            linkHref="/careers"
            bgColor="bg-[#f0fdfa]"
          />
        </div>
      </div>
    </section>
  );
}

function ValuePropCard({ Icon, title, description }) {
  return (
    <Card className="border-none shadow-sm hover:shadow-2xl hover:scale-105 cursor-pointer transition-shadow h-full">
      <CardHeader className="space-y-0 pb-2">
        <Icon className="h-8 w-8 text-primary" />
        <CardTitle className="text-lg mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground text-sm">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

function AboutSection({ title, description, linkText, linkHref, bgColor }) {
  return (
    <div className={`${bgColor} rounded-lg p-8 text-center`}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <TypographyMuted className="mb-6">{description}</TypographyMuted>
      <Link to={linkHref}>
        <Button variant="outline" className="text-primary border-primary hover:text-primary cursor-pointer hover:border-none">
          {linkText}
        </Button>
      </Link>
    </div>
  );
}
