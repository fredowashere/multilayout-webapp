import { Component, Input } from '@angular/core';
import { RisorsaTaskDto, RisorsaTaskWrap } from '../../models/risorsa';
import { TaskDto } from '../../models/task';
import { RisorsaService } from '../../services/risorsa.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-risorse',
  templateUrl: './risorse.component.html',
  styleUrls: ['./risorse.component.css']
})
export class RisorseComponent {

  @Input("idCommessa") idCommessa!: number;
  @Input("idSottocommessa") idSottocommessa!: number;
  @Input("idTask") idTask!: number;
  task?: TaskDto;

  risorseTask: RisorsaTaskWrap[] = [];

  constructor(
    private taskService: TaskService,
    private risorsaService: RisorsaService
  ) {}

  ngOnInit() {

    this.taskService
      .getTaskById$(this.idTask)
      .subscribe(task => this.task = task);

    this.risorsaService
      .getLegamiByIdTask$(this.idTask)
      .subscribe(legami => this.risorseTask = legami);
  }

  create() {}

  update(item?: any) {}

  delete(item: any) {}

}
