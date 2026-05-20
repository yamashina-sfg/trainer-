export type UserRole = "athlete" | "trainer" | "admin";

export type User = {
  id: string;
  displayName: string;
  role: UserRole;
  schoolLevel?: "high_school" | "college" | "other";
};

export type Area = {
  id: string;
  name: string;
  prefecture: string;
};

export type Specialty = {
  id: string;
  name: string;
};

export type TrainerProfile = {
  id: string;
  userId: string;
  name: string;
  title: string;
  clinicId?: string;
  bio: string;
  specialties: string[];
};

export type Comment = {
  id: string;
  postId: string;
  authorType: "athlete" | "trainer";
  commentType: "experience" | "trainer_note";
  authorName: string;
  body: string;
  createdAt: string;
  trainerProfileId?: string;
};

export type PostType = "相談投稿" | "経験談投稿" | "復帰記録投稿";

export type ReturnPhase =
  | "受傷直後"
  | "通院中"
  | "リハビリ中"
  | "練習復帰"
  | "試合復帰"
  | "再発経験あり";

export type ReturnProcess = {
  injuredDate: string;
  visitedClinic: string;
  walkedAt: string;
  ranAt: string;
  practiceReturnedAt: string;
  matchReturnedAt: string;
  recurrence: string;
  anxiety: string;
  helpfulCare: string;
};

export type Post = {
  id: string;
  type: PostType;
  athleteLabel: string;
  sport: string;
  bodyPart: string;
  injuryName: string;
  symptomTags: string[];
  returnPhase: ReturnPhase;
  injuredAt: string;
  title: string;
  body: string;
  createdAt: string;
  status: "open" | "answered" | "closed";
  returnProcess?: ReturnProcess;
  comments: Comment[];
};

export type Clinic = {
  id: string;
  name: string;
  areaId: string;
  address: string;
  access: string;
  catchCopy: string;
  description: string;
  hours: string;
  phone: string;
  specialties: string[];
  sports: string[];
  trainerProfileIds: string[];
};

export type Reservation = {
  id: string;
  clinicId: string;
  postId?: string;
  athleteName: string;
  contact: string;
  preferredDate: string;
  message: string;
  status: "requested" | "confirmed" | "cancelled";
};
