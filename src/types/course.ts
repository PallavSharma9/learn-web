export interface Instructor {
  name: string;
  role: string;
  avatar: string;
}

export interface SyllabusItem {
  title: string;
  image: string;
}

export interface Course {
  id: number;
  title: string;
  picture: string;
  description: string;
  heroDescription: string;
  price: number;
  discount: number;
  tags: string[];
  instructor: Instructor;
  syllabus: SyllabusItem[];
}
