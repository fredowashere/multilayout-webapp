import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Fattura } from "../models/fattura";
import { lastValueFrom } from "rxjs";
import { downloadFile } from "src/app/utils/file";
import { ToastService } from "src/app/services/toast.service";
import { Ordine } from "../models/ordine";

@Injectable({
    providedIn: 'root'
})
export class DocumentoFiscaleService {

    constructor(
        private http: HttpClient,
        private toaster: ToastService
    ) {}

    getOrdiniByIdCommessa(idCommessa: number) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/ordini/by-commessa/id/${idCommessa}`;
        return this.http.get<Ordine[]>(url);
    }

    getFattureByIdCommessa(idCommessa: number) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/fatture/by-commessa/id/${idCommessa}`;
        return this.http.get<Fattura[]>(url);
    }

    async downloadExcel(idCommessa: number) {
        const url = `${environment.scaiRoot}/modulo-attivita-be/export-excel/${idCommessa}`;
        const params: Object = { responseType: "blob" };
        const filename = "Estrazioni SAP.xlsx";
        try {
            const result = await lastValueFrom(this.http.get<string>(url, params));
            downloadFile(result, filename);
        }
        catch(ex) {
            const msg = `Download di ${filename} non riuscito.`;
            this.toaster.show(msg, { classname: 'bg-danger text-white' });
        }
    }
}