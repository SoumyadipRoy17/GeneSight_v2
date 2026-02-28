"use client";

import { useState } from "react";
import SequenceGeneration from "../../components/sequence-generation";

export default function GeneratePage() {
  return (
    <div className="min-h-screen bg-[#f8faf9] p-10">
      <h1 className="mb-6 text-2xl font-semibold text-[#3c4f3d]">
        Evo2 Sequence Generation
      </h1>

      <SequenceGeneration />
    </div>
  );
}
