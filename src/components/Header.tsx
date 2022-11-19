import Logo from "./SVGs/Logo";

export function Header() {
  return (
    <header className="flex items-center justify-center w-full h-48 bg-gray-700">
      <Logo className="w-32 lg:w-40 h-12 lg:h-15" />
    </header>
  );
}
