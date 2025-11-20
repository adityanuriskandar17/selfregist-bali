"use client";

import { Check, Info, X } from "lucide-react";
import { useState, ReactNode } from "react";
import Image from "next/image";

const YogaIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M13 2C11.9 2 11 2.9 11 4C11 5.11 11.9 6 13 6C14.11 6 15 5.11 15 4C15 2.9 14.11 2 13 2M4 7V9H10V15L4.93 20.07L6.34 21.5L13.06 14.77L17 17.13V21H19V16.57C19 16.21 18.82 15.89 18.5 15.71L15 13.6V9H21V7H4Z" />
    </svg>
);

const GroupIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
    </svg>
);

const HangerIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 4A3.5 3.5 0 0 0 8.5 7.5H10.5A1.5 1.5 0 0 1 12 6A1.5 1.5 0 0 1 13.5 7.5A1.5 1.5 0 0 1 12 9C11.45 9 11 9.45 11 10V11.75L2.4 18.2A1 1 0 0 0 3 20H21A1 1 0 0 0 21.6 18.2L13 11.75V10.85A3.5 3.5 0 0 0 15.5 7.5A3.5 3.5 0 0 0 12 4M12 13.5L18 18H6Z" />
    </svg>
);

const ShowerIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M21,14V15C21,16.91 19.93,18.57 18.35,19.41L19,22H17L16.5,20C16.33,20 16.17,20 16,20H8C7.83,20 7.67,20 7.5,20L7,22H5L5.65,19.41C4.07,18.57 3,16.91 3,15V14H2V12H20V5A1,1 0 0,0 19,4C18.5,4 18.12,4.34 18,4.79C18.63,5.33 19,6.13 19,7H13A3,3 0 0,1 16,4C16.06,4 16.11,4 16.17,4C16.58,2.84 17.69,2 19,2A3,3 0 0,1 22,5V14H21V14M19,14H5V15A3,3 0 0,0 8,18H16A3,3 0 0,0 19,15V14Z" />
    </svg>
);

const BeachIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M15,18.54C17.13,18.21 19.5,18 22,18V22H5C5,21.35 8.2,19.86 13,18.9V12.4C12.16,12.65 11.45,13.21 11,13.95C10.39,12.93 9.27,12.25 8,12.25C6.73,12.25 5.61,12.93 5,13.95C5.03,10.37 8.5,7.43 13,7.04V7A1,1 0 0,1 14,6A1,1 0 0,1 15,7V7.04C19.5,7.43 22.96,10.37 23,13.95C22.39,12.93 21.27,12.25 20,12.25C18.73,12.25 17.61,12.93 17,13.95C16.55,13.21 15.84,12.65 15,12.39V18.54M7,2A5,5 0 0,1 2,7V2H7Z" />
    </svg>
);

const CreationIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74" />
    </svg>
);

const AccountStarIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12M5,13.28L7.45,14.77L6.8,11.96L9,10.08L6.11,9.83L5,7.19L3.87,9.83L1,10.08L3.18,11.96L2.5,14.77L5,13.28Z" />
    </svg>
);

const MedalIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M20,2H4V4L9.81,8.36C6.14,9.57 4.14,13.53 5.35,17.2C6.56,20.87 10.5,22.87 14.19,21.66C17.86,20.45 19.86,16.5 18.65,12.82C17.95,10.71 16.3,9.05 14.19,8.36L20,4V2M14.94,19.5L12,17.78L9.06,19.5L9.84,16.17L7.25,13.93L10.66,13.64L12,10.5L13.34,13.64L16.75,13.93L14.16,16.17L14.94,19.5Z" />
    </svg>
);

interface Benefit {
    icon: ReactNode;
    title: string;
    description?: string;
    subItems?: string[];
    blue: boolean;
    ultra: boolean;
    pilates: boolean;
    hasInfo?: boolean;
}

