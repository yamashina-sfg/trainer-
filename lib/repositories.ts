import { areas, clinics, posts, reservations, specialties, trainerProfiles, users } from "@/data/mock";

export async function getPosts() {
  return posts;
}

export async function getPostById(id: string) {
  return posts.find((post) => post.id === id) ?? null;
}

export async function getOpenPosts() {
  return posts.filter((post) => post.status === "open");
}

export async function getAnsweredPosts() {
  return posts.filter((post) => post.status === "answered");
}

export async function getClinics() {
  return clinics;
}

export async function getClinicById(id: string) {
  return clinics.find((clinic) => clinic.id === id) ?? null;
}

export async function getTrainerProfiles() {
  return trainerProfiles;
}

export async function getAreas() {
  return areas;
}

export async function getSpecialties() {
  return specialties;
}

export async function getReservations() {
  return reservations;
}

export async function getUsers() {
  return users;
}
