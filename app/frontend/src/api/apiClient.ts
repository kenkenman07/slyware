const API_URL = import.meta.env.VITE_API_URL;

export const apiClient = {
  async countUp(pageName: string): Promise<void> {
    const params = new URLSearchParams({ pageName });

    const res = await fetch(`${API_URL}/page/count?${params.toString()}`, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error("ページカウントに失敗しました");
    }
  },
};
