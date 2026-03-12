"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { generateAndAlign, type GenerationResponse } from "~/utils/genome-api";

export default function SequenceGeneration() {
  const [inputSequence, setInputSequence] = useState("");
  const [targetSequence, setTargetSequence] = useState("");
  const [result, setResult] = useState<GenerationResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const data = await generateAndAlign({
        inputSequence,
        targetSequence,
        nTokens: 200,
        temperature: 1.0,
      });
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f4f9f6] via-[#e8f3ec] to-[#f4f9f6] p-8">
      {/* Floating background accents */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-green-200/30 blur-3xl"></div>
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-5xl space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-[#2f4f3e]">
            Evo2 Sequence Generation
          </h1>
          <p className="mt-2 text-sm text-[#3c4f3d]/70">
            Generate biologically plausible DNA sequences using deep learning
          </p>
        </div>

        {/* Input Card */}
        <div className="rounded-2xl border border-green-200 bg-white/80 p-6 shadow-lg backdrop-blur-sm">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-medium text-[#3c4f3d]">
                Prompt Sequence
              </label>
              <textarea
                value={inputSequence}
                onChange={(e) => setInputSequence(e.target.value)}
                placeholder="Enter prompt sequence"
                className="h-40 w-full rounded-xl border border-green-200 bg-[#f9fdfb] p-3 text-xs shadow-inner focus:border-green-400 focus:ring-2 focus:ring-green-200 focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-[#3c4f3d]">
                Target Sequence (for Alignment)
              </label>
              <textarea
                value={targetSequence}
                onChange={(e) => setTargetSequence(e.target.value)}
                placeholder="Enter target sequence for alignment"
                className="h-40 w-full rounded-xl border border-green-200 bg-[#f9fdfb] p-3 text-xs shadow-inner focus:border-green-400 focus:ring-2 focus:ring-green-200 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              onClick={handleGenerate}
              disabled={isLoading}
              className="rounded-xl bg-[#2f6f4f] px-8 py-2 text-sm text-white shadow-md transition hover:bg-[#255a40] hover:shadow-lg"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                  Generating...
                </span>
              ) : (
                "Generate Sequence"
              )}
            </Button>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div className="space-y-6 rounded-2xl border border-green-200 bg-white/90 p-6 shadow-xl backdrop-blur-sm">
            {/* Generated Sequence */}
            <div>
              <h3 className="mb-2 text-sm font-medium text-[#2f4f3e]">
                Generated Sequence
              </h3>
              <div className="max-h-48 overflow-y-auto rounded-xl border border-green-100 bg-[#f7fcf9] p-4 font-mono text-xs text-[#2f4f3e] shadow-inner">
                {result.generated_sequence}
              </div>
            </div>

            {/* Metrics Dashboard */}
            <div className="grid gap-6 md:grid-cols-4">
              <MetricCard
                label="Likelihood Score"
                value={
                  result.likelihood_score !== undefined
                    ? result.likelihood_score.toFixed(6)
                    : "N/A"
                }
              />

              <MetricCard
                label="Similarity"
                value={
                  result.similarity !== undefined
                    ? result.similarity.toFixed(2) + "%"
                    : "N/A"
                }
              />

              <MetricCard
                label="Alignment Score"
                value={
                  result.alignment_score !== undefined
                    ? result.alignment_score.toFixed(2)
                    : "N/A"
                }
              />

              <MetricCard label="Gaps" value={result.gaps ?? "N/A"} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-xl border border-green-100 bg-[#f8fdfb] p-4 text-center shadow-sm transition hover:shadow-md">
      <p className="text-xs font-medium text-[#3c4f3d]/70">{label}</p>
      <p className="mt-2 text-lg font-semibold text-[#2f6f4f]">{value}</p>
    </div>
  );
}
