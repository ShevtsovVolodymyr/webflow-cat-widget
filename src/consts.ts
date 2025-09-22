export interface ScaleItem {
  value: string;
  desc: string;
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
  { value: 'M', desc: 'Faint' },
];

export const CLARITY_SCALE: ScaleItem[] = [
  { value: 'IF', desc: 'Flawless/IF' },
  { value: 'VVS1', desc: 'Very Very Slightly Included' },
  { value: 'VVS2', desc: 'Very Very Slightly Included' },
  { value: 'VS1', desc: 'Very  Slightly Included' },
  { value: 'VS2', desc: 'Very  Slightly Included' },
  { value: 'SI¹-²', desc: 'Slightly Included' },
];

export const COLOR_TONE = ['pure', 'brown tint', 'grey tint', 'blue tint'];

export const GROWTH_LINES = ['none', 'slight', 'moderate', 'distinct'];