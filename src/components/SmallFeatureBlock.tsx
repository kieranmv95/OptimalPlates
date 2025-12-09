import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SmallFeatureBlockProps = {
  icon: IconDefinition;
  title: string;
  description: string;
};

export const SmallFeatureBlock = ({
  icon,
  title,
  description,
}: SmallFeatureBlockProps) => {
  const colours = [
    {
      color: "text-blue-400",
      backgroundColor: "bg-gradient-to-br from-teal-900/30 to-blue-900/20",
    },
    {
      color: "text-purple-400",
      backgroundColor: "bg-gradient-to-br from-purple-900/30 to-pink-900/20",
    },
    {
      color: "text-green-400",
      backgroundColor: "bg-gradient-to-br from-green-900/30 to-yellow-900/20",
    },
    {
      color: "text-red-400",
      backgroundColor: "bg-gradient-to-br from-red-900/30 to-orange-900/20",
    },
    {
      color: "text-yellow-400",
      backgroundColor: "bg-gradient-to-br from-yellow-900/30 to-green-900/20",
    },
    {
      color: "text-pink-400",
      backgroundColor: "bg-gradient-to-br from-pink-900/30 to-purple-900/20",
    },
    {
      color: "text-orange-400",
      backgroundColor: "bg-gradient-to-br from-orange-900/30 to-red-900/20",
    },
    {
      color: "text-teal-400",
      backgroundColor: "bg-gradient-to-br from-teal-900/30 to-blue-900/20",
    },
    {
      color: "text-indigo-400",
      backgroundColor: "bg-gradient-to-br from-indigo-900/30 to-purple-900/20",
    },
    {
      color: "text-violet-400",
      backgroundColor: "bg-gradient-to-br from-violet-900/30 to-indigo-900/20",
    },
    {
      color: "text-pink-400",
      backgroundColor: "bg-gradient-to-br from-pink-900/30 to-purple-900/20",
    },
    {
      color: "text-orange-400",
      backgroundColor: "bg-gradient-to-br from-orange-900/30 to-red-900/20",
    },
    {
      color: "text-teal-400",
      backgroundColor: "bg-gradient-to-br from-teal-900/30 to-blue-900/20",
    },
  ];

  // Use a deterministic hash function based on title to ensure consistent color selection
  // This prevents hydration mismatches between server and client
  const hashString = (str: string): number => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  };

  const randomColour = colours[hashString(title) % colours.length];

  return (
    <div
      className={`flex items-start gap-4 bg-gradient-to-br from-teal-900/30 to-blue-900/20 rounded-2xl p-6 border border-pink-400/10 shadow-lg ${randomColour.backgroundColor}`}
    >
      <span className={`mt-1 ${randomColour.color}`}>
        <FontAwesomeIcon icon={icon} className="w-7 h-7" />
      </span>
      <div>
        <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};
