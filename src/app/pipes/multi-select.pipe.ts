// angular pipe
import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';

@Pipe({
  name: 'isTopicSelected$',
})
export class IsTopicSelectedPipe implements PipeTransform {
  transform(topics: Observable<string[]>, value: string): Observable<boolean> {
    return topics.pipe(map((selectedTopics) => selectedTopics.includes(value)));
  }
}
