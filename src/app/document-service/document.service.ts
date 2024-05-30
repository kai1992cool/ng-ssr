import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  isBrowser: boolean;

  constructor(
    @Optional() @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) platformId: Object
    ) {
      this.isBrowser = isPlatformBrowser(platformId);
    }

  get myCookie() {
    let cookies;
    if(this.isBrowser) {
      try {
        cookies = this.document.cookie;
      } catch (e) {
        // catch error if document is not defined
        console.error('Cookie error', e);
        return null;
      }
  
      const cookie = cookies
        .split('; ')
        .map((c) => c.split('='))
        .find(([name]) => name === 'my-cookie');
  
      return cookie?.[1] ?? null;
    }
    return undefined;
  }
}
