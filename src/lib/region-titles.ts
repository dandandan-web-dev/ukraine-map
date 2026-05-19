const fallbackTitleFromId = (regionId: string): string =>
  regionId.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

export const regionTitleByMapId: Record<string, string> = {
  bessarabiya: 'Бессарабія',
  prychornomorya: 'Причорномор’я',
  tavria: 'Таврія',
  pryazovya: 'Приазов’я',
  'prydniprovya-i-zaporijjya': 'Придніпров’я і Запоріжжя',
  donechchyna: 'Донеччина',
  slobojanshyna: 'Слобожанщина',
  poltavshyna: 'Полтавщина',
  sivershyna: 'Сіверщина',
  naddnipryanshyna: 'Наддніпрянщина',
  podillia: 'Поділля',
  bukovyna: 'Буковина',
  zakarpattia: 'Закарпаття',
  karpaty: 'Карпати',
  halychyna: 'Галичина',
  volyn: 'Волинь',
  polissia: 'Полісся',
  kyiv: 'Київ'
};

export function getRegionTitleByMapId(regionId: string): string {
  return regionTitleByMapId[regionId] ?? fallbackTitleFromId(regionId);
}
