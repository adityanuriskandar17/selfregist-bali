"use client";

import { Check, Info, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface Benefit {
    icon: string;
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
        icon: "⭐",
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
        icon: "👥",
        title: "Unlimited group exercise classes",
        blue: true,
        ultra: true,
        pilates: false,
    },
    {
        icon: "🧖",
        title: "FREE towel rental & access 24/7",
        blue: true,
        ultra: true,
        pilates: false,
    },
    {
        icon: "🏊",
        title: "Access to steam room, sauna, jacuzzi, onsen, basketball court, pool, and more",
        blue: true,
        ultra: true,
        pilates: false,
        hasInfo: true,
    },
    {
        icon: "🏖️",
        title: "Access our one-of-a-kind FTL Beach Club (available at FTL Mampang)",
        blue: false,
        ultra: true,
        pilates: false,
    },
    {
        icon: "💎",
        title: "Premium changing room with Dyson amenities",
        blue: false,
        ultra: true,
        pilates: false,
    },
    {
        icon: "👨‍🏫",
        title: "Premium group exercise classes - led by highly experienced & certified instructors",
        blue: false,
        ultra: true,
        pilates: false,
        hasInfo: true,
    },
    {
        icon: "💰",
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
                    <div className="bg-zinc-900/50 rounded-3xl overflow-hidden border border-zinc-800">
                        <table className="w-full border-collapse">
                            {/* Header */}
                            <thead>
                                <tr>
                                    <th className="bg-zinc-900 text-white text-left p-6 font-semibold text-lg">
                                        Benefits
                                    </th>
                                    <th className="bg-gradient-to-br from-blue-900 to-blue-950 text-white p-6 font-bold">
                                        <div className="flex items-center justify-center">
                                            <img src="/badge/blue.png" alt="BLUE" className="h-5 object-contain" />
                                        </div>
                                    </th>
                                    <th className="bg-gradient-to-br from-red-900 to-red-950 text-white p-6 font-bold">
                                        <div className="flex items-center justify-center">
                                            <img src="/badge/ultra.png" alt="ULTRA" className="h-5 object-contain" />
                                        </div>
                                    </th>
                                    <th className="bg-gradient-to-br from-yellow-900 to-yellow-950 text-white p-6 font-bold">
                                        <div className="flex items-center justify-center">
                                            <img src="/badge/pilates+.png" alt="PILATES+" className="h-5 object-contain" />
                                        </div>
                                    </th>
                                </tr>
                            </thead>

                            {/* Body */}
                            <tbody>
                                {benefits.map((benefit, index) => (
                                    <tr key={index} className="border-t border-zinc-800">
                                        <td className="bg-zinc-900/30 text-white p-5">
                                            <div className="flex items-start gap-3">
                                                <span className="text-lg mt-0.5">{benefit.icon}</span>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-sm font-normal">{benefit.title}</span>
                                                        {benefit.hasInfo && (
                                                            <button
                                                                onClick={() => handleInfoClick(benefit.title)}
                                                                className="flex-shrink-0 hover:scale-110 transition-transform"
                                                            >
                                                                <Info className="w-4 h-4 text-blue-500" />
                                                            </button>
                                                        )}
                                                    </div>
                                                    {benefit.subItems && (
                                                        <ul className="mt-2 ml-0 text-xs text-gray-400 space-y-1">
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
                                        <td className="bg-blue-950/30 p-5">
                                            <div className="flex justify-center">
                                                {benefit.blue ? (
                                                    <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center border-2 border-blue-400">
                                                        <Check className="w-5 h-5 text-white stroke-[3]" />
                                                    </div>
                                                ) : (
                                                    <div className="w-9 h-9 rounded-full border-2 border-blue-900/50 bg-blue-950/20"></div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="bg-red-950/30 p-5">
                                            <div className="flex justify-center">
                                                {benefit.ultra ? (
                                                    <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center border-2 border-red-400">
                                                        <Check className="w-5 h-5 text-white stroke-[3]" />
                                                    </div>
                                                ) : (
                                                    <div className="w-9 h-9 rounded-full border-2 border-red-900/50 bg-red-950/20"></div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="bg-yellow-950/30 p-5">
                                            <div className="flex justify-center">
                                                {benefit.pilates ? (
                                                    <div className="w-9 h-9 rounded-full bg-yellow-700 flex items-center justify-center border-2 border-yellow-500">
                                                        <Check className="w-5 h-5 text-white stroke-[3]" />
                                                    </div>
                                                ) : (
                                                    <div className="w-9 h-9 rounded-full border-2 border-yellow-900/50 bg-yellow-950/20"></div>
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
            {showModal && (
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
            )}
        </>
    );
};

export default ComparisonTable;