const benefits: Benefit[] = [
    {
        icon: "🏢",
        title: "Access to FTL Blue clubs nationwide",
        blue: true,
        ultra: false,
        pilates: false,
        hasInfo: true,
    },
    {
        icon: "🏢",
        title: "Access to FTL Ultra clubs nationwide",
        blue: false,
        ultra: true,
        pilates: false,
        hasInfo: true,
    },
    {
        icon: "🏢",
        title: "Access to Stride Gym clubs nationwide",
        blue: false,
        ultra: true,
        pilates: false,
        hasInfo: true,
    },
    {
        icon: <YogaIcon className="w-5 h-5 text-white" />,
        title: "Unlimited to all Group Pilates classes",
        subItems: [
            "Reformer Pilates (Basic & Flow)",
            "Tower Pilates (Basic & Flow)",
            "Chair Pilates",
        ],
        blue: false,
        ultra: false,
        pilates: true,
    },
    {
        icon: <GroupIcon className="w-5 h-5 text-white" />,
        title: "Unlimited group exercise classes",
        blue: true,
        ultra: true,
        pilates: false,
    },
    {
        icon: <HangerIcon className="w-5 h-5 text-white" />,
        title: "FREE towel rental & access 24/7",
        blue: true,
        ultra: true,
        pilates: false,
    },
    {
        icon: <ShowerIcon className="w-5 h-5 text-white" />,
        title: "Access to steam room, sauna, jacuzzi, onsen, basketball court, pool, and more",
        blue: true,
        ultra: true,
        pilates: false,
        hasInfo: true,
    },
    {
        icon: <BeachIcon className="w-5 h-5 text-white" />,
        title: "Access our one-of-a-kind FTL Beach Club (available at FTL Mampang)",
        blue: false,
        ultra: true,
        pilates: false,
    },
    {
        icon: <CreationIcon className="w-5 h-5 text-white" />,
        title: "Premium changing room with Dyson amenities",
        blue: false,
        ultra: true,
        pilates: false,
    },
    {
        icon: <AccountStarIcon className="w-5 h-5 text-white" />,
        title: "Premium group exercise classes - led by highly experienced & certified instructors",
        blue: false,
        ultra: true,
        pilates: false,
        hasInfo: true,
    },
    {
        icon: <MedalIcon className="w-5 h-5 text-white" />,
        title: "FTL Money Back Guarantee Program",
        blue: true,
        ultra: true,
        pilates: true,
    },
];

