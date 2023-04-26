import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateTaskParam, TaskDto } from '../models/task';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor(
        private http: HttpClient
    ) { }

    checkExistingSottocommesseByIdSottocommessa$(idSottocommessa: number) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/tasks/commessa/task/exist/${idSottocommessa}`;
        return this.http.get<boolean>(url);
    }

    getTasksByIdSottocommessa$(idSottoCommessa: number) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/tasks/by-sottocommessa/id/${idSottoCommessa}`;
        return this.http.get<TaskDto[]>(url)
            .pipe(
                map(tasks =>
                    tasks.sort((a, b) =>
                        (b.dataInizio || "1970-01-01").localeCompare(a.dataInizio || "1970-01-01")
                )
                )
            );
    }

    getTaskById$(idTask: number) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/tasks/id/${idTask}`;
        return this.http.get<TaskDto>(url);
    }

    createTask$(task: CreateTaskParam) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/tasks/save`;
        return this.http.post<number>(url, task);
    }

    updateTask$(idTask: number, task: TaskDto) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/tasks/update/id/${idTask}`;
        return this.http.put(url, task);
    }

    deleteTask$(idTask: number) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/tasks/delete/id/${idTask}`;
        return this.http.delete(url);
    }

}