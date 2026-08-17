export type Frequency = "day" | "week" | "month";

export type RoiInputs = {
  timesPerPeriod: number;
  minutesPerTask: number;
  hourlyCost: number;
  frequency: Frequency;
  automatablePercent: number;
};

export type RoiResults = {
  tasksPerYear: number;
  totalHoursPerYear: number;
  hoursSavedPerYear: number;
  dollarsSavedPerYear: number;
  workdaysSavedPerYear: number;
  hoursSavedPerWeek: number;
  threeYearSavings: number;
};

const PERIODS_PER_YEAR: Record<Frequency, number> = {
  day: 365,
  week: 52,
  month: 12,
};

function toFiniteNumber(value: number): number {
  return Number.isFinite(value) && value > 0 ? value : 0;
}

export function calculateRoi(inputs: RoiInputs): RoiResults {
  const timesPerPeriod = toFiniteNumber(inputs.timesPerPeriod);
  const minutesPerTask = toFiniteNumber(inputs.minutesPerTask);
  const hourlyCost = toFiniteNumber(inputs.hourlyCost);
  const automatablePercent = Math.min(100, Math.max(0, inputs.automatablePercent || 0));

  const periodsPerYear = PERIODS_PER_YEAR[inputs.frequency];
  const tasksPerYear = timesPerPeriod * periodsPerYear;
  const totalHoursPerYear = (tasksPerYear * minutesPerTask) / 60;
  const hoursSavedPerYear = totalHoursPerYear * (automatablePercent / 100);
  const dollarsSavedPerYear = hoursSavedPerYear * hourlyCost;
  const workdaysSavedPerYear = hoursSavedPerYear / 8;
  const hoursSavedPerWeek = hoursSavedPerYear / 52;
  const threeYearSavings = dollarsSavedPerYear * 3;

  return {
    tasksPerYear,
    totalHoursPerYear,
    hoursSavedPerYear,
    dollarsSavedPerYear,
    workdaysSavedPerYear,
    hoursSavedPerWeek,
    threeYearSavings,
  };
}
