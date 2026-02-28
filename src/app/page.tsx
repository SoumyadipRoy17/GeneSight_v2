// "use client";

// import { useState } from "react";
// import Link from "next/link";

// export default function HomePage() {
//   const [isFlipped, setIsFlipped] = useState(false);

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-black text-white">
//       {/* Background Gradient Glow */}
//       <div
//         className={`absolute inset-0 transition-all duration-1000 ${
//           isFlipped
//             ? "bg-gradient-to-br from-green-900 via-emerald-800 to-black"
//             : "bg-gradient-to-br from-red-900 via-orange-800 to-black"
//         }`}
//       />

//       {/* Floating Blur Orbs */}
//       <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
//       <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

//       {/* 3D Flip Container */}
//       <div className="relative flex min-h-screen items-center justify-center perspective-[2000px]">
//         <div
//           className={`transform-style-preserve-3d relative h-[600px] w-[1000px] transition-transform duration-1000 ${
//             isFlipped ? "rotate-y-180" : ""
//           }`}
//         >
//           {/* ANALYZE SIDE */}
//           <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 p-16 shadow-2xl backdrop-blur-xl backface-hidden">
//             <div className="flex h-full flex-col justify-between">
//               <div>
//                 <h1 className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-6xl font-bold text-transparent">
//                   Analyze Genetic Variants
//                 </h1>

//                 <p className="mt-6 max-w-xl text-lg text-white/70">
//                   Perform Evo2-powered likelihood scoring, ClinVar comparison,
//                   deletion/SNV analysis and high-resolution genome inspection.
//                 </p>
//               </div>

//               <div className="flex gap-6">
//                 <Link href="/analyze">
//                   <button className="rounded-xl bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 text-lg font-semibold shadow-xl transition hover:scale-105 hover:shadow-orange-500/40">
//                     Go to Analyze →
//                   </button>
//                 </Link>

//                 <button
//                   onClick={() => setIsFlipped(true)}
//                   className="rounded-xl border border-white/30 px-8 py-4 text-lg font-medium transition hover:bg-white/10"
//                 >
//                   Switch to Generation
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* GENERATE SIDE */}
//           <div className="absolute inset-0 rotate-y-180 rounded-3xl border border-white/10 bg-white/5 p-16 shadow-2xl backdrop-blur-xl backface-hidden">
//             <div className="flex h-full flex-col justify-between">
//               <div>
//                 <h1 className="bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-6xl font-bold text-transparent">
//                   Generate DNA Sequences
//                 </h1>

//                 <p className="mt-6 max-w-xl text-lg text-white/70">
//                   Autocomplete genomic regions, compute likelihood scores,
//                   measure similarity, and validate generation via alignment
//                   metrics.
//                 </p>
//               </div>

//               <div className="flex gap-6">
//                 <Link href="/generate">
//                   <button className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-700 px-8 py-4 text-lg font-semibold shadow-xl transition hover:scale-105 hover:shadow-green-500/40">
//                     Go to Generate →
//                   </button>
//                 </Link>

//                 <button
//                   onClick={() => setIsFlipped(false)}
//                   className="rounded-xl border border-white/30 px-8 py-4 text-lg font-medium transition hover:bg-white/10"
//                 >
//                   Back to Analyze
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Tailwind 3D Utilities */}
//       <style jsx global>{`
//         .transform-style-preserve-3d {
//           transform-style: preserve-3d;
//         }
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//         .backface-hidden {
//           backface-visibility: hidden;
//         }
//       `}</style>
//     </div>
//   );
// }
"use client";

import {
  Dna,
  BarChart3,
  ShieldCheck,
  Sparkles,
  Activity,
  AlignHorizontalJustifyCenter,
} from "lucide-react";

