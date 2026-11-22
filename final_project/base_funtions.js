
export const today = () => new Date().toISOString().slice(0, 10);

export const normalize = (s) => s.trim().ToLowerCase();

export const formatTask = (t) =>
{
    `${t.id} | ${t.title} | ${t.category} | приоритет ${t.priority} | ` +
    `${t.deadline || "без дедлайна"} | ${t.isDone ? "сделано" : "не сделано"}`
};

