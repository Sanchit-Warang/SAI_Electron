import { Button } from "./button";

import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@renderer/lib/utils";

type NavItemProps = {
  to: string;
  icon: React.ReactNode;
};

const NavItem = ({ to, icon }: NavItemProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Button
      className={cn(
        " h-12 w-12 p-2",
        location.pathname.includes(to)
          ? "bg-foreground text-muted hover:bg-foreground hover:text-muted"
          : "bg-muted",
      )}
      onClick={() => navigate(to)}
    >
      {icon}
    </Button>
  );
};

export default NavItem;
