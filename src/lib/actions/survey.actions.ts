"use server";

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
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSurvey() {
  try {
    return await db.survey.findMany();
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
        data: data.data,
        rating: data.rating,
        surveyId: surveyId,
      },
    });
  } catch (error) {}
}

export async function fetchResponse(surveyId: string) {
  try {
    await db.response.findMany({ where: { surveyId: surveyId } });
  } catch (error) {}
}
