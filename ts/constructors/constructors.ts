import { SettingsObject, Cords } from '../model/model';

export function Slide() {
  this.id = Date.now().toString();
  this.objects = [];
  this.background = null;
}

export function Settings(slideWidth: string, slideHeight: string) {
  this.slideWidth = slideWidth;
  this.slideHeight = slideHeight;
}

export function App(settings: SettingsObject) {
  this.slides = [new Slide()];
  this.currSlideId = this.slides[0].id;
  this.settings = settings;
  this.choosedObjectId = null;
}

export function Image(
  path: string,
  width: string,
  height: string,
  cords: Cords
) {
  this.id = Date.now().toString();
  this.type = 'img';
  this.path = path;
  this.width = width;
  this.height = height;
  this.positionTopLeft = cords;
}

export function Text(width: string, height: string, cords: Cords) {
  this.id = Date.now().toString();
  this.type = 'text';
  this.width = width;
  this.height = height;
  this.positionTopLeft = cords;
}
