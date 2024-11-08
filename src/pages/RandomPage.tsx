import React from 'react';
import { GeneratorForm } from '../components/GeneratorForm';
import { NameResults } from '../components/NameResults';
import { useGenerator } from '../hooks/useGenerator';
import { Shuffle, Sparkles, Target } from 'lucide-react';

export function RandomPage() {
  const {
    description,
    style,
    names,
    loading,
    error,
    setDescription,
    setStyle,
    handleGenerate
  } = useGenerator('playful');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4 flex items-center justify-center">
          <Shuffle className="w-8 h-8 mr-2" />
          Random Group Name Generator
          <Target className="w-8 h-8 ml-2" />
        </h1>
        <p className="text-lg text-gray-600">
          Generate unique and unexpected names for any type of group
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
          The Art of Random Name Generation
        </h2>
        <p className="text-gray-600 mb-6">
          Random name generation can lead to unique, memorable, and creative group names
          that you might not have thought of otherwise.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Benefits of Random Group Names
        </h3>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Unique and memorable combinations</li>
          <li>Free from preconceptions and biases</li>
          <li>Potential for creative interpretations</li>
          <li>Stand out from conventional names</li>
          <li>Spark interesting conversations</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          How to Use Random Names Effectively
        </h3>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Generate multiple options</li>
          <li>Look for hidden meanings</li>
          <li>Consider different pronunciations</li>
          <li>Test for memorability</li>
          <li>Get feedback from others</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Making Random Names Work
        </h2>
        <p className="text-gray-600 mb-6">
          While random names can be exciting, consider these factors:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Ensure the name is easy to pronounce</li>
          <li>Check for unintended meanings</li>
          <li>Verify domain name availability</li>
          <li>Test social media handle options</li>
          <li>Consider long-term brand potential</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          When to Choose a Random Name
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Starting a creative project</li>
          <li>Forming a casual group</li>
          <li>Looking for unique branding</li>
          <li>Creating a memorable identity</li>
          <li>Breaking away from industry norms</li>
        </ul>
      </div>
    </div>
  );
}