import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden overflow-y-auto bg-black text-white">
      {/* Background Gradient */}
      <div
        className={`fixed inset-0 transition-all duration-1000 ${
          isFlipped
            ? "bg-gradient-to-br from-green-950 via-emerald-900 to-black"
            : "bg-gradient-to-br from-red-950 via-orange-900 to-black"
        }`}
      />

      {/* Floating Orbs */}
      <div className="pointer-events-none fixed -top-40 -left-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none fixed -right-40 -bottom-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      {/* Perspective Wrapper */}
      <div className="perspective-2000 relative flex min-h-screen items-center justify-center px-6 py-20">
        <div
          className={`transform-style-preserve-3d relative w-full max-w-6xl transition-transform duration-1000 ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* ANALYZE SIDE */}
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-12 shadow-2xl backdrop-blur-xl backface-hidden md:p-20">
            <div className="flex flex-col gap-10">
              <div>
                <h1 className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-4xl leading-tight font-bold text-transparent md:text-6xl">
                  Variant Intelligence <br /> Powered by Evo2
                </h1>

                <p className="mt-6 max-w-2xl text-lg text-white/70">
                  Perform delta-likelihood scoring on SNVs and deletions,
                  compare predictions with ClinVar annotations, and analyze
                  genome windows using high-resolution Evo2 modeling.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                <FeatureCard
                  title="Likelihood Scoring"
                  desc="Compute Evo2 delta likelihood between reference and mutated genome windows."
                  icon={BarChart3}
                />
                <FeatureCard
                  title="Alignment Metrics"
                  desc="Compare model predictions against clinical significance labels."
                  icon={ShieldCheck}
                />
                <FeatureCard
                  title="Mutation Support"
                  desc="Supports SNVs, insertions and deletions with genome validation."
                  icon={Dna}
                />
              </div>

              <div className="flex flex-wrap gap-6 pt-6">
                <Link href="/analyze">
                  <button className="rounded-xl bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 text-lg font-semibold shadow-xl transition hover:scale-105 hover:shadow-orange-500/40">
                    Go to Analyze →
                  </button>
                </Link>

                <button
                  onClick={() => setIsFlipped(true)}
                  className="rounded-xl border border-white/30 px-8 py-4 text-lg font-medium transition hover:bg-white/10"
                >
                  Switch to Generation
                </button>
              </div>
            </div>
          </div>

          {/* GENERATE SIDE */}
          <div className="absolute inset-0 rotate-y-180 rounded-3xl border border-white/10 bg-white/5 p-12 shadow-2xl backdrop-blur-xl backface-hidden md:p-20">
            <div className="flex flex-col gap-10">
              <div>
                <h1 className="bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-4xl leading-tight font-bold text-transparent md:text-6xl">
                  DNA Generation & Alignment
                </h1>

                <p className="mt-6 max-w-2xl text-lg text-white/70">
                  Autocomplete genomic regions using Evo2, compute sequence
                  likelihood scores, and validate generation accuracy through
                  similarity percentage and alignment metrics.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <FeatureCard
                  title="Sequence Generation"
                  desc="Predict downstream genomic tokens from a given prompt."
                  icon={Sparkles}
                />
                <FeatureCard
                  title="Likelihood Scoring"
                  desc="Evaluate biological plausibility using Evo2 scoring."
                  icon={Activity}
                />
                <FeatureCard
                  title="Alignment Validation"
                  desc="Measure similarity %, alignment score and gap statistics."
                  icon={AlignHorizontalJustifyCenter}
                />
              </div>

              <div className="flex flex-wrap gap-6 pt-6">
                <Link href="/generate">
                  <button className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-700 px-8 py-4 text-lg font-semibold shadow-xl transition hover:scale-105 hover:shadow-green-500/40">
                    Go to Generate →
                  </button>
                </Link>

                <button
                  onClick={() => setIsFlipped(false)}
                  className="rounded-xl border border-white/30 px-8 py-4 text-lg font-medium transition hover:bg-white/10"
                >
                  Back to Analyze
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Utilities */}
      <style jsx global>{`
        .perspective-2000 {
          perspective: 2000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}

function FeatureCard({
  title,
  desc,
  icon: Icon,
}: {
  title: string;
  desc: string;
  icon: any;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:shadow-xl">
      {/* Glow Accent */}
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/5 blur-2xl transition-all duration-500 group-hover:bg-white/10" />

      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{desc}</p>
    </div>
  );
}
