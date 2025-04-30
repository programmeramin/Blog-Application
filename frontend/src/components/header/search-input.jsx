import { cn } from "@/lib/utils";
import { ArrowLeft, Search } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "../ui/button";

const SearchInput = () => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="lg:w-full relative" onSubmit={handleSubmit}>
      <MobileSearch value={value} onChange={setValue} />
      <DesktopSearch value={value} onChange={setValue} />
    </form>
  );
};

const DesktopSearch = ({ value, onChange }) => {
  return (
    <div className="hidden relative lg:block w-full">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
        className={cn("rounded-full")}
      />
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "rounded-full absolute top-1/2 -translate-y-1/2 right-0 size-9"
        )}
      >
        <Search />
      </Button>
    </div>
  );
};

const MobileSearch = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef();

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 100);
  };

  return (
    <div className="lg:hidden">
      <div
        className={cn(
          "fixed inset-x-0 h-[70px] border-b hidden items-center px-4 top-0 bg-background z-20",
          open && "flex"
        )}
      >
        <div className="relative w-full flex items-center gap-2">
          <Button
            onClick={() => setOpen(false)}
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            <ArrowLeft className="size-4" />
          </Button>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search..."
            className={cn("rounded-full")}
          />
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "rounded-full absolute top-1/2 -translate-y-1/2 right-0 size-9"
            )}
          >
            <Search />
          </Button>
        </div>
      </div>
      <Button
        type="button"
        onClick={handleOpen}
        variant="outline"
        size="icon"
        className={cn("rounded-full")}
      >
        <Search />
      </Button>
    </div>
  );
};

export default SearchInput;
