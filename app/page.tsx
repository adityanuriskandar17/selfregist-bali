import Image from "next/image";
import CountdownTimer from "@/components/CountdownTimer";
import StepIndicator from "@/components/StepIndicator";
import MembershipCard from "@/components/MembershipCard";
import ComparisonTable from "@/components/ComparisonTable";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/Background-4FIvVL1c.webp"
          alt="Background"
          fill
          className="object-cover brightness-110"
          priority
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
          <div className="container mx-auto px-4 py-4 flex items-center">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="FTL Logo"
                width={150}
                height={150}
                className="rounded-lg"
                priority
              />
              <h1 className="text-xl font-semibold">Self-Registration</h1>
            </div>
          </div>
        </header>

        {/* Progress Bar */}
        <div className="container mx-auto px-4 py-4">
          <StepIndicator currentStep={1} />
        </div>

        {/* Hero Section */}
        <main className="container mx-auto px-4 pt-4 pb-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">
              Pilih paket yang paling sesuai dengan kebutuhanmu
            </h2>
            <div className="mb-8">
              <p className="text-2xl md:text-3xl font-bold text-white">PENAWARAN TERBATAS HANYA UNTUKMU</p>
            </div>

            {/* Countdown Timer */}
            <div className="mb-12">
              <CountdownTimer />
            </div>
          </div>

          {/* Membership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1800px] mx-auto">
            <MembershipCard
              title="BLUE Membership"
              price="499"
              originalPrice="Rp 500.000/month"
              gradient="blue"
              badgeImage="/badge/blue.png"
              features={[
                { text: "Access to All FTL Blue Clubs Nationwide", premium: true },
                { text: "Access to All Group Exercise Classes", premium: true },
                { text: "Towel" },
                { text: "RFID Locker System" },
                { text: "Open 24 Hours" },
                { text: "Access to steam room, sauna, jacuzzi, onsen, basketball court, pool, and more." },
                { text: "FTL Money Back Guarantee Program." },
              ]}
            />

            <MembershipCard
              title="ULTRA Membership"
              price="584"
              originalPrice="Rp 1.000.000/month"
              gradient="red"
              badgeImage="/badge/ultra.png"
              features={[
                { text: "All benefits of a Blue Gym Membership", premium: true },
                { text: "Access to FTL Ultra Clubs – all located in prime, easily accessible locations.", premium: true },
                { text: "Access to all STRIDE Gym clubs", premium: true },
                { text: "Access our one-of-a-kind FTL Beach Club (available at FTL Mampang)" },
                { text: "Premium Changing Room - Dyson Amenities" },
                { text: "Premium group exercise classes" },
                { text: "FTL Money Back Guarantee Program." },
              ]}
            />

            <MembershipCard
              title="PILATES+ Membership"
              price="799"
              originalPrice="Rp 2.000.000/month"
              gradient="gold"
              badgeImage="/badge/pilates+.png"
              features={[
                { text: "All Benefits of FTL Ultra Gym Membership. Worth up to IDR 550.000", premium: true },
                { text: "Daily Access to All Group Pilates Classes", premium: true },
                { text: "Reformer Pilates (Basic & Flow)" },
                { text: "Tower Pilates (Basic & Flow)" },
                { text: "Chair Pilates" },
                { text: "FTL Money Back Guarantee Program." },
              ]}
            />

            <MembershipCard
              title="INFINITE Membership"
              price="7.334"
              originalPrice=""
              gradient="silver"
              isInfinite
              badgeImage="/badge/Infinite.png"
              features={[
                { text: "Access to all FTL Gym & STRIDE Gym clubs", premium: true },
                { text: "Unlimited access to Group Pilates Classes", premium: true },
                { text: "Unlimited Personal Training sessions at all FTL Gym locations", premium: true },
                { text: "Up to IDR 8 million cashback for Private Pilates sessions", premium: true },
                { text: "Personal assistance for booking classes, Personal Training, and Pilates sessions", premium: true },
                { text: "Dedicated parking slot", premium: true },
              ]}
            />
          </div>
        </main>

        {/* Comparison Table */}
        <ComparisonTable />

        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
