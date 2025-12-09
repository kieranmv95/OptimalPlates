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
      className={`group flex items-start gap-4 ${randomColour.backgroundColor} rounded-2xl p-6 border border-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-white/10 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1`}
    >
      <div
        className={`mt-1 p-3 rounded-xl bg-gradient-to-br ${randomColour.backgroundColor} border border-white/10 group-hover:scale-110 transition-transform duration-300`}
      >
        <FontAwesomeIcon
          icon={icon}
          className={`w-6 h-6 ${randomColour.color}`}
        />
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-bold text-white mb-2 leading-tight">
          {title}
        </h4>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
