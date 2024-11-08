import React from 'react';
import { Wand2, Loader2, AlertCircle } from 'lucide-react';

interface GeneratorFormProps {
  description: string;
  style: string;
  loading: boolean;
  error?: string;
  onDescriptionChange: (value: string) => void;
  onStyleChange: (value: string) => void;
  onGenerate: () => void;
}

export function GeneratorForm({
  description,
  style,
  loading,
  error,
  onDescriptionChange,
  onStyleChange,
  onGenerate,
}: GeneratorFormProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Describe your group
        </label>
        <textarea
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          rows={3}
          placeholder="E.g., A creative tech startup focused on AI and sustainability"
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Style
        </label>
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          value={style}
          onChange={(e) => onStyleChange(e.target.value)}
        >
          <option value="modern">Modern & Professional</option>
          <option value="creative">Creative & Artistic</option>
          <option value="technical">Technical & Scientific</option>
          <option value="playful">Fun & Playful</option>
          <option value="traditional">Traditional & Classic</option>
        </select>
      </div>

      {error && (
        <div className="p-4 bg-red-50 rounded-lg flex items-center space-x-2 text-red-800">
          <AlertCircle className="w-5 h-5" />
          <span>{error}</span>
        </div>
      )}

      <button
        onClick={onGenerate}
        disabled={loading || !description}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Wand2 className="w-5 h-5" />
        )}
        <span>Generate Names</span>
      </button>
    </div>
  );
}