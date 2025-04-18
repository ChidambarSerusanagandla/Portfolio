
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="default"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-full flex items-center gap-2"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Sun className="h-5 w-5 transition-all" />
      ) : (
        <Moon className="h-5 w-5 transition-all" />
      )}
      <span className="text-sm font-medium">CS</span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
