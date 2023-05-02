export interface Fattura {
    id: number;
	tipoFattura: string;
	company: string;
	numeroFattura: string;
	protocolloFattura: number;
	riferimentoOrdine: string;
	totaleImponibile: number;
	dataFattura: string;
	scadenzaFattura: string;
	codBP: string;
	codiceCommessa: string;
}