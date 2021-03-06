import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FrameData } from './app.module';

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:4201/frames';

  getFrames() {
    return new Promise<FrameData>(
      (resolve) => {
        this.http.get<FrameData>(this.apiUrl).subscribe(
          (frames: any) => {
            resolve(frames.frames);
          }
        );
      }
    );
  }

  saveFrames(frames: { frames: FrameData }) {
    this.http.post(this.apiUrl, frames).subscribe(
      () => {
        console.log('saved');

      }
    );
  }
}
