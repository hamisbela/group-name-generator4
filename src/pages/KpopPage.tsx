import React from 'react';
import { GeneratorForm } from '../components/GeneratorForm';
import { NameResults } from '../components/NameResults';
import { useGenerator } from '../hooks/useGenerator';
import { Sparkles, Music, Star } from 'lucide-react';

export function KpopPage() {
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
          <Music className="w-8 h-8 mr-2" />
          K-pop Group Name Generator
          <Star className="w-8 h-8 ml-2" />
        </h1>
        <p className="text-lg text-gray-600">
          Create the perfect name for your K-pop group with our AI-powered generator
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
          How to Create the Perfect K-pop Group Name
        </h2>
        <p className="text-gray-600 mb-6">
          Creating a K-pop group name requires careful consideration of various factors
          that make it appealing to both Korean and international audiences.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Essential Elements of K-pop Group Names
        </h3>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Easy to pronounce in both Korean and English</li>
          <li>Memorable and unique abbreviations (like BTS, EXO, NCT)</li>
          <li>Meaningful acronyms that represent the group's concept</li>
          <li>Cultural relevance and international appeal</li>
          <li>Social media friendly and hashtag-worthy</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Popular K-pop Naming Patterns
        </h3>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Numbers and letters combinations</li>
          <li>English words with special meanings</li>
          <li>Korean words that sound good internationally</li>
          <li>Symbolic and aspirational terms</li>
          <li>Unique character combinations</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Tips for Success
        </h3>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Research existing K-pop group names to avoid similarities</li>
          <li>Consider your group's concept and image</li>
          <li>Test the name with potential fans</li>
          <li>Check if the name works well with merchandise</li>
          <li>Verify social media handle availability</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why K-pop Group Names Matter
        </h2>
        <p className="text-gray-600 mb-6">
          In the competitive K-pop industry, your group's name is crucial for:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Building a strong brand identity</li>
          <li>Creating memorable fan experiences</li>
          <li>International marketing and promotion</li>
          <li>Merchandise and branding opportunities</li>
          <li>Social media presence and hashtag campaigns</li>
        </ul>
      </div>
    </div>
  );
}