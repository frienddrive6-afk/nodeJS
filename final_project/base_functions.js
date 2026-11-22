
export const today = () => new Date().toISOString().slice(0, 10);

export const normalize = (s) => s.trim().toLowerCase();

export const formatTask = (t) =>
{
    return `${t.id} | ${t.title} | ${CategoryNames[t.category]} | приоритет ${PRIORITIESNames[t.priority]} | ` +
    `${t.deadline ?? "без дедлайна"} | ${t.isDone ? "сделано" : "не сделано"}`
};

