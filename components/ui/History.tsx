import { cn } from "@/lib/utils";
import { IHistoryItem } from "@/types";
import { format } from "date-fns";

interface HistoryProps {
  items: IHistoryItem[];
  className?: string;
}

export function History({ items, className }: HistoryProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "flex items-center w-full",
            item.isReceived ? "justify-start" : "justify-end"
          )}
        >
          <div
            className={cn(
              "rounded-lg p-4 max-w-[80%] shadow-sm",
              item.isReceived ? "mr-auto bg-white" : "ml-auto bg-yellow-100"
            )}
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium text-sm">{item.type}</span>
                <span className="text-gray-600 text-xs">
                  {format(new Date(item.date), "yyyy-MM-dd")}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-gray-600 text-sm">{item.name}</span>
                <span className="font-semibold">
                  {item.amount.toLocaleString()}원
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
