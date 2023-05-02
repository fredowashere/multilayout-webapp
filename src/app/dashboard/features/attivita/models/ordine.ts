export interface Ordine {
	id: number;
	tipoOrdine: string;
	company: string;
	protocolloOrdine: number;
	dataOrdine: string;
	riferimentoOrdine: string;
	totaleImponibile: number;
	codiceCommessa: string;
}