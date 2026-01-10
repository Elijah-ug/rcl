import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

export const TableStandings: React.FC = () => {
  const table = [
    { pos: 1, team: "Stanbic FC", played: 5, w: 4, d: 1, l: 0, points: "N/A" },
    { pos: 2, team: "MTN United", played: 5, w: 3, d: 2, l: 0, points: "N/A" },
    { pos: 3, team: "PostBank FC", played: 5, w: 2, d: 1, l: 2, points: "N/A" },
    { pos: 4, team: "Kigezi Corp", played: 5, w: 2, d: 0, l: 3, points: "N/A" },
    { pos: 5, team: "Stanbic FC", played: 5, w: 4, d: 1, l: 0, points: "N/A" },
    { pos: 6, team: "MTN United", played: 5, w: 3, d: 2, l: 0, points: "N/A" },
    { pos: 7, team: "PostBank FC", played: 5, w: 2, d: 1, l: 2, points: "N/A" },
    { pos: 8, team: "Kigezi Corp", played: 5, w: 2, d: 0, l: 3, points: "N/A" },
  ];

  return (
    <section className="py-16 px-6 sm:px-10 lg:px-13 bg-gray-100">
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
            <TableCaption className="text-xs">Match day 5</TableCaption>

            <TableHeader>
              <TableRow>
                <TableHead className="w-15">Pos</TableHead>
                <TableHead>Team</TableHead>
                <TableHead className="text-center">P</TableHead>
                <TableHead className="text-center">W</TableHead>
                <TableHead className="text-center">D</TableHead>
                <TableHead className="text-center">L</TableHead>
                <TableHead className="text-center">Pts</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {table.map((row, i) => (
                <TableRow key={i} className="hover:bg-muted/50 transition">
                  <TableCell className="font-semibold">{row.pos}</TableCell>
                  <TableCell className="font-medium text-gray-900">{row.team}</TableCell>
                  <TableCell className="text-center">{row.played}</TableCell>
                  <TableCell className="text-center">{row.w}</TableCell>
                  <TableCell className="text-center">{row.d}</TableCell>
                  <TableCell className="text-center">{row.l}</TableCell>
                  <TableCell className="text-center font-semibold">{row.points === "N/A" ? row.w * 3 : ""}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};
