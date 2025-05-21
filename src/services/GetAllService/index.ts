/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export const getAllSkill = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/skills`, {
      method: "GET",
      next: {
        tags: ["skills"],
      },
    });

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const getResume = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/resume`, {
      method: "GET",
      
    });

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const getAllProjects = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        tags: ["projects"],
      },
    });

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        tags: ["blogs"],
      },
    });

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

export const sendMessage = async (data:any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/message/add-message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
