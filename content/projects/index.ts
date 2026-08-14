import { dateFormBuilder } from "./date-form-builder";
import { kwentongKusina } from "./kwentong-kusina";
import { lms } from "./lms";

export const projects = [lms, kwentongKusina, dateFormBuilder];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
