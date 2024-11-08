import React from 'react';
import { GeneratorForm } from '../components/GeneratorForm';
import { NameResults } from '../components/NameResults';
import { useGenerator } from '../hooks/useGenerator';
import { Facebook, Globe, Sparkles } from 'lucide-react';

export function FacebookPage() {
  const {
    description,
    style,
    names,
    loading,
    error,
    setDescription,
    setStyle,
    handleGenerate
  } = useGenerator('modern');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4 flex items-center justify-center">
          <Facebook className="w-8 h-8 mr-2" />
          Facebook Group Name Generator
          <Globe className="w-8 h-8 ml-2" />
        </h1>
        <p className="text-lg text-gray-600">
          Create engaging names for your Facebook community
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
          Creating Successful Facebook Group Names
        </h2>
        <p className="text-gray-600 mb-6">
          Your Facebook group name is crucial for attracting members and building
          a thriving online community.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Elements of Great Facebook Group Names
        </h3>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Clear purpose and focus</li>
          <li>Keywords for discoverability</li>
          <li>Location indicators if relevant</li>
          <li>Target audience reference</li>
          <li>Unique selling proposition</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          SEO Best Practices
        </h3>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Include relevant keywords</li>
          <li>Keep it searchable</li>
          <li>Use location tags when applicable</li>
          <li>Consider industry terms</li>
          <li>Avoid special characters</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Growing Your Facebook Community
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Choose an engaging name</li>
          <li>Make it easy to remember</li>
          <li>Consider your growth strategy</li>
          <li>Think about branding</li>
          <li>Plan for long-term success</li>
        </ul>
      </div>
    </div>
  );
}