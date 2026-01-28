import React from "react";
import { NavLink } from "react-router-dom";
import { User, Users, Calendar, UserPlus, Trophy, Menu, Newspaper, List } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import clsx from "clsx";

export const SideNavBar: React.FC = () => {
  const navItems = [
    { label: "Profile", to: "profile", icon: User },
    { label: "Add Team", to: "add-team", icon: Users },
    { label: "Add Match", to: "create-matches", icon: Calendar },
    { label: "Register Player", to: "register-players", icon: UserPlus },
    { label: "Post News", to: "news", icon: Newspaper },
    { label: "Match Results", to: "match-results", icon: Trophy },
  ];

  const navItemsupdates = [
    { label: "Teams", to: "all-team", icon: List },
    { label: "Matches", to: "all-matches", icon: List },
    { label: "Players", to: "all-players", icon: List },
    { label: "News", to: "all-news", icon: List },
    { label: "Results", to: "update-match-results", icon: List },
  ];

  const NavContent = ({ onClick }: { onClick?: () => void }) => (
    <nav className="flex flex-col gap-2">
      {navItems.map(({ label, to, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          onClick={onClick}
          className={({ isActive }) =>
            clsx(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition",
              isActive ? "bg-amber-400 text-primary-foreground" : "hover:bg-muted",
            )
          }
        >
          <Icon className="h-4 w-4" />
          {label}
        </NavLink>
      ))}
    </nav>
  );

  // updates
  const NavContentUpdates = ({ onClick }: { onClick?: () => void }) => (
    <nav className="flex flex-col gap-2">
      {navItemsupdates.map(({ label, to, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          onClick={onClick}
          className={({ isActive }) =>
            clsx(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition",
              isActive ? "bg-amber-400 text-primary-foreground" : "hover:bg-muted",
            )
          }
        >
          <Icon className="h-4 w-4" />
          {label}
        </NavLink>
      ))}
    </nav>
  );

  return (
    <>
      {/* ===== Desktop Sidebar ===== */}
      <aside className="hidden md:block w-64 border-r">
        <Card className="h-screen rounded-none border-none">
          <CardHeader>
            <CardTitle>
              <h3 className="px-2">Admin Dashboard</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <NavContent />
            <h3 className="text-lg font-semibold py-3">Update Controlls</h3>
            <NavContentUpdates />
          </CardContent>
        </Card>
      </aside>

      {/* ===== Mobile Sheet Sidebar ===== */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <div className="p-3">
              <Button variant="outline" size="icon">
                <Menu />
              </Button>
            </div>
          </SheetTrigger>

          <SheetContent side="left" className="w-64">
            <h2 className="mb-4 text-lg font-bold">Admin Dashboard</h2>
            <NavContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};
