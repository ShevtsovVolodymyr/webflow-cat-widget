export interface ScaleItem {
  value: string;
  desc: string;
}

export interface VisualPerformanceItem {
  desc: string;
  maxValue: number;
  minValue: number;
}

export const COLOR_SCALE: ScaleItem[] = [
  { value: 'D', desc: 'Colorless' },
  { value: 'E', desc: 'Colorless' },
  { value: 'F', desc: 'Colorless' },
  { value: 'G', desc: 'Near Colorless' },
  { value: 'H', desc: 'Near Colorless' },
  { value: 'I', desc: 'Near Colorless' },
  { value: 'J', desc: 'Near Colorless' },
  { value: 'K', desc: 'Faint' },
  { value: 'L', desc: 'Faint' },
  { value: 'M-W', desc: 'Faint' },
  { value: 'XYZ', desc: 'Faint' },
  { value: 'Yellow', desc: 'Faint' },
  { value: 'Pink', desc: 'Faint' },
  { value: 'Blue', desc: 'Faint' },
];

export const CLARITY_SCALE: ScaleItem[] = [
  { value: 'FL', desc: 'Flawless' },
  { value: 'IF', desc: 'Flawless/IF' },
  { value: 'VVS1', desc: 'Very Very Slightly Included' },
  { value: 'VVS2', desc: 'Very Very Slightly Included' },
  { value: 'VS1', desc: 'Very Slightly Included' },
  { value: 'VS2', desc: 'Very Slightly Included' },
  { value: 'SI1', desc: 'Slightly Included' },
  { value: 'SI2', desc: 'Slightly Included' },
  { value: 'SI3', desc: 'Slightly Included' },
  { value: 'FANCY', desc: 'Fancy' },
];

export const VISUAL_PERFORMACE: VisualPerformanceItem[] = [
  { desc: 'Ideal', minValue: 95, maxValue: 100 },
  { desc: 'Very Good', minValue: 90, maxValue: 95 },
  { desc: 'Good', minValue: 85, maxValue: 90 },
  { desc: 'Fair', minValue: 80, maxValue: 85 },
  { desc: 'Poor', minValue: 0, maxValue: 80 },
];

export const COLOR_TONE = [
  { key: 'Pure', value: 'Pure' },
  { key: 'Brown', value: 'Brown tint' },
  { key: 'Grey', value: 'Grey tint' },
  { key: 'Blue', value: 'Blue tint' },
];

export const GROWTH_LINES = ['None', 'Slight', 'Moderate', 'Distinct'];
