export interface Ordine {
	id: number;
	tipoOrdine: string;
	company: string;
	protocolloOrdine: number;
	dataOrdine: string;
	// codBP: string;
	riferimentoOrdine: string;
	totaleImponibile: number;
	codiceCommessa: string;
}