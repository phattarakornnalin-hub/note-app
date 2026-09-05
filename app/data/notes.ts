import type { Note } from "../types/note";

export const notes: Note[] = [
  {
    id: 1,
    title: "Next.js App Router",
    content:
      "ทำความเข้าใจ App Router, Layout และการจัดโครงสร้างหน้าใน Next.js",
    themes: ["Next.js", "Routing"],
    createdAt: "2 days ago",
  },
  {
    id: 2,
    title: "Server Actions",
    content:
      "Server Actions ช่วยให้เราสามารถเรียกใช้ server-side function จาก UI ได้",
    themes: ["Next.js", "Backend"],
    createdAt: "5 days ago",
  },
  {
    id: 3,
    title: "React Server Components",
    content:
      "ทำความเข้าใจ Server Components และความแตกต่างระหว่าง Server และ Client Components",
    themes: ["React", "Next.js"],
    createdAt: "1 week ago",
  },
  {
    id: 4,
    title: "TypeScript Interface",
    content:
      "การสร้าง Interface สำหรับกำหนดรูปแบบของข้อมูลและช่วยให้โค้ด TypeScript ปลอดภัยขึ้น",
    themes: ["TypeScript"],
    createdAt: "2 weeks ago",
  },
];