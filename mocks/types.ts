type Theme = "light" | "dark";

interface Column {
  id: string;
  name: string;
  color: string;
}

interface Board {
  id: string;
  name: string;
  columns: Column[];
}

interface ApplicationSettings {
  theme: Theme;
  boards: Board[];
}
