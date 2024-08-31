import LettersGame from "./components/LettersGame";
import { readWords } from "./utils/readWords";

export default function Home() {
  // const possibleWords: string[] = ["test", "hello", "world", "abandoned", "react", "cat", "dog", "fish", "house", "car", "phone"].map(word => word.toUpperCase());
  const possibleWords: string[] = readWords();

  return (
    <main className="pt-32">
      <LettersGame possibleWords={possibleWords} />
    </main>
  );
}
