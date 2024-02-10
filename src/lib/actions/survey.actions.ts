"use server";

import { revalidatePath } from "next/cache";
import { db } from "../db";
import { uid } from "uid";

export async function createSurvey(data: any) {
  try {
    await db.survey.create({
      data: {
        id: uid(16),
        title: data.title,
        description: data.description,
        question: data.question,
        createdBy: data.createdBy,
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}

export async function deleteSurvey(surveyId: string) {
  try {
    await db.survey.delete({ where: { id: surveyId } });
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSurvey() {
  try {
    return await db.survey.findMany({
      orderBy: { dateCreated: "desc" },
      include: {
        _count: { select: { responses: true } },
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSurveyByID(id: string) {
  try {
    return await db.survey.findUnique({ where: { id: id } });
  } catch (error) {
    console.log(error);
  }
}

export async function createResponse(surveyId: string, data: any) {
  try {
    await db.response.create({
      data: {
        response: data.response,
        feedbacks: data.feedbacks,
        rating: data.rating,
        surveyId: surveyId,
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}

export async function fetchResponse(surveyId: string) {
  try {
    await db.response.findMany({
      where: { surveyId: surveyId },
      orderBy: { dateResponded: "desc" },
    });
  } catch (error) {}
}