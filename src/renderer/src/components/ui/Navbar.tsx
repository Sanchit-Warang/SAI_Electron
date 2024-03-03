import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@renderer/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <nav className="p-4 sticky top-0 w-full flex h-[7vh] px-10 justify-between border-b bg-primary">
      <div></div>
      <div className="flex space-x-5">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-lg">
                Donors
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <div className="p-2 clasName w-[200px] space-y-2">
                    <div className="rounded-md hover:bg-muted/40 p-2">
                      <div className="font-bold text-sm">Add Donor</div>
                      <p className="text-muted-foreground text-xs">
                        Add a new donor to the system
                      </p>
                    </div>
                    <div className="rounded-md hover:bg-muted/40 p-2">
                      <div className="font-bold text-sm">Donors List</div>
                      <p className="text-muted-foreground text-xs">
                        See the list of all donors
                      </p>
                    </div>
                  </div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-lg">
                Donations
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <div className="p-3 clasName w-[200px]">
                    <div className="rounded-md hover:bg-muted/40 p-2">
                      <div className="font-bold text-sm">Donations List</div>
                      <p className="text-muted-foreground text-xs">
                        See the list of all donations
                      </p>
                    </div>
                  </div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
