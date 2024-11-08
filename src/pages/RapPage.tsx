import React from 'react';
import { GeneratorForm } from '../components/GeneratorForm';
import { NameResults } from '../components/NameResults';
import { useGenerator } from '../hooks/useGenerator';
import { Mic, Music, Sparkles } from 'lucide-react';

export function RapPage() {
  const {
    description,
    style,
    names,
    loading,
    error,
    setDescription,
    setStyle,
    handleGenerate
  } = useGenerator('creative');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4 flex items-center justify-center">
          <Mic className="w-8 h-8 mr-2" />
          Rap Group Name Generator
          <Music className="w-8 h-8 ml-2" />
        </h1>
        <p className="text-lg text-gray-600">
          Create unique and powerful names for your rap group or collective
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
          Creating Impactful Rap Group Names
        </h2>
        <p className="text-gray-600 mb-6">
          Your rap group's name is crucial for establishing your identity in the hip-hop
          culture and making a lasting impression on your audience.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Elements of Great Rap Group Names
        </h3>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Strong, memorable words</li>
          <li>Cultural references</li>
          <li>Street credibility</li>
          <li>Wordplay and double meanings</li>
          <li>Regional identity</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Popular Rap Naming Patterns
        </h3>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Acronyms with meaning</li>
          <li>Geographic references</li>
          <li>Power words and phrases</li>
          <li>Cultural movements</li>
          <li>Urban lifestyle references</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Tips for Rap Group Names
        </h2>
        <p className="text-gray-600 mb-6">
          Consider these factors when choosing your group's name:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Authenticity to your style</li>
          <li>Easy to remember and spread</li>
          <li>Works well in lyrics</li>
          <li>Strong brand potential</li>
          <li>Cultural significance</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Building Your Hip-Hop Legacy
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Research existing rap groups</li>
          <li>Consider your target audience</li>
          <li>Test how it sounds in verses</li>
          <li>Think about merchandise potential</li>
          <li>Check social media availability</li>
        </ul>
      </div>
    </div>
  );
}