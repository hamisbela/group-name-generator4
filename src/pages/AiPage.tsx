import React from 'react';
import { GeneratorForm } from '../components/GeneratorForm';
import { NameResults } from '../components/NameResults';
import { useGenerator } from '../hooks/useGenerator';
import { Brain, Cpu, Sparkles } from 'lucide-react';

export function AiPage() {
  const {
    description,
    style,
    names,
    loading,
    error,
    setDescription,
    setStyle,
    handleGenerate
  } = useGenerator('technical');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4 flex items-center justify-center">
          <Brain className="w-8 h-8 mr-2" />
          AI Group Name Generator
          <Cpu className="w-8 h-8 ml-2" />
        </h1>
        <p className="text-lg text-gray-600">
          Generate innovative names for AI and tech-focused groups
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 mb-12">
        <GeneratorForm
          description={description}
          style={style}
          loading={loading}
          error={error}
          onDescriptionChange={setDescription}
          onStyleChange={setStyle}
          onGenerate={handleGenerate}
        />
        <NameResults 
          names={names}
          onRegenerate={handleGenerate}
        />
      </div>

      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <Sparkles className="w-6 h-6 mr-2" />
          Creating AI-Inspired Group Names
        </h2>
        <p className="text-gray-600 mb-6">
          AI and technology group names should reflect innovation while remaining
          accessible and memorable.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Elements of Great AI Group Names
        </h3>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Technical yet approachable terms</li>
          <li>Future-focused concepts</li>
          <li>Innovation-related metaphors</li>
          <li>Scientific and mathematical references</li>
          <li>Emerging technology keywords</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Naming Patterns in Tech
        </h3>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Compound technical terms</li>
          <li>Abstract concepts</li>
          <li>Data and algorithm references</li>
          <li>Scientific phenomena</li>
          <li>Futuristic terminology</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Best Practices for AI Group Names
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Balance technical with accessible</li>
          <li>Consider international appeal</li>
          <li>Avoid overly complex terms</li>
          <li>Think about future relevance</li>
          <li>Test for pronunciation ease</li>
        </ul>
      </div>
    </div>
  );
}