import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-card/50 border border-border rounded-sm p-1">
      <button
        onClick={() => setLanguage("me")}
        className={`px-2 py-1 text-xs font-medium uppercase tracking-wider rounded-sm transition-colors ${
          language === "me"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        MNE
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 text-xs font-medium uppercase tracking-wider rounded-sm transition-colors ${
          language === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        ENG
      </button>
    </div>
  );
};

export default LanguageSwitcher;
