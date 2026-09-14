// Formats a Date as DD/MM/YYYY to match the app's input fields (03/09/2026 style)
export function formatDate(date: Date): string {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
}

export function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export function getToday(): Date {
    return new Date();
}

export function getYesterday(): Date {
    return addDays(getToday(), -1);
}

export function getTomorrow(): Date {
    return addDays(getToday(), 1);
}

// Assumes week starts Sunday, matching the calendar layout in your screenshot (Su Mo Tu We Th Fr Sa)
export function getCurrentWeekRange(): { from: Date; to: Date } {
    const today = getToday();
    const dayOfWeek = today.getDay(); // 0 = Sunday
    const from = addDays(today, -dayOfWeek);
    const to = addDays(from, 6);
    return { from, to };
}

export function getNextWeekRange(): { from: Date; to: Date } {
    const current = getCurrentWeekRange();
    return { from: addDays(current.from, 7), to: addDays(current.to, 7) };
}

export function getCurrentMonthRange(): { from: Date; to: Date } {
    const today = getToday();
    const from = new Date(today.getFullYear(), today.getMonth(), 1);
    const to = new Date(today.getFullYear(), today.getMonth() + 1, 0); // last day of month
    return { from, to };
}

export function getNextMonthRange(): { from: Date; to: Date } {
    const today = getToday();
    const from = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    const to = new Date(today.getFullYear(), today.getMonth() + 2, 0);
    return { from, to };
}