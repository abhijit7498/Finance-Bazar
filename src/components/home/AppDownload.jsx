import { FiSmartphone, FiCheckCircle, FiBarChart2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function AppDownload() {
  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">
              Download the financesbazar Mobile App
            </h2>

            <ul className="space-y-4">
              <li className="flex items-start">
                <FiCheckCircle className="h-5 w-5 mt-0.5 mr-2 text-primary" />
                <span>Track your credit score all the time and stay financially healthy</span>
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="h-5 w-5 mt-0.5 mr-2 text-primary" />
                <span>Get exclusive Loans and Credit Card offers</span>
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="h-5 w-5 mt-0.5 mr-2 text-primary" />
                <span>Enjoy a seamless experience</span>
              </li>
            </ul>

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-3">
                Scan or click to Download App on your mobile
              </h3>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="border border-gray-300 p-2 rounded-md bg-white w-36 h-36 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
                    QR Code
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-lg font-medium mb-4">OR</p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      to="https://play.google.com/store/apps/details?id=com.financesbazar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <div className="h-10 w-32 text-white bg-black/90 flex items-center justify-center rounded text-xs">
                        Google Play Store
                      </div>
                    </Link>
                    <Link
                      to="https://itunes.apple.com/in/app/id1029403201"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <div className="h-10 w-32 text-white bg-black/90 flex items-center justify-center rounded text-xs">
                        Apple App Store
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -top-3 -right-3 bg-white rounded-full shadow-md p-2 z-10">
                <div className="flex items-center gap-1">
                  <FiBarChart2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">4.4</span>
                </div>
              </div>

              <div className="bg-white p-4 shadow-xl rounded-3xl relative max-w-[280px]">
                <div className="border-2 border-gray-200 rounded-2xl overflow-hidden">
                  <div className="bg-gray-100 py-4 px-6 flex justify-center">
                    <FiSmartphone className="h-10 w-10" />
                  </div>

                  <div className="p-4 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold">App Highlights</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center">
                          <FiBarChart2 className="h-4 w-4" />
                        </div>
                        <div className="text-sm">Credit Score</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center">
                          <FiSmartphone className="h-4 w-4" />
                        </div>
                        <div className="text-sm">Personalized Offers</div>
                      </div>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-3 text-center text-sm">
                      <div className="font-medium">App Exclusive Benefits</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
