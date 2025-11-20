"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const YogaIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M13 2C11.9 2 11 2.9 11 4C11 5.11 11.9 6 13 6C14.11 6 15 5.11 15 4C15 2.9 14.11 2 13 2M4 7V9H10V15L4.93 20.07L6.34 21.5L13.06 14.77L17 17.13V21H19V16.57C19 16.21 18.82 15.89 18.5 15.71L15 13.6V9H21V7H4Z" />
  </svg>
);

export interface Feature {
  text: string;
  premium?: boolean;
  icon?: 'yoga';
}

interface MembershipCardProps {
  title: string;
  price: string;
  originalPrice: string;
  features: Feature[];
  gradient: "blue" | "red" | "gold" | "silver";
  popular?: boolean;
  isInfinite?: boolean;
  badgeImage?: string;
}

const MembershipCard: React.FC<MembershipCardProps> = ({
  title,
  price,
  originalPrice,
  features,
  gradient,
  popular = false,
  isInfinite = false,
  badgeImage,
}) => {
  const cardStyles = {
    blue: {
      background: "var(--blue-card-gradient), var(--blue-layer-gradient)",
      border: "1.5px solid #146ef5",
      boxShadow: "0 2px 24px 0 #146ef555",
    },
    red: {
      background: "var(--ultra-card-gradient), var(--ultra-layer-gradient)",
      border: "1.5px solid var(--ultra-layer-30)",
      boxShadow: "0 2px 24px 0 var(--ultra-stroke-gradient)",
    },
    gold: {
      background: "var(--pilates-card-gradient)",
      border: "1.5px solid #e5c990",
      boxShadow: "0 8px 40px 0 #00000060, 0 1.5px 8px 0 #bfa16a80",
    },
    silver: {
      background: "var(--infinite-card-gradient)",
      border: "1.5px solid var(--infinite-card-20)",
      boxShadow: "0 8px 40px 0 #00000060, 0 1.5px 8px 0 #bfa16a80",
    },
  };

  const textColors = {
    blue: {
      title: "var(--blue-text)",
      price: "var(--blue-text)",
      feature: "var(--blue-text)",
      featureAlt: "var(--blue-text-alt)",
    },
    red: {
      title: "var(--ultra-text)",
      price: "var(--ultra-text)",
      feature: "var(--ultra-text)",
      featureAlt: "var(--ultra-text-alt)",
    },
    gold: {
      title: "#fff",
      price: "#fff",
      feature: "var(--pilates-text)",
      featureAlt: "var(--pilates-text-alt)",
    },
    silver: {
      title: "var(--infinite-text)",
      price: "var(--infinite-text)",
      feature: "var(--infinite-text)",
      featureAlt: "var(--infinite-text-alt)",
    },
  };

  const starColors: Record<string, string> = {
    blue: "#146ef5",
    red: "#ed1c24",
    gold: "#FFD700",
    silver: "#A8A8A8",
  };

  const buttonStyles = {
    blue: {
      background: "#146ef5",
      boxShadow: "0 0 16px 4px #146ef5aa",
      color: "white",
    },
    red: {
      background: "var(--ultra-button)",
      boxShadow: "0 0 16px 4px #ed1c24aa",
      color: "white",
    },
    gold: {
      background: "var(--pilates-button-gradient)",
      boxShadow: "0 0 16px 4px #bfa16a80",
      color: "white",
    },
    silver: {
      background: "var(--infinite-button-gradient)",
      boxShadow: "0 0 16px 4px #655f5480",
      color: "white",
    },
  };

  return (
    <div className="relative h-full">
      <div
        className="relative h-full rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
        style={{
          border: cardStyles[gradient].border,
          boxShadow: cardStyles[gradient].boxShadow,
          background: cardStyles[gradient].background,
        }}
      >
        <div className="relative h-full p-6 flex flex-col">
          {/* Shiny hover effect */}
          <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-in-out" />
          </div>

          {popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-1 rounded-full z-10">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-white" />
                <span className="text-xs font-bold text-white">POPULAR</span>
              </div>
            </div>
          )}

          {/* Badge Image */}
          <div className="mb-2 relative h-9 w-[320px]">
            {badgeImage && (
              <Image
                src={badgeImage}
                alt={`${title} Badge`}
                fill
                className="object-contain object-left"
                priority
              />
            )}
          </div>

          {/* Pricing */}
          <div className="mb-6">
            <span className="text-sm opacity-70">Start from</span>
            {originalPrice && (
              <>
                <br />
                <span className="line-through text-gray-400 text-xs">
                  {originalPrice}
                </span>
              </>
            )}
            <div className="flex items-baseline mt-1">
              <span className="text-sm font-normal mr-1 font-[family-name:var(--font-poppins)]" style={{ color: textColors[gradient].price, fontFamily: 'var(--font-poppins)' }}>
                Rp
              </span>
              <span
                className="text-6xl font-normal leading-none font-[family-name:var(--font-poppins)]"
                style={{ color: textColors[gradient].price, fontFamily: 'var(--font-poppins)' }}
              >
                {price}
              </span>
              <span className="text-sm font-normal ml-1 font-[family-name:var(--font-poppins)]" style={{ color: textColors[gradient].price, fontFamily: 'var(--font-poppins)' }}>
                /K/month
              </span>
            </div>
          </div>

          {/* Features */}
          <span className="font-bold mb-2 block">Benefit:</span>
          <ul className="space-y-2 flex-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                {feature.icon === 'yoga' ? (
                  <YogaIcon
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: starColors[gradient] }}
                  />
                ) : feature.premium ? (
                  <Check className="w-5 h-5 text-white shrink-0 mt-0.5" />
                ) : (
                  <Star
                    className="w-[18px] h-[18px] shrink-0 mt-0.5"
                    style={{ color: starColors[gradient] }}
                  />
                )}
                <span
                  className="ml-2 text-base leading-relaxed"
                  style={{
                    color: feature.premium
                      ? textColors[gradient].feature
                      : textColors[gradient].featureAlt,
                    fontWeight: feature.premium ? 500 : 400,
                  }}
                >
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="mt-8 text-center">
            {isInfinite ? (
              <div className="space-y-2">
                <Button
                  asChild
                  className="w-full font-semibold py-2 rounded-lg text-lg transition-all duration-300 hover:translate-y-[-2px] border-none"
                  style={buttonStyles[gradient]}
                >
                  <a href="https://wa.me/62818687858">Ask Infinite Membership</a>
                </Button>
                <p
                  className="text-xs text-center mt-4"
                  style={{ color: textColors[gradient].featureAlt }}
                >
                  or visit your nearest FTL Club and ask our Membership consultant for more
                  information
                </p>
              </div>
            ) : (
              <Button
                className="w-full font-semibold py-2 rounded-lg text-xl transition-all duration-300 hover:translate-y-[-2px] border-none"
                style={buttonStyles[gradient]}
              >
                Choose
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;
