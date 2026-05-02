export const apiClient = {
  async countUp(pageName: string): Promise<void> {
    const params = new URLSearchParams({ pageName });

    const res = await fetch(
      `http://localhost:3000/page/count?${params.toString()}`,
      {
        method: "GET",
      }
    );

    if (!res.ok) {
      throw new Error("ページカウントに失敗しました");
    }
  },
};
