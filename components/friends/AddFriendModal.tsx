"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IAddFriendModalProps, IFriendCategory } from "@/types";
import { useState } from "react";

const FRIEND_CATEGORIES: IFriendCategory[] = [
  { value: "school", label: "학교" },
  { value: "work", label: "직장" },
  { value: "family", label: "가족" },
  { value: "other", label: "기타" },
];

export default function AddFriendModal({
  open,
  onOpenChange,
}: IAddFriendModalProps) {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const handleSubmit = () => {
    // 입력값 검증
    if (!name.trim() || !category) {
      return;
    }

    // TODO: 여기에 친구 추가 로직 구현
    console.log({ name, category });

    // 모달 닫기 및 입력값 초기화
    onOpenChange(false);
    setName("");
    setCategory("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>친구 추가</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              카테고리
            </Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="카테고리 선택" />
              </SelectTrigger>
              <SelectContent>
                {FRIEND_CATEGORIES.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              이름
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
              placeholder="친구 이름을 입력하세요"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>저장</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
