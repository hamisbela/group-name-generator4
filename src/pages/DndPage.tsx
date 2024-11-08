import React from 'react';
import { GeneratorForm } from '../components/GeneratorForm';
import { NameResults } from '../components/NameResults';
import { useGenerator } from '../hooks/useGenerator';
import { Swords, Shield, Sparkles } from 'lucide-react';

export function DndPage() {
  const {
    description,
    style,
    names,
    loading,
    error,
    setDescription,
    setStyle,
    handleGenerate
  } = useGenerator('traditional');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4 flex items-center justify-center">
          <Swords className="w-8 h-8 mr-2" />
          D&D Group Name Generator
          <Shield className="w-8 h-8 ml-2" />
        </h1>
        <p className="text-lg text-gray-600">
          Create epic names for your D&D party or adventuring company
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
          Crafting Legendary D&D Group Names
        </h2>
        <p className="text-gray-600 mb-6">
          Your D&D group's name should reflect your party's identity, goals, and the epic
          nature of your adventures.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Elements of Great D&D Group Names
        </h3>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Fantasy-themed words and phrases</li>
          <li>References to party composition</li>
          <li>Nods to campaign settings</li>
          <li>Mythological references</li>
          <li>Memorable battle achievements</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Popular D&D Naming Patterns
        </h3>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Location-based names (e.g., "Defenders of Waterdeep")</li>
          <li>Achievement titles (e.g., "Dragonslayers")</li>
          <li>Symbolic references (e.g., "The Silver Hand")</li>
          <li>Tavern-inspired names</li>
          <li>Heroic epithets</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Tips for D&D Group Names
        </h2>
        <p className="text-gray-600 mb-6">
          Consider these factors when choosing your group's name:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Campaign setting appropriateness</li>
          <li>Party composition and goals</li>
          <li>Memorable for NPCs and players</li>
          <li>Potential for reputation growth</li>
          <li>In-game cultural relevance</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Making Your Mark in the Realm
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Consider your party's future reputation</li>
          <li>Think about how NPCs will refer to you</li>
          <li>Make it easy to remember and spread</li>
          <li>Allow room for legendary status</li>
          <li>Reflect your party's alignment and goals</li>
        </ul>
      </div>
    </div>
  );
}