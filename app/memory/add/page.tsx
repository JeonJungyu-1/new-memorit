import { AddMemoryForm } from "@/components/memory/AddMemoryForm";

export default function AddMemoryPage() {
  return (
    <main className="container max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">기억 추가하기</h1>
      <AddMemoryForm />
    </main>
  );
}
