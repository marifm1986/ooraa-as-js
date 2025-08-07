import { Percent, DollarSign, Clock, Users } from 'lucide-react';
import { AnimatedElement } from './AnimatedElements';

export function FeatureCards() {
  const features = [
    {
      icon: Percent,
      title: "Save up to 60%",
      description: "Live Free from Debt Drama",
      borderColor: "border-[#1a2f5a]",
      iconBg: "bg-[#1a2f5a]/10",
      iconColor: "text-[#1a2f5a]",
      hoverBg: "hover:bg-[#1a2f5a]",
      hoverIconBg: "hover:bg-white/20",
      hoverIconColor: "group-hover:text-white",
      hoverTextColor: "group-hover:text-white",
      delay: 0.1
    },
    {
      icon: DollarSign,
      title: "No Upfront Fees",
      description: "Pay Only When You See Results",
      borderColor: "border-[#b08c4f]",
      iconBg: "bg-[#b08c4f]/10",
      iconColor: "text-[#b08c4f]",
      hoverBg: "hover:bg-[#b08c4f]",
      hoverIconBg: "hover:bg-white/20",
      hoverIconColor: "group-hover:text-white",
      hoverTextColor: "group-hover:text-white",
      delay: 0.2
    },
    {
      icon: Clock,
      title: "Faster Than Minimum Payments",
      description: "Debt-Free in 6–48 Months",
      borderColor: "border-[#1a2f5a]",
      iconBg: "bg-[#1a2f5a]/10",
      iconColor: "text-[#1a2f5a]",
      hoverBg: "hover:bg-[#1a2f5a]",
      hoverIconBg: "hover:bg-white/20",
      hoverIconColor: "group-hover:text-white",
      hoverTextColor: "group-hover:text-white",
      delay: 0.3
    },
    {
      icon: Users,
      title: "Trusted by Thousands",
      description: "With a Human Touch",
      borderColor: "border-[#b08c4f]",
      iconBg: "bg-[#b08c4f]/10",
      iconColor: "text-[#b08c4f]",
      hoverBg: "hover:bg-[#b08c4f]",
      hoverIconBg: "hover:bg-white/20",
      hoverIconColor: "group-hover:text-white",
      hoverTextColor: "group-hover:text-white",
      delay: 0.4
    }
  ];

  return (
    <div className="bg-white py-0 -mt-16 relative z-10 px-4">
      <div className="container mx-auto -translate-y-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-4 shadow-xl rounded-lg overflow-hidden">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <AnimatedElement type="scale" delay={feature.delay} key={index}>
                <div className={`bg-white p-7 flex flex-col items-center text-center border-b-4 ${feature.borderColor} ${feature.hoverBg} transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl group cursor-pointer`}>
                  <div className={`${feature.iconBg} ${feature.hoverIconBg} p-3 rounded-full mb-4 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12`}>
                    <IconComponent className={`w-8 h-8 ${feature.iconColor} ${feature.hoverIconColor} transition-all duration-300`} />
                  </div>
                  <h3 className={`font-bold text-lg mb-2 transition-all duration-300 ${feature.hoverTextColor}`}>{feature.title}</h3>
                  <p className={`text-gray-600 transition-all duration-300 group-hover:text-white/90`}>{feature.description}</p>
                </div>
              </AnimatedElement>
            );
          })}
        </div>
      </div>
    </div>
  );
}