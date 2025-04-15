import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-[#161b34] to-financesbazar-dark/90 ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl text-primary-foreground md:text-3xl font-bold mb-2">
            Tailor Made Products Exclusively<br />
            for financesbazar Customers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CreditCard
            title="Yes Bank Financesbazar PaisaSave Credit Card"
            imageSrc="https://ext.same-assets.com/2247534503/1885187505.png"
            features={[
              '3% Cashback on Online Spends',
              '1.5% Cashback on all Other Spends',
              'First Year Free',
            ]}
            linkHref="https://www.Financesbazar.com/cards/marketing/openmarket?partnerProductId=318"
          />

          <CreditCard
            title="RBL Bank Financesbazar DUET Credit Card"
            imageSrc="https://ext.same-assets.com/2247534503/3086505924.svg"
            features={[
              '1% cash back on all spends*',
              'Credit Card + Cash**',
              '100% Digital Process',
            ]}
            subtitle="**Cash is an XpressCash program by RBL Bank"
            linkHref="https://www.financesbazar.com/digital-lending/?bank_type=66"
          />
        </div>
      </div>
    </section>
  );
}

function CreditCard({ title, imageSrc, features, subtitle, linkHref }) {
  return (
    <Card className="bg-gradient-to-r from-gray-900 to-gray-800  border-none shadow-xl overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 p-6 flex items-center justify-center bg-gradient-to-br from-gray-800 to-black">
          <div className="relative h-40 w-full max-w-[180px]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </div>
        </div>
        <div className="md:w-2/3 p-6">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-xl text-primary-foreground">{title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4">
            <ul className="space-y-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full text-white bg-primary mr-2 text-xs">
                    ✓
                  </span>
                  <span className="text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>
            {subtitle && (
              <p className="text-xs text-gray-400">{subtitle}</p>
            )}
          </CardContent>
          <CardFooter className="p-0 pt-4">
            <Link to={linkHref} className="w-full">
              <Button
                className="cursor-pointer w-full"
              >
                Know More
                <FiChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
