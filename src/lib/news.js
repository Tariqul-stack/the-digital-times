const API_BASE_URL = "https://openapi.programming-hero.com/api/news";
export const LOADING_DELAY_MS = 30000;

export async function withMinimumDelay(task, delayMs = LOADING_DELAY_MS) {
  const [result] = await Promise.all([
    Promise.resolve(task),
    new Promise((resolve) => setTimeout(resolve, delayMs)),
  ]);

  return result;
}

export async function getCategories() {
  const res = await fetch(`${API_BASE_URL}/categories`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await res.json();
  return data?.data?.news_category ?? [];
}

export async function getNewsByCategoryId(categoryId) {
  const res = await fetch(`${API_BASE_URL}/category/${categoryId}`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch category news");
  }

  const data = await res.json();
  return data?.data ?? [];
}
