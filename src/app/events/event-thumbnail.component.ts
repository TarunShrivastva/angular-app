import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
        <div [routerLink]= "['/events', event.id]" class="well hoverwell thumbnail">
            <h2>{{ event?.name }}</h2>
            <div>{{ event?.imageUrl }}</div>
            <div>{{ event?.price }}</div>
            <div [ngClass] = "getStartTimeClass()" [ngStyle] = "addStyleToTimeClass()" [ngSwitch]="event?.time">{{ event?.time }}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div *ngIf="event?.location">
                <span>{{ event?.location.address }}</span>
                <span class="pad-left">{{ event?.location?.city }}, {{ event?.location?.country }}</span>
            </div>
        </div>`, 
        // [class.green]="event?.time === '8:00 am'"
        // to hide [hidden]="!event?.location" it will render the element also
        // {green:event?.time === '8:00 am', bold:event?.time === '8:00 am'}
    styles: [`
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div {color: #bbb}
    `]  // .green {color: #003300 !important; }
        // .bold {font-weight: bold; }  
})

export class EventThumbnailComponent {
    @Input() event:any
    
    getStartTimeClass(){
        if(this.event && this.event.time === '8:00 am')
            return ['bold']
        return []    
    }

    addStyleToTimeClass():any{
        if(this.event && this.event.time === '8:00 am')
            return {color:'red'}
        return {}
    }

    // someProperty:any = "some value"

    // @Output() eventClick = new EventEmitter() 

    // handleClickMe(){
    //     this.eventClick.emit(this.event.name)
    // }
    // logFoo() {
    //     console.log('Foo')
    // }    
    
} 