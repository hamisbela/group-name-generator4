import React from 'react';
import { GeneratorForm } from '../components/GeneratorForm';
import { NameResults } from '../components/NameResults';
import { useGenerator } from '../hooks/useGenerator';
import { MessageCircle, Users, Sparkles } from 'lucide-react';

export function GroupChatPage() {
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
          <MessageCircle className="w-8 h-8 mr-2" />
          Group Chat Name Generator
          <Users className="w-8 h-8 ml-2" />
        </h1>
        <p className="text-lg text-gray-600">
          Create fun and engaging names for your group chats
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
          Creating Perfect Group Chat Names
        </h2>
        <p className="text-gray-600 mb-6">
          A great group chat name can make conversations more fun and reflect the
          personality of your group.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Elements of Great Group Chat Names
        </h3>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Inside jokes and shared memories</li>
          <li>Common interests or themes</li>
          <li>Clever wordplay and puns</li>
          <li>Pop culture references</li>
          <li>Group dynamics and personalities</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Popular Group Chat Naming Patterns
        </h3>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Emoji combinations</li>
          <li>Memorable event references</li>
          <li>Shared hobby themes</li>
          <li>Funny group nicknames</li>
          <li>Squad goals and aspirations</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Tips for Group Chat Names
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Keep it appropriate for all members</li>
          <li>Make it easy to find in chat lists</li>
          <li>Consider using emojis strategically</li>
          <li>Update periodically for special occasions</li>
          <li>Get group consensus on changes</li>
        </ul>
      </div>
    </div>
  );
}