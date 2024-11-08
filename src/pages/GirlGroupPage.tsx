import React from 'react';
import { GeneratorForm } from '../components/GeneratorForm';
import { NameResults } from '../components/NameResults';
import { useGenerator } from '../hooks/useGenerator';
import { Heart, Star, Sparkles } from 'lucide-react';

export function GirlGroupPage() {
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
          <Heart className="w-8 h-8 mr-2" />
          Girl Group Name Generator
          <Star className="w-8 h-8 ml-2" />
        </h1>
        <p className="text-lg text-gray-600">
          Create powerful and memorable names for your girl group
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
          Creating Iconic Girl Group Names
        </h2>
        <p className="text-gray-600 mb-6">
          Your girl group's name should reflect strength, unity, and your unique style
          while making a lasting impression in the music industry.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Elements of Great Girl Group Names
        </h3>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Strong and empowering words</li>
          <li>Feminine energy and attitude</li>
          <li>Memorable combinations</li>
          <li>Style and genre references</li>
          <li>Unity and sisterhood themes</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Popular Girl Group Naming Patterns
        </h3>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Power words and phrases</li>
          <li>Symbolic references</li>
          <li>Attitude and confidence</li>
          <li>Fashion and style elements</li>
          <li>Sisterhood and unity</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Building Your Group's Brand
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Consider your target audience</li>
          <li>Think about merchandise potential</li>
          <li>Check social media availability</li>
          <li>Test international appeal</li>
          <li>Plan for long-term success</li>
        </ul>
      </div>
    </div>
  );
}