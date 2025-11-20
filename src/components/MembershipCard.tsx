"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  text: string;
  premium?: boolean;
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

const MembershipCard = ({
  title,
  price,
  originalPrice,
  features,
  gradient,
  popular = false,
  isInfinite = false,
  badgeImage,
}: MembershipCardProps) => {
  const cardStyles = {
    blue: {
      background: "var(--blue-card-gradient), var(--blue-layer-gradient)",
      border: "1.5px solid #146ef5",
      boxShadow: "0 2px 24px 0 #146ef555",
    },
    red: {
      backgroundImage: "var(--ultra-card-gradient), var(--ultra-layer-gradient)",
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
      boxShadow: "0 0 16px 4px var(--infinite-card-70)",
      color: "white",
    },
  };

  const starColors = {
    blue: "#3fa7ff",
    red: "#ED1C24",
    gold: "#e5c990",
    silver: "#9ca3af",
  };

  return (
    <div
      className="relative rounded-[22px] p-0 transition-all duration-300 hover:scale-[1.02] overflow-hidden group/card max-w-[360px] h-full flex flex-col mx-auto"
      style={cardStyles[gradient]}
    >
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

      <div className="p-6 md:p-8 relative z-10 flex flex-col flex-1">
        {/* Header with Badge */}
        <div className="mb-4">
          {badgeImage ? (
            <>
              <Image
                src={badgeImage}
                alt={title}
                width={140}
                height={gradient === "silver" ? 50 : gradient === "gold" ? 40 : 30}
                className={cn(
                  "object-contain object-left mb-1",
                  gradient === "blue" && "w-[320px] h-[36px]",
                  gradient === "red" && "w-[320px] h-[36px]",
                  gradient === "gold" && "w-[320px] h-[36px]",
                  gradient === "silver" && "w-[320px] h-[36px]"
                )}
                style={{ display: 'block' }}
              />
              <h4
                className="text-4xl font-bold"
                style={{ color: textColors[gradient].title }}
              >
                Membership
              </h4>
            </>
          ) : (
            <h4
              className="text-4xl font-bold"
              style={{ color: textColors[gradient].title }}
            >
              {title}
            </h4>
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
            <span className="text-sm font-normal mr-1" style={{ color: textColors[gradient].price }}>
              Rp
            </span>
            <span
              className="text-6xl font-normal leading-none"
              style={{ color: textColors[gradient].price }}
            >
              {price}
            </span>
            <span className="text-sm font-normal ml-1" style={{ color: textColors[gradient].price }}>
              /K/month
            </span>
          </div>
        </div>

        <hr className="my-4 border-gray-600 opacity-30" />

        {/* Features */}
        <div className="flex-1 flex flex-col">
          <span className="font-bold mb-2 block">Benefit:</span>
          <ul className="space-y-2 flex-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                {feature.premium ? (
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
