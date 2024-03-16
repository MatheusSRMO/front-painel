
import { cn } from "@/lib/utils";

interface SideBarProps {
    className?: string;
}

export default function SideBar({ className }: SideBarProps) {
  return (
    <div className={
        cn("bg-gray-800 h-screen w-64", className)
    }>
      <div className="p-6">
        <h2 className="text-white text-lg font-semibold">Menu</h2>
        <ul className="mt-4">
          <li className="mb-2">
            <a href="#" className="text-gray-300 hover:text-white block">Item 1</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-300 hover:text-white block">Item 2</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-300 hover:text-white block">Item 3</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-300 hover:text-white block">Item 4</a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-300 hover:text-white block">Item 5</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
