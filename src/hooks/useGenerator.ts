import { useState } from 'react';
import { generateNames } from '../utils/nameGenerator';

export function useGenerator(defaultStyle: string = 'modern') {
  const [description, setDescription] = useState('');
  const [style, setStyle] = useState(defaultStyle);
  const [names, setNames] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleGenerate = async () => {
    setLoading(true);
    setError(undefined);
    try {
      const generatedNames = await generateNames(description, style);
      setNames(generatedNames);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return {
    description,
    style,
    names,
    loading,
    error,
    setDescription,
    setStyle,
    handleGenerate
  };
}