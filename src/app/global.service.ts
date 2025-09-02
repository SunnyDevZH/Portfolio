import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  lang: string = 'ger';

  constructor() {}
}
