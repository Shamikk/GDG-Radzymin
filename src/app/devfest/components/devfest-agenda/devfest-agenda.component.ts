import { Component, OnInit, Input } from "@angular/core";
import { GdgImage } from "~/app/models/gdg-image.model";
import { GdgDevFestEventItem } from "~/app/models/gdg-devfest-event-item.model";

@Component({
  selector: "app-devfest-agenda",
  templateUrl: "./devfest-agenda.component.html",
  styleUrls: ["./devfest-agenda.component.scss"]
})
export class DevfestAgendaComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  content: string;

  @Input()
  image: GdgImage;

  @Input()
  devFestEventItems: Array<GdgDevFestEventItem>;

  constructor() { }

  ngOnInit() {
  }

}
