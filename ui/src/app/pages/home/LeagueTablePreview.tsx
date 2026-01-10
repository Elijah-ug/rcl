import React from "react";
import { Link } from "react-router-dom";

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const LeagueTablePreview: React.FC = () => {
  const table = [
    { pos: 1, team: "Stanbic FC", played: 5, points: 13 },
    { pos: 2, team: "MTN United", played: 5, points: 11 },
    { pos: 3, team: "PostBank FC", played: 5, points: 10 },
    { pos: 4, team: "Kigezi Corp", played: 5, points: 8 },
  ];

  return (
    <section className="py-16 ">
      <div className="">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">League Table</h3>
          <Link to="/table-standings" className="text-sm font-medium text-amber-600 hover:text-amber-500 transition">
            View Full Table →
          </Link>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <Table>
            <TableCaption className="text-xs">Top 4 teams in the Rubanda Corporate League</TableCaption>

            <TableHeader>
              <TableRow>
                <TableHead className="w-15">Pos</TableHead>
                <TableHead>Team</TableHead>
                <TableHead className="text-center">P</TableHead>
                <TableHead className="text-center">Pts</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {table.map((row, i) => (
                <TableRow key={i} className="hover:bg-muted/50 transition">
                  <TableCell className="font-semibold">{row.pos}</TableCell>
                  <TableCell className="font-medium text-gray-900">{row.team}</TableCell>
                  <TableCell className="text-center">{row.played}</TableCell>
                  <TableCell className="text-center font-semibold">{row.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};
