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
  authorName: string;
  body: string;
  createdAt: string;
  trainerProfileId?: string;
};

export type Post = {
  id: string;
  athleteLabel: string;
  sport: string;
  bodyPart: string;
  injuredAt: string;
  title: string;
  body: string;
  createdAt: string;
  status: "open" | "answered" | "closed";
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
