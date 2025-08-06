import { PhoneCall, FileText, HandCoins } from 'lucide-react';

export function Services() {
  const services = [
    {
      title: "Tell us about your debts",
      description: "Call for a 100% confidential, no-obligation debt consultation. Our debt specialists will talk to you and understand your goals and hardships. They will determine your eligibility and select a personalized debt relief program that will match your financial needs. There are no upfront fees.",
      icon: PhoneCall
    },
    {
      title: "Get Your Personal Customized Program",
      description: "As soon as you select a debt relief program our debt reduction professionals will work with you to combine all your unsecured debt and design a one-time low monthly payment program customized to meet your individual needs.",
      icon: FileText
    },
    {
      title: "Freedom From Debt",
      description: "You are now on the path to complete debt freedom. Our debt relief professionals will negotiate with your creditors to settle for lower debt repayment and settle your debts one by one until all your enrolled debts are resolved. You can now move forward and enjoy a stress-free life.",
      icon: HandCoins
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Getting Started is Simple
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#b08c4f] p-3 rounded-full">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}