const ComparisonTable = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedBenefit, setSelectedBenefit] = useState<string>("");

    const handleInfoClick = (benefitTitle: string) => {
        setSelectedBenefit(benefitTitle);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedBenefit("");
    };

    return (
        <>
            <div className="w-full py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                        COMPARISON BENEFITS
                    </h2>
                    <div className="bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800">
                        <table className="w-full border-collapse text-sm md:text-base">
                            {/* Header */}
                            <thead>
                                <tr>
                                    <th className="bg-zinc-900 text-white text-left p-3 md:p-5 font-semibold text-sm md:text-lg">
                                        Benefits
                                    </th>
                                    <th className="bg-gradient-to-br from-blue-900 to-blue-950 text-white p-2 md:p-4 font-bold">
                                        <div className="flex items-center justify-center">
                                            <img src="/badge/blue.png" alt="BLUE" className="h-4 md:h-6 object-contain" />
                                        </div>
                                    </th>
                                    <th className="bg-gradient-to-br from-red-900 to-red-950 text-white p-2 md:p-4 font-bold">
                                        <div className="flex items-center justify-center">
                                            <img src="/badge/ultra.png" alt="ULTRA" className="h-4 md:h-6 object-contain" />
                                        </div>
                                    </th>
                                    <th className="bg-gradient-to-br from-yellow-900 to-yellow-950 text-white p-2 md:p-4 font-bold">
                                        <div className="flex items-center justify-center">
                                            <img src="/badge/pilates+.png" alt="PILATES+" className="h-4 md:h-6 object-contain" />
                                        </div>
                                    </th>
                                </tr>
                            </thead>

                            {/* Body */}
                            <tbody>
                                {benefits.map((benefit, index) => (
                                    <tr key={index} className="border-t border-zinc-800">
                                        <td className="bg-zinc-900/30 text-white p-2 md:p-4">
                                            <div className="flex items-center gap-2 md:gap-3">
                                                <span className="text-base md:text-lg flex-shrink-0">{benefit.icon}</span>
                                                <div className="flex-1">
                                                    <div className="flex items-start gap-1 md:gap-2">
                                                        <span className="text-xs md:text-sm font-normal">{benefit.title}</span>
                                                        {benefit.hasInfo && (
                                                            <button
                                                                onClick={() => handleInfoClick(benefit.title)}
                                                                className="flex-shrink-0 hover:scale-110 transition-transform mt-0.5"
                                                            >
                                                                <Info className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                                                            </button>
                                                        )}
                                                    </div>
                                                    {benefit.subItems && (
                                                        <ul className="mt-1 md:mt-2 ml-0 text-[10px] md:text-xs text-gray-400 space-y-0.5 md:space-y-1">
                                                            {benefit.subItems.map((item, i) => (
                                                                <li key={i} className="flex items-start gap-1">
                                                                    <span className="text-yellow-500">★</span>
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="bg-blue-950/30 p-2 md:p-4">
                                            <div className="flex justify-center">
                                                {benefit.blue ? (
                                                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-600 flex items-center justify-center border md:border-2 border-blue-400">
                                                        <Check className="w-4 h-4 md:w-5 md:h-5 text-white stroke-[2.5] md:stroke-[3]" />
                                                    </div>
                                                ) : (
                                                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border md:border-2 border-blue-900/50 bg-blue-950/20"></div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="bg-red-950/30 p-2 md:p-4">
                                            <div className="flex justify-center">
                                                {benefit.ultra ? (
                                                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-red-600 flex items-center justify-center border md:border-2 border-red-400">
                                                        <Check className="w-4 h-4 md:w-5 md:h-5 text-white stroke-[2.5] md:stroke-[3]" />
                                                    </div>
                                                ) : (
                                                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border md:border-2 border-red-900/50 bg-red-950/20"></div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="bg-yellow-950/30 p-2 md:p-4">
                                            <div className="flex justify-center">
                                                {benefit.pilates ? (
                                                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-yellow-700 flex items-center justify-center border md:border-2 border-yellow-500">
                                                        <Check className="w-4 h-4 md:w-5 md:h-5 text-white stroke-[2.5] md:stroke-[3]" />
                                                    </div>
                                                ) : (
                                                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border md:border-2 border-yellow-900/50 bg-yellow-950/20"></div>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {
                showModal && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={handleCloseModal}
                    >
                        <div
                            className="relative bg-zinc-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto border border-zinc-700"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>

                            {/* Content */}
                            <div className="p-6">
                                {selectedBenefit === "Access to steam room, sauna, jacuzzi, onsen, basketball court, pool, and more" ? (
                                    <>
                                        <h3 className="text-2xl font-bold text-white mb-4">Facility Information</h3>
                                        <p className="text-gray-300 text-base leading-relaxed">
                                            Facility availability may differ by location. For complete details, please refer to the Club Locations section or contact FTL Support team for assistance.
                                        </p>
                                    </>
                                ) : selectedBenefit === "Premium group exercise classes - led by highly experienced & certified instructors" ? (
                                    <>
                                        <h3 className="text-2xl font-bold text-white mb-4">Premium Classes</h3>
                                        <p className="text-gray-300 text-base leading-relaxed">
                                            Led by highly experienced and certified instructors for optimal results.
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <h3 className="text-2xl font-bold text-white mb-4">Club Locations</h3>
                                        <div className="relative w-full">
                                            <Image
                                                src="/list_clubs.webp"
                                                alt="Club Locations"
                                                width={1200}
                                                height={800}
                                                className="w-full h-auto rounded-lg"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default ComparisonTable;
