"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { IMemoryFormValues, memoryFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export function AddMemoryForm() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<IMemoryFormValues>({
    resolver: zodResolver(memoryFormSchema),
    defaultValues: {
      type: "받은 기억",
      eventType: "결혼",
      amount: "",
      description: "",
    },
  });

  const onSubmit = async (data: IMemoryFormValues) => {
    try {
      const response = await fetch("/api/memories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          amount: Number(data.amount),
        }),
      });

      if (!response.ok) throw new Error("기억 추가에 실패했습니다.");

      toast({
        title: "성공",
        description: "새로운 기억이 추가되었습니다.",
      });

      router.push("/");
      router.refresh();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "오류 발생",
        description: "기억을 추가하는 중 문제가 발생했습니다.",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>유형</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="받은 기억" id="received" />
                    <Label htmlFor="received">받은 기억</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="보낸 기억" id="sent" />
                    <Label htmlFor="sent">보낸 기억</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="eventType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>경조사 종류</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="경조사 종류를 선택하세요" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="결혼">결혼</SelectItem>
                  <SelectItem value="출산">출산</SelectItem>
                  <SelectItem value="돌잔치">돌잔치</SelectItem>
                  <SelectItem value="장례">장례</SelectItem>
                  <SelectItem value="생일">생일</SelectItem>
                  <SelectItem value="기타">기타</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>날짜</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value
                        ? format(field.value, "PPP")
                        : "날짜를 선택하세요"}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>금액</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="금액을 입력하세요"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>설명</FormLabel>
              <FormControl>
                <Input placeholder="설명을 입력하세요" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          기억 추가하기
        </Button>
      </form>
    </Form>
  );
